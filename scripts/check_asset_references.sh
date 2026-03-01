#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

RUNTIME_FILES=(
  "index.html"
  "styles.css"
  "game.js"
  "service-worker.js"
  "manifest.webmanifest"
  "tests/e2e/smoke.spec.js"
)

tmp_runtime_refs="$(mktemp)"
tmp_all_refs="$(mktemp)"
tmp_assets="$(mktemp)"
tmp_missing="$(mktemp)"
tmp_unused="$(mktemp)"

cleanup() {
  rm -f "$tmp_runtime_refs" "$tmp_all_refs" "$tmp_assets" "$tmp_missing" "$tmp_unused"
}
trap cleanup EXIT

rg --no-filename -o "assets/[A-Za-z0-9_./-]+" "${RUNTIME_FILES[@]}" | sort -u > "$tmp_runtime_refs"

while IFS= read -r ref; do
  [[ -e "$ref" ]] || echo "$ref" >> "$tmp_missing"
done < "$tmp_runtime_refs"

has_error=0

if [[ -s "$tmp_missing" ]]; then
  echo "Missing asset files referenced by runtime:"
  cat "$tmp_missing"
  has_error=1
fi

if [[ "${CHECK_UNUSED_ASSETS:-0}" == "1" ]]; then
  git ls-files "assets/**" | sort > "$tmp_assets"
  rg --no-filename -o "assets/[A-Za-z0-9_./-]+" --glob '!node_modules/**' --glob '!playwright-report/**' --glob '!test-results/**' . | sort -u > "$tmp_all_refs"
  comm -23 "$tmp_assets" "$tmp_all_refs" > "$tmp_unused"
  if [[ -s "$tmp_unused" ]]; then
    echo "Tracked assets not referenced anywhere in repository:"
    cat "$tmp_unused"
    has_error=1
  fi
fi

if [[ "$has_error" -ne 0 ]]; then
  exit 1
fi

echo "Asset reference check passed."
