(() => {
  const dom = {
    gameShell: document.getElementById("game-shell"),
    frame: document.querySelector(".phone-frame"),
    battlefield: document.getElementById("battlefield"),
    path: document.querySelector(".path"),
    castleDoor: document.getElementById("castle-door-img"),
    tower: document.getElementById("tower-img"),
    castleFire: document.getElementById("castle-fire"),
    enemyLayer: document.getElementById("enemy-layer"),
    projectileLayer: document.getElementById("projectile-layer"),
    fxLayer: document.getElementById("fx-layer"),
    waveValue: document.getElementById("wave-value"),
    livesLabel: document.getElementById("lives-label"),
    livesValue: document.getElementById("lives-value"),
    scoreValue: document.getElementById("score-value"),
    comboValue: document.getElementById("combo-value"),
    comboHudItem: document.getElementById("combo-value")?.closest(".hud-item"),
    pauseBtn: document.getElementById("pause-btn"),
    questionText: document.getElementById("question-text"),
    answerInput: document.getElementById("answer-input"),
    feedback: document.getElementById("feedback"),
    keypad: document.getElementById("keypad"),
    fireBtn: document.getElementById("fire-btn"),
    modeSelect: document.getElementById("mode-select"),
    modeButtons: Array.from(document.querySelectorAll("#mode-select [data-mode]")),
    waveBanner: document.getElementById("wave-banner"),
    gameOver: document.getElementById("game-over"),
    gameOverTitle: document.getElementById("game-over-title"),
    gameOverText: document.getElementById("game-over-text"),
    finalScoreText: document.getElementById("final-score-text"),
    scoreSubmit: document.getElementById("score-submit"),
    playerNameInput: document.getElementById("player-name-input"),
    saveScoreBtn: document.getElementById("save-score-btn"),
    scoreSaveFeedback: document.getElementById("score-save-feedback"),
    leaderboardList: document.getElementById("leaderboard-list"),
    statsLeaderboardList: document.getElementById("stats-leaderboard-list"),
    restartBtn: document.getElementById("restart-btn"),
    titleScreen: document.getElementById("title-screen"),
    startBtn: document.getElementById("start-btn"),
    openTablesBtn: document.getElementById("open-tables-btn"),
    openStatsBtn: document.getElementById("open-stats-btn"),
    openTablesInlineBtn: document.getElementById("open-tables-inline-btn"),
    openStatsInlineBtn: document.getElementById("open-stats-inline-btn"),
    openDebugInlineBtn: document.getElementById("open-debug-inline-btn"),
    tablesModal: document.getElementById("tables-modal"),
    statsModal: document.getElementById("stats-modal"),
    pauseModal: document.getElementById("pause-modal"),
    debugModal: document.getElementById("debug-modal"),
    debugWorldSelect: document.getElementById("debug-world-select"),
    debugBgOffset: document.getElementById("debug-bg-offset"),
    debugEnemyPathOffset: document.getElementById("debug-enemy-path-offset"),
    debugTowerScale: document.getElementById("debug-tower-scale"),
    debugTowerOffset: document.getElementById("debug-tower-offset"),
    debugCastleScale: document.getElementById("debug-castle-scale"),
    debugCastleOffset: document.getElementById("debug-castle-offset"),
    debugBgOffsetValue: document.getElementById("debug-bg-offset-value"),
    debugEnemyPathOffsetValue: document.getElementById("debug-enemy-path-offset-value"),
    debugTowerScaleValue: document.getElementById("debug-tower-scale-value"),
    debugTowerOffsetValue: document.getElementById("debug-tower-offset-value"),
    debugCastleScaleValue: document.getElementById("debug-castle-scale-value"),
    debugCastleOffsetValue: document.getElementById("debug-castle-offset-value"),
    debugExport: document.getElementById("debug-export"),
    closeDebugBtn: document.getElementById("close-debug-btn"),
    debugResetBtn: document.getElementById("debug-reset-btn"),
    visualStyleSelect: document.getElementById("visual-style-select"),
    visualStyleButtons: Array.from(document.querySelectorAll("[data-visual-style]")),
    tablesGrid: document.getElementById("tables-grid"),
    masteryMatrix: document.getElementById("mastery-matrix"),
    closeTablesBtn: document.getElementById("close-tables-btn"),
    closeStatsBtn: document.getElementById("close-stats-btn"),
    resumeBtn: document.getElementById("resume-btn"),
    backTitleBtn: document.getElementById("back-title-btn"),
    resetMasteryBtn: document.getElementById("reset-mastery-btn")
  };

  const MODES = {
    SIMPLE: "simple",
    NORMAL: "normal"
  };

  const VISUAL_STYLES = {
    BASIC: "basic",
    CASTLE: "castle",
    FAIRY: "fairy"
  };

  const STORAGE_KEY = "multipliRush.profile.v1";
  const LEADERBOARD_KEY = "multipliRush.leaderboard.v1";
  const LAST_PLAYER_KEY = "multipliRush.lastPlayerName.v1";
  const DEBUG_TUNING_KEY = "multipliRush.debugTuning.v1";
  const MASTERY_TARGET = 20;
  const LEADERBOARD_MAX_ENTRIES = 10;
  const ALL_TABLES = Array.from({ length: 12 }, (_, idx) => idx + 1);
  const SIMPLE_MAX_MISTAKES = 4;
  const SIMPLE_STEP_ADVANCE = 0.15;
  const SIMPLE_ADVANCE_ANIMATION_MS = 560;
  const SIMPLE_SUCCESS_NUDGE_PIXELS = 12;
  const SIMPLE_SUCCESS_NUDGE_ANIMATION_MS = 220;
  const ENEMY_SPAWN_REVEAL_SECONDS = 0.3;
  const WAVES_PER_WORLD = 2;
  const WORLD_THEMES = [
    { id: "forest", label: "Forêt" },
    { id: "snow", label: "Neige" },
    { id: "mountains", label: "Montagnes" },
    { id: "desert", label: "Désert" },
    { id: "desolation", label: "Désolation" }
  ];
  const MAX_WAVES = WORLD_THEMES.length * WAVES_PER_WORLD;
  const TABLE_COMPLEXITY_BONUS = {
    6: 4,
    7: 6,
    8: 8,
    9: 10
  };
  const TARGET_SOLVE_TIME_SECONDS = 0.75;
  const DIFFICULTY_SAFETY_MARGIN_SECONDS = 1.2;
  const ENABLE_COMBO_DEBUG_GESTURE = false;

  const STYLE_ASSETS = {
    [VISUAL_STYLES.CASTLE]: {
      towerSkins: {
        arcane: "assets/pixel/tower-arcane.PNG",
        solar: "assets/pixel/tower-solar.png"
      },
      castleDoor: "assets/pixel/castle-right.PNG",
      castleFire: "assets/pixel/fire-castle.png",
      projectile: "assets/pixel/projectile-arcane.png",
      enemySrcs: {
        goblin: "assets/pixel/enemy-goblin-green.png",
        scout: "assets/pixel/enemy-scout-pink.png",
        raider: "assets/pixel/enemy-raider-yellow.png",
        imp: "assets/pixel/enemy-imp-purple.png",
        orc: "assets/pixel/enemy-orc-red.png",
        frost: "assets/pixel/enemy-frost-blue.png",
        lizard: "assets/pixel/enemy-lizard-teal.png",
        knight: "assets/pixel/enemy-knight-slate.png",
        ogre: "assets/pixel/enemy-ogre-brown.png",
        shaman: "assets/pixel/enemy-shaman-cyan.png",
        berserker: "assets/pixel/enemy-berserker-orange.png",
        warlock: "assets/pixel/enemy-warlock-violet.png",
        shadow: "assets/pixel/enemy-shadow-black.png",
        guardian: "assets/pixel/enemy-guardian-gold.png"
      }
    },
    [VISUAL_STYLES.BASIC]: {
      towerSkins: {
        arcane: "assets/tower-arcane.svg",
        solar: "assets/tower-solar.svg"
      },
      castleDoor: "assets/castle-right.svg",
      castleFire: "assets/fire-castle.svg",
      projectile: "assets/projectile-arcane.svg",
      enemySrcs: {
        goblin: "assets/enemy-goblin-green.svg",
        scout: "assets/enemy-scout-pink.svg",
        raider: "assets/enemy-raider-yellow.svg",
        imp: "assets/enemy-imp-purple.svg",
        orc: "assets/enemy-orc-red.svg",
        frost: "assets/enemy-frost-blue.svg",
        lizard: "assets/enemy-lizard-teal.svg",
        knight: "assets/enemy-knight-slate.svg",
        ogre: "assets/enemy-ogre-brown.svg",
        shaman: "assets/enemy-shaman-cyan.svg",
        berserker: "assets/enemy-berserker-orange.svg",
        warlock: "assets/enemy-warlock-violet.svg",
        shadow: "assets/enemy-shadow-black.svg",
        guardian: "assets/enemy-guardian-gold.svg"
      }
    },
    [VISUAL_STYLES.FAIRY]: {
      towerSkins: {
        arcane: "assets/pixel-fairy/tower-arcane.png",
        solar: "assets/pixel-fairy/tower-solar.png"
      },
      castleDoor: "assets/pixel-fairy/castle-right.png",
      castleFire: "assets/pixel-fairy/fire-castle.png",
      projectile: "assets/pixel-fairy/projectile-arcane.png",
      enemySrcs: {
        goblin: "assets/pixel-fairy/enemy-goblin-green.png",
        scout: "assets/pixel-fairy/enemy-scout-pink.png",
        raider: "assets/pixel-fairy/enemy-raider-yellow.png",
        imp: "assets/pixel-fairy/enemy-imp-purple.png",
        orc: "assets/pixel-fairy/enemy-orc-red.png",
        frost: "assets/pixel-fairy/enemy-frost-blue.png",
        lizard: "assets/pixel-fairy/enemy-lizard-teal.png",
        knight: "assets/pixel-fairy/enemy-knight-slate.png",
        ogre: "assets/pixel-fairy/enemy-ogre-brown.png",
        shaman: "assets/pixel-fairy/enemy-shaman-cyan.png",
        berserker: "assets/pixel-fairy/enemy-berserker-orange.png",
        warlock: "assets/pixel-fairy/enemy-warlock-violet.png",
        shadow: "assets/pixel-fairy/enemy-shadow-black.png",
        guardian: "assets/pixel-fairy/enemy-guardian-gold.png"
      }
    }
  };

  const ENEMY_VARIANT_META = {
    goblin: { alt: "Gobelin éclaireur", hpBonus: 0, speedBonus: 0.008, scale: 0.95 },
    scout: { alt: "Éclaireur rose", hpBonus: 0, speedBonus: 0.01, scale: 0.92 },
    raider: { alt: "Raider jaune", hpBonus: 0, speedBonus: 0.006, scale: 0.98 },
    imp: { alt: "Diablotin violet", hpBonus: 1, speedBonus: 0.004, scale: 0.95 },
    orc: { alt: "Orc brute", hpBonus: 1, speedBonus: -0.003, scale: 1.08 },
    frost: { alt: "Maraudeur glace", hpBonus: 1, speedBonus: 0.002, scale: 1 },
    lizard: { alt: "Homme-lézard", hpBonus: 1, speedBonus: 0.005, scale: 0.98 },
    knight: { alt: "Chevalier ardoise", hpBonus: 2, speedBonus: -0.004, scale: 1.07 },
    ogre: { alt: "Ogre brun", hpBonus: 3, speedBonus: -0.006, scale: 1.12 },
    shaman: { alt: "Chaman runique", hpBonus: 2, speedBonus: 0.002, scale: 1 },
    berserker: { alt: "Berserker orange", hpBonus: 2, speedBonus: 0.004, scale: 1.06 },
    warlock: { alt: "Sorcier violet", hpBonus: 2, speedBonus: 0.003, scale: 1.02 },
    shadow: { alt: "Ombre noire", hpBonus: 3, speedBonus: 0.001, scale: 1.04 },
    guardian: { alt: "Gardien doré", hpBonus: 4, speedBonus: -0.007, scale: 1.14 }
  };

  const WORLD_ENEMY_POOLS = {
    forest: ["goblin", "scout", "lizard", "raider"],
    snow: ["frost", "raider", "berserker", "knight"],
    mountains: ["orc", "ogre", "shaman", "guardian"],
    desert: ["imp", "raider", "warlock", "berserker"],
    desolation: ["shadow", "warlock", "guardian", "ogre"]
  };
  const HARDCODED_CASTLE_TUNING = {
    bgOffsetY: 160,
    enemyPathOffsetY: -12,
    towerScale: 0.88,
    castleScale: 0.96,
    towerOffsetY: 2,
    castleOffsetY: 52
  };
  const HARDCODED_FAIRY_TUNING = {
    bgOffsetY: 160,
    enemyPathOffsetY: -12,
    towerScale: 0.88,
    castleScale: 0.96,
    towerOffsetY: 2,
    castleOffsetY: 52
  };

  function createDefaultDebugStyleTuning() {
    return {
      bgOffsetY: 0,
      enemyPathOffsetY: 0,
      towerScale: 1,
      castleScale: 1,
      towerOffsetY: 0,
      castleOffsetY: 0
    };
  }

  function createDefaultDebugTuning() {
    return {
      worldOverride: "auto",
      byStyle: {
        [VISUAL_STYLES.BASIC]: createDefaultDebugStyleTuning(),
        [VISUAL_STYLES.CASTLE]: { ...HARDCODED_CASTLE_TUNING },
        [VISUAL_STYLES.FAIRY]: { ...HARDCODED_FAIRY_TUNING }
      }
    };
  }

  function applyHardcodedStyleTuning() {
    state.debugTuning.byStyle[VISUAL_STYLES.CASTLE] = { ...HARDCODED_CASTLE_TUNING };
    state.debugTuning.byStyle[VISUAL_STYLES.FAIRY] = { ...HARDCODED_FAIRY_TUNING };
  }

  const state = {
    started: false,
    paused: false,
    mode: MODES.NORMAL,
    visualStyle: VISUAL_STYLES.CASTLE,
    selectedTables: [...ALL_TABLES],
    tableMastery: createEmptyMastery(),
    multiplicationMastery: createEmptyMultiplicationMastery(),
    wave: 1,
    lives: 20,
    simpleMistakes: 0,
    score: 0,
    combo: 0,
    enemies: [],
    queuedSpawns: 0,
    spawnCooldown: 0,
    enemyId: 0,
    question: null,
    inputBuffer: "",
    betweenWaves: false,
    gameOver: false,
    simpleAdvanceAnimation: null,
    shakeTimeoutId: null,
    leaderboard: [],
    scoreSubmitted: false,
    lastPlayerName: "",
    lastQuestionKey: "",
    lastFrame: 0,
    sessionId: 0,
    debugTuning: createDefaultDebugTuning()
  };

  function createEmptyMastery() {
    const mastery = {};
    for (const table of ALL_TABLES) {
      mastery[table] = { correct: 0, wrong: 0 };
    }
    return mastery;
  }

  function multiplicationKey(a, b) {
    return `${a}x${b}`;
  }

  function createEmptyMultiplicationMastery() {
    const mastery = {};
    for (const a of ALL_TABLES) {
      for (const b of ALL_TABLES) {
        mastery[multiplicationKey(a, b)] = { correct: 0, wrong: 0 };
      }
    }
    return mastery;
  }

  function sanitizeSelectedTables(rawValue) {
    if (!Array.isArray(rawValue)) {
      return [...ALL_TABLES];
    }

    const values = rawValue
      .map((item) => Number.parseInt(item, 10))
      .filter((table) => table >= 1 && table <= 12);

    const unique = [...new Set(values)].sort((a, b) => a - b);
    return unique.length > 0 ? unique : [...ALL_TABLES];
  }

  function normalizeMastery(rawValue) {
    const normalized = createEmptyMastery();

    if (!rawValue || typeof rawValue !== "object") {
      return normalized;
    }

    for (const table of ALL_TABLES) {
      const entry = rawValue[table] || rawValue[String(table)] || {};
      const correct = Math.max(0, Number.parseInt(entry.correct, 10) || 0);
      const wrong = Math.max(0, Number.parseInt(entry.wrong, 10) || 0);
      normalized[table] = { correct, wrong };
    }

    return normalized;
  }

  function normalizeMultiplicationMastery(rawValue) {
    const normalized = createEmptyMultiplicationMastery();

    if (!rawValue || typeof rawValue !== "object") {
      return normalized;
    }

    for (const a of ALL_TABLES) {
      for (const b of ALL_TABLES) {
        const key = multiplicationKey(a, b);
        const entry = rawValue[key] || {};
        const correct = Math.max(0, Number.parseInt(entry.correct, 10) || 0);
        const wrong = Math.max(0, Number.parseInt(entry.wrong, 10) || 0);
        normalized[key] = { correct, wrong };
      }
    }

    return normalized;
  }

  function normalizeVisualStyle(rawValue) {
    if (rawValue === VISUAL_STYLES.BASIC || rawValue === "svg") {
      return VISUAL_STYLES.BASIC;
    }
    if (rawValue === VISUAL_STYLES.FAIRY) {
      return VISUAL_STYLES.FAIRY;
    }
    if (rawValue === VISUAL_STYLES.CASTLE || rawValue === "pixel") {
      return VISUAL_STYLES.CASTLE;
    }
    return VISUAL_STYLES.CASTLE;
  }

  function clampDebugNumber(value, min, max, fallback) {
    const parsed = Number(value);
    if (!Number.isFinite(parsed)) {
      return fallback;
    }
    return Math.min(max, Math.max(min, parsed));
  }

  function normalizeDebugStyleTuning(rawValue) {
    const defaults = createDefaultDebugStyleTuning();
    if (!rawValue || typeof rawValue !== "object") {
      return defaults;
    }

    return {
      bgOffsetY: Math.round(clampDebugNumber(rawValue.bgOffsetY, -220, 220, defaults.bgOffsetY)),
      enemyPathOffsetY: Math.round(
        clampDebugNumber(rawValue.enemyPathOffsetY, -200, 200, defaults.enemyPathOffsetY)
      ),
      towerScale: clampDebugNumber(rawValue.towerScale, 0.4, 1.6, defaults.towerScale),
      castleScale: clampDebugNumber(rawValue.castleScale, 0.4, 1.6, defaults.castleScale),
      towerOffsetY: Math.round(
        clampDebugNumber(rawValue.towerOffsetY, -200, 200, defaults.towerOffsetY)
      ),
      castleOffsetY: Math.round(
        clampDebugNumber(rawValue.castleOffsetY, -200, 200, defaults.castleOffsetY)
      )
    };
  }

  function normalizeDebugTuning(rawValue) {
    const defaults = createDefaultDebugTuning();
    if (!rawValue || typeof rawValue !== "object") {
      return defaults;
    }

    const worldOverride = WORLD_THEMES.some((theme) => theme.id === rawValue.worldOverride)
      ? rawValue.worldOverride
      : "auto";

    return {
      worldOverride,
      byStyle: {
        [VISUAL_STYLES.BASIC]: normalizeDebugStyleTuning(
          rawValue.byStyle?.[VISUAL_STYLES.BASIC]
        ),
        [VISUAL_STYLES.CASTLE]: normalizeDebugStyleTuning(
          rawValue.byStyle?.[VISUAL_STYLES.CASTLE]
        ),
        [VISUAL_STYLES.FAIRY]: normalizeDebugStyleTuning(
          rawValue.byStyle?.[VISUAL_STYLES.FAIRY]
        )
      }
    };
  }

  function getActiveStyleAssets() {
    return STYLE_ASSETS[state.visualStyle] || STYLE_ASSETS[VISUAL_STYLES.CASTLE];
  }

  function loadProfile() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return;
      }

      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") {
        return;
      }

      state.selectedTables = sanitizeSelectedTables(parsed.selectedTables);
      state.tableMastery = normalizeMastery(parsed.tableMastery);
      state.multiplicationMastery = normalizeMultiplicationMastery(
        parsed.multiplicationMastery
      );
      state.visualStyle = normalizeVisualStyle(parsed.visualStyle);

      if (parsed.mode === MODES.SIMPLE || parsed.mode === MODES.NORMAL) {
        state.mode = parsed.mode;
      }
    } catch {
      state.selectedTables = [...ALL_TABLES];
      state.tableMastery = createEmptyMastery();
      state.multiplicationMastery = createEmptyMultiplicationMastery();
      state.mode = MODES.NORMAL;
      state.visualStyle = VISUAL_STYLES.CASTLE;
    }
  }

  function saveProfile() {
    const payload = {
      mode: state.mode,
      visualStyle: state.visualStyle,
      selectedTables: [...state.selectedTables],
      tableMastery: state.tableMastery,
      multiplicationMastery: state.multiplicationMastery
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }

  function loadDebugTuning() {
    try {
      const raw = localStorage.getItem(DEBUG_TUNING_KEY);
      const parsed = raw ? JSON.parse(raw) : null;
      state.debugTuning = normalizeDebugTuning(parsed);
    } catch {
      state.debugTuning = createDefaultDebugTuning();
    }
    // Never force a world by default: gameplay decides world by wave.
    state.debugTuning.worldOverride = "auto";
    applyHardcodedStyleTuning();
  }

  function saveDebugTuning() {
    localStorage.setItem(DEBUG_TUNING_KEY, JSON.stringify(state.debugTuning));
  }

  function sanitizePlayerName(rawName) {
    const normalized = String(rawName || "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 18);
    return normalized;
  }

  function loadLeaderboard() {
    try {
      const raw = localStorage.getItem(LEADERBOARD_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(parsed)) {
        state.leaderboard = [];
      } else {
        state.leaderboard = parsed
          .filter((entry) => entry && typeof entry === "object")
          .map((entry) => ({
            name: sanitizePlayerName(entry.name),
            score: Math.max(0, Number.parseInt(entry.score, 10) || 0),
            wave: Math.max(1, Number.parseInt(entry.wave, 10) || 1),
            mode: entry.mode === MODES.SIMPLE ? MODES.SIMPLE : MODES.NORMAL,
            timestamp: Number.parseInt(entry.timestamp, 10) || Date.now()
          }))
          .filter((entry) => entry.name.length > 0)
          .sort((a, b) => b.score - a.score || b.wave - a.wave || a.timestamp - b.timestamp)
          .slice(0, LEADERBOARD_MAX_ENTRIES);
      }
    } catch {
      state.leaderboard = [];
    }

    state.lastPlayerName = sanitizePlayerName(localStorage.getItem(LAST_PLAYER_KEY) || "");
  }

  function persistLeaderboard() {
    localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(state.leaderboard));
    if (state.lastPlayerName) {
      localStorage.setItem(LAST_PLAYER_KEY, state.lastPlayerName);
    }
  }

  function modeLabel(mode) {
    return mode === MODES.SIMPLE ? "Simple" : "Normal";
  }

  function renderLeaderboard() {
    const content = state.leaderboard.length
      ? state.leaderboard
      .map(
        (entry) =>
          `<li>${entry.name} - ${entry.score} pts (V${entry.wave}, ${modeLabel(entry.mode)})</li>`
      )
      .join("")
      : "<li>Aucun score enregistré.</li>";

    if (dom.leaderboardList) {
      dom.leaderboardList.innerHTML = content;
    }

    if (dom.statsLeaderboardList) {
      dom.statsLeaderboardList.innerHTML = content;
    }
  }

  function renderMasteryMatrix() {
    if (!dom.masteryMatrix) {
      return;
    }

    const headCells = ALL_TABLES.map((value) => `<th>${value}</th>`).join("");
    const rows = ALL_TABLES.map((a) => {
      const cells = ALL_TABLES.map((b) => {
        const key = multiplicationKey(a, b);
        const stats = state.multiplicationMastery[key] || { correct: 0, wrong: 0 };
        const ratio = Math.min(1, stats.correct / MASTERY_TARGET);
        const hue = Math.round(ratio * 120);
        const light = 30 + Math.round(ratio * 24);
        const textColor = light > 48 ? "#102015" : "#f9fbff";
        const background = `hsl(${hue} 74% ${light}%)`;

        return `<td style="background:${background};color:${textColor}" title="${a} x ${b} = ${a * b} | ${stats.correct}/${MASTERY_TARGET}"><div class="matrix-main">${a * b}</div><div class="matrix-sub">${Math.min(stats.correct, MASTERY_TARGET)}/${MASTERY_TARGET}</div></td>`;
      }).join("");

      return `<tr><th>${a}</th>${cells}</tr>`;
    }).join("");

    dom.masteryMatrix.innerHTML = `<thead><tr><th>x</th>${headCells}</tr></thead><tbody>${rows}</tbody>`;
  }

  function saveCurrentScore() {
    if (state.scoreSubmitted) {
      dom.scoreSaveFeedback.textContent = "Score déjà enregistré.";
      return;
    }

    const name = sanitizePlayerName(dom.playerNameInput.value);
    if (!name) {
      dom.scoreSaveFeedback.textContent = "Entre un nom valide.";
      return;
    }

    state.lastPlayerName = name;
    state.leaderboard.push({
      name,
      score: state.score,
      wave: state.wave,
      mode: state.mode,
      timestamp: Date.now()
    });

    state.leaderboard = state.leaderboard
      .sort((a, b) => b.score - a.score || b.wave - a.wave || a.timestamp - b.timestamp)
      .slice(0, LEADERBOARD_MAX_ENTRIES);

    state.scoreSubmitted = true;
    dom.scoreSaveFeedback.textContent = "Score enregistré.";
    dom.playerNameInput.disabled = true;
    dom.playerNameInput.blur();
    dom.saveScoreBtn.disabled = true;
    renderLeaderboard();
    persistLeaderboard();
  }

  function isSimpleMode() {
    return state.mode === MODES.SIMPLE;
  }

  function getSimpleErrorsRemaining() {
    return Math.max(0, SIMPLE_MAX_MISTAKES - state.simpleMistakes);
  }

  function updateHud() {
    dom.waveValue.textContent = String(state.wave);
    dom.scoreValue.textContent = String(state.score);
    dom.comboValue.textContent = `x${state.combo}`;
    dom.answerInput.value = state.inputBuffer;
    if (dom.pauseBtn) {
      dom.pauseBtn.disabled = !state.started || state.gameOver;
    }

    if (isSimpleMode()) {
      dom.livesLabel.textContent = "Erreurs";
      dom.livesValue.textContent = String(getSimpleErrorsRemaining());
    } else {
      dom.livesLabel.textContent = "Vies";
      dom.livesValue.textContent = String(state.lives);
    }
  }

  function showFeedback(text, kind) {
    dom.feedback.textContent = text;
    dom.feedback.classList.remove("good", "bad");

    if (kind) {
      dom.feedback.classList.add(kind);
    }
  }

  function banner(text) {
    dom.waveBanner.textContent = text;
    dom.waveBanner.classList.remove("show");
    void dom.waveBanner.offsetWidth;
    dom.waveBanner.classList.add("show");
  }

  function setCastleFire(isBurning) {
    if (!dom.castleFire) {
      return;
    }

    dom.castleFire.classList.toggle("hidden", !isBurning);
    dom.castleFire.classList.toggle("burning", isBurning);
  }

  function triggerScreenShake(level = "small") {
    if (!dom.frame) {
      return;
    }

    const className = level === "heavy" ? "shake-heavy" : "shake-small";
    dom.frame.classList.remove("shake-small", "shake-heavy");
    void dom.frame.offsetWidth;
    dom.frame.classList.add(className);

    if (state.shakeTimeoutId) {
      clearTimeout(state.shakeTimeoutId);
    }

    const duration = level === "heavy" ? 560 : 220;
    state.shakeTimeoutId = setTimeout(() => {
      dom.frame.classList.remove("shake-small", "shake-heavy");
      state.shakeTimeoutId = null;
    }, duration + 20);

    if (typeof navigator !== "undefined" && typeof navigator.vibrate === "function") {
      navigator.vibrate(level === "heavy" ? [90, 55, 90] : 55);
    }
  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function getWorldIndexForWave(wave) {
    return Math.min(
      WORLD_THEMES.length - 1,
      Math.max(0, Math.floor((wave - 1) / WAVES_PER_WORLD))
    );
  }

  function getCurrentWorldTheme() {
    const forcedWorldId = state.debugTuning.worldOverride;
    const forcedWorld = WORLD_THEMES.find((theme) => theme.id === forcedWorldId);
    if (forcedWorld) {
      return forcedWorld;
    }

    const worldIndex = getWorldIndexForWave(state.wave);
    return WORLD_THEMES[worldIndex];
  }

  function applyWorldTheme() {
    if (!dom.battlefield) {
      return WORLD_THEMES[0];
    }

    const world = getCurrentWorldTheme();

    for (const theme of WORLD_THEMES) {
      dom.battlefield.classList.remove(`world-${theme.id}`);
    }
    dom.battlefield.classList.add(`world-${world.id}`);

    return world;
  }

  function getCurrentDebugStyleTuning() {
    const styleTuning = state.debugTuning.byStyle[state.visualStyle];
    return styleTuning || createDefaultDebugStyleTuning();
  }

  function refreshDebugExport() {
    if (!dom.debugExport) {
      return;
    }

    const payload = {
      visualStyle: state.visualStyle,
      worldOverride: state.debugTuning.worldOverride,
      values: getCurrentDebugStyleTuning()
    };
    dom.debugExport.value = JSON.stringify(payload, null, 2);
  }

  function applyDebugTuningToView() {
    if (!dom.frame) {
      return;
    }

    const tuning = getCurrentDebugStyleTuning();
    dom.frame.style.setProperty("--debug-bg-offset-y", `${tuning.bgOffsetY}px`);
    dom.frame.style.setProperty("--debug-path-offset-y", `${tuning.enemyPathOffsetY}px`);
    dom.frame.style.setProperty("--debug-tower-offset-y", `${tuning.towerOffsetY}px`);
    dom.frame.style.setProperty("--debug-castle-offset-y", `${tuning.castleOffsetY}px`);
    dom.frame.style.setProperty("--debug-tower-scale", tuning.towerScale.toFixed(3));
    dom.frame.style.setProperty("--debug-castle-scale", tuning.castleScale.toFixed(3));
    applyWorldTheme();
    renderEnemies();
    refreshDebugExport();
  }

  function renderDebugControls() {
    const tuning = getCurrentDebugStyleTuning();

    if (dom.debugWorldSelect) {
      dom.debugWorldSelect.value = state.debugTuning.worldOverride;
    }

    if (dom.debugBgOffset) {
      dom.debugBgOffset.value = String(tuning.bgOffsetY);
    }
    if (dom.debugEnemyPathOffset) {
      dom.debugEnemyPathOffset.value = String(tuning.enemyPathOffsetY);
    }
    if (dom.debugTowerScale) {
      dom.debugTowerScale.value = tuning.towerScale.toFixed(2);
    }
    if (dom.debugTowerOffset) {
      dom.debugTowerOffset.value = String(tuning.towerOffsetY);
    }
    if (dom.debugCastleScale) {
      dom.debugCastleScale.value = tuning.castleScale.toFixed(2);
    }
    if (dom.debugCastleOffset) {
      dom.debugCastleOffset.value = String(tuning.castleOffsetY);
    }

    if (dom.debugBgOffsetValue) {
      dom.debugBgOffsetValue.textContent = `${tuning.bgOffsetY} px`;
    }
    if (dom.debugEnemyPathOffsetValue) {
      dom.debugEnemyPathOffsetValue.textContent = `${tuning.enemyPathOffsetY} px`;
    }
    if (dom.debugTowerScaleValue) {
      dom.debugTowerScaleValue.textContent = `${tuning.towerScale.toFixed(2)}x`;
    }
    if (dom.debugTowerOffsetValue) {
      dom.debugTowerOffsetValue.textContent = `${tuning.towerOffsetY} px`;
    }
    if (dom.debugCastleScaleValue) {
      dom.debugCastleScaleValue.textContent = `${tuning.castleScale.toFixed(2)}x`;
    }
    if (dom.debugCastleOffsetValue) {
      dom.debugCastleOffsetValue.textContent = `${tuning.castleOffsetY} px`;
    }

    refreshDebugExport();
  }

  function updateDebugControl(key, rawValue) {
    const tuning = getCurrentDebugStyleTuning();
    const next = { ...tuning };

    if (key === "bgOffsetY") {
      next.bgOffsetY = Math.round(clampDebugNumber(rawValue, -220, 220, tuning.bgOffsetY));
    } else if (key === "enemyPathOffsetY") {
      next.enemyPathOffsetY = Math.round(
        clampDebugNumber(rawValue, -200, 200, tuning.enemyPathOffsetY)
      );
    } else if (key === "towerScale") {
      next.towerScale = clampDebugNumber(rawValue, 0.4, 1.6, tuning.towerScale);
    } else if (key === "towerOffsetY") {
      next.towerOffsetY = Math.round(
        clampDebugNumber(rawValue, -200, 200, tuning.towerOffsetY)
      );
    } else if (key === "castleScale") {
      next.castleScale = clampDebugNumber(rawValue, 0.4, 1.6, tuning.castleScale);
    } else if (key === "castleOffsetY") {
      next.castleOffsetY = Math.round(
        clampDebugNumber(rawValue, -200, 200, tuning.castleOffsetY)
      );
    } else {
      return;
    }

    state.debugTuning.byStyle[state.visualStyle] = next;
    renderDebugControls();
    applyDebugTuningToView();
    saveDebugTuning();
  }

  function openDebugModal() {
    dom.pauseModal.classList.add("hidden");
    dom.tablesModal.classList.add("hidden");
    dom.statsModal.classList.add("hidden");
    dom.debugModal.classList.remove("hidden");
    dom.gameShell?.classList.add("debug-open");
    renderDebugControls();
    applyDebugTuningToView();
    refreshPauseState();
  }

  function closeDebugModal() {
    dom.debugModal.classList.add("hidden");
    dom.gameShell?.classList.remove("debug-open");
    refreshPauseState();
  }

  function resetDebugStyleTuning() {
    state.debugTuning.byStyle[state.visualStyle] = createDefaultDebugStyleTuning();
    renderDebugControls();
    applyDebugTuningToView();
    saveDebugTuning();
  }

  function getTableComplexityBonus(table) {
    return TABLE_COMPLEXITY_BONUS[table] || 0;
  }

  function getWaveDifficultyProgress() {
    return Math.min(1, Math.max(0, (state.wave - 1) / (MAX_WAVES - 1)));
  }

  function getEnemyCountForWave() {
    return isSimpleMode() ? 3 + state.wave : 4 + state.wave * 2;
  }

  function getSpawnIntervalForWave() {
    if (isSimpleMode()) {
      return 0;
    }
    return Math.max(0.85, 1.2 - state.wave * 0.035);
  }

  function computeEnemySpeed(variant) {
    const progress = getWaveDifficultyProgress();
    const baseSpeed = 0.038 + progress * 0.02;
    const variantImpact = variant.speedBonus * 0.3;
    const jitter = Math.random() * 0.003;
    return Math.max(0.03, baseSpeed + variantImpact + jitter);
  }

  function computeEnemyHp(variant, speed, spawnProgress) {
    const progress = getWaveDifficultyProgress();
    const desiredHp = 1 + progress * 1.4 + variant.hpBonus * 0.18;
    const desiredRoundedHp = Math.max(1, Math.round(desiredHp));

    if (isSimpleMode()) {
      return desiredRoundedHp;
    }

    const enemyCount = getEnemyCountForWave();
    const spawnInterval = getSpawnIntervalForWave();
    const travelDistance = Math.max(0.35, 1 - spawnProgress);
    const travelTime = travelDistance / Math.max(0.01, speed);

    // Budget formula: with 0.75s/question, the last wave remains beatable if
    // total time to clear N enemies stays under spawn cadence + travel window.
    const availableTime =
      travelTime + (enemyCount - 1) * spawnInterval - DIFFICULTY_SAFETY_MARGIN_SECONDS;
    const maxHpForPacing = Math.max(
      1,
      Math.floor(availableTime / (enemyCount * TARGET_SOLVE_TIME_SECONDS))
    );

    return Math.max(1, Math.min(desiredRoundedHp, maxHpForPacing));
  }

  function tableAccuracy(table) {
    const stats = state.tableMastery[table] || { correct: 0, wrong: 0 };
    const attempts = stats.correct + stats.wrong;
    if (attempts <= 0) {
      return 0;
    }
    return stats.correct / attempts;
  }

  function getTableWeight(table) {
    const stats = state.tableMastery[table] || { correct: 0, wrong: 0 };
    const attempts = stats.correct + stats.wrong;
    const waveProgress = getWaveDifficultyProgress();
    const simpleFocusBoost = isSimpleMode() ? 1 + waveProgress * 1.25 : 1;

    if (attempts === 0) {
      return 4.8 * simpleFocusBoost;
    }

    const accuracy = tableAccuracy(table);
    const missRate = 1 - accuracy;
    const lowVolumeBonus = Math.max(0, 1.8 - attempts * 0.09);
    const unmasteredBias = Math.max(0, MASTERY_TARGET - stats.correct) / MASTERY_TARGET;
    const progressiveBias = isSimpleMode() ? (missRate + unmasteredBias) * waveProgress * 3 : 0;

    return (
      1 +
      missRate * 4 * simpleFocusBoost +
      lowVolumeBonus +
      stats.wrong * 0.04 +
      progressiveBias
    );
  }

  function pickAdaptiveTable() {
    const tables = state.selectedTables.length ? state.selectedTables : [...ALL_TABLES];
    const weighted = tables.map((table) => ({ table, weight: getTableWeight(table) }));

    const totalWeight = weighted.reduce((sum, item) => sum + item.weight, 0);
    if (totalWeight <= 0) {
      return tables[randomInt(0, tables.length - 1)];
    }

    let cursor = Math.random() * totalWeight;
    for (const item of weighted) {
      cursor -= item.weight;
      if (cursor <= 0) {
        return item.table;
      }
    }

    return weighted[weighted.length - 1].table;
  }

  function getTableStatus(table) {
    const stats = state.tableMastery[table] || { correct: 0, wrong: 0 };
    const attempts = stats.correct + stats.wrong;

    if (attempts === 0) {
      return { label: "Nouveau", className: "weak", summary: "Aucune réponse" };
    }

    const accuracy = tableAccuracy(table);
    const percent = Math.round(accuracy * 100);
    const summary = `${percent}% (${stats.correct}/${attempts})`;

    if (attempts >= 10 && accuracy >= 0.85) {
      return { label: "Maîtrisée", className: "strong", summary };
    }

    if (accuracy >= 0.6) {
      return { label: "En progression", className: "medium", summary };
    }

    return { label: "Prioritaire", className: "weak", summary };
  }

  function renderTablesGrid() {
    const selected = new Set(state.selectedTables);
    const html = ALL_TABLES.map((table) => {
      const status = getTableStatus(table);
      const checked = selected.has(table) ? "checked" : "";
      const selectedClass = selected.has(table) ? "selected" : "";

      return `
        <label class="table-option ${selectedClass}">
          <div class="table-main">
            <span>Table de ${table}</span>
            <input type="checkbox" data-table-checkbox="${table}" ${checked} />
          </div>
          <div class="table-meta ${status.className}">${status.label} - ${status.summary}</div>
        </label>
      `;
    }).join("");

    dom.tablesGrid.innerHTML = html;
  }

  function updateTowerSkin() {
    if (!dom.tower) {
      return;
    }

    const styleAssets = getActiveStyleAssets();
    const towerSrc =
      state.wave >= 6 ? styleAssets.towerSkins.solar : styleAssets.towerSkins.arcane;
    dom.tower.src = towerSrc;
  }

  function updateModeButtons() {
    for (const button of dom.modeButtons) {
      button.classList.toggle("active", button.dataset.mode === state.mode);
    }
  }

  function updateVisualStyleButtons() {
    for (const button of dom.visualStyleButtons) {
      button.classList.toggle("active", button.dataset.visualStyle === state.visualStyle);
    }
  }

  function applyVisualStyle() {
    const styleAssets = getActiveStyleAssets();

    dom.frame?.classList.toggle("visual-style-basic", state.visualStyle === VISUAL_STYLES.BASIC);
    dom.frame?.classList.toggle("visual-style-castle", state.visualStyle === VISUAL_STYLES.CASTLE);
    dom.frame?.classList.toggle("visual-style-fairy", state.visualStyle === VISUAL_STYLES.FAIRY);

    if (dom.castleDoor) {
      dom.castleDoor.src = styleAssets.castleDoor;
    }
    if (dom.castleFire) {
      dom.castleFire.src = styleAssets.castleFire;
    }
    if (dom.frame) {
      dom.frame.style.setProperty("--projectile-image", `url("${styleAssets.projectile}")`);
    }

    updateTowerSkin();

    for (const enemy of state.enemies) {
      const img = enemy.el.querySelector("img");
      const variant = ENEMY_VARIANT_META[enemy.variantKey];
      const src = styleAssets.enemySrcs[enemy.variantKey];
      if (!img || !variant || !src) {
        continue;
      }
      img.src = src;
      img.alt = variant.alt;
    }

    renderDebugControls();
    applyDebugTuningToView();
  }

  function setVisualStyle(style) {
    const nextStyle = normalizeVisualStyle(style);
    if (nextStyle === state.visualStyle) {
      updateVisualStyleButtons();
      return;
    }

    state.visualStyle = nextStyle;
    updateVisualStyleButtons();
    applyVisualStyle();
    renderDebugControls();
    saveProfile();
  }

  function setMode(mode) {
    if (!Object.values(MODES).includes(mode)) {
      return;
    }

    state.mode = mode;
    updateModeButtons();
    saveProfile();

    if (state.started) {
      resetGame();
    } else {
      updateHud();
    }
  }

  function nextQuestion() {
    const maxB = Math.min(12, 4 + Math.floor(state.wave * 1.2));
    const possibleOperations = state.selectedTables.length * maxB;
    const canAvoidRepeat = possibleOperations > 1 && state.lastQuestionKey.length > 0;

    let table = pickAdaptiveTable();
    let b = randomInt(1, maxB);
    let key = multiplicationKey(table, b);
    let guard = 0;

    while (canAvoidRepeat && key === state.lastQuestionKey && guard < 24) {
      table = pickAdaptiveTable();
      b = randomInt(1, maxB);
      key = multiplicationKey(table, b);
      guard += 1;
    }

    state.question = { a: table, b, answer: table * b };
    state.lastQuestionKey = key;
    state.inputBuffer = "";
    dom.questionText.textContent = `${table} x ${b} = ?`;
    updateHud();
  }

  function pickEnemyVariantKey() {
    const world = getCurrentWorldTheme();
    const pool = WORLD_ENEMY_POOLS[world.id] || WORLD_ENEMY_POOLS.forest;
    const waveInWorld = ((state.wave - 1) % WAVES_PER_WORLD) + 1;
    const availableCount = waveInWorld === 1 ? Math.max(1, pool.length - 1) : pool.length;
    const activePool = pool.slice(0, availableCount);
    return activePool[randomInt(0, activePool.length - 1)];
  }

  function getEnemyVariant(variantKey) {
    const styleAssets = getActiveStyleAssets();
    const key = ENEMY_VARIANT_META[variantKey] ? variantKey : "goblin";
    return {
      ...ENEMY_VARIANT_META[key],
      src: styleAssets.enemySrcs[key]
    };
  }

  function createEnemy(initialProgress) {
    const variantKey = pickEnemyVariantKey();
    const variant = getEnemyVariant(variantKey);
    const el = document.createElement("div");
    el.className = "enemy";
    el.style.setProperty("--enemy-scale", String(variant.scale));

    const img = document.createElement("img");
    img.src = variant.src;
    img.alt = variant.alt;

    const hpBar = document.createElement("div");
    hpBar.className = "hp-bar";

    const hpFill = document.createElement("div");
    hpFill.className = "hp-fill";

    hpBar.appendChild(hpFill);
    el.appendChild(img);
    el.appendChild(hpBar);
    dom.enemyLayer.appendChild(el);

    const spawnProgress =
      typeof initialProgress === "number"
        ? initialProgress
        : -0.18 - Math.random() * 0.12;
    const speed = computeEnemySpeed(variant);
    const hp = 1;

    const enemy = {
      id: ++state.enemyId,
      hp,
      maxHp: hp,
      speed,
      scale: variant.scale,
      spawnReveal: 0,
      spawnShiftX: -(48 + Math.random() * 18),
      progress: spawnProgress,
      sway: Math.random() * Math.PI * 2,
      enraged: false,
      variantKey,
      el,
      hpFill,
      screenX: 0,
      screenY: 0
    };

    state.enemies.push(enemy);
    updateEnemyHp(enemy);
  }

  function updateEnemyHp(enemy) {
    const ratio = Math.max(0, enemy.hp / enemy.maxHp);
    enemy.hpFill.style.width = `${ratio * 100}%`;
  }

  function getTrackGeometry() {
    const rect = dom.battlefield.getBoundingClientRect();
    const pathRect = dom.path?.getBoundingClientRect();
    const castleRect = dom.castleDoor?.getBoundingClientRect();
    const tuning = getCurrentDebugStyleTuning();

    if (pathRect && pathRect.width > 12 && pathRect.height > 8) {
      const isBasicStyle = state.visualStyle === VISUAL_STYLES.BASIC;
      const baseYFactor = isBasicStyle ? 0.56 : 0.76;
      const startX = pathRect.left - rect.left + pathRect.width * 0.07;
      const pathEndX = pathRect.right - rect.left - pathRect.width * 0.08;
      const doorX = castleRect
        ? castleRect.left - rect.left + castleRect.width * 0.34
        : pathEndX;
      const endX = Math.max(startX + 24, Math.min(pathEndX, doorX));
      const baseY =
        pathRect.top - rect.top + pathRect.height * baseYFactor + tuning.enemyPathOffsetY;

      return {
        startX,
        endX,
        baseY,
        width: rect.width,
        height: rect.height
      };
    }

    return {
      startX: rect.width * 0.2,
      endX: rect.width * 0.89,
      baseY: rect.height * 0.72 + tuning.enemyPathOffsetY,
      width: rect.width,
      height: rect.height
    };
  }

  function renderEnemies() {
    const track = getTrackGeometry();
    const swayAmplitude = state.visualStyle === VISUAL_STYLES.BASIC ? 5 : 2.2;

    for (const enemy of state.enemies) {
      const idealX = track.startX + (track.endX - track.startX) * enemy.progress;
      const y = track.baseY + Math.sin(enemy.progress * 7 + enemy.sway) * swayAmplitude;
      const baseWidth = enemy.el.offsetWidth || 84;
      const halfSprite = (baseWidth * (enemy.scale || 1)) / 2;
      const minX = enemy.progress < 0 ? -halfSprite - 56 : halfSprite + 2;
      const maxX = track.width - halfSprite - 2;
      const x = clamp(idealX, minX, maxX);
      const reveal = clamp(enemy.spawnReveal ?? 1, 0, 1);
      const spawnShift = (enemy.spawnShiftX || 0) * (1 - reveal);
      enemy.screenX = x;
      enemy.screenY = y;
      enemy.el.style.left = `${x}px`;
      enemy.el.style.top = `${y}px`;
      enemy.el.style.setProperty("--spawn-shift-x", `${spawnShift.toFixed(2)}px`);
      enemy.el.classList.toggle("enraged", enemy.enraged);
    }
  }

  function removeEnemy(enemy) {
    enemy.el.remove();
    state.enemies = state.enemies.filter((item) => item.id !== enemy.id);
  }

  function clearAllEnemies() {
    for (const enemy of state.enemies) {
      enemy.el.remove();
    }
    state.enemies = [];
    state.queuedSpawns = 0;
    state.simpleAdvanceAnimation = null;
    if (state.shakeTimeoutId) {
      clearTimeout(state.shakeTimeoutId);
      state.shakeTimeoutId = null;
    }
    dom.frame?.classList.remove("shake-small", "shake-heavy");
  }

  function enemyHitFx(x, y) {
    const fx = document.createElement("div");
    fx.className = "hit-fx";
    fx.style.left = `${x}px`;
    fx.style.top = `${y}px`;
    dom.fxLayer.appendChild(fx);
    setTimeout(() => fx.remove(), 380);
  }

  function getFrontEnemy() {
    if (!state.enemies.length) {
      return null;
    }

    return state.enemies.reduce((front, current) =>
      current.progress > front.progress ? current : front
    );
  }

  function launchProjectile(target) {
    const track = getTrackGeometry();
    const originX = track.width * 0.16;
    const originY = track.height * 0.56;
    dom.tower?.classList.add("cast");

    const p = document.createElement("div");
    p.className = "projectile";
    p.style.left = `${originX}px`;
    p.style.top = `${originY}px`;
    dom.projectileLayer.appendChild(p);

    requestAnimationFrame(() => {
      p.style.transition = "left 220ms linear, top 220ms linear";
      p.style.left = `${target.screenX}px`;
      p.style.top = `${target.screenY}px`;
    });

    setTimeout(() => dom.tower?.classList.remove("cast"), 180);

    setTimeout(() => {
      p.remove();
      if (!state.enemies.some((enemy) => enemy.id === target.id)) {
        return;
      }

      target.hp -= 1;
      updateEnemyHp(target);
      enemyHitFx(target.screenX, target.screenY);

      if (target.hp <= 0) {
        state.score += 30 + state.wave * 7;
        removeEnemy(target);
      }

      updateHud();
    }, 240);
  }

  function triggerGameOver(message, options = {}) {
    if (state.gameOver) {
      return;
    }

    const title = options.title || "Défaite";
    const feedbackText = options.feedbackText || "Partie terminée. Clique sur Rejouer.";
    const feedbackKind = options.feedbackKind || "bad";

    state.gameOver = true;
    updateHud();
    state.scoreSubmitted = false;
    if (dom.gameOverTitle) {
      dom.gameOverTitle.textContent = title;
    }
    dom.gameOverText.textContent = message;
    dom.finalScoreText.textContent = `Score final: ${state.score}`;
    dom.scoreSaveFeedback.textContent = "";
    dom.playerNameInput.value = state.lastPlayerName || "";
    dom.playerNameInput.disabled = false;
    dom.saveScoreBtn.disabled = false;
    dom.scoreSubmit.classList.remove("hidden");
    renderLeaderboard();
    dom.gameOver.classList.remove("hidden");
    showFeedback(feedbackText, feedbackKind);
  }

  function requestSettingsUnlock() {
    const multiplierCandidates = ALL_TABLES.filter((value) => ![1, 2, 10].includes(value));
    const b = multiplierCandidates[randomInt(0, multiplierCandidates.length - 1)];
    const expected = 12 * b;
    const answer = window.prompt(`Sécurité Réglages: 12 x ${b} = ?`);
    if (answer === null) {
      showFeedback("Accès aux réglages annulé.", "bad");
      return false;
    }

    const guess = Number.parseInt(String(answer).trim(), 10);
    if (guess !== expected) {
      showFeedback("Réponse incorrecte. Accès refusé.", "bad");
      return false;
    }

    return true;
  }

  function triggerVictory() {
    triggerGameOver("Tu as traversé tous les mondes. Le château est sauvé.", {
      title: "Victoire",
      feedbackText: "Bravo, tu as terminé la campagne.",
      feedbackKind: "good"
    });
  }

  function beginSimpleAdvanceAnimation(options = {}) {
    const { moveToEnd = false, onComplete = null } = options;

    if (!state.enemies.length) {
      if (typeof onComplete === "function") {
        onComplete();
      }
      return;
    }

    const step = SIMPLE_STEP_ADVANCE + state.wave * 0.008;
    const milestone = moveToEnd ? 1 : state.simpleMistakes / SIMPLE_MAX_MISTAKES;
    const moves = state.enemies.map((enemy) => {
      const target = moveToEnd
        ? 1
        : Math.min(0.98, Math.max(enemy.progress + step, milestone));

      return {
        enemyId: enemy.id,
        from: enemy.progress,
        to: target
      };
    });

    state.simpleAdvanceAnimation = {
      kind: "advance",
      elapsedMs: 0,
      durationMs: SIMPLE_ADVANCE_ANIMATION_MS,
      moves,
      onComplete
    };
  }

  function beginSimpleSuccessNudgeAnimation() {
    if (!isSimpleMode() || !state.enemies.length || state.simpleAdvanceAnimation) {
      return;
    }

    const track = getTrackGeometry();
    const travelWidth = Math.max(48, track.endX - track.startX);
    const step = SIMPLE_SUCCESS_NUDGE_PIXELS / travelWidth;
    const candidates = state.enemies
      .filter((enemy) => enemy.progress < 0.975)
      .sort((a, b) => b.progress - a.progress);
    if (!candidates.length) {
      return;
    }

    const moves = candidates.map((enemy, index) => {
      const damp = Math.max(0.45, 1 - index * 0.1);
      return {
        enemyId: enemy.id,
        from: enemy.progress,
        to: Math.min(0.985, enemy.progress + step * damp)
      };
    });

    state.simpleAdvanceAnimation = {
      kind: "nudge",
      elapsedMs: 0,
      durationMs: SIMPLE_SUCCESS_NUDGE_ANIMATION_MS,
      moves,
      onComplete: null
    };
  }

  function processSimpleAdvanceAnimation(dt) {
    const animation = state.simpleAdvanceAnimation;
    if (!animation) {
      return;
    }

    animation.elapsedMs += dt * 1000;
    const ratio = Math.min(1, animation.elapsedMs / animation.durationMs);
    const easedRatio = 1 - Math.pow(1 - ratio, 3);

    for (const move of animation.moves) {
      const enemy = state.enemies.find((item) => item.id === move.enemyId);
      if (!enemy) {
        continue;
      }
      enemy.progress = move.from + (move.to - move.from) * easedRatio;
    }

    if (ratio >= 1) {
      state.simpleAdvanceAnimation = null;
      if (typeof animation.onComplete === "function") {
        animation.onComplete();
      }
    }
  }

  function recordAnswer(a, b, isCorrect) {
    if (!state.tableMastery[a]) {
      state.tableMastery[a] = { correct: 0, wrong: 0 };
    }

    const key = multiplicationKey(a, b);
    if (!state.multiplicationMastery[key]) {
      state.multiplicationMastery[key] = { correct: 0, wrong: 0 };
    }

    if (isCorrect) {
      state.tableMastery[a].correct += 1;
      state.multiplicationMastery[key].correct += 1;
    } else {
      state.tableMastery[a].wrong += 1;
      state.multiplicationMastery[key].wrong += 1;
    }

    saveProfile();

    if (!dom.tablesModal.classList.contains("hidden")) {
      renderTablesGrid();
    }
    if (!dom.statsModal.classList.contains("hidden")) {
      renderMasteryMatrix();
    }
  }

  function isInputLocked() {
    const hasBlockingSimpleAnimation =
      !!state.simpleAdvanceAnimation && state.simpleAdvanceAnimation.kind === "advance";
    return !state.started || state.paused || state.gameOver || hasBlockingSimpleAnimation;
  }

  function submitAnswer() {
    if (isInputLocked() || !state.question || state.inputBuffer.length === 0) {
      return;
    }

    const guess = Number.parseInt(state.inputBuffer, 10);
    const target = getFrontEnemy();

    if (isSimpleMode() && !target) {
      showFeedback("Aucun ennemi à viser pour le moment.", "");
      nextQuestion();
      return;
    }

    if (guess === state.question.answer) {
      recordAnswer(state.question.a, state.question.b, true);
      state.combo += 1;
      const tableBonus = getTableComplexityBonus(state.question.a);
      state.score += 10 + state.wave * 4 + state.combo * 2 + tableBonus;
      showFeedback(
        tableBonus > 0
          ? `Parfait. Tir magique lancé. Bonus table ${state.question.a}: +${tableBonus}`
          : "Parfait. Tir magique lancé.",
        "good"
      );

      if (target) {
        launchProjectile(target);
      } else {
        state.score += 5;
      }

      if (isSimpleMode()) {
        beginSimpleSuccessNudgeAnimation();
      }
    } else {
      recordAnswer(state.question.a, state.question.b, false);
      state.combo = 0;
      state.score = Math.max(0, state.score - 4);

      if (isSimpleMode()) {
        state.simpleMistakes += 1;
        const remaining = getSimpleErrorsRemaining();
        showFeedback(
          `Oups. ${state.question.a} x ${state.question.b} = ${state.question.answer}. ${remaining} erreurs restantes.`,
          "bad"
        );

        if (remaining <= 0) {
          beginSimpleAdvanceAnimation({
            moveToEnd: true,
            onComplete: () => {
              triggerScreenShake("heavy");
              triggerGameOver("4 erreurs : les ennemis entrent dans le château.");
            }
          });
        } else {
          beginSimpleAdvanceAnimation();
        }
      } else {
        showFeedback(
          `Oups. ${state.question.a} x ${state.question.b} = ${state.question.answer}`,
          "bad"
        );

        if (target) {
          target.enraged = true;
          target.speed *= 1.12;
        }
      }
    }

    updateHud();
    if (!state.gameOver) {
      nextQuestion();
    }
  }

  function handleKeyInput(key) {
    if (isInputLocked()) {
      return;
    }

    if (/^\d$/.test(key)) {
      if (state.inputBuffer.length < 3) {
        state.inputBuffer += key;
      }
    } else if (key === "back") {
      state.inputBuffer = state.inputBuffer.slice(0, -1);
    } else if (key === "clear") {
      state.inputBuffer = "";
    }

    updateHud();
  }

  function setupWave() {
    const enemyCount = getEnemyCountForWave();
    state.queuedSpawns = enemyCount;
    state.spawnCooldown = getSpawnIntervalForWave();
    state.betweenWaves = false;
    if (isSimpleMode()) {
      state.simpleMistakes = 0;
    }
    applyWorldTheme();
    updateTowerSkin();
    banner(`Niveau ${state.wave}`);

    if (isSimpleMode()) {
      for (let index = 0; index < enemyCount; index += 1) {
        createEnemy(-0.12 - index * 0.09);
      }
      state.queuedSpawns = 0;
      renderEnemies();
    }
  }

  function checkWaveEnd() {
    if (state.betweenWaves || state.gameOver) {
      return;
    }

    const done = state.queuedSpawns === 0 && state.enemies.length === 0;
    if (!done) {
      return;
    }

    state.betweenWaves = true;
    state.score += 40 + state.wave * 12;
    showFeedback("Vague nettoyée. Prépare-toi.", "good");
    updateHud();

    if (state.wave >= MAX_WAVES) {
      const localSessionId = state.sessionId;
      setTimeout(() => {
        if (state.gameOver || localSessionId !== state.sessionId) {
          return;
        }
        triggerVictory();
      }, 900);
      return;
    }

    const localSessionId = state.sessionId;
    setTimeout(() => {
      if (state.gameOver || localSessionId !== state.sessionId) {
        return;
      }

      state.wave += 1;
      updateHud();
      setupWave();
    }, 1700);
  }

  function loseLife() {
    if (isSimpleMode() || state.gameOver) {
      return;
    }

    state.lives -= 1;
    state.combo = 0;
    updateHud();

    if (state.lives <= 0) {
      triggerScreenShake("heavy");
      setCastleFire(true);
      triggerGameOver("Les ennemis ont brisé la porte du château.");
    } else {
      triggerScreenShake("small");
    }
  }

  function resetGame() {
    clearAllEnemies();
    setCastleFire(false);

    state.wave = 1;
    state.lives = 20;
    state.simpleMistakes = 0;
    state.score = 0;
    state.combo = 0;
    state.spawnCooldown = 0;
    state.enemyId = 0;
    state.question = null;
    state.inputBuffer = "";
    state.betweenWaves = false;
    state.gameOver = false;
    state.simpleAdvanceAnimation = null;
    state.shakeTimeoutId = null;
    state.scoreSubmitted = false;
    state.lastQuestionKey = "";
    state.lastFrame = 0;
    state.sessionId += 1;

    dom.gameOver.classList.add("hidden");
    if (dom.gameOverTitle) {
      dom.gameOverTitle.textContent = "Défaite";
    }
    dom.finalScoreText.textContent = "Score final: 0";
    dom.scoreSaveFeedback.textContent = "";
    dom.playerNameInput.disabled = false;
    dom.saveScoreBtn.disabled = false;
    dom.gameOverText.textContent = isSimpleMode()
      ? "4 erreurs et les ennemis rentrent dans le château."
      : "Les gobelins ont passé ta défense.";

    showFeedback(
      isSimpleMode()
        ? "Mode Simple: pas de timer, les ennemis avancent sur chaque erreur."
        : "Mode normal : réponse correcte = tir magique.",
      ""
    );

    updateHud();
    applyWorldTheme();
    nextQuestion();
    setupWave();
  }

  function refreshPauseState() {
    if (!state.started) {
      state.paused = false;
      return;
    }

    const tablesOpen = !dom.tablesModal.classList.contains("hidden");
    const statsOpen = !dom.statsModal.classList.contains("hidden");
    const pauseOpen = !dom.pauseModal.classList.contains("hidden");
    const debugOpen = !dom.debugModal.classList.contains("hidden");
    state.paused = tablesOpen || statsOpen || pauseOpen || debugOpen;
  }

  function openTablesModal() {
    if (!requestSettingsUnlock()) {
      return;
    }

    renderTablesGrid();
    updateVisualStyleButtons();
    dom.pauseModal.classList.add("hidden");
    dom.statsModal.classList.add("hidden");
    closeDebugModal();
    dom.tablesModal.classList.remove("hidden");
    refreshPauseState();
  }

  function closeTablesModal() {
    dom.tablesModal.classList.add("hidden");
    refreshPauseState();

    if (state.started && state.question && !state.selectedTables.includes(state.question.a)) {
      nextQuestion();
    }
  }

  function openStatsModal() {
    renderLeaderboard();
    renderMasteryMatrix();
    dom.pauseModal.classList.add("hidden");
    dom.tablesModal.classList.add("hidden");
    closeDebugModal();
    dom.statsModal.classList.remove("hidden");
    refreshPauseState();
  }

  function closeStatsModal() {
    dom.statsModal.classList.add("hidden");
    refreshPauseState();
  }

  function openPauseModal() {
    if (!state.started || state.gameOver) {
      return;
    }

    dom.tablesModal.classList.add("hidden");
    dom.statsModal.classList.add("hidden");
    closeDebugModal();
    dom.pauseModal.classList.remove("hidden");
    refreshPauseState();
  }

  function closePauseModal() {
    dom.pauseModal.classList.add("hidden");
    refreshPauseState();
  }

  function returnToTitleScreen() {
    clearAllEnemies();
    setCastleFire(false);

    state.started = false;
    state.paused = false;
    state.wave = 1;
    state.lives = 20;
    state.simpleMistakes = 0;
    state.score = 0;
    state.combo = 0;
    state.spawnCooldown = 0;
    state.enemyId = 0;
    state.question = null;
    state.inputBuffer = "";
    state.betweenWaves = false;
    state.gameOver = false;
    state.simpleAdvanceAnimation = null;
    state.lastQuestionKey = "";
    state.lastFrame = 0;
    state.sessionId += 1;

    dom.pauseModal.classList.add("hidden");
    dom.tablesModal.classList.add("hidden");
    dom.statsModal.classList.add("hidden");
    closeDebugModal();
    dom.gameOver.classList.add("hidden");
    if (dom.gameOverTitle) {
      dom.gameOverTitle.textContent = "Défaite";
    }
    dom.finalScoreText.textContent = "Score final: 0";
    dom.scoreSaveFeedback.textContent = "";
    dom.playerNameInput.disabled = false;
    dom.saveScoreBtn.disabled = false;
    dom.questionText.textContent = "6 x 7 = ?";
    dom.titleScreen.classList.remove("hidden");

    updateHud();
    applyWorldTheme();
    showFeedback("Choisis un mode puis lance la partie.", "");
  }

  function startGame() {
    if (state.started) {
      return;
    }

    state.started = true;
    state.paused = false;
    dom.pauseModal.classList.add("hidden");
    dom.tablesModal.classList.add("hidden");
    dom.statsModal.classList.add("hidden");
    closeDebugModal();
    dom.titleScreen.classList.add("hidden");
    resetGame();
  }

  function gameLoop(timestamp) {
    if (!state.lastFrame) {
      state.lastFrame = timestamp;
    }

    const dt = (timestamp - state.lastFrame) / 1000;
    state.lastFrame = timestamp;

    if (state.started && !state.paused && !state.gameOver) {
      if (!state.betweenWaves && !isSimpleMode() && state.queuedSpawns > 0) {
        state.spawnCooldown -= dt;
        if (state.spawnCooldown <= 0) {
          createEnemy();
          state.queuedSpawns -= 1;
          state.spawnCooldown = getSpawnIntervalForWave();
        }
      }

      if (!isSimpleMode()) {
        for (const enemy of [...state.enemies]) {
          if (enemy.spawnReveal < 1) {
            enemy.spawnReveal = Math.min(1, enemy.spawnReveal + dt / ENEMY_SPAWN_REVEAL_SECONDS);
          }
          enemy.progress += enemy.speed * dt;
          if (enemy.progress >= 1) {
            removeEnemy(enemy);
            loseLife();
          }
        }
      } else {
        for (const enemy of state.enemies) {
          if (enemy.spawnReveal < 1) {
            enemy.spawnReveal = Math.min(1, enemy.spawnReveal + dt / ENEMY_SPAWN_REVEAL_SECONDS);
          }
        }
        processSimpleAdvanceAnimation(dt);
      }

      renderEnemies();
      checkWaveEnd();
    }

    requestAnimationFrame(gameLoop);
  }

  function bindFastPress(element, handler) {
    if (!element) {
      return;
    }

    if (window.PointerEvent) {
      element.addEventListener("pointerdown", (event) => {
        if (event.pointerType === "mouse" && event.button !== 0) {
          return;
        }
        if (event.cancelable) {
          event.preventDefault();
        }
        handler(event);
      });
      return;
    }

    element.addEventListener(
      "touchstart",
      (event) => {
        if (event.cancelable) {
          event.preventDefault();
        }
        handler(event);
      },
      { passive: false }
    );
    element.addEventListener("click", handler);
  }

  function handleVirtualKeyPress(event) {
    const button = event.target.closest("button");
    if (!button) {
      return;
    }

    const key = button.dataset.key;
    if (!key) {
      return;
    }

    handleKeyInput(key);
  }

  function toggleDebugPanel() {
    if (dom.debugModal.classList.contains("hidden")) {
      openDebugModal();
    } else {
      closeDebugModal();
    }
  }

  bindFastPress(dom.keypad, handleVirtualKeyPress);
  bindFastPress(dom.fireBtn, submitAnswer);
  dom.restartBtn.addEventListener("click", resetGame);
  dom.saveScoreBtn.addEventListener("click", saveCurrentScore);
  dom.playerNameInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      saveCurrentScore();
    }
  });

  dom.modeSelect.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-mode]");
    if (!button) {
      return;
    }

    const mode = button.dataset.mode;
    if (mode && mode !== state.mode) {
      setMode(mode);
    }
  });

  dom.visualStyleSelect?.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-visual-style]");
    if (!button) {
      return;
    }
    setVisualStyle(button.dataset.visualStyle || VISUAL_STYLES.CASTLE);
  });

  dom.startBtn.addEventListener("click", startGame);
  dom.pauseBtn.addEventListener("click", openPauseModal);
  dom.openTablesBtn.addEventListener("click", openTablesModal);
  dom.openStatsBtn.addEventListener("click", openStatsModal);
  dom.openTablesInlineBtn.addEventListener("click", openTablesModal);
  dom.openStatsInlineBtn.addEventListener("click", openStatsModal);
  dom.openDebugInlineBtn?.addEventListener("click", openDebugModal);
  if (ENABLE_COMBO_DEBUG_GESTURE) {
    dom.comboHudItem?.classList.add("combo-debug");
    bindFastPress(dom.comboHudItem, toggleDebugPanel);
    bindFastPress(dom.comboValue, toggleDebugPanel);
  }
  dom.closeTablesBtn.addEventListener("click", closeTablesModal);
  dom.closeStatsBtn.addEventListener("click", closeStatsModal);
  dom.resumeBtn.addEventListener("click", closePauseModal);
  dom.backTitleBtn.addEventListener("click", returnToTitleScreen);
  dom.closeDebugBtn?.addEventListener("click", closeDebugModal);
  dom.debugResetBtn?.addEventListener("click", resetDebugStyleTuning);

  dom.debugWorldSelect?.addEventListener("change", (event) => {
    const nextWorld = event.target.value;
    if (nextWorld === "auto" || WORLD_THEMES.some((theme) => theme.id === nextWorld)) {
      state.debugTuning.worldOverride = nextWorld;
      renderDebugControls();
      applyDebugTuningToView();
      saveDebugTuning();
    }
  });

  dom.debugBgOffset?.addEventListener("input", (event) =>
    updateDebugControl("bgOffsetY", event.target.value)
  );
  dom.debugEnemyPathOffset?.addEventListener("input", (event) =>
    updateDebugControl("enemyPathOffsetY", event.target.value)
  );
  dom.debugTowerScale?.addEventListener("input", (event) =>
    updateDebugControl("towerScale", event.target.value)
  );
  dom.debugTowerOffset?.addEventListener("input", (event) =>
    updateDebugControl("towerOffsetY", event.target.value)
  );
  dom.debugCastleScale?.addEventListener("input", (event) =>
    updateDebugControl("castleScale", event.target.value)
  );
  dom.debugCastleOffset?.addEventListener("input", (event) =>
    updateDebugControl("castleOffsetY", event.target.value)
  );

  dom.tablesGrid.addEventListener("change", (event) => {
    const input = event.target.closest("input[data-table-checkbox]");
    if (!input) {
      return;
    }

    const table = Number.parseInt(input.dataset.tableCheckbox, 10);
    if (!Number.isInteger(table) || table < 1 || table > 12) {
      return;
    }

    if (input.checked) {
      if (!state.selectedTables.includes(table)) {
        state.selectedTables.push(table);
      }
    } else {
      if (state.selectedTables.length <= 1) {
        input.checked = true;
        showFeedback("Garde au moins une table active.", "bad");
        return;
      }

      state.selectedTables = state.selectedTables.filter((item) => item !== table);
    }

    state.selectedTables.sort((a, b) => a - b);
    saveProfile();
    renderTablesGrid();

    if (state.started) {
      nextQuestion();
    }
  });

  dom.resetMasteryBtn.addEventListener("click", () => {
    state.tableMastery = createEmptyMastery();
    state.multiplicationMastery = createEmptyMultiplicationMastery();
    saveProfile();
    renderTablesGrid();
    renderMasteryMatrix();
    showFeedback("Progression des tables réinitialisée.", "");
  });

  window.addEventListener("keydown", (event) => {
    if (event.target === dom.playerNameInput) {
      return;
    }

    if (event.key === "Escape" && !dom.statsModal.classList.contains("hidden")) {
      closeStatsModal();
      return;
    }

    if (event.key === "Escape" && !dom.pauseModal.classList.contains("hidden")) {
      closePauseModal();
      return;
    }

    if (event.key === "Escape" && !dom.debugModal.classList.contains("hidden")) {
      closeDebugModal();
      return;
    }

    if (event.key === "Escape" && !dom.tablesModal.classList.contains("hidden")) {
      closeTablesModal();
      return;
    }

    if ((event.key === "p" || event.key === "P") && state.started && !state.gameOver) {
      if (dom.pauseModal.classList.contains("hidden")) {
        openPauseModal();
      } else {
        closePauseModal();
      }
      return;
    }

    if (/^\d$/.test(event.key)) {
      handleKeyInput(event.key);
    } else if (event.key === "Backspace") {
      handleKeyInput("back");
      event.preventDefault();
    } else if (event.key === "Delete") {
      handleKeyInput("clear");
      event.preventDefault();
    } else if (event.key === "Enter") {
      submitAnswer();
    }
  });

  loadProfile();
  loadDebugTuning();
  loadLeaderboard();
  applyVisualStyle();
  renderDebugControls();
  applyDebugTuningToView();
  updateModeButtons();
  updateVisualStyleButtons();
  updateHud();
  renderTablesGrid();
  renderLeaderboard();
  renderMasteryMatrix();
  applyWorldTheme();
  showFeedback("Choisis un mode puis lance la partie.", "");
  requestAnimationFrame(gameLoop);
})();
