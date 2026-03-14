# Security Audit Report — MultiplyRush TD

**Date:** 2026-03-14
**Scope:** Full codebase review (game.js, index.html, service-worker.js, manifest, CI/CD, scripts)
**App type:** Client-side PWA educational tower defense game (no backend)

---

## Executive Summary

MultiplyRush TD has a **low overall risk profile** due to being a fully client-side application with no backend, no authentication, no external API calls, and no sensitive data processing. However, several issues were identified that should be addressed to follow security best practices and prevent potential exploitation vectors.

**Findings by severity:**
| Severity | Count |
|----------|-------|
| Critical | 0 |
| High | 1 |
| Medium | 6 |
| Low | 8 |
| Info | 6 |

---

## HIGH Severity

### H1 — XSS via Player Name in Leaderboard (game.js:1714, 1720, 1724)

**Issue:** The `sanitizePlayerName()` function (line 1642) only trims whitespace and limits length to 18 characters — it does **not** escape HTML entities. Player names are then injected into the DOM via `innerHTML` in `renderLeaderboard()` (line 1714):

```javascript
`<li>${entry.name} - ${entry.score} pts ...</li>`
```

A crafted name like `<img src=x onerror=alert(1)>` (truncated to 18 chars) or `<b onmouseover=...>` could inject HTML/JS. While the attack surface is limited (localStorage is same-origin), a malicious browser extension or XSS in another same-origin page could poison localStorage to achieve persistent XSS.

**Fix applied:** Added HTML entity escaping to `sanitizePlayerName()`.

### H2 — GitHub Actions Command Injection Pattern (.github/workflows/e2e.yml:45)

**Issue:** Direct interpolation of `${{ matrix.project }}` in a shell `run:` step:
```yaml
run: npx playwright test --project=${{ matrix.project }}
```
While current matrix values are safe, this pattern is fragile. If a value containing shell metacharacters were added, it would result in command injection.

**Fix applied:** Changed to use an environment variable.

---

## MEDIUM Severity

### M1 — No Content-Security-Policy (index.html)

**Issue:** No CSP header or meta tag is defined. This means the browser applies no restrictions on script sources, style sources, or other resource loading. A CSP would mitigate XSS impact even if an injection vulnerability exists.

**Recommendation:** Add a CSP meta tag once inline scripts are externalized (see M2). Example:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self'; media-src 'self'; font-src 'self'; style-src 'self'">
```

### M2 — Inline Scripts Block CSP Deployment (index.html:7-15, 394-403)

**Issue:** Two inline `<script>` blocks prevent deploying a strict CSP without `'unsafe-inline'`. One handles trailing-slash redirects, the other registers the service worker.

**Recommendation:** Move these to external `.js` files or use CSP nonce/hash approach.

### M3 — GitHub Actions Not Pinned to SHA (.github/workflows/e2e.yml)

**Issue:** Actions use mutable tag references (`@v4`). A compromised upstream repository could move the tag to point at malicious code.

**Fix applied:** Pinned all actions to specific SHA commits.

### M4 — No Permissions Block in Workflow (.github/workflows/e2e.yml)

**Issue:** No `permissions:` block is defined, giving the workflow default (potentially broad) token permissions.

**Fix applied:** Added `permissions: { contents: read }` for least privilege.

### M5 — Service Worker Stale-While-Revalidate Cache Strategy (service-worker.js:142-156)

**Issue:** The runtime cache serves stale content immediately without integrity validation. If cache were ever poisoned (e.g., via compromised network before HTTPS enforcement), poisoned content would continue being served.

**Recommendation:** For the app shell (HTML, JS, CSS), consider using network-first strategy instead of stale-while-revalidate.

### M6 — Missing Security Headers (index.html)

**Issue:** No security-related headers are set. Recommended headers:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy`

**Recommendation:** Configure these on the hosting server/platform. Where possible, add `<meta http-equiv>` tags.

---

## LOW Severity

### L1 — `npm install` Instead of `npm ci` in CI (.github/workflows/e2e.yml:39)

**Issue:** `npm install` can modify `package-lock.json` and install different versions than intended. `npm ci` ensures reproducible, lockfile-exact installs.

**Fix applied:** Changed to `npm ci`.

### L2 — Service Worker Cache Has No Size Limit (service-worker.js:3)

**Issue:** The runtime cache grows unbounded with no eviction policy. While the current asset set is small and finite, this could become a storage issue if the app grows.

**Recommendation:** Add a cache size limit with LRU eviction for the runtime cache.

### L3 — skipWaiting Activates New SW Instantly (service-worker.js:37, 77-81)

**Issue:** `self.skipWaiting()` activates a new service worker immediately for all open tabs. If a compromised update were pushed, it would take effect without user interaction.

**Recommendation:** Consider prompting the user to refresh before activating a new SW version.

### L4 — Workflow Triggers on All Branches (.github/workflows/e2e.yml:4-6)

**Issue:** `push: branches: ["**"]` triggers on every branch push, increasing resource consumption and attack surface.

**Recommendation:** Restrict to `main` and pull request events.

### L5 — Missing `scope` in Manifest (manifest.webmanifest)

**Issue:** No explicit `scope` field. Browser defaults to the manifest directory, but explicit scope is defense-in-depth.

**Recommendation:** Add `"scope": "./"`.

### L6 — API Key Visible in Process Table (scripts/generate_pixel_art_assets.sh:60-63)

**Issue:** `OPENAI_API_KEY` is passed via curl `-H` flag, visible in the process table. This is a developer-only script.

**Recommendation:** Use `--header @<(echo "Authorization: Bearer $OPENAI_API_KEY")` for process-table safety.

### L7 — Potential Path Traversal in Asset Generator (scripts/generate_pixel_art_assets.sh:38-42)

**Issue:** Filenames from manifest JSON are used directly in output paths without sanitization. A malicious manifest could write to arbitrary paths.

**Recommendation:** Add basename validation to output paths.

### L8 — Debug Panel Accessible in Production (game.js)

**Issue:** Debug tuning controls (world override, visual offsets) are always rendered and accessible. While they don't expose sensitive data, they could confuse users or be used to manipulate game state.

**Recommendation:** Consider hiding debug controls behind a secret gesture or environment flag.

---

## INFO (Positive Findings)

1. **No external dependencies in runtime** — No third-party JS libraries, reducing supply chain risk
2. **External links use `rel="noopener noreferrer"`** — Prevents reverse tabnapping
3. **Service worker has origin check** — Correctly rejects cross-origin requests
4. **localStorage deserialization is well-guarded** — `loadProfile()` uses try/catch with type validation and normalization functions
5. **Shell scripts use `set -euo pipefail`** — Good defensive shell practices
6. **No `eval()` or `new Function()`** — No dynamic code execution anywhere in the codebase

---

## Fixes Applied in This Audit

| Finding | File | Fix Description |
|---------|------|-----------------|
| H1 | game.js | Added `escapeHtml()` helper; applied to player names in `renderLeaderboard()` |
| H2 | .github/workflows/e2e.yml | Matrix variable passed via environment variable |
| M3 | .github/workflows/e2e.yml | Pinned all actions to SHA commits |
| M4 | .github/workflows/e2e.yml | Added `permissions: { contents: read }` |
| L1 | .github/workflows/e2e.yml | Changed `npm install` to `npm ci` |
