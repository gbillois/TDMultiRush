const { test, expect } = require("@playwright/test");

const APP_STORAGE_KEYS = [
  "multipliRush.profile.v1",
  "multipliRush.leaderboard.v1",
  "multipliRush.lastPlayerName.v1",
  "multipliRush.debugTuning.v1"
];

async function resetBrowserState(page) {
  await page.goto("/");
  await page.evaluate(async () => {
    localStorage.clear();
    sessionStorage.clear();
    if ("serviceWorker" in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map((reg) => reg.unregister()));
    }
  });
  await page.reload();
}

function parseQuestion(questionText) {
  const match = questionText.match(/(\d+)\s*x\s*(\d+)/i);
  if (!match) {
    throw new Error(`Question non reconnue: ${questionText}`);
  }
  return Number.parseInt(match[1], 10) * Number.parseInt(match[2], 10);
}

async function typeAnswerWithKeypad(page, answer) {
  const digits = String(answer).split("");
  for (const digit of digits) {
    await page.locator(`#keypad button[data-key="${digit}"]`).click();
  }
}

async function unlockSettingsPrompt(page) {
  page.once("dialog", async (dialog) => {
    const text = dialog.message();
    const match = text.match(/12\s*x\s*(\d+)/i);
    if (!match) {
      await dialog.dismiss();
      return;
    }
    const b = Number.parseInt(match[1], 10);
    await dialog.accept(String(12 * b));
  });
}

test.beforeEach(async ({ page }) => {
  await resetBrowserState(page);
});

test("charge l'ecran titre et ouvre/ferme les modales principales", async ({ page }) => {
  await expect(page.locator("#start-btn")).toBeVisible();

  await unlockSettingsPrompt(page);
  await page.locator("#open-tables-btn").click();
  await expect(page.locator("#tables-modal")).not.toHaveClass(/hidden/);
  await page.locator("#close-tables-btn").click();
  await expect(page.locator("#tables-modal")).toHaveClass(/hidden/);

  await page.locator("#open-stats-btn").click();
  await expect(page.locator("#stats-modal")).not.toHaveClass(/hidden/);
  await page.locator("#close-stats-btn").click();
  await expect(page.locator("#stats-modal")).toHaveClass(/hidden/);
});

test("peut lancer une partie et tirer une bonne reponse", async ({ page }) => {
  await page.locator("#start-btn").click();
  await expect(page.locator("#question-text")).toBeVisible();

  const initialScore = Number.parseInt(await page.locator("#score-value").innerText(), 10) || 0;
  const question = await page.locator("#question-text").innerText();
  const answer = parseQuestion(question);

  await typeAnswerWithKeypad(page, answer);
  await page.locator("#fire-btn").click();

  await expect
    .poll(async () => Number.parseInt(await page.locator("#score-value").innerText(), 10) || 0)
    .toBeGreaterThan(initialScore);
});

test("confirme le changement de mode puis applique le reset de partie", async ({ page }) => {
  await page.locator("#start-btn").click();
  await expect(page.locator('#mode-select button[data-mode="normal"]')).toHaveClass(/active/);

  await page.locator('#mode-select button[data-mode="simple"]').click();
  await expect(page.locator("#mode-confirm-modal")).not.toHaveClass(/hidden/);

  await page.locator("#mode-confirm-accept-btn").click();
  await expect(page.locator('#mode-select button[data-mode="simple"]')).toHaveClass(/active/);
  await expect(page.locator("#wave-value")).toHaveText("1");
});

test("persiste les donnees de profil dans localStorage", async ({ page }) => {
  await page.locator("#start-btn").click();
  await page.locator('#mode-select button[data-mode="simple"]').click();
  await page.locator("#mode-confirm-accept-btn").click();

  await expect(page.locator('#mode-select button[data-mode="simple"]')).toHaveClass(/active/);

  await page.reload();
  await expect(page.locator('#mode-select button[data-mode="simple"]')).toHaveClass(/active/);

  for (const key of APP_STORAGE_KEYS) {
    const hasKey = await page.evaluate((storageKey) => localStorage.getItem(storageKey) !== null, key);
    if (key === "multipliRush.profile.v1") {
      expect(hasKey).toBeTruthy();
    }
  }
});

test("sert les ressources critiques sans erreur 404", async ({ page }) => {
  const criticalPaths = [
    "/index.html",
    "/styles.css",
    "/game.js",
    "/manifest.webmanifest",
    "/assets/icons/icon-192.png",
    "/assets/pixel/castle-right.PNG",
    "/assets/pixel/tower-arcane.PNG"
  ];

  for (const path of criticalPaths) {
    const response = await page.request.get(path);
    expect(response.ok(), `Ressource indisponible: ${path}`).toBeTruthy();
  }
});
