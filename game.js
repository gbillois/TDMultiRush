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
    bossDragonImg: document.getElementById("boss-dragon-img"),
    bossPanel: document.getElementById("boss-panel"),
    bossProgressText: document.getElementById("boss-progress-text"),
    bossFireFill: document.getElementById("boss-fire-fill"),
    bossTimerText: document.getElementById("boss-timer-text"),
    bossRainLayer: document.getElementById("boss-rain-layer"),
    bossVictoryBanner: document.getElementById("boss-victory-banner"),
    bossDefeatOverlay: document.getElementById("boss-defeat-overlay"),
    bossDefeatGoBtn: document.getElementById("boss-defeat-go-btn"),
    waveValue: document.getElementById("wave-value"),
    livesLabel: document.getElementById("lives-label"),
    livesValue: document.getElementById("lives-value"),
    scoreValue: document.getElementById("score-value"),
    comboValue: document.getElementById("combo-value"),
    coinsValue: document.getElementById("coins-value"),
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
    openShopBtn: document.getElementById("open-shop-btn"),
    openTablesBtn: document.getElementById("open-tables-btn"),
    openStatsBtn: document.getElementById("open-stats-btn"),
    openShopInlineBtn: document.getElementById("open-shop-inline-btn"),
    openTablesInlineBtn: document.getElementById("open-tables-inline-btn"),
    openStatsInlineBtn: document.getElementById("open-stats-inline-btn"),
    openDebugInlineBtn: document.getElementById("open-debug-inline-btn"),
    tablesModal: document.getElementById("tables-modal"),
    statsModal: document.getElementById("stats-modal"),
    shopModal: document.getElementById("shop-modal"),
    pauseModal: document.getElementById("pause-modal"),
    modeConfirmModal: document.getElementById("mode-confirm-modal"),
    modeConfirmText: document.getElementById("mode-confirm-text"),
    modeConfirmCancelBtn: document.getElementById("mode-confirm-cancel-btn"),
    modeConfirmAcceptBtn: document.getElementById("mode-confirm-accept-btn"),
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
    operationSelect: document.getElementById("operation-select"),
    operationButtons: Array.from(document.querySelectorAll("[data-operation]")),
    tablesGrid: document.getElementById("tables-grid"),
    masteryMatrix: document.getElementById("mastery-matrix"),
    closeTablesBtn: document.getElementById("close-tables-btn"),
    closeStatsBtn: document.getElementById("close-stats-btn"),
    closeShopBtn: document.getElementById("close-shop-btn"),
    shopCoinsValue: document.getElementById("shop-coins-value"),
    shopStyleNote: document.getElementById("shop-style-note"),
    shopCategorySelect: document.getElementById("shop-category-select"),
    shopGrid: document.getElementById("shop-grid"),
    resumeBtn: document.getElementById("resume-btn"),
    backTitleBtn: document.getElementById("back-title-btn"),
    pwaUpdateBtn: document.getElementById("pwa-update-btn"),
    resetMasteryBtn: document.getElementById("reset-mastery-btn"),
    audioSfxLabel: document.getElementById("audio-sfx-label"),
    audioSfxToggleBtn: document.getElementById("audio-sfx-toggle-btn"),
    audioVolumeTitle: document.getElementById("audio-volume-title"),
    audioSfxVolumeLabel: document.getElementById("audio-sfx-volume-label"),
    audioMusicVolumeLabel: document.getElementById("audio-music-volume-label"),
    audioSfxVolumeSlider: document.getElementById("audio-sfx-volume"),
    audioMusicVolumeSlider: document.getElementById("audio-music-volume"),
    audioSfxVolumeValue: document.getElementById("audio-sfx-volume-value"),
    audioMusicVolumeValue: document.getElementById("audio-music-volume-value")
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
  const LOCALES = {
    FR: "fr",
    EN: "en"
  };
  const OPERATIONS = {
    MULTIPLICATION: "multiplication",
    ADDITION: "addition"
  };
  const CASTLE_ASSET_DIR = "assets/themes/castle";
  const FAIRY_ASSET_DIR = "assets/themes/fairy";
  const BASIC_ASSET_DIR = "assets/themes/basic";
  const UI_BONUSES_DIR = "assets/ui/bonuses";
  const AUDIO_SFX_DIR = "assets/audio/sfx";
  const AUDIO_MUSIC_DIR = "assets/audio/music";

  const STORAGE_KEY = "multipliRush.profile.v1";
  const LEADERBOARD_KEY = "multipliRush.leaderboard.v1";
  const LAST_PLAYER_KEY = "multipliRush.lastPlayerName.v1";
  const DEBUG_TUNING_KEY = "multipliRush.debugTuning.v1";
  const MASTERY_TARGET = 20;
  const LEADERBOARD_MAX_ENTRIES = 10;
  const ALL_TABLES = Array.from({ length: 12 }, (_, idx) => idx + 1);
  const DEFAULT_SELECTED_TABLES = ALL_TABLES.filter(
    (table) => ![1, 2, 10, 11, 12].includes(table)
  );
  const MAX_MULTIPLIER_VALUE = 10;
  const SIMPLE_MAX_MISTAKES = 4;
  const SIMPLE_STEP_ADVANCE = 0.15;
  const SIMPLE_ADVANCE_ANIMATION_MS = 560;
  const SIMPLE_SUCCESS_NUDGE_PIXELS = 12;
  const SIMPLE_SUCCESS_NUDGE_ANIMATION_MS = 220;
  const ENEMY_SPAWN_REVEAL_SECONDS = 0.3;
  const BOSS_REQUIRED_STREAK = 5;
  const BOSS_TIME_LIMIT_SECONDS = 5;
  const BOSS_VICTORY_CELEBRATION_MS = 6000;
  const BOSS_SUCCESS_SCORE_BASE = 120;
  const BOSS_SUCCESS_TIME_MULTIPLIER = 26;
  const BOSS_BLOCKED_TABLES = new Set([1, 2, 10]);
  const BOSS_ALLOWED_MULTIPLIERS = [6, 7, 8, 9];
  const WAVES_PER_WORLD = 2;
  const WORLD_THEMES = [
    { id: "forest", labelFr: "Forêt", labelEn: "Forest" },
    { id: "snow", labelFr: "Neige", labelEn: "Snow" },
    { id: "mountains", labelFr: "Montagnes", labelEn: "Mountains" },
    { id: "desert", labelFr: "Désert", labelEn: "Desert" },
    { id: "desolation", labelFr: "Désolation", labelEn: "Wasteland" }
  ];
  const MAX_WAVES = WORLD_THEMES.length * WAVES_PER_WORLD;
  const SHOP_MAX_UNLOCK_WAVE = 10;
  const BOSS_RETURN_WAVE = MAX_WAVES;
  const TABLE_COMPLEXITY_BONUS = {
    6: 4,
    7: 6,
    8: 8,
    9: 10
  };
  const TARGET_SOLVE_TIME_SECONDS = 0.75;
  const DIFFICULTY_SAFETY_MARGIN_SECONDS = 1.2;
  const BONUS_CHEST_SRC = `${UI_BONUSES_DIR}/coffre-sprite.png`;
  const BONUS_CHEST_SPAWN_CHANCE = 1 / 6;
  const BONUS_HERO_SPAWN_CHANCE = 1 / 6;
  const BONUS_CHEST_MIN_SHOTS = 3;
  const BONUS_CHEST_CLICK_WINDOW_MS = 5000;
  const BONUS_CHEST_REWARD_MIN = 5;
  const BONUS_CHEST_REWARD_MAX = 30;
  const BONUS_HERO_REWARD_COINS = 10;
  const BONUS_HERO_NORMAL_LIFE_GAIN = 10;
  const BONUS_HERO_CASTLE_SRC = `${CASTLE_ASSET_DIR}/perso-chevalier-rouge.png`;
  const BONUS_HERO_FAIRY_SRC = `${CASTLE_ASSET_DIR}/perso-princesse-verte.png`;
  const BONUS_CHEST_SIZE_SCALE = 0.4;
  const BONUS_HERO_SIZE_MULTIPLIER = 2;
  const BONUS_CHEST_FADE_MS = 260;
  const BONUS_CHEST_Y_OFFSET_PX = 30;
  const BONUS_HERO_Y_ADJUST_PX = -50;
  const ENABLE_COMBO_DEBUG_GESTURE = false;
  const SFX_ASSETS = {
    shot: `${AUDIO_SFX_DIR}/shot.mp3`,
    impact: `${AUDIO_SFX_DIR}/impact.mp3`,
    enterDoor: `${AUDIO_SFX_DIR}/enterdoor.mp3`,
    enemyForest1: `${AUDIO_SFX_DIR}/ennemi1.mp3`,
    enemyForest2: `${AUDIO_SFX_DIR}/ennemi2.mp3`,
    enemyForest3: `${AUDIO_SFX_DIR}/ennemi3.mp3`,
    enemyForest4: `${AUDIO_SFX_DIR}/ennemi4.mp3`
  };
  const SFX_PLAYBACK = {
    // Measured from files (2ms RMS windows): audible transient starts around 160ms.
    shot: { startAtSec: 0.16, stopAtSec: 1.02, volume: 0.66 },
    impact: { startAtSec: 0, stopAtSec: 0.74, volume: 0.72 },
    enterDoor: { startAtSec: 0, stopAtSec: 0.92, volume: 0.7 },
    enemyForest1: { volume: 0.78 },
    enemyForest2: { volume: 0.78 },
    enemyForest3: { volume: 0.78 },
    enemyForest4: { volume: 0.78 }
  };
  const MUSIC_ASSETS = {
    castleLevelOne: `${AUDIO_MUSIC_DIR}/castle-01.ogg`
  };
  const MUSIC_PLAYBACK = {
    castleLevelOne: { volume: 0.44, loop: true }
  };
  const AUDIO_SFX_VOLUME_DEFAULT = 0.6;
  const AUDIO_MUSIC_VOLUME_DEFAULT = 0;
  const AUDIO_MUSIC_VOLUME_LEGACY_DEFAULT = 0.3;
  const ENEMY_AMBIENT_INTERVAL_MIN_MS = 1000;
  const ENEMY_AMBIENT_INTERVAL_MAX_MS = 3000;
  const FOREST_ENEMY_AMBIENT_SFX_KEYS = [
    "enemyForest1",
    "enemyForest2",
    "enemyForest3",
    "enemyForest4"
  ];
  const PLATFORM_UPSHIFT_NARROW_MAX_WIDTH = 430;
  const PLATFORM_UPSHIFT_Y_PX = 50;
  const ENEMY_EXTRA_SHIFT_Y = 20;
  const WORLD_BG_SOURCE_WIDTH = 1536;
  const WORLD_BG_SOURCE_HEIGHT = 2752;
  const WORLD_SPACE_ANCHORS = {
    // Calibrated from the current desktop (Mac) layout so other screens match it.
    enemyPathY: 2008,
    towerBottomY: 2080,
    castleBottomY: 2030,
    projectileOriginX: 248,
    projectileOriginY: 1815
  };

  const SHOP_CATEGORIES = {
    TOWER: "tower",
    CASTLE: "castle",
    PROJECTILE: "projectile"
  };
  const SHOP_SUPPORTED_STYLES = new Set([VISUAL_STYLES.CASTLE, VISUAL_STYLES.FAIRY]);
  const SHOP_DEFAULT_CATEGORY = SHOP_CATEGORIES.TOWER;
  const STYLE_ASSETS = {
    [VISUAL_STYLES.CASTLE]: {
      towerSkins: {
        base: `${CASTLE_ASSET_DIR}/tower-arcane.png`,
        ember: `${CASTLE_ASSET_DIR}/shop/towers/tower-02.png`,
        rune: `${CASTLE_ASSET_DIR}/shop/towers/tower-03.png`,
        obsidian: `${CASTLE_ASSET_DIR}/shop/towers/tower-04.png`,
        royal: `${CASTLE_ASSET_DIR}/shop/towers/tower-05.png`,
        mythic: `${CASTLE_ASSET_DIR}/shop/towers/tower-07.png`
      },
      castleDoors: {
        base: `${CASTLE_ASSET_DIR}/castle-right.png`,
        bastion: `${CASTLE_ASSET_DIR}/shop/castles/castle-02.png`,
        citadel: `${CASTLE_ASSET_DIR}/shop/castles/castle-03.png`,
        ironkeep: `${CASTLE_ASSET_DIR}/shop/castles/castle-04.png`,
        dawnfort: `${CASTLE_ASSET_DIR}/shop/castles/castle-05.png`
      },
      castleFire: `${CASTLE_ASSET_DIR}/fire-castle.png`,
      bossDragon: `${CASTLE_ASSET_DIR}/fiercedragon.png`,
      projectiles: {
        base: `${CASTLE_ASSET_DIR}/projectile-arcane.png`,
        spark: `${CASTLE_ASSET_DIR}/shop/projectiles/projectile-02.png`,
        flare: `${CASTLE_ASSET_DIR}/shop/projectiles/projectile-03.png`,
        comet: `${CASTLE_ASSET_DIR}/shop/projectiles/projectile-04.png`,
        prismfire: `${CASTLE_ASSET_DIR}/shop/projectiles/projectile-07.png`
      },
      enemySrcs: {
        goblin: `${CASTLE_ASSET_DIR}/enemy-goblin-green.png`,
        scout: `${CASTLE_ASSET_DIR}/enemy-scout-pink.png`,
        raider: `${CASTLE_ASSET_DIR}/enemy-raider-yellow.png`,
        imp: `${CASTLE_ASSET_DIR}/enemy-imp-purple.png`,
        orc: `${CASTLE_ASSET_DIR}/enemy-orc-red.png`,
        frost: `${CASTLE_ASSET_DIR}/enemy-frost-blue.png`,
        lizard: `${CASTLE_ASSET_DIR}/enemy-lizard-teal.png`,
        knight: `${CASTLE_ASSET_DIR}/enemy-knight-slate.png`,
        ogre: `${CASTLE_ASSET_DIR}/enemy-ogre-brown.png`,
        shaman: `${CASTLE_ASSET_DIR}/enemy-shaman-cyan.png`,
        berserker: `${CASTLE_ASSET_DIR}/enemy-berserker-orange.png`,
        warlock: `${CASTLE_ASSET_DIR}/enemy-warlock-violet.png`,
        shadow: `${CASTLE_ASSET_DIR}/enemy-shadow-black.png`,
        guardian: `${CASTLE_ASSET_DIR}/enemy-guardian-gold.png`
      }
    },
    [VISUAL_STYLES.BASIC]: {
      towerSkins: {
        base: `${BASIC_ASSET_DIR}/towers/tower-arcane.svg`
      },
      castleDoors: {
        base: `${BASIC_ASSET_DIR}/castles/castle-right.svg`
      },
      castleFire: `${BASIC_ASSET_DIR}/castles/fire-castle.svg`,
      bossDragon: `${CASTLE_ASSET_DIR}/fiercedragon.png`,
      projectiles: {
        base: `${BASIC_ASSET_DIR}/projectiles/projectile-arcane.svg`
      },
      enemySrcs: {
        goblin: `${BASIC_ASSET_DIR}/enemies/enemy-goblin-green.svg`,
        scout: `${BASIC_ASSET_DIR}/enemies/enemy-scout-pink.svg`,
        raider: `${BASIC_ASSET_DIR}/enemies/enemy-raider-yellow.svg`,
        imp: `${BASIC_ASSET_DIR}/enemies/enemy-imp-purple.svg`,
        orc: `${BASIC_ASSET_DIR}/enemies/enemy-orc-red.svg`,
        frost: `${BASIC_ASSET_DIR}/enemies/enemy-frost-blue.svg`,
        lizard: `${BASIC_ASSET_DIR}/enemies/enemy-lizard-teal.svg`,
        knight: `${BASIC_ASSET_DIR}/enemies/enemy-knight-slate.svg`,
        ogre: `${BASIC_ASSET_DIR}/enemies/enemy-ogre-brown.svg`,
        shaman: `${BASIC_ASSET_DIR}/enemies/enemy-shaman-cyan.svg`,
        berserker: `${BASIC_ASSET_DIR}/enemies/enemy-berserker-orange.svg`,
        warlock: `${BASIC_ASSET_DIR}/enemies/enemy-warlock-violet.svg`,
        shadow: `${BASIC_ASSET_DIR}/enemies/enemy-shadow-black.svg`,
        guardian: `${BASIC_ASSET_DIR}/enemies/enemy-guardian-gold.svg`
      }
    },
    [VISUAL_STYLES.FAIRY]: {
      towerSkins: {
        base: `${FAIRY_ASSET_DIR}/tower-arcane.png`,
        blossom: `${FAIRY_ASSET_DIR}/shop/towers/tower-02.png`,
        moon: `${FAIRY_ASSET_DIR}/shop/towers/tower-03.png`,
        stardust: `${FAIRY_ASSET_DIR}/shop/towers/tower-04.png`,
        eclipse: `${FAIRY_ASSET_DIR}/shop/towers/tower-05.png`
      },
      castleDoors: {
        base: `${FAIRY_ASSET_DIR}/castle-right.png`,
        petalspire: `${FAIRY_ASSET_DIR}/shop/castles/castle-02.png`,
        moonhall: `${FAIRY_ASSET_DIR}/shop/castles/castle-03.png`,
        wildroot: `${FAIRY_ASSET_DIR}/shop/castles/castle-04.png`,
        starcourt: `${FAIRY_ASSET_DIR}/shop/castles/castle-05.png`
      },
      castleFire: `${FAIRY_ASSET_DIR}/fire-castle.png`,
      bossDragon: `${FAIRY_ASSET_DIR}/fairydragon.png`,
      projectiles: {
        base: `${FAIRY_ASSET_DIR}/projectile-arcane.png`,
        pollen: `${FAIRY_ASSET_DIR}/shop/projectiles/projectile-02.png`,
        prism: `${FAIRY_ASSET_DIR}/shop/projectiles/projectile-03.png`,
        spiral: `${FAIRY_ASSET_DIR}/shop/projectiles/projectile-04.png`,
        aurora: `${FAIRY_ASSET_DIR}/shop/projectiles/projectile-05.png`
      },
      enemySrcs: {
        goblin: `${FAIRY_ASSET_DIR}/enemy-goblin-green.png`,
        scout: `${FAIRY_ASSET_DIR}/enemy-scout-pink.png`,
        raider: `${FAIRY_ASSET_DIR}/enemy-raider-yellow.png`,
        imp: `${FAIRY_ASSET_DIR}/enemy-imp-purple.png`,
        orc: `${FAIRY_ASSET_DIR}/enemy-orc-red.png`,
        frost: `${FAIRY_ASSET_DIR}/enemy-frost-blue.png`,
        lizard: `${FAIRY_ASSET_DIR}/enemy-lizard-teal.png`,
        knight: `${FAIRY_ASSET_DIR}/enemy-knight-slate.png`,
        ogre: `${FAIRY_ASSET_DIR}/enemy-ogre-brown.png`,
        shaman: `${FAIRY_ASSET_DIR}/enemy-shaman-cyan.png`,
        berserker: `${FAIRY_ASSET_DIR}/enemy-berserker-orange.png`,
        warlock: `${FAIRY_ASSET_DIR}/enemy-warlock-violet.png`,
        shadow: `${FAIRY_ASSET_DIR}/enemy-shadow-black.png`,
        guardian: `${FAIRY_ASSET_DIR}/enemy-guardian-gold.png`
      }
    }
  };

  const SHOP_ITEM_CATALOG = {
    [VISUAL_STYLES.CASTLE]: {
      [SHOP_CATEGORIES.TOWER]: [
        { key: "base", name: "Tour de base", nameEn: "Base Tower", cost: 0, unlockWave: 1 },
        { key: "ember", name: "Castelet", nameEn: "Small Keep", cost: 100, unlockWave: 2 },
        { key: "rune", name: "Orbe destructrice", nameEn: "Destructive Orb", cost: 200, unlockWave: 4 },
        { key: "obsidian", name: "Le nid", nameEn: "The Nest", cost: 400, unlockWave: 7 },
        { key: "royal", name: "La forteresse", nameEn: "The Fortress", cost: 800, unlockWave: 10 }
      ],
      [SHOP_CATEGORIES.CASTLE]: [
        { key: "base", name: "Château de base", nameEn: "Base Castle", cost: 0, unlockWave: 1 },
        { key: "bastion", name: "Le bastion", nameEn: "The Bastion", cost: 100, unlockWave: 3 },
        { key: "citadel", name: "La citadelle", nameEn: "The Citadel", cost: 200, unlockWave: 5 },
        { key: "ironkeep", name: "La tour de guet", nameEn: "The Watchtower", cost: 400, unlockWave: 8 },
        { key: "dawnfort", name: "La forteresse", nameEn: "The Fortress", cost: 800, unlockWave: 10 }
      ],
      [SHOP_CATEGORIES.PROJECTILE]: [
        { key: "base", name: "Tir de base", nameEn: "Base Shot", cost: 0, unlockWave: 1 },
        { key: "spark", name: "Glue verte", nameEn: "Green Glue", cost: 100, unlockWave: 2 },
        { key: "flare", name: "Boule de glace", nameEn: "Ice Orb", cost: 200, unlockWave: 4 },
        { key: "comet", name: "Flèche glacée", nameEn: "Frozen Arrow", cost: 400, unlockWave: 7 },
        { key: "prismfire", name: "Lave foudroyante", nameEn: "Thunder Lava", cost: 800, unlockWave: 10 }
      ]
    },
    [VISUAL_STYLES.FAIRY]: {
      [SHOP_CATEGORIES.TOWER]: [
        { key: "base", name: "Tour féerique de base", nameEn: "Base Fairy Tower", cost: 0, unlockWave: 1 },
        { key: "blossom", name: "Tour boréale", nameEn: "Boreal Tower", cost: 100, unlockWave: 2 },
        { key: "moon", name: "Tour émeraude", nameEn: "Emerald Tower", cost: 200, unlockWave: 4 },
        { key: "stardust", name: "Tour solaire", nameEn: "Solar Tower", cost: 400, unlockWave: 7 },
        { key: "eclipse", name: "Tour saphir", nameEn: "Sapphire Tower", cost: 800, unlockWave: 10 }
      ],
      [SHOP_CATEGORIES.CASTLE]: [
        { key: "base", name: "Château féerique de base", nameEn: "Base Fairy Castle", cost: 0, unlockWave: 1 },
        { key: "petalspire", name: "Sanctuaire émeraude", nameEn: "Emerald Sanctuary", cost: 100, unlockWave: 3 },
        { key: "moonhall", name: "Citadelle azurée", nameEn: "Azure Citadel", cost: 200, unlockWave: 5 },
        { key: "wildroot", name: "Palais améthyste", nameEn: "Amethyst Palace", cost: 400, unlockWave: 8 },
        { key: "starcourt", name: "Bastion lotus", nameEn: "Lotus Bastion", cost: 800, unlockWave: 10 }
      ],
      [SHOP_CATEGORIES.PROJECTILE]: [
        { key: "base", name: "Tir féerique de base", nameEn: "Base Fairy Shot", cost: 0, unlockWave: 1 },
        { key: "pollen", name: "Éclair améthyste", nameEn: "Amethyst Bolt", cost: 100, unlockWave: 2 },
        { key: "prism", name: "Éclair émeraude", nameEn: "Emerald Bolt", cost: 200, unlockWave: 4 },
        { key: "spiral", name: "Flèche solaire", nameEn: "Solar Arrow", cost: 400, unlockWave: 7 },
        { key: "aurora", name: "Lance saphir", nameEn: "Sapphire Lance", cost: 800, unlockWave: 10 }
      ]
    }
  };

  const CASTLE_SKIN_VISUAL_SCALE = {
    [VISUAL_STYLES.CASTLE]: {
      base: 1,
      bastion: 1.24,
      citadel: 1.27,
      ironkeep: 1.29,
      dawnfort: 1.33
    },
    [VISUAL_STYLES.FAIRY]: {
      base: 1,
      petalspire: 1.24,
      moonhall: 1.27,
      wildroot: 1.29,
      starcourt: 1.33
    }
  };
  const TOWER_SKIN_VISUAL_SCALE = {
    [VISUAL_STYLES.CASTLE]: {
      base: 1,
      ember: 1.03,
      rune: 1.12,
      obsidian: 1.35,
      royal: 1.39,
      mythic: 1
    },
    [VISUAL_STYLES.FAIRY]: {
      base: 1,
      blossom: 1.78,
      moon: 1.82,
      stardust: 1.77,
      eclipse: 1.74
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
    towerOffsetY: -28,
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

  function detectLocale() {
    if (typeof navigator === "undefined" || typeof navigator.language !== "string") {
      return LOCALES.FR;
    }
    return navigator.language.toLowerCase().startsWith("fr") ? LOCALES.FR : LOCALES.EN;
  }

  function applyHardcodedStyleTuning() {
    state.debugTuning.byStyle[VISUAL_STYLES.CASTLE] = { ...HARDCODED_CASTLE_TUNING };
    state.debugTuning.byStyle[VISUAL_STYLES.FAIRY] = { ...HARDCODED_FAIRY_TUNING };
  }

  const state = {
    started: false,
    paused: false,
    mode: MODES.NORMAL,
    operation: OPERATIONS.MULTIPLICATION,
    progressByOperation: createDefaultProgressByOperation(),
    visualStyle: VISUAL_STYLES.CASTLE,
    shopCategory: SHOP_DEFAULT_CATEGORY,
    coins: 0,
    bestWaveReached: 1,
    shopUnlocks: createDefaultShopUnlocks(),
    equippedSkins: createDefaultEquippedSkins(),
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
    pendingChampion: false,
    lastPlayerName: "",
    lastQuestionKey: "",
    lastFrame: 0,
    sessionId: 0,
    debugTuning: createDefaultDebugTuning(),
    bossBattle: {
      active: false,
      streak: 0,
      requiredStreak: BOSS_REQUIRED_STREAK,
      timeLimit: BOSS_TIME_LIMIT_SECONDS,
      timeRemaining: BOSS_TIME_LIMIT_SECONDS,
      usedKeys: new Set()
    },
    celebration: {
      active: false,
      rainIntervalId: null,
      stopTimeoutId: null,
      finishTimeoutId: null
    },
    bossDefeatOverlayActive: false,
    bonusChest: {
      active: false,
      el: null,
      type: null,
      timeoutId: null,
      spawnPlanned: false,
      plannedType: null,
      spawnedThisWave: false,
      shotsThisWave: 0,
      forceEveryWave: false,
      forceHeroEveryWave: false
    },
    pendingModeChange: null,
    audio: {
      sfxEnabled: false,
      sfxVolume: AUDIO_SFX_VOLUME_DEFAULT,
      musicVolume: AUDIO_MUSIC_VOLUME_DEFAULT
    },
    enemyAmbient: {
      timeoutId: null
    }
  };
  state.locale = detectLocale();
  const sfxLibrary = {};
  const musicLibrary = {};
  const musicSession = {
    activeKey: null,
    element: null
  };

  function ensureOperationProgress(operation) {
    if (!state.progressByOperation[operation]) {
      state.progressByOperation[operation] = createDefaultOperationProgress();
    }
    return state.progressByOperation[operation];
  }

  function getActiveOperationProgress() {
    return ensureOperationProgress(state.operation);
  }

  Object.defineProperties(state, {
    selectedTables: {
      get() {
        return getActiveOperationProgress().selectedTables;
      },
      set(value) {
        getActiveOperationProgress().selectedTables = value;
      }
    },
    tableMastery: {
      get() {
        return getActiveOperationProgress().tableMastery;
      },
      set(value) {
        getActiveOperationProgress().tableMastery = value;
      }
    },
    multiplicationMastery: {
      get() {
        return getActiveOperationProgress().multiplicationMastery;
      },
      set(value) {
        getActiveOperationProgress().multiplicationMastery = value;
      }
    }
  });

  function l(fr, en) {
    return state.locale === LOCALES.FR ? fr : en;
  }

  function preloadSfx() {
    for (const [key, src] of Object.entries(SFX_ASSETS)) {
      if (sfxLibrary[key]) {
        continue;
      }
      const audio = new Audio(src);
      audio.preload = "auto";
      audio.load();
      sfxLibrary[key] = audio;
    }
  }

  function preloadMusic() {
    for (const [key, src] of Object.entries(MUSIC_ASSETS)) {
      if (musicLibrary[key]) {
        continue;
      }
      const audio = new Audio(src);
      audio.preload = "auto";
      const config = MUSIC_PLAYBACK[key] || {};
      audio.loop = !!config.loop;
      audio.volume = getMusicVolume() * (Number.isFinite(config.volume) ? config.volume : 0.5);
      audio.load();
      musicLibrary[key] = audio;
    }
  }

  function getSfxVolume() {
    const configured = Number(state.audio?.sfxVolume);
    if (!Number.isFinite(configured)) {
      return AUDIO_SFX_VOLUME_DEFAULT;
    }
    return clamp(configured, 0, 1);
  }

  function getMusicVolume() {
    const configured = Number(state.audio?.musicVolume);
    if (!Number.isFinite(configured)) {
      return AUDIO_MUSIC_VOLUME_DEFAULT;
    }
    return clamp(configured, 0, 1);
  }

  function formatVolumePercent(value) {
    return `${Math.round(clamp(value, 0, 1) * 100)}%`;
  }

  function updateAudioVolumeControls() {
    const channels = [
      { value: getSfxVolume(), slider: dom.audioSfxVolumeSlider, label: dom.audioSfxVolumeValue },
      { value: getMusicVolume(), slider: dom.audioMusicVolumeSlider, label: dom.audioMusicVolumeValue }
    ];
    for (const channel of channels) {
      const percent = Math.round(channel.value * 100);
      if (channel.slider) {
        channel.slider.value = String(percent);
      }
      if (channel.label) {
        channel.label.textContent = formatVolumePercent(channel.value);
      }
    }
  }

  function updateAudioSettingsButtons() {
    if (dom.audioSfxToggleBtn) {
      dom.audioSfxToggleBtn.classList.toggle("active", !!state.audio.sfxEnabled);
      dom.audioSfxToggleBtn.textContent = state.audio.sfxEnabled
        ? l("Activés", "On")
        : l("Coupés", "Off");
    }
    updateAudioVolumeControls();
  }

  function playSfx(key) {
    if (!state.audio.sfxEnabled) {
      return;
    }

    const src = SFX_ASSETS[key];
    if (!src) {
      return;
    }

    const config = SFX_PLAYBACK[key] || {};
    const baseAudio = sfxLibrary[key] || new Audio(src);
    sfxLibrary[key] = baseAudio;

    const instance = baseAudio.cloneNode(true);
    const sfxGain = Number.isFinite(config.volume) ? config.volume : 1;
    instance.volume = clamp(getSfxVolume() * sfxGain, 0, 1);
    instance.preload = "auto";

    const requestedStart = Math.max(0, Number(config.startAtSec) || 0);
    const requestedStop = Number.isFinite(config.stopAtSec)
      ? Math.max(requestedStart, config.stopAtSec)
      : null;

    const seekToStart = () => {
      if (requestedStart <= 0) {
        return;
      }
      try {
        const hasDuration = Number.isFinite(instance.duration) && instance.duration > 0;
        const safeStart = hasDuration
          ? Math.min(requestedStart, Math.max(0, instance.duration - 0.02))
          : requestedStart;
        instance.currentTime = safeStart;
      } catch (_) {
        // Ignore seek errors and keep default start.
      }
    };

    if (instance.readyState >= HTMLMediaElement.HAVE_METADATA) {
      seekToStart();
    } else {
      instance.addEventListener("loadedmetadata", seekToStart, { once: true });
    }

    const playPromise = instance.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {});
    }

    if (requestedStop !== null) {
      const maxPlayMs = Math.max(16, Math.round((requestedStop - requestedStart) * 1000));
      setTimeout(() => {
        instance.pause();
      }, maxPlayMs);
    }
  }

  function getDesiredMusicTrackKey() {
    if (!state.started || state.gameOver) {
      return null;
    }
    const world = getCurrentWorldTheme();
    if (!world || world.id !== "forest") {
      return null;
    }
    return "castleLevelOne";
  }

  function syncBackgroundMusic() {
    const desiredKey = getDesiredMusicTrackKey();
    if (desiredKey !== musicSession.activeKey) {
      if (musicSession.element) {
        musicSession.element.pause();
        try {
          musicSession.element.currentTime = 0;
        } catch (_) {
          // Ignore rewind failures.
        }
      }
      musicSession.activeKey = desiredKey;
      musicSession.element = desiredKey ? musicLibrary[desiredKey] || null : null;
    }

    if (!musicSession.element) {
      return;
    }

    const config = MUSIC_PLAYBACK[musicSession.activeKey] || {};
    musicSession.element.loop = !!config.loop;
    const musicGain = Number.isFinite(config.volume) ? config.volume : 0.5;
    musicSession.element.volume = clamp(getMusicVolume() * musicGain, 0, 1);

    if (getMusicVolume() > 0.001 && !state.paused) {
      const playPromise = musicSession.element.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
      return;
    }

    musicSession.element.pause();
  }

  function clearEnemyAmbientLoop() {
    if (state.enemyAmbient.timeoutId) {
      clearTimeout(state.enemyAmbient.timeoutId);
      state.enemyAmbient.timeoutId = null;
    }
  }

  function canPlayForestEnemyAmbient() {
    if (!state.started || state.paused || state.gameOver) {
      return false;
    }
    if (!state.audio.sfxEnabled || getSfxVolume() <= 0.001) {
      return false;
    }
    if (!state.enemies.length) {
      return false;
    }
    const world = getCurrentWorldTheme();
    return !!world && world.id === "forest";
  }

  function scheduleForestEnemyAmbient() {
    if (!canPlayForestEnemyAmbient() || state.enemyAmbient.timeoutId) {
      return;
    }
    const delay = randomInt(ENEMY_AMBIENT_INTERVAL_MIN_MS, ENEMY_AMBIENT_INTERVAL_MAX_MS);
    state.enemyAmbient.timeoutId = setTimeout(() => {
      state.enemyAmbient.timeoutId = null;
      if (!canPlayForestEnemyAmbient()) {
        return;
      }
      const index = randomInt(0, FOREST_ENEMY_AMBIENT_SFX_KEYS.length - 1);
      playSfx(FOREST_ENEMY_AMBIENT_SFX_KEYS[index]);
      scheduleForestEnemyAmbient();
    }, delay);
  }

  function syncEnemyAmbientSfx() {
    if (!canPlayForestEnemyAmbient()) {
      clearEnemyAmbientLoop();
      return;
    }
    scheduleForestEnemyAmbient();
  }

  function setAudioChannelEnabled(channel, enabled) {
    if (channel !== "sfx") {
      return;
    }
    state.audio.sfxEnabled = !!enabled;

    updateAudioSettingsButtons();
    saveProfile();
    syncBackgroundMusic();
    syncEnemyAmbientSfx();
  }

  function setAudioChannelVolume(channel, value) {
    const normalizedValue = clamp(Number(value) || 0, 0, 1);
    if (channel === "sfx") {
      state.audio.sfxVolume = normalizedValue;
    } else if (channel === "music") {
      state.audio.musicVolume = normalizedValue;
    } else {
      return;
    }

    updateAudioVolumeControls();
    saveProfile();
    syncBackgroundMusic();
    syncEnemyAmbientSfx();
  }

  function localizeCatalogName(item) {
    return state.locale === LOCALES.FR ? item.name : item.nameEn || item.name;
  }

  function isAdditionMode() {
    return state.operation === OPERATIONS.ADDITION;
  }

  function getOperationSymbol() {
    return isAdditionMode() ? "+" : "x";
  }

  function formatOperationPrompt(a, b) {
    return `${a} ${getOperationSymbol()} ${b} = ?`;
  }

  function formatOperationSolution(a, b, answer) {
    return `${a} ${getOperationSymbol()} ${b} = ${answer}`;
  }

  function computeOperationAnswer(a, b) {
    return isAdditionMode() ? a + b : a * b;
  }

  function getOperationNounPlural() {
    return isAdditionMode()
      ? l("additions", "additions")
      : l("multiplications", "multiplications");
  }

  function getOperationTableLabel(table) {
    return isAdditionMode()
      ? `${l("Table d'addition", "Addition table")} ${table}`
      : `${l("Table de", "Table")} ${table}`;
  }

  function applyLocalizedStaticTexts() {
    document.documentElement.lang = state.locale;
    const textById = {
      "start-btn": l("Lancer la partie", "Start Game"),
      "open-tables-btn": l("Réglages", "Settings"),
      "open-stats-btn": l("Voir le classement et la matrice", "Leaderboard & Matrix"),
      "lives-label": l("Vies", "Lives"),
      "open-shop-inline-btn": l("Boutique", "Shop"),
      "open-tables-inline-btn": l("Réglages", "Settings"),
      "open-stats-inline-btn": l("Stats", "Stats"),
      "open-debug-inline-btn": "Debug",
      "pause-btn": l("Pause", "Pause"),
      "fire-btn": l("Tirer", "Fire"),
      "pwa-update-btn": l("Mise à jour", "Update"),
      "close-tables-btn": l("Fermer", "Close"),
      "reset-mastery-btn": l("Réinitialiser la progression", "Reset Progress"),
      "close-stats-btn": l("Fermer", "Close"),
      "close-shop-btn": l("Fermer", "Close"),
      "resume-btn": l("Reprendre", "Resume"),
      "back-title-btn": l("Retour à l'écran titre", "Back to Title"),
      "mode-confirm-cancel-btn": l("Annuler", "Cancel"),
      "mode-confirm-accept-btn": l("Continuer", "Continue"),
      "save-score-btn": l("Enregistrer", "Save"),
      "restart-btn": l("Rejouer", "Play Again")
    };
    for (const [id, value] of Object.entries(textById)) {
      const el = document.getElementById(id);
      if (el) {
        el.textContent = value;
      }
    }

    const titleKicker = document.querySelector(".title-kicker");
    if (titleKicker) {
      titleKicker.textContent = l(
        `Tower defense des ${getOperationNounPlural()}`,
        `${isAdditionMode() ? "Addition" : "Multiplication"} Tower Defense`
      );
    }
    const titleDesc = document.querySelector(".title-card p:not(.title-kicker)");
    if (titleDesc) {
      titleDesc.textContent = l(
        `Défends ton château en répondant aux ${getOperationNounPlural()}. Le jeu s'adapte à tes tables les moins maîtrisées.`,
        `Defend your castle by solving ${isAdditionMode() ? "additions" : "multiplications"}. The game adapts to your weakest tables.`
      );
    }
    const questionTitle = document.querySelector(".question-title");
    if (questionTitle) {
      questionTitle.textContent = l(
        isAdditionMode() ? "Canon des additions" : "Canon des multiplications",
        isAdditionMode() ? "Addition Cannon" : "Multiplication Cannon"
      );
    }
    const shopTitle = document.querySelector("#shop-modal h2");
    if (shopTitle) shopTitle.textContent = l("Boutique", "Shop");
    const shopSubtitle = document.querySelector(".shop-subtitle");
    if (shopSubtitle) {
      shopSubtitle.textContent = l(
        "Débloque des skins pour Castle/Fairy (Basic exclu).",
        "Unlock skins for Castle/Fairy (Basic excluded)."
      );
    }
    const shopWallet = document.querySelector(".shop-wallet");
    if (shopWallet) {
      shopWallet.innerHTML = `${l("Solde", "Balance")}: <strong id="shop-coins-value">${state.coins}</strong> ${l("pièces d'or", "gold coins")}`;
      dom.shopCoinsValue = document.getElementById("shop-coins-value");
    }
    const shopFilterButtons = dom.shopCategorySelect?.querySelectorAll("button[data-shop-category]") || [];
    for (const button of shopFilterButtons) {
      const cat = button.dataset.shopCategory;
      if (cat === SHOP_CATEGORIES.TOWER) button.textContent = l("Tours", "Towers");
      if (cat === SHOP_CATEGORIES.CASTLE) button.textContent = l("Châteaux", "Castles");
      if (cat === SHOP_CATEGORIES.PROJECTILE) button.textContent = l("Projectiles", "Projectiles");
    }
    const modeSimple = dom.modeSelect?.querySelector('button[data-mode="simple"]');
    const modeNormal = dom.modeSelect?.querySelector('button[data-mode="normal"]');
    if (modeSimple) modeSimple.textContent = l("Mode simple", "Simple Mode");
    if (modeNormal) modeNormal.textContent = l("Mode normal", "Normal Mode");
    const statsH2 = document.querySelector("#stats-modal h2");
    if (statsH2) statsH2.textContent = l("Classement et maîtrise", "Leaderboard & Mastery");
    const leaderboardTitle = l(
      `Meilleurs scores - ${isAdditionMode() ? "Addition" : "Multiplication"}`,
      `Top Scores - ${isAdditionMode() ? "Addition" : "Multiplication"}`
    );
    const statsH3 = document.querySelector("#stats-modal .leaderboard h3");
    if (statsH3) statsH3.textContent = leaderboardTitle;
    const matrixTitle = document.querySelector(".matrix-title");
    if (matrixTitle) {
      matrixTitle.textContent = l(
        isAdditionMode() ? "Matrice des additions" : "Matrice des multiplications",
        isAdditionMode() ? "Addition Matrix" : "Multiplication Matrix"
      );
    }
    const matrixSubtitle = document.querySelector(".matrix-subtitle");
    if (matrixSubtitle) {
      matrixSubtitle.textContent = l(
        "Rouge = début, vert = maîtrisée (20 réussites)",
        "Red = beginner, green = mastered (20 correct)"
      );
    }
    const settingsTitle = document.getElementById("settings-title");
    if (settingsTitle) settingsTitle.textContent = l("Réglages", "Settings");
    const settingsCredit = document.getElementById("settings-credit");
    if (settingsCredit) {
      settingsCredit.innerHTML = l(
        'Un jeu réalisé par Gérôme Billois (<a href="https://www.linkedin.com/in/gbillois/" target="_blank" rel="noopener noreferrer">contact</a>).',
        'A game by Gérôme Billois (<a href="https://www.linkedin.com/in/gbillois/" target="_blank" rel="noopener noreferrer">contact</a>).'
      );
    }
    const tablesLabel = document.getElementById("tables-label");
    if (tablesLabel) tablesLabel.textContent = l("Tables", "Tables");
    const tablesDescription = document.getElementById("tables-description");
    if (tablesDescription) {
      tablesDescription.textContent = l(
        "Choisis les tables actives. Le jeu favorise ensuite celles que tu maîtrises moins.",
        "Choose active tables. The game then focuses on the ones you master less."
      );
    }
    const visualStyleLabel = dom.visualStyleSelect?.querySelector(".visual-style-label");
    if (visualStyleLabel) visualStyleLabel.textContent = l("Style visuel", "Visual Style");
    const operationLabel = document.getElementById("operation-label");
    if (operationLabel) operationLabel.textContent = l("Opération", "Operation");
    if (dom.audioSfxLabel) dom.audioSfxLabel.textContent = l("Effets sonores", "Sound effects");
    if (dom.audioVolumeTitle) dom.audioVolumeTitle.textContent = l("Volumes", "Volumes");
    if (dom.audioSfxVolumeLabel) dom.audioSfxVolumeLabel.textContent = l("Volume effets sonores", "SFX volume");
    if (dom.audioMusicVolumeLabel) dom.audioMusicVolumeLabel.textContent = l("Volume musique", "Music volume");
    updateAudioSettingsButtons();
    for (const button of dom.operationButtons) {
      if (button.dataset.operation === OPERATIONS.MULTIPLICATION) {
        button.textContent = l("Multiplication", "Multiplication");
      } else if (button.dataset.operation === OPERATIONS.ADDITION) {
        button.textContent = l("Addition", "Addition");
      }
    }
    const pauseH2 = document.querySelector("#pause-modal h2");
    if (pauseH2) pauseH2.textContent = l("Pause", "Pause");
    const pauseP = document.querySelector("#pause-modal p");
    if (pauseP) pauseP.textContent = l("La partie est en pause.", "Game is paused.");
    const confirmH2 = document.querySelector("#mode-confirm-modal h2");
    if (confirmH2) confirmH2.textContent = l("Confirmation", "Confirmation");
    if (dom.modeConfirmText && !state.pendingModeChange) {
      dom.modeConfirmText.textContent = l(
        "Changer de mode va démarrer une nouvelle partie.",
        "Changing mode will start a new game."
      );
    }
    const gameOverTitle = document.getElementById("game-over-title");
    if (gameOverTitle && gameOverTitle.textContent.trim() === "Défaite") {
      gameOverTitle.textContent = l("Défaite", "Defeat");
    }
    if (dom.waveBanner && !state.started) {
      dom.waveBanner.textContent = state.locale === LOCALES.FR ? "Niveau 1" : "Level 1";
    }
    if (dom.bossProgressText) {
      dom.bossProgressText.textContent = state.locale === LOCALES.FR ? "Dragon : 0/5" : "Dragon: 0/5";
    }
    if (dom.bossVictoryBanner) {
      dom.bossVictoryBanner.textContent = l(
        isAdditionMode()
          ? "Victoire ! Tu es le champion des additions"
          : "Victoire ! Tu es le champion des multiplications",
        isAdditionMode()
          ? "Victory! You are the addition champion"
          : "Victory! You are the multiplication champion"
      );
    }
    const bossDefeatText = dom.bossDefeatOverlay?.querySelector("p");
    if (bossDefeatText) {
      bossDefeatText.textContent = l(
        "Le dragon a gagné, tu dois être plus rapide. Retour au niveau précédent, réessaie !",
        "The dragon won, you must be faster. Return to the previous level and try again!"
      );
    }
    if (dom.bossDefeatGoBtn) dom.bossDefeatGoBtn.textContent = l("OK", "OK");
    if (dom.gameOverText && !state.started) {
      dom.gameOverText.textContent = l("Les gobelins ont passé ta défense.", "Goblins broke through your defense.");
    }
    if (dom.finalScoreText && !state.started) {
      dom.finalScoreText.textContent = `${l("Score final", "Final score")}: 0`;
    }
    if (dom.questionText && !state.started) {
      dom.questionText.textContent = formatOperationPrompt(6, 7);
    }
    const scoreLabel = document.querySelector('label[for="player-name-input"]');
    if (scoreLabel) scoreLabel.textContent = l("Ton nom pour le classement", "Your name for the leaderboard");
    if (dom.playerNameInput) dom.playerNameInput.placeholder = l("Ex : Alex", "e.g. Alex");
    const leaderboardTitles = document.querySelectorAll(".leaderboard h3");
    for (const h3 of leaderboardTitles) {
      if (h3.closest("#game-over")) h3.textContent = leaderboardTitle;
    }
    const debugTitle = document.querySelector("#debug-modal h2");
    if (debugTitle) debugTitle.textContent = l("Debug visuel", "Visual Debug");
    const debugSub = document.querySelector("#debug-modal .debug-subtitle");
    if (debugSub) debugSub.textContent = l("Ajuste les éléments en direct et copie les valeurs.", "Adjust elements live and copy values.");
    const feedbackDefault = document.getElementById("feedback");
    if (feedbackDefault && !state.started) {
      feedbackDefault.textContent = l("Choisis un mode puis lance la partie.", "Choose a mode and start the game.");
    }
  }

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
      return [...DEFAULT_SELECTED_TABLES];
    }

    const values = rawValue
      .map((item) => Number.parseInt(item, 10))
      .filter((table) => table >= 1 && table <= 12);

    const unique = [...new Set(values)].sort((a, b) => a - b);
    return unique.length > 0 ? unique : [...DEFAULT_SELECTED_TABLES];
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

  function createDefaultOperationProgress() {
    return {
      selectedTables: [...DEFAULT_SELECTED_TABLES],
      tableMastery: createEmptyMastery(),
      multiplicationMastery: createEmptyMultiplicationMastery()
    };
  }

  function createDefaultProgressByOperation() {
    return {
      [OPERATIONS.MULTIPLICATION]: createDefaultOperationProgress(),
      [OPERATIONS.ADDITION]: createDefaultOperationProgress()
    };
  }

  function normalizeOperation(rawValue) {
    return rawValue === OPERATIONS.ADDITION
      ? OPERATIONS.ADDITION
      : OPERATIONS.MULTIPLICATION;
  }

  function normalizeOperationProgress(rawValue) {
    return {
      selectedTables: sanitizeSelectedTables(rawValue?.selectedTables),
      tableMastery: normalizeMastery(rawValue?.tableMastery),
      multiplicationMastery: normalizeMultiplicationMastery(rawValue?.multiplicationMastery)
    };
  }

  function normalizeProgressByOperation(rawValue, legacyProfile = null) {
    const normalized = createDefaultProgressByOperation();
    const hasStructuredProgress =
      !!rawValue &&
      typeof rawValue === "object" &&
      (rawValue[OPERATIONS.MULTIPLICATION] || rawValue[OPERATIONS.ADDITION]);

    if (rawValue && typeof rawValue === "object") {
      normalized[OPERATIONS.MULTIPLICATION] = normalizeOperationProgress(
        rawValue[OPERATIONS.MULTIPLICATION]
      );
      normalized[OPERATIONS.ADDITION] = normalizeOperationProgress(
        rawValue[OPERATIONS.ADDITION]
      );
    }

    if (!hasStructuredProgress && legacyProfile && typeof legacyProfile === "object") {
      const hasLegacyProgress =
        legacyProfile.selectedTables ||
        legacyProfile.tableMastery ||
        legacyProfile.multiplicationMastery;

      if (hasLegacyProgress) {
        normalized[OPERATIONS.MULTIPLICATION] = {
          selectedTables: sanitizeSelectedTables(legacyProfile.selectedTables),
          tableMastery: normalizeMastery(legacyProfile.tableMastery),
          multiplicationMastery: normalizeMultiplicationMastery(
            legacyProfile.multiplicationMastery
          )
        };
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

  function normalizeAudioSettings(rawValue) {
    if (!rawValue || typeof rawValue !== "object") {
      return {
        sfxEnabled: false,
        sfxVolume: AUDIO_SFX_VOLUME_DEFAULT,
        musicVolume: AUDIO_MUSIC_VOLUME_DEFAULT
      };
    }

    const legacyVolumes =
      rawValue.volumeByTrack && typeof rawValue.volumeByTrack === "object"
        ? rawValue.volumeByTrack
        : rawValue.volumes && typeof rawValue.volumes === "object"
          ? rawValue.volumes
          : {};
    const legacySfxCandidates = [legacyVolumes.shot, legacyVolumes.impact, legacyVolumes.enterDoor]
      .map((value) => Number(value))
      .filter((value) => Number.isFinite(value));
    const legacySfxAverage = legacySfxCandidates.length
      ? legacySfxCandidates.reduce((sum, value) => sum + value, 0) / legacySfxCandidates.length
      : AUDIO_SFX_VOLUME_DEFAULT;
    const legacyMusic = Number(legacyVolumes.castleLevelOne);
    const rawSfxVolume = Number(rawValue.sfxVolume);
    const rawMusicVolume = Number(rawValue.musicVolume);
    const migratedMusicFallback = rawValue.musicEnabled === true && Number.isFinite(legacyMusic)
      ? legacyMusic
      : AUDIO_MUSIC_VOLUME_DEFAULT;
    const normalizedSfxVolume = clamp(
      Number.isFinite(rawSfxVolume) ? rawSfxVolume : legacySfxAverage,
      0,
      1
    );
    const normalizedMusicVolume = clamp(
      Number.isFinite(rawMusicVolume) ? rawMusicVolume : migratedMusicFallback,
      0,
      1
    );
    const hasExplicitSfxEnabled = typeof rawValue.sfxEnabled === "boolean";
    const normalizedSfxEnabled = hasExplicitSfxEnabled
      ? rawValue.sfxEnabled
      : false;
    const isLegacyDefaultAudioSnapshot =
      normalizedSfxEnabled === true &&
      Math.abs(normalizedSfxVolume - AUDIO_SFX_VOLUME_DEFAULT) < 0.0001 &&
      Math.abs(normalizedMusicVolume - AUDIO_MUSIC_VOLUME_LEGACY_DEFAULT) < 0.0001;

    if (isLegacyDefaultAudioSnapshot) {
      return {
        sfxEnabled: false,
        sfxVolume: AUDIO_SFX_VOLUME_DEFAULT,
        musicVolume: AUDIO_MUSIC_VOLUME_DEFAULT
      };
    }

    return {
      sfxEnabled: normalizedSfxEnabled,
      sfxVolume: normalizedSfxVolume,
      musicVolume: normalizedMusicVolume
    };
  }

  function styleSupportsShop(style) {
    return SHOP_SUPPORTED_STYLES.has(style);
  }

  function createDefaultShopUnlocks() {
    const unlocks = {};
    for (const style of Object.values(VISUAL_STYLES)) {
      if (!styleSupportsShop(style)) {
        continue;
      }
      unlocks[style] = {
        [SHOP_CATEGORIES.TOWER]: ["base"],
        [SHOP_CATEGORIES.CASTLE]: ["base"],
        [SHOP_CATEGORIES.PROJECTILE]: ["base"]
      };
    }
    return unlocks;
  }

  function createDefaultEquippedSkins() {
    return {
      [VISUAL_STYLES.CASTLE]: {
        [SHOP_CATEGORIES.TOWER]: "base",
        [SHOP_CATEGORIES.CASTLE]: "base",
        [SHOP_CATEGORIES.PROJECTILE]: "base"
      },
      [VISUAL_STYLES.FAIRY]: {
        [SHOP_CATEGORIES.TOWER]: "base",
        [SHOP_CATEGORIES.CASTLE]: "base",
        [SHOP_CATEGORIES.PROJECTILE]: "base"
      }
    };
  }

  function normalizeShopUnlocks(rawValue) {
    const defaults = createDefaultShopUnlocks();
    if (!rawValue || typeof rawValue !== "object") {
      return defaults;
    }

    const normalized = createDefaultShopUnlocks();
    for (const style of Object.keys(defaults)) {
      const styleEntry = rawValue[style];
      if (!styleEntry || typeof styleEntry !== "object") {
        continue;
      }
      for (const category of Object.values(SHOP_CATEGORIES)) {
        const catalog = SHOP_ITEM_CATALOG[style]?.[category] || [];
        const validKeys = new Set(catalog.map((item) => item.key));
        const list = Array.isArray(styleEntry[category]) ? styleEntry[category] : [];
        const unlocked = ["base"];
        for (const candidate of list) {
          if (typeof candidate === "string" && validKeys.has(candidate) && !unlocked.includes(candidate)) {
            unlocked.push(candidate);
          }
        }
        normalized[style][category] = unlocked;
      }
    }

    return normalized;
  }

  function normalizeEquippedSkins(rawValue, shopUnlocks) {
    const defaults = createDefaultEquippedSkins();
    if (!rawValue || typeof rawValue !== "object") {
      return defaults;
    }

    const normalized = createDefaultEquippedSkins();
    for (const style of Object.keys(defaults)) {
      const styleEntry = rawValue[style];
      if (!styleEntry || typeof styleEntry !== "object") {
        continue;
      }
      for (const category of Object.values(SHOP_CATEGORIES)) {
        const equippedKey = typeof styleEntry[category] === "string" ? styleEntry[category] : "base";
        const unlockedSet = new Set(shopUnlocks[style]?.[category] || ["base"]);
        normalized[style][category] = unlockedSet.has(equippedKey) ? equippedKey : "base";
      }
    }

    return normalized;
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

  function getCatalogFor(style, category) {
    return SHOP_ITEM_CATALOG[style]?.[category] || [];
  }

  function getUnlockedSet(style, category) {
    return new Set(state.shopUnlocks[style]?.[category] || ["base"]);
  }

  function getEquippedSkinKey(style, category) {
    if (!styleSupportsShop(style)) {
      return "base";
    }
    return state.equippedSkins[style]?.[category] || "base";
  }

  function getSkinAssetMap(style, category) {
    const assets = STYLE_ASSETS[style] || STYLE_ASSETS[VISUAL_STYLES.CASTLE];
    if (category === SHOP_CATEGORIES.TOWER) {
      return assets.towerSkins || {};
    }
    if (category === SHOP_CATEGORIES.CASTLE) {
      return assets.castleDoors || {};
    }
    return assets.projectiles || {};
  }

  function getSelectedSkinSrc(style, category) {
    const map = getSkinAssetMap(style, category);
    const equipped = getEquippedSkinKey(style, category);
    return map[equipped] || map.base || "";
  }

  function getCastleSkinVisualScale(style, skinKey) {
    const byStyle = CASTLE_SKIN_VISUAL_SCALE[style] || {};
    return byStyle[skinKey] || 1;
  }

  function getTowerSkinVisualScale(style, skinKey) {
    const byStyle = TOWER_SKIN_VISUAL_SCALE[style] || {};
    return byStyle[skinKey] || 1;
  }

  function safeStorageGet(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  function safeStorageSet(key, value) {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch {
      return false;
    }
  }

  function loadProfile() {
    try {
      const raw = safeStorageGet(STORAGE_KEY);
      if (!raw) {
        // Ensure first launch starts from base skins and persists this baseline profile.
        saveProfile();
        return;
      }

      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") {
        return;
      }

      state.progressByOperation = normalizeProgressByOperation(
        parsed.progressByOperation,
        parsed
      );
      state.operation = normalizeOperation(parsed.operation);
      state.visualStyle = normalizeVisualStyle(parsed.visualStyle);
      state.coins = Math.max(0, Number.parseInt(parsed.coins, 10) || 0);
      state.bestWaveReached = Math.max(1, Number.parseInt(parsed.bestWaveReached, 10) || 1);
      state.shopUnlocks = normalizeShopUnlocks(parsed.shopUnlocks);
      state.equippedSkins = normalizeEquippedSkins(parsed.equippedSkins, state.shopUnlocks);
      state.audio = normalizeAudioSettings(parsed.audio);
      if (
        parsed.shopCategory === SHOP_CATEGORIES.TOWER ||
        parsed.shopCategory === SHOP_CATEGORIES.CASTLE ||
        parsed.shopCategory === SHOP_CATEGORIES.PROJECTILE
      ) {
        state.shopCategory = parsed.shopCategory;
      }

      if (parsed.mode === MODES.SIMPLE || parsed.mode === MODES.NORMAL) {
        state.mode = parsed.mode;
      }
    } catch {
      state.progressByOperation = createDefaultProgressByOperation();
      state.operation = OPERATIONS.MULTIPLICATION;
      state.mode = MODES.NORMAL;
      state.visualStyle = VISUAL_STYLES.CASTLE;
      state.coins = 0;
      state.bestWaveReached = 1;
      state.shopUnlocks = createDefaultShopUnlocks();
      state.equippedSkins = createDefaultEquippedSkins();
      state.shopCategory = SHOP_DEFAULT_CATEGORY;
      state.audio = {
        sfxEnabled: false,
        sfxVolume: AUDIO_SFX_VOLUME_DEFAULT,
        musicVolume: AUDIO_MUSIC_VOLUME_DEFAULT
      };
    }
  }

  function saveProfile() {
    const activeProgress = getActiveOperationProgress();
    const payload = {
      operation: state.operation,
      progressByOperation: state.progressByOperation,
      mode: state.mode,
      visualStyle: state.visualStyle,
      shopCategory: state.shopCategory,
      coins: state.coins,
      bestWaveReached: state.bestWaveReached,
      shopUnlocks: state.shopUnlocks,
      equippedSkins: state.equippedSkins,
      audio: state.audio,
      // Legacy fields kept for backward compatibility with old profile readers.
      selectedTables: [...activeProgress.selectedTables],
      tableMastery: activeProgress.tableMastery,
      multiplicationMastery: activeProgress.multiplicationMastery
    };

    safeStorageSet(STORAGE_KEY, JSON.stringify(payload));
  }

  function loadDebugTuning() {
    try {
      const raw = safeStorageGet(DEBUG_TUNING_KEY);
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
    safeStorageSet(DEBUG_TUNING_KEY, JSON.stringify(state.debugTuning));
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
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
      const raw = safeStorageGet(LEADERBOARD_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(parsed)) {
        state.leaderboard = [];
      } else {
        const normalized = parsed
          .filter((entry) => entry && typeof entry === "object")
          .map((entry) => ({
            name: sanitizePlayerName(entry.name),
            score: Math.max(0, Number.parseInt(entry.score, 10) || 0),
            wave: Math.max(1, Number.parseInt(entry.wave, 10) || 1),
            mode: entry.mode === MODES.SIMPLE ? MODES.SIMPLE : MODES.NORMAL,
            operation: normalizeOperation(entry.operation),
            champion: !!entry.champion,
            timestamp: Number.parseInt(entry.timestamp, 10) || Date.now()
          }))
          .filter((entry) => entry.name.length > 0);
        state.leaderboard = limitLeaderboardByOperation(normalized);
      }
    } catch {
      state.leaderboard = [];
    }

    state.lastPlayerName = sanitizePlayerName(safeStorageGet(LAST_PLAYER_KEY) || "");
  }

  function persistLeaderboard() {
    safeStorageSet(LEADERBOARD_KEY, JSON.stringify(state.leaderboard));
    if (state.lastPlayerName) {
      safeStorageSet(LAST_PLAYER_KEY, state.lastPlayerName);
    }
  }

  function compareLeaderboardEntries(a, b) {
    return b.score - a.score || b.wave - a.wave || a.timestamp - b.timestamp;
  }

  function limitLeaderboardByOperation(entries) {
    const sorted = [...entries].sort(compareLeaderboardEntries);
    const limited = [];
    for (const operation of Object.values(OPERATIONS)) {
      const bucket = sorted
        .filter((entry) => normalizeOperation(entry.operation) === operation)
        .slice(0, LEADERBOARD_MAX_ENTRIES);
      limited.push(...bucket);
    }
    return limited.sort(compareLeaderboardEntries);
  }

  function modeLabel(mode) {
    return mode === MODES.SIMPLE ? l("Simple", "Simple") : l("Normal", "Normal");
  }

  function renderLeaderboard() {
    const filtered = state.leaderboard
      .filter((entry) => normalizeOperation(entry.operation) === state.operation)
      .sort(compareLeaderboardEntries);

    const content = filtered.length
      ? filtered
      .map(
        (entry) =>
          `<li>${entry.champion ? "👑 " : ""}${escapeHtml(entry.name)} - ${entry.score} ${l("pts", "pts")} (${l("V", "W")}${entry.wave}, ${modeLabel(entry.mode)})</li>`
      )
      .join("")
      : `<li>${l("Aucun score enregistré.", "No score saved yet.")}</li>`;

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
        const answer = computeOperationAnswer(a, b);
        const expression = `${a} ${getOperationSymbol()} ${b}`;

        return `<td style="background:${background};color:${textColor}" title="${expression} = ${answer} | ${stats.correct}/${MASTERY_TARGET}"><div class="matrix-main">${answer}</div><div class="matrix-sub">${Math.min(stats.correct, MASTERY_TARGET)}/${MASTERY_TARGET}</div></td>`;
      }).join("");

      return `<tr><th>${a}</th>${cells}</tr>`;
    }).join("");

    dom.masteryMatrix.innerHTML = `<thead><tr><th>${getOperationSymbol()}</th>${headCells}</tr></thead><tbody>${rows}</tbody>`;
  }

  function saveCurrentScore() {
    if (state.scoreSubmitted) {
      dom.scoreSaveFeedback.textContent = l("Score déjà enregistré.", "Score already saved.");
      return;
    }

    const name = sanitizePlayerName(dom.playerNameInput.value);
    if (!name) {
      dom.scoreSaveFeedback.textContent = l("Entre un nom valide.", "Enter a valid name.");
      return;
    }

    state.lastPlayerName = name;
    state.leaderboard.push({
      name,
      score: state.score,
      wave: state.wave,
      mode: state.mode,
      operation: state.operation,
      champion: state.pendingChampion,
      timestamp: Date.now()
    });

    state.leaderboard = limitLeaderboardByOperation(state.leaderboard);

    state.scoreSubmitted = true;
    state.pendingChampion = false;
    dom.scoreSaveFeedback.textContent = l("Score enregistré.", "Score saved.");
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
    if (dom.coinsValue) {
      dom.coinsValue.textContent = String(state.coins);
    }
    dom.answerInput.value = state.inputBuffer;
    if (dom.pauseBtn) {
      dom.pauseBtn.disabled = !state.started || state.gameOver;
    }

    if (isSimpleMode()) {
      dom.livesLabel.textContent = l("Erreurs", "Errors");
      dom.livesValue.textContent = String(getSimpleErrorsRemaining());
    } else {
      dom.livesLabel.textContent = l("Vies", "Lives");
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

  function getViewportWidth() {
    if (typeof window === "undefined") {
      return 0;
    }
    return (
      window.visualViewport?.width ||
      window.innerWidth ||
      document.documentElement?.clientWidth ||
      0
    );
  }

  function isIPhoneDevice() {
    if (typeof navigator === "undefined") {
      return false;
    }
    return /iPhone/i.test(navigator.userAgent || "");
  }

  function getPlatformUpshiftY() {
    const viewportWidth = getViewportWidth();
    const isNarrowScreen =
      Number.isFinite(viewportWidth) &&
      viewportWidth > 0 &&
      viewportWidth <= PLATFORM_UPSHIFT_NARROW_MAX_WIDTH;
    return isIPhoneDevice() || isNarrowScreen ? PLATFORM_UPSHIFT_Y_PX : 0;
  }

  function getWorldIndexForWave(wave) {
    return Math.min(
      WORLD_THEMES.length - 1,
      Math.max(0, Math.floor((wave - 1) / WAVES_PER_WORLD))
    );
  }

  function getWaveLabel(wave) {
    const world = WORLD_THEMES[getWorldIndexForWave(wave)] || WORLD_THEMES[0];
    const localLevel = ((wave - 1) % WAVES_PER_WORLD) + 1;
    const worldLabel = state.locale === LOCALES.FR ? world.labelFr : world.labelEn;
    return state.locale === LOCALES.FR
      ? `${worldLabel} niveau ${localLevel}`
      : `${worldLabel} level ${localLevel}`;
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

  function refreshBestWaveReached() {
    if (state.wave > state.bestWaveReached) {
      state.bestWaveReached = state.wave;
      saveProfile();
    }
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

  function usesWorldSpaceAnchors() {
    return (
      state.visualStyle === VISUAL_STYLES.CASTLE || state.visualStyle === VISUAL_STYLES.FAIRY
    );
  }

  function getWorldSpaceMetrics() {
    if (!usesWorldSpaceAnchors() || !dom.battlefield) {
      return null;
    }

    const rect = dom.battlefield.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) {
      return null;
    }

    const tuning = getCurrentDebugStyleTuning();
    const scale = rect.width / WORLD_BG_SOURCE_WIDTH;
    const renderedHeight = WORLD_BG_SOURCE_HEIGHT * scale;
    const imageTop = rect.height - renderedHeight + tuning.bgOffsetY - getPlatformUpshiftY();

    return { rect, scale, imageTop };
  }

  function sourceYToBattlefieldY(sourceY, metrics) {
    return metrics.imageTop + sourceY * metrics.scale;
  }

  function sourceXToBattlefieldX(sourceX, metrics) {
    return sourceX * metrics.scale;
  }

  function updateWorldSpaceAnchors() {
    if (!dom.frame) {
      return;
    }

    if (!usesWorldSpaceAnchors()) {
      dom.frame.style.removeProperty("--world-tower-bottom-px");
      dom.frame.style.removeProperty("--world-castle-bottom-px");
      return;
    }

    const metrics = getWorldSpaceMetrics();
    if (!metrics) {
      return;
    }

    const towerBottom =
      metrics.rect.height - sourceYToBattlefieldY(WORLD_SPACE_ANCHORS.towerBottomY, metrics);
    const castleBottom =
      metrics.rect.height - sourceYToBattlefieldY(WORLD_SPACE_ANCHORS.castleBottomY, metrics);

    dom.frame.style.setProperty("--world-tower-bottom-px", `${towerBottom.toFixed(2)}px`);
    dom.frame.style.setProperty("--world-castle-bottom-px", `${castleBottom.toFixed(2)}px`);
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
    dom.frame.style.setProperty("--platform-upshift-y", `${getPlatformUpshiftY()}px`);
    applyWorldTheme();
    updateWorldSpaceAnchors();
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
    closeModeConfirmModal();
    dom.pauseModal.classList.add("hidden");
    dom.tablesModal.classList.add("hidden");
    dom.shopModal.classList.add("hidden");
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

  function getMultiplierWeight(table, multiplier, maxB) {
    const progress = getWaveDifficultyProgress();
    const key = multiplicationKey(table, multiplier);
    const stats = state.multiplicationMastery[key] || { correct: 0, wrong: 0 };
    const attempts = stats.correct + stats.wrong;
    const accuracy = attempts > 0 ? stats.correct / attempts : 0;
    const unmasteredBias =
      Math.max(0, MASTERY_TARGET - Math.min(MASTERY_TARGET, stats.correct)) / MASTERY_TARGET;

    let weight = 1;
    if (attempts === 0) {
      weight += 1.2 + progress * 0.8;
    }
    weight += (1 - accuracy) * 2.4;
    weight += unmasteredBias * 2;
    weight += stats.wrong * 0.08;

    if ([1, 2, 3, 10].includes(multiplier)) {
      weight *= Math.max(0.05, 1 - progress * 0.9);
      if (progress >= 0.7) {
        weight *= 0.32;
      }
    } else if ([6, 7, 8, 9].includes(multiplier)) {
      weight *= 1 + progress * 1.8;
    } else {
      weight *= 1 + progress * 0.6;
    }

    if (maxB <= 5 && multiplier >= 4) {
      weight *= 0.92;
    }

    return Math.max(0.02, weight);
  }

  function pickAdaptiveMultiplier(table, maxB, excludedOperationKey = "") {
    const weighted = [];
    for (let multiplier = 1; multiplier <= maxB; multiplier += 1) {
      const key = multiplicationKey(table, multiplier);
      let weight = getMultiplierWeight(table, multiplier, maxB);
      if (excludedOperationKey && key === excludedOperationKey && maxB > 1) {
        weight *= 0.02;
      }
      weighted.push({ multiplier, weight });
    }

    const totalWeight = weighted.reduce((sum, item) => sum + item.weight, 0);
    if (totalWeight <= 0) {
      return randomInt(1, maxB);
    }

    let cursor = Math.random() * totalWeight;
    for (const item of weighted) {
      cursor -= item.weight;
      if (cursor <= 0) {
        return item.multiplier;
      }
    }

    return weighted[weighted.length - 1].multiplier;
  }

  function getTableStatus(table) {
    const stats = state.tableMastery[table] || { correct: 0, wrong: 0 };
    const attempts = stats.correct + stats.wrong;

    if (attempts === 0) {
      return { label: l("Nouveau", "New"), className: "weak", summary: l("Aucune réponse", "No answers yet") };
    }

    const accuracy = tableAccuracy(table);
    const percent = Math.round(accuracy * 100);
    const summary = `${percent}% (${stats.correct}/${attempts})`;

    if (attempts >= 10 && accuracy >= 0.85) {
      return { label: l("Maîtrisée", "Mastered"), className: "strong", summary };
    }

    if (accuracy >= 0.6) {
      return { label: l("En progression", "Improving"), className: "medium", summary };
    }

    return { label: l("Prioritaire", "Priority"), className: "weak", summary };
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
            <span>${getOperationTableLabel(table)}</span>
            <input type="checkbox" data-table-checkbox="${table}" ${checked} />
          </div>
          <div class="table-meta ${status.className}">${status.label} - ${status.summary}</div>
        </label>
      `;
    }).join("");

    dom.tablesGrid.innerHTML = html;
  }

  function getShopActiveStyle() {
    return styleSupportsShop(state.visualStyle) ? state.visualStyle : VISUAL_STYLES.CASTLE;
  }

  function updateShopCategoryButtons() {
    const buttons = dom.shopCategorySelect?.querySelectorAll("button[data-shop-category]") || [];
    for (const button of buttons) {
      button.classList.toggle("active", button.dataset.shopCategory === state.shopCategory);
    }
  }

  function renderShop() {
    if (!dom.shopGrid || !dom.shopCoinsValue) {
      return;
    }

    const style = getShopActiveStyle();
    const category = state.shopCategory;
    const items = getCatalogFor(style, category);
    const unlocked = getUnlockedSet(style, category);
    const equipped = getEquippedSkinKey(style, category);

    dom.shopCoinsValue.textContent = String(state.coins);
    if (dom.shopStyleNote) {
      dom.shopStyleNote.textContent =
        state.visualStyle === VISUAL_STYLES.BASIC
          ? l("Le mode Basic n'a pas de boutique. Prévisualisation des éléments Castle.", "Basic mode has no shop. Previewing Castle items.")
          : `${l("Style actif", "Active style")}: ${style === VISUAL_STYLES.CASTLE ? "Castle" : "Fairy"}`;
    }
    updateShopCategoryButtons();

    const cards = items
      .map((item) => {
        const isUnlocked = unlocked.has(item.key);
        const progressionLocked = state.bestWaveReached < item.unlockWave;
        const canBuy = !isUnlocked && state.coins >= item.cost;
        const isSelected = isUnlocked && equipped === item.key;
        const statusLabel = isSelected
          ? l("Équipé", "Equipped")
          : isUnlocked
            ? l("Débloqué", "Unlocked")
            : progressionLocked
              ? `🔒 ${l("Vague", "Wave")} ${item.unlockWave} ${l("requise", "required")}`
              : `🔒 ${item.cost} ${l("or", "gold")}`;
        const buttonLabel = isSelected
          ? l("Équipé", "Equipped")
          : isUnlocked
            ? l("Équiper", "Equip")
            : progressionLocked
              ? l("Progression requise", "Progress required")
            : canBuy
              ? l("Acheter", "Buy")
              : l("Verrouillé", "Locked");
        const buttonDisabled = isSelected || (!isUnlocked && (progressionLocked || !canBuy));
        const lockMarkup = isUnlocked ? "" : '<span class="shop-lock" aria-hidden="true">🔒</span>';
        const buttonAttrs = buttonDisabled ? 'disabled aria-disabled="true"' : "";

        return `
          <article class="shop-item shop-cat-${category} ${isUnlocked ? "unlocked" : "locked"} ${isSelected ? "selected" : ""}">
            ${lockMarkup}
            <div class="shop-preview-wrap">
              <img class="shop-preview" src="${getSkinAssetMap(style, category)[item.key] || ""}" alt="${localizeCatalogName(item)}" />
            </div>
            <div class="shop-item-body">
              <p class="shop-item-name">${localizeCatalogName(item)}</p>
              <p class="shop-item-meta">${statusLabel}</p>
              <p class="shop-item-requirement">${l("Vague conseillée", "Suggested wave")}: ${item.unlockWave}+</p>
              <button type="button" data-shop-item-key="${item.key}" ${buttonAttrs}>${buttonLabel}</button>
            </div>
          </article>
        `;
      })
      .join("");

    dom.shopGrid.innerHTML = cards;
  }

  function unlockAndEquipItem(style, category, itemKey) {
    const unlocked = getUnlockedSet(style, category);
    if (!unlocked.has(itemKey)) {
      unlocked.add(itemKey);
      state.shopUnlocks[style][category] = Array.from(unlocked);
    }
    state.equippedSkins[style][category] = itemKey;
    saveProfile();
  }

  function buyOrEquipShopItem(itemKey) {
    const style = getShopActiveStyle();
    const category = state.shopCategory;
    const item = getCatalogFor(style, category).find((entry) => entry.key === itemKey);
    if (!item) {
      return;
    }

    const unlocked = getUnlockedSet(style, category);
    if (unlocked.has(item.key)) {
      unlockAndEquipItem(style, category, item.key);
      applyVisualStyle();
      renderShop();
      showFeedback(`${localizeCatalogName(item)} ${l("équipé.", "equipped.")}`, "good");
      return;
    }

    if (state.bestWaveReached < item.unlockWave) {
      showFeedback(
        `${localizeCatalogName(item)} ${l("sera disponible après avoir atteint la vague", "will unlock after reaching wave")} ${item.unlockWave}.`,
        "bad"
      );
      return;
    }

    if (state.coins < item.cost) {
      showFeedback(`${l("Pas assez d'or pour", "Not enough gold for")} ${localizeCatalogName(item)}.`, "bad");
      return;
    }

    state.coins -= item.cost;
    unlockAndEquipItem(style, category, item.key);
    applyVisualStyle();
    updateHud();
    renderShop();
    showFeedback(`${localizeCatalogName(item)} ${l("débloqué pour", "unlocked for")} ${item.cost} ${l("or", "gold")}.`, "good");
  }

  function updateTowerSkin() {
    if (!dom.tower) {
      return;
    }

    const selectedTowerSkinKey = getEquippedSkinKey(state.visualStyle, SHOP_CATEGORIES.TOWER);
    dom.tower.src = getSelectedSkinSrc(state.visualStyle, SHOP_CATEGORIES.TOWER);
    dom.tower.dataset.skinKey = selectedTowerSkinKey;
    dom.tower.style.setProperty(
      "--tower-skin-scale",
      getTowerSkinVisualScale(state.visualStyle, selectedTowerSkinKey).toFixed(3)
    );
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

  function updateOperationButtons() {
    for (const button of dom.operationButtons) {
      button.classList.toggle("active", button.dataset.operation === state.operation);
    }
  }

  function applyVisualStyle() {
    const styleAssets = getActiveStyleAssets();

    dom.frame?.classList.toggle("visual-style-basic", state.visualStyle === VISUAL_STYLES.BASIC);
    dom.frame?.classList.toggle("visual-style-castle", state.visualStyle === VISUAL_STYLES.CASTLE);
    dom.frame?.classList.toggle("visual-style-fairy", state.visualStyle === VISUAL_STYLES.FAIRY);

    if (dom.castleDoor) {
      const selectedCastleSkinKey = getEquippedSkinKey(state.visualStyle, SHOP_CATEGORIES.CASTLE);
      dom.castleDoor.src = getSelectedSkinSrc(state.visualStyle, SHOP_CATEGORIES.CASTLE);
      dom.castleDoor.dataset.skinKey = selectedCastleSkinKey;
      dom.castleDoor.style.setProperty(
        "--castle-skin-scale",
        getCastleSkinVisualScale(state.visualStyle, selectedCastleSkinKey).toFixed(3)
      );
    }
    if (dom.castleFire) {
      dom.castleFire.src = styleAssets.castleFire;
    }
    if (dom.bossDragonImg) {
      dom.bossDragonImg.src = styleAssets.bossDragon;
    }
    if (dom.frame) {
      dom.frame.style.setProperty(
        "--projectile-image",
        `url("${getSelectedSkinSrc(state.visualStyle, SHOP_CATEGORIES.PROJECTILE)}")`
      );
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
    syncBackgroundMusic();
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
    if (!dom.shopModal.classList.contains("hidden")) {
      renderShop();
    }
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

  function setOperation(operation) {
    const nextOperation = normalizeOperation(operation);
    if (nextOperation === state.operation) {
      updateOperationButtons();
      return;
    }

    state.operation = nextOperation;
    state.lastQuestionKey = "";
    updateOperationButtons();
    applyLocalizedStaticTexts();
    renderTablesGrid();
    renderMasteryMatrix();
    renderLeaderboard();
    saveProfile();

    if (state.started && !state.gameOver) {
      if (state.bossBattle.active) {
        setBossQuestion();
      } else {
        nextQuestion();
      }
    } else if (dom.questionText) {
      dom.questionText.textContent = formatOperationPrompt(6, 7);
    }
  }

  function nextQuestion() {
    const maxB = Math.min(MAX_MULTIPLIER_VALUE, 4 + Math.floor(state.wave * 1.2));
    const possibleOperations = state.selectedTables.length * maxB;
    const canAvoidRepeat = possibleOperations > 1 && state.lastQuestionKey.length > 0;

    let table = pickAdaptiveTable();
    let b = pickAdaptiveMultiplier(table, maxB, state.lastQuestionKey);
    let key = multiplicationKey(table, b);
    let guard = 0;

    while (canAvoidRepeat && key === state.lastQuestionKey && guard < 24) {
      table = pickAdaptiveTable();
      b = pickAdaptiveMultiplier(table, maxB, state.lastQuestionKey);
      key = multiplicationKey(table, b);
      guard += 1;
    }

    state.question = { a: table, b, answer: computeOperationAnswer(table, b) };
    state.lastQuestionKey = key;
    state.inputBuffer = "";
    dom.questionText.textContent = formatOperationPrompt(table, b);
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

  function generateSimpleEntryTargets(enemyCount) {
    const targetMin = 0.08;
    const targetMax = 0.34;
    const minGap = 0.028;
    const targets = [];

    for (let index = 0; index < enemyCount; index += 1) {
      let tries = 0;
      let value = targetMin + Math.random() * (targetMax - targetMin);
      while (
        tries < 36 &&
        targets.some((existing) => Math.abs(existing - value) < minGap)
      ) {
        value = targetMin + Math.random() * (targetMax - targetMin);
        tries += 1;
      }
      targets.push(value);
    }

    return targets;
  }

  function createEnemy(initialProgress, options = {}) {
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

    const simpleMode = isSimpleMode();
    const simpleTargetProgress = simpleMode
      ? clamp(
          typeof options.simpleTargetProgress === "number"
            ? options.simpleTargetProgress
            : 0.12 + Math.random() * 0.2,
          0.05,
          0.45
        )
      : 1;
    const enemy = {
      id: ++state.enemyId,
      hp,
      maxHp: hp,
      speed,
      scale: variant.scale,
      spawnReveal: simpleMode ? 1 : 0,
      spawnShiftX: simpleMode ? 0 : -(48 + Math.random() * 18),
      progress: spawnProgress,
      simpleTargetProgress,
      simpleEntryDelay:
        simpleMode && typeof options.simpleEntryDelay === "number"
          ? Math.max(0, options.simpleEntryDelay)
          : 0,
      simpleEntrySpeed:
        simpleMode && typeof options.simpleEntrySpeed === "number"
          ? clamp(options.simpleEntrySpeed, 0.14, 0.9)
          : 0.42 + Math.random() * 0.16,
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
    const worldMetrics = getWorldSpaceMetrics();

    if (worldMetrics) {
      let startX = rect.width * 0.2;
      let endX = rect.width * 0.89;

      if (pathRect && pathRect.width > 12) {
        startX = pathRect.left - rect.left + pathRect.width * 0.07;
        const pathEndX = pathRect.right - rect.left - pathRect.width * 0.08;
        const doorX = castleRect
          ? castleRect.left - rect.left + castleRect.width * 0.34
          : pathEndX;
        endX = Math.max(startX + 24, Math.min(pathEndX, doorX));
      }

      return {
        startX,
        endX,
        baseY:
          sourceYToBattlefieldY(WORLD_SPACE_ANCHORS.enemyPathY, worldMetrics) +
          ENEMY_EXTRA_SHIFT_Y +
          tuning.enemyPathOffsetY,
        width: rect.width,
        height: rect.height
      };
    }

    if (pathRect && pathRect.width > 12 && pathRect.height > 8) {
      const isBasicStyle = state.visualStyle === VISUAL_STYLES.BASIC;
      const baseYFactor = isBasicStyle ? 0.56 : 0.76;
      const startX = pathRect.left - rect.left + pathRect.width * 0.07;
      const pathEndX = pathRect.right - rect.left - pathRect.width * 0.08;
      const doorX = castleRect
        ? castleRect.left - rect.left + castleRect.width * 0.34
        : pathEndX;
      const endX = Math.max(startX + 24, Math.min(pathEndX, doorX));
      const baseY = pathRect.top - rect.top + pathRect.height * baseYFactor;

      return {
        startX,
        endX,
        baseY: baseY + ENEMY_EXTRA_SHIFT_Y,
        width: rect.width,
        height: rect.height
      };
    }

    return {
      startX: rect.width * 0.2,
      endX: rect.width * 0.89,
      baseY: rect.height * 0.72 + ENEMY_EXTRA_SHIFT_Y + tuning.enemyPathOffsetY,
      width: rect.width,
      height: rect.height
    };
  }

  function getEnemyDisplaySizePx() {
    let size = 84;
    const trackedEnemy = state.enemies.find((enemy) => enemy?.el?.isConnected);
    if (trackedEnemy?.el) {
      const width = trackedEnemy.el.getBoundingClientRect().width;
      if (width > 0) {
        size = clamp(width, 44, 160);
      }
    } else {
      const track = getTrackGeometry();
      size = clamp(track.width * 0.18, 68, 100);
    }
    return clamp(size * BONUS_CHEST_SIZE_SCALE, 28, 72);
  }

  function getBonusChestSpawnPosition(chestSize, type = "chest") {
    const rect = dom.battlefield.getBoundingClientRect();
    const towerRect = dom.tower?.getBoundingClientRect();
    const castleRect = dom.castleDoor?.getBoundingClientRect();
    const pathRect = dom.path?.getBoundingClientRect();
    const track = getTrackGeometry();

    let minX = rect.width * 0.24;
    let maxX = rect.width * 0.76;
    if (towerRect) {
      minX = Math.max(minX, towerRect.right - rect.left + chestSize * 0.55 + 8);
    }
    if (castleRect) {
      maxX = Math.min(maxX, castleRect.left - rect.left - chestSize * 0.55 - 8);
    }
    if (maxX - minX < chestSize * 0.45) {
      minX = track.startX + chestSize * 0.6;
      maxX = track.endX - chestSize * 0.6;
    }
    if (maxX <= minX) {
      minX = rect.width * 0.45;
      maxX = rect.width * 0.6;
    }

    const x = minX + Math.random() * Math.max(1, maxX - minX);
    const enemyLevelY = pathRect
      ? pathRect.top - rect.top + pathRect.height * 0.78
      : track.baseY;
    const heroAdjust = type === "hero" ? BONUS_HERO_Y_ADJUST_PX : 0;
    const y = clamp(
      enemyLevelY + chestSize * 0.46 + BONUS_CHEST_Y_OFFSET_PX + heroAdjust,
      chestSize * 0.68,
      rect.height - chestSize * 0.55
    );

    return { x, y };
  }

  function clearBonusChest(options = {}) {
    const immediate = options.immediate !== false;
    if (state.bonusChest.timeoutId) {
      clearTimeout(state.bonusChest.timeoutId);
      state.bonusChest.timeoutId = null;
    }
    const chestEl = state.bonusChest.el;
    state.bonusChest.el = null;
    state.bonusChest.active = false;
    state.bonusChest.type = null;
    if (!chestEl) {
      return;
    }
    if (immediate) {
      chestEl.remove();
      return;
    }
    chestEl.classList.remove("is-visible");
    chestEl.classList.add("is-fading-out");
    setTimeout(() => chestEl.remove(), BONUS_CHEST_FADE_MS);
  }

  function getBonusHeroSrc() {
    if (state.visualStyle === VISUAL_STYLES.FAIRY) {
      return BONUS_HERO_FAIRY_SRC;
    }
    return BONUS_HERO_CASTLE_SRC;
  }

  function collectBonusChest() {
    if (!state.bonusChest.active) {
      return;
    }
    if (state.bonusChest.type === "hero") {
      state.coins += BONUS_HERO_REWARD_COINS;
      if (isSimpleMode()) {
        state.simpleMistakes = 0;
      } else {
        state.lives = Math.min(20, state.lives + BONUS_HERO_NORMAL_LIFE_GAIN);
      }
      saveProfile();
      updateHud();
      if (!dom.shopModal.classList.contains("hidden")) {
        renderShop();
      }
      showFeedback(
        isSimpleMode()
          ? l(
            `Allié secouru : +${BONUS_HERO_REWARD_COINS} pièces d'or et essais réinitialisés.`,
            `Ally rescued: +${BONUS_HERO_REWARD_COINS} gold and attempts reset.`
          )
          : l(
            `Allié secouru : +${BONUS_HERO_REWARD_COINS} pièces d'or et +${BONUS_HERO_NORMAL_LIFE_GAIN} vies.`,
            `Ally rescued: +${BONUS_HERO_REWARD_COINS} gold and +${BONUS_HERO_NORMAL_LIFE_GAIN} lives.`
          ),
        "good"
      );
      clearBonusChest({ immediate: false });
      return;
    }

    const reward = randomInt(BONUS_CHEST_REWARD_MIN, BONUS_CHEST_REWARD_MAX);
    state.coins += reward;
    saveProfile();
    updateHud();
    if (!dom.shopModal.classList.contains("hidden")) {
      renderShop();
    }
    showFeedback(
      l(`Coffre ouvert : +${reward} pièces d'or.`, `Chest opened: +${reward} gold.`),
      "good"
    );
    clearBonusChest({ immediate: false });
  }

  function spawnBonusChest(source = "wave", forcedType = null) {
    if (
      !state.started ||
      state.gameOver ||
      state.betweenWaves ||
      state.bossBattle.active ||
      state.bonusChest.active ||
      state.bonusChest.spawnedThisWave
    ) {
      return false;
    }

    clearBonusChest();
    const spawnType = forcedType === "hero" || forcedType === "chest"
      ? forcedType
      : state.bonusChest.plannedType || "chest";
    const isHero = spawnType === "hero";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "bonus-chest";
    button.setAttribute(
      "aria-label",
      isHero ? l("Allié bonus", "Bonus ally") : l("Coffre bonus", "Bonus chest")
    );
    button.title = isHero
      ? l("Clique pour recruter l'allié", "Tap to recruit the ally")
      : l("Clique pour récupérer de l'or", "Tap to claim gold");

    const img = document.createElement("img");
    img.src = isHero ? getBonusHeroSrc() : BONUS_CHEST_SRC;
    img.alt = isHero ? l("Allié bonus", "Bonus ally") : l("Coffre bonus", "Bonus chest");
    button.appendChild(img);

    dom.battlefield.appendChild(button);
    const baseBonusSize = getEnemyDisplaySizePx();
    const chestSize = isHero
      ? clamp(baseBonusSize * BONUS_HERO_SIZE_MULTIPLIER, 36, 144)
      : baseBonusSize;
    button.style.width = `${chestSize.toFixed(2)}px`;
    const position = getBonusChestSpawnPosition(chestSize, spawnType);
    button.style.left = `${position.x.toFixed(2)}px`;
    button.style.top = `${position.y.toFixed(2)}px`;
    bindFastPress(button, () => collectBonusChest());
    requestAnimationFrame(() => {
      button.classList.add("is-visible");
    });

    state.bonusChest.el = button;
    state.bonusChest.active = true;
    state.bonusChest.type = spawnType;
    state.bonusChest.spawnedThisWave = true;
    if (source === "cheat") {
      showFeedback(
        isHero
          ? l("Allié de test apparu.", "Test ally appeared.")
          : l("Coffre de test apparu.", "Test chest appeared."),
        "good"
      );
    }
    state.bonusChest.timeoutId = setTimeout(() => {
      if (!state.bonusChest.active) {
        return;
      }
      clearBonusChest({ immediate: false });
      showFeedback(
        isHero
          ? l("L'allié a disparu.", "The ally disappeared.")
          : l("Le coffre a disparu.", "The chest disappeared."),
        ""
      );
    }, BONUS_CHEST_CLICK_WINDOW_MS);
    return true;
  }

  function prepareBonusChestForWave() {
    clearBonusChest();
    state.bonusChest.spawnedThisWave = false;
    state.bonusChest.shotsThisWave = 0;
    state.bonusChest.spawnPlanned = false;
    state.bonusChest.plannedType = null;

    if (state.bonusChest.forceEveryWave) {
      state.bonusChest.spawnPlanned = true;
      state.bonusChest.plannedType = "chest";
      spawnBonusChest("cheat", "chest");
      return;
    }
    if (state.bonusChest.forceHeroEveryWave) {
      state.bonusChest.spawnPlanned = true;
      state.bonusChest.plannedType = "hero";
      spawnBonusChest("cheat", "hero");
      return;
    }

    const chestCandidate = Math.random() < BONUS_CHEST_SPAWN_CHANCE;
    const heroCandidate = Math.random() < BONUS_HERO_SPAWN_CHANCE;
    if (!chestCandidate && !heroCandidate) {
      return;
    }

    state.bonusChest.spawnPlanned = true;
    if (chestCandidate && heroCandidate) {
      state.bonusChest.plannedType = Math.random() < 0.5 ? "chest" : "hero";
      return;
    }
    state.bonusChest.plannedType = chestCandidate ? "chest" : "hero";
  }

  function recordWaveShotForBonusChest() {
    if (state.bossBattle.active || state.gameOver || state.betweenWaves || !state.started) {
      return;
    }
    state.bonusChest.shotsThisWave += 1;
    if (
      state.bonusChest.forceEveryWave ||
      state.bonusChest.active ||
      state.bonusChest.spawnedThisWave ||
      !state.bonusChest.spawnPlanned
    ) {
      return;
    }
    if (state.bonusChest.shotsThisWave >= BONUS_CHEST_MIN_SHOTS) {
      spawnBonusChest();
    }
  }

  function renderEnemies() {
    const track = getTrackGeometry();
    const swayAmplitude = state.visualStyle === VISUAL_STYLES.BASIC ? 5 : 2.2;
    const simpleMode = isSimpleMode();

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
    clearEnemyAmbientLoop();
    state.enemies = [];
    state.queuedSpawns = 0;
    clearBonusChest();
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
    recordWaveShotForBonusChest();
    const track = getTrackGeometry();
    let originX = track.width * 0.16;
    let originY = track.height * 0.50;
    const worldMetrics = getWorldSpaceMetrics();
    if (worldMetrics) {
      originX = sourceXToBattlefieldX(WORLD_SPACE_ANCHORS.projectileOriginX, worldMetrics);
      originY = sourceYToBattlefieldY(WORLD_SPACE_ANCHORS.projectileOriginY, worldMetrics);
    }
    originX = clamp(originX, 0, track.width);
    originY = clamp(originY - 50, 0, track.height);
    dom.tower?.classList.add("cast");
    playSfx("shot");

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
      playSfx("impact");
      enemyHitFx(target.screenX, target.screenY);

      if (target.hp <= 0) {
        state.score += 30 + state.wave * 7;
        state.coins += 1;
        saveProfile();
        removeEnemy(target);
      }

      updateHud();
    }, 240);
  }

  function triggerGameOver(message, options = {}) {
    if (state.gameOver) {
      return;
    }

    const title = options.title || l("Défaite", "Defeat");
    const feedbackText =
      options.feedbackText || l("Partie terminée. Clique sur Rejouer.", "Game over. Tap Play Again.");
    const feedbackKind = options.feedbackKind || "bad";

    state.gameOver = true;
    clearEnemyAmbientLoop();
    clearBonusChest();
    state.bossBattle.active = false;
    setBossVisibility(false);
    stopVictoryCelebration();
    syncBackgroundMusic();
    updateHud();
    state.scoreSubmitted = false;
    if (dom.gameOverTitle) {
      dom.gameOverTitle.textContent = title;
    }
    dom.gameOverText.textContent = message;
    dom.finalScoreText.textContent = `${l("Score final", "Final score")}: ${state.score}`;
    dom.scoreSaveFeedback.textContent = "";
    dom.playerNameInput.value = state.lastPlayerName || "";
    dom.playerNameInput.disabled = false;
    dom.saveScoreBtn.disabled = false;
    dom.scoreSubmit.classList.remove("hidden");
    renderLeaderboard();
    dom.gameOver.classList.remove("hidden");
    showFeedback(feedbackText, feedbackKind);
  }

  function clearCelebrationTimers() {
    if (state.celebration.rainIntervalId) {
      clearInterval(state.celebration.rainIntervalId);
      state.celebration.rainIntervalId = null;
    }
    if (state.celebration.stopTimeoutId) {
      clearTimeout(state.celebration.stopTimeoutId);
      state.celebration.stopTimeoutId = null;
    }
    if (state.celebration.finishTimeoutId) {
      clearTimeout(state.celebration.finishTimeoutId);
      state.celebration.finishTimeoutId = null;
    }
  }

  function stopVictoryCelebration() {
    clearCelebrationTimers();
    state.celebration.active = false;
    if (dom.bossRainLayer) {
      dom.bossRainLayer.innerHTML = "";
      dom.bossRainLayer.classList.add("hidden");
    }
    dom.bossVictoryBanner?.classList.add("hidden");
  }

  function setBossVisibility(isVisible) {
    dom.bossDragonImg?.classList.toggle("hidden", !isVisible);
    dom.bossPanel?.classList.toggle("hidden", !isVisible);
  }

  function setBossDefeatOverlayVisible(isVisible) {
    state.bossDefeatOverlayActive = isVisible;
    dom.bossDefeatOverlay?.classList.toggle("hidden", !isVisible);
  }

  function updateBossPanel() {
    if (!state.bossBattle.active) {
      setBossVisibility(false);
      return;
    }

    setBossVisibility(true);
    const currentStep = Math.min(state.bossBattle.requiredStreak, state.bossBattle.streak + 1);
    if (dom.bossProgressText) {
      dom.bossProgressText.textContent =
        state.locale === LOCALES.FR
          ? `Dragon : ${state.bossBattle.streak}/${state.bossBattle.requiredStreak} | Épreuve ${currentStep}/${state.bossBattle.requiredStreak}`
          : `Dragon: ${state.bossBattle.streak}/${state.bossBattle.requiredStreak} | Trial ${currentStep}/${state.bossBattle.requiredStreak}`;
    }
    const ratio = Math.max(
      0,
      Math.min(1, 1 - state.bossBattle.timeRemaining / state.bossBattle.timeLimit)
    );
    if (dom.bossFireFill) {
      dom.bossFireFill.style.width = `${ratio * 100}%`;
    }
    if (dom.bossTimerText) {
      dom.bossTimerText.textContent = `${state.bossBattle.timeRemaining.toFixed(1)}s`;
    }
  }

  function getBossCandidateOperations() {
    const selectedTables = state.selectedTables.length ? state.selectedTables : [...ALL_TABLES];
    const tables = selectedTables.filter((table) => !BOSS_BLOCKED_TABLES.has(table));
    const bossTables = tables.length
      ? tables
      : ALL_TABLES.filter((table) => !BOSS_BLOCKED_TABLES.has(table));
    const multiplierValues = BOSS_ALLOWED_MULTIPLIERS.filter(
      (value) => value <= MAX_MULTIPLIER_VALUE
    );

    const candidates = [];
    for (const a of bossTables) {
      for (const b of multiplierValues) {
        const key = multiplicationKey(a, b);
        const stats = state.multiplicationMastery[key] || { correct: 0, wrong: 0 };
        const attempts = stats.correct + stats.wrong;
        const notMastered = Math.max(0, MASTERY_TARGET - Math.min(MASTERY_TARGET, stats.correct));
        const weakness = notMastered + stats.wrong * 2.2 + (attempts === 0 ? 6 : 0);
        candidates.push({ a, b, key, weakness });
      }
    }

    return candidates.sort((left, right) => right.weakness - left.weakness);
  }

  function pickBossQuestion() {
    const sorted = getBossCandidateOperations();
    if (!sorted.length) {
      return {
        a: 12,
        b: 9,
        answer: computeOperationAnswer(12, 9),
        key: multiplicationKey(12, 9)
      };
    }

    const notUsed = sorted.filter((item) => !state.bossBattle.usedKeys.has(item.key));
    const pool = notUsed.length ? notUsed : sorted;
    const topSlice = pool.slice(0, Math.max(1, Math.min(8, pool.length)));
    const selected = topSlice[randomInt(0, topSlice.length - 1)];
    return {
      a: selected.a,
      b: selected.b,
      answer: computeOperationAnswer(selected.a, selected.b),
      key: selected.key
    };
  }

  function setBossQuestion() {
    const question = pickBossQuestion();
    state.bossBattle.usedKeys.add(question.key);
    state.question = { a: question.a, b: question.b, answer: question.answer };
    state.lastQuestionKey = question.key;
    state.inputBuffer = "";
    state.bossBattle.timeRemaining = state.bossBattle.timeLimit;
    dom.questionText.textContent = formatOperationPrompt(question.a, question.b);
    updateHud();
    updateBossPanel();
  }

  function failBossBattle(reasonText) {
    state.bossBattle.active = false;
    state.pendingChampion = false;
    setBossVisibility(true);
    state.combo = 0;
    state.betweenWaves = true;
    clearAllEnemies();
    setCastleFire(false);

    state.wave = BOSS_RETURN_WAVE;
    state.lives = 20;
    state.simpleMistakes = 0;
    state.question = null;
    state.inputBuffer = "";
    state.lastQuestionKey = "";

    updateHud();
    showFeedback(reasonText, "bad");
    setBossDefeatOverlayVisible(true);
  }

  function confirmBossDefeatReturn() {
    if (!state.bossDefeatOverlayActive) {
      return;
    }

    setBossDefeatOverlayVisible(false);
    setBossVisibility(false);
    state.betweenWaves = false;
    nextQuestion();
    setupWave();
  }

  function jumpToPreBossLevel() {
    if (!state.started || state.gameOver) {
      return;
    }

    clearAllEnemies();
    stopVictoryCelebration();
    state.bossBattle.active = false;
    state.pendingChampion = false;
    setBossVisibility(false);
    setBossDefeatOverlayVisible(false);

    state.wave = BOSS_RETURN_WAVE;
    state.lives = 20;
    state.simpleMistakes = 0;
    state.combo = 0;
    state.spawnCooldown = 0;
    state.betweenWaves = false;
    state.inputBuffer = "";
    state.lastQuestionKey = "";

    updateHud();
    showFeedback(
      `${l("Cheat activé : accès direct à", "Cheat enabled: direct access to")} ${getWaveLabel(BOSS_RETURN_WAVE)}.`,
      "good"
    );
    nextQuestion();
    setupWave();
  }

  function spawnVictoryDrop() {
    if (!dom.bossRainLayer) {
      return;
    }
    const styleAssets = getActiveStyleAssets();
    const enemyKeys = Object.keys(styleAssets.enemySrcs);
    const key = enemyKeys[randomInt(0, enemyKeys.length - 1)];
    const src = styleAssets.enemySrcs[key];
    if (!src) {
      return;
    }

    const img = document.createElement("img");
    img.className = "victory-drop";
    img.src = src;
    img.alt = "Ennemi battu";
    img.style.left = `${Math.random() * 92}%`;
    img.style.animationDuration = `${2.2 + Math.random() * 1.8}s`;
    img.style.opacity = `${0.62 + Math.random() * 0.35}`;
    dom.bossRainLayer.appendChild(img);
    setTimeout(() => img.remove(), 4300);
  }

  function startBossVictoryCelebration() {
    state.celebration.active = true;
    dom.bossVictoryBanner?.classList.remove("hidden");
    dom.bossRainLayer?.classList.remove("hidden");

    for (let index = 0; index < 8; index += 1) {
      spawnVictoryDrop();
    }

    state.celebration.rainIntervalId = setInterval(spawnVictoryDrop, 110);
    state.celebration.stopTimeoutId = setTimeout(() => {
      if (state.celebration.rainIntervalId) {
        clearInterval(state.celebration.rainIntervalId);
        state.celebration.rainIntervalId = null;
      }
    }, BOSS_VICTORY_CELEBRATION_MS - 300);

    state.celebration.finishTimeoutId = setTimeout(() => {
      stopVictoryCelebration();
      triggerVictory({ champion: true });
    }, BOSS_VICTORY_CELEBRATION_MS);
  }

  function completeBossBattle() {
    state.bossBattle.active = false;
    state.betweenWaves = true;
    state.pendingChampion = true;
    setBossDefeatOverlayVisible(false);
    setBossVisibility(false);
    showFeedback(l("Dragon vaincu. Célébration en cours.", "Dragon defeated. Celebration in progress."), "good");
    updateHud();
    startBossVictoryCelebration();
  }

  function startBossBattle() {
    clearAllEnemies();
    setCastleFire(false);
    setBossDefeatOverlayVisible(false);
    state.bossBattle.active = true;
    state.pendingChampion = false;
    state.bossBattle.streak = 0;
    state.bossBattle.requiredStreak = BOSS_REQUIRED_STREAK;
    state.bossBattle.timeLimit = BOSS_TIME_LIMIT_SECONDS;
    state.bossBattle.timeRemaining = BOSS_TIME_LIMIT_SECONDS;
    state.bossBattle.usedKeys = new Set();
    state.betweenWaves = true;
    banner(l("Boss final : Dragon", "Final Boss: Dragon"));
    showFeedback(
      isAdditionMode()
        ? l("5 additions parfaites, 5 secondes chacune.", "5 perfect additions, 5 seconds each.")
        : l(
            "5 multiplications parfaites, 5 secondes chacune.",
            "5 perfect multiplications, 5 seconds each."
          ),
      "bad"
    );
    setBossQuestion();
  }

  function isBossEnabledForCurrentStyle() {
    return state.visualStyle !== VISUAL_STYLES.BASIC;
  }

  function requestSettingsUnlock() {
    // Keep settings unlock intentionally challenging regardless of current operation mode.
    const a = 12;
    const multiplierCandidates = [6, 7, 8, 9];
    const b = multiplierCandidates[randomInt(0, multiplierCandidates.length - 1)];
    const expected = a * b;
    const answer = window.prompt(
      state.locale === LOCALES.FR
        ? `Sécurité réglages : ${a} x ${b} = ?`
        : `Settings safety check: ${a} x ${b} = ?`
    );
    if (answer === null) {
      showFeedback(l("Accès aux réglages annulé.", "Settings access cancelled."), "bad");
      return false;
    }

    const guess = Number.parseInt(String(answer).trim(), 10);
    if (guess !== expected) {
      showFeedback(l("Réponse incorrecte. Accès refusé.", "Incorrect answer. Access denied."), "bad");
      return false;
    }

    return true;
  }

  function triggerVictory(options = {}) {
    const championAwarded = isBossEnabledForCurrentStyle() && !!options.champion;
    state.pendingChampion = championAwarded;
    setBossVisibility(false);
    stopVictoryCelebration();
    triggerGameOver(l("Tu as traversé tous les mondes. Le château est sauvé.", "You crossed all worlds. The castle is safe."), {
      title: l("Victoire", "Victory"),
      feedbackText: l("Bravo, tu as terminé la campagne.", "Well done, you completed the campaign."),
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
    return (
      !state.started ||
      state.paused ||
      state.gameOver ||
      state.bossDefeatOverlayActive ||
      state.celebration.active ||
      hasBlockingSimpleAnimation
    );
  }

  function submitAnswer() {
    if (isInputLocked() || !state.question || state.inputBuffer.length === 0) {
      return;
    }

    const guess = Number.parseInt(state.inputBuffer, 10);
    if (guess === 999) {
      jumpToPreBossLevel();
      return;
    }

    if (state.bossBattle.active) {
      const currentQuestion = state.question;
      if (guess !== currentQuestion.answer) {
        recordAnswer(currentQuestion.a, currentQuestion.b, false);
        failBossBattle(
          state.locale === LOCALES.FR
            ? `Le dragon t'a battu. Retour en ${getWaveLabel(BOSS_RETURN_WAVE)}.`
            : `The dragon beat you. Returning to ${getWaveLabel(BOSS_RETURN_WAVE)}.`
        );
        return;
      }

      recordAnswer(currentQuestion.a, currentQuestion.b, true);
      state.combo += 1;
      state.bossBattle.streak += 1;
      const timeBonus = Math.round(state.bossBattle.timeRemaining * BOSS_SUCCESS_TIME_MULTIPLIER);
      const tableBonus = getTableComplexityBonus(currentQuestion.a) * 8;
      const streakBonus = state.bossBattle.streak * 14;
      const gained = BOSS_SUCCESS_SCORE_BASE + timeBonus + tableBonus + streakBonus;
      state.score += gained;
      showFeedback(
        state.locale === LOCALES.FR
          ? `Épreuve réussie +${gained} pts (${state.bossBattle.streak}/${state.bossBattle.requiredStreak}).`
          : `Trial cleared +${gained} pts (${state.bossBattle.streak}/${state.bossBattle.requiredStreak}).`,
        "good"
      );

      updateHud();
      if (state.bossBattle.streak >= state.bossBattle.requiredStreak) {
        completeBossBattle();
      } else {
        setBossQuestion();
      }
      return;
    }

    const target = getFrontEnemy();

    if (isSimpleMode() && !target) {
      showFeedback(l("Aucun ennemi à viser pour le moment.", "No enemy to target right now."), "");
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
          ? state.locale === LOCALES.FR
            ? `Parfait. Tir magique lancé. Bonus table ${state.question.a} : +${tableBonus}`
            : `Perfect. Magic shot fired. Table ${state.question.a} bonus: +${tableBonus}`
          : l("Parfait. Tir magique lancé.", "Perfect. Magic shot fired."),
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
          state.locale === LOCALES.FR
            ? `Oups. ${formatOperationSolution(state.question.a, state.question.b, state.question.answer)}. ${remaining} erreurs restantes.`
            : `Oops. ${formatOperationSolution(state.question.a, state.question.b, state.question.answer)}. ${remaining} errors left.`,
          "bad"
        );

        if (remaining <= 0) {
          beginSimpleAdvanceAnimation({
            moveToEnd: true,
            onComplete: () => {
              triggerScreenShake("heavy");
              triggerGameOver(
                l("4 erreurs : les ennemis entrent dans le château.", "4 errors: enemies break into the castle.")
              );
            }
          });
        } else {
          beginSimpleAdvanceAnimation();
        }
      } else {
        showFeedback(
          state.locale === LOCALES.FR
            ? `Oups. ${formatOperationSolution(state.question.a, state.question.b, state.question.answer)}`
            : `Oops. ${formatOperationSolution(state.question.a, state.question.b, state.question.answer)}`,
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

    if (state.inputBuffer === "888") {
      state.inputBuffer = "";
      openDebugModal();
    }

    if (state.inputBuffer === "555") {
      state.inputBuffer = "";
      state.bonusChest.forceEveryWave = !state.bonusChest.forceEveryWave;
      if (state.bonusChest.forceEveryWave) {
        state.bonusChest.forceHeroEveryWave = false;
      }
      if (
        state.bonusChest.forceEveryWave &&
        state.started &&
        !state.gameOver &&
        !state.betweenWaves &&
        !state.bossBattle.active
      ) {
        spawnBonusChest("cheat", "chest");
      }
      showFeedback(
        state.bonusChest.forceEveryWave
          ? l(
            "Cheat coffre activé : un coffre apparaît au début de chaque niveau.",
            "Chest cheat enabled: a chest appears at the start of every wave."
          )
          : l(
            "Cheat coffre désactivé.",
            "Chest cheat disabled."
          ),
        state.bonusChest.forceEveryWave ? "good" : ""
      );
    }

    if (state.inputBuffer === "444") {
      state.inputBuffer = "";
      state.bonusChest.forceHeroEveryWave = !state.bonusChest.forceHeroEveryWave;
      if (state.bonusChest.forceHeroEveryWave) {
        state.bonusChest.forceEveryWave = false;
      }
      if (
        state.bonusChest.forceHeroEveryWave &&
        state.started &&
        !state.gameOver &&
        !state.betweenWaves &&
        !state.bossBattle.active
      ) {
        spawnBonusChest("cheat", "hero");
      }
      showFeedback(
        state.bonusChest.forceHeroEveryWave
          ? l(
            "Cheat allié activé : un allié apparaît au début de chaque niveau.",
            "Ally cheat enabled: an ally appears at the start of every wave."
          )
          : l("Cheat allié désactivé.", "Ally cheat disabled."),
        state.bonusChest.forceHeroEveryWave ? "good" : ""
      );
    }

    if (state.inputBuffer === "777") {
      state.inputBuffer = "";
      state.coins += 999;
      state.bestWaveReached = Math.max(state.bestWaveReached, SHOP_MAX_UNLOCK_WAVE);
      saveProfile();
      updateHud();
      if (!dom.shopModal.classList.contains("hidden")) {
        renderShop();
      }
      showFeedback(
        l(
          "Cheat activé : +999 pièces d'or et prérequis boutique débloqués.",
          "Cheat enabled: +999 gold and shop progression requirements unlocked."
        ),
        "good"
      );
    }

    updateHud();
  }

  function setupWave() {
    refreshBestWaveReached();
    const enemyCount = getEnemyCountForWave();
    state.queuedSpawns = enemyCount;
    state.spawnCooldown = getSpawnIntervalForWave();
    state.betweenWaves = false;
    if (isSimpleMode()) {
      state.simpleMistakes = 0;
    }
    applyWorldTheme();
    updateTowerSkin();
    banner(state.locale === LOCALES.FR ? `Niveau ${state.wave}` : `Level ${state.wave}`);
    syncBackgroundMusic();
    syncEnemyAmbientSfx();
    prepareBonusChestForWave();

    if (isSimpleMode()) {
      const targets = generateSimpleEntryTargets(enemyCount);
      for (let index = 0; index < enemyCount; index += 1) {
        const progress = -0.24 - Math.random() * 0.18;
        const target = targets[index] ?? 0.18;
        createEnemy(progress, {
          simpleTargetProgress: target,
          simpleEntryDelay: index * 0.06,
          simpleEntrySpeed: 0.42 + Math.random() * 0.14
        });
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
    clearBonusChest();
    state.score += 40 + state.wave * 12;
    showFeedback(l("Vague nettoyée. Prépare-toi.", "Wave cleared. Get ready."), "good");
    updateHud();

    if (state.wave >= MAX_WAVES) {
      const localSessionId = state.sessionId;
      setTimeout(() => {
        if (state.gameOver || localSessionId !== state.sessionId) {
          return;
        }
        if (isBossEnabledForCurrentStyle()) {
          startBossBattle();
        } else {
          triggerVictory();
        }
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

    playSfx("enterDoor");
    state.lives -= 1;
    state.combo = 0;
    updateHud();

    if (state.lives <= 0) {
      triggerScreenShake("heavy");
      setCastleFire(true);
      triggerGameOver(l("Les ennemis ont brisé la porte du château.", "Enemies broke the castle gate."));
    } else {
      triggerScreenShake("small");
    }
  }

  function resetGame() {
    clearAllEnemies();
    setCastleFire(false);
    stopVictoryCelebration();
    setBossVisibility(false);
    setBossDefeatOverlayVisible(false);

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
    state.pendingChampion = false;
    state.simpleAdvanceAnimation = null;
    state.shakeTimeoutId = null;
    state.scoreSubmitted = false;
    state.lastQuestionKey = "";
    state.lastFrame = 0;
    state.sessionId += 1;
    state.bossBattle.active = false;
    state.bossBattle.streak = 0;
    state.bossBattle.requiredStreak = BOSS_REQUIRED_STREAK;
    state.bossBattle.timeLimit = BOSS_TIME_LIMIT_SECONDS;
    state.bossBattle.timeRemaining = BOSS_TIME_LIMIT_SECONDS;
    state.bossBattle.usedKeys = new Set();

    dom.gameOver.classList.add("hidden");
    if (dom.gameOverTitle) {
      dom.gameOverTitle.textContent = l("Défaite", "Defeat");
    }
    dom.finalScoreText.textContent = `${l("Score final", "Final score")}: 0`;
    dom.scoreSaveFeedback.textContent = "";
    dom.playerNameInput.disabled = false;
    dom.saveScoreBtn.disabled = false;
    dom.gameOverText.textContent = isSimpleMode()
      ? l("4 erreurs et les ennemis rentrent dans le château.", "4 errors and enemies storm the castle.")
      : l("Les gobelins ont passé ta défense.", "Goblins broke through your defense.");

    showFeedback(
      isSimpleMode()
        ? l(
          "Les ennemis avancent uniquement en cas d'erreurs.",
          "Enemies move forward only when you make mistakes."
        )
        : l("Mode normal : réponse correcte = tir magique.", "Normal mode: correct answer = magic shot."),
      ""
    );

    updateHud();
    updateBossPanel();
    applyWorldTheme();
    syncBackgroundMusic();
    nextQuestion();
    setupWave();
  }

  function refreshPauseState() {
    if (!state.started) {
      state.paused = false;
      syncBackgroundMusic();
      return;
    }

    const tablesOpen = !dom.tablesModal.classList.contains("hidden");
    const statsOpen = !dom.statsModal.classList.contains("hidden");
    const shopOpen = !dom.shopModal.classList.contains("hidden");
    const pauseOpen = !dom.pauseModal.classList.contains("hidden");
    const modeConfirmOpen = !dom.modeConfirmModal.classList.contains("hidden");
    const debugOpen = !dom.debugModal.classList.contains("hidden");
    state.paused = tablesOpen || statsOpen || shopOpen || pauseOpen || modeConfirmOpen || debugOpen;
    syncBackgroundMusic();
    syncEnemyAmbientSfx();
  }

  function closeModeConfirmModal() {
    dom.modeConfirmModal.classList.add("hidden");
    state.pendingModeChange = null;
    refreshPauseState();
  }

  function openModeConfirmModal(mode) {
    const modeLabel = mode === MODES.SIMPLE ? "Mode simple" : "Mode normal";
    const localizedModeLabel =
      mode === MODES.SIMPLE ? l("Mode simple", "Simple Mode") : l("Mode normal", "Normal Mode");
    state.pendingModeChange = mode;
    if (dom.modeConfirmText) {
      dom.modeConfirmText.textContent = state.locale === LOCALES.FR
        ? `${modeLabel} va démarrer une nouvelle partie. Continuer ?`
        : `${localizedModeLabel} will start a new game. Continue?`;
    }
    dom.pauseModal.classList.add("hidden");
    dom.tablesModal.classList.add("hidden");
    dom.shopModal.classList.add("hidden");
    dom.statsModal.classList.add("hidden");
    closeDebugModal();
    dom.modeConfirmModal.classList.remove("hidden");
    refreshPauseState();
  }

  function openShopModal() {
    closeModeConfirmModal();
    renderShop();
    dom.pauseModal.classList.add("hidden");
    dom.tablesModal.classList.add("hidden");
    dom.shopModal.classList.add("hidden");
    dom.statsModal.classList.add("hidden");
    closeDebugModal();
    dom.shopModal.classList.remove("hidden");
    refreshPauseState();
  }

  function closeShopModal() {
    dom.shopModal.classList.add("hidden");
    refreshPauseState();
  }

  function openTablesModal() {
    if (!requestSettingsUnlock()) {
      return;
    }

    closeModeConfirmModal();
    renderTablesGrid();
    updateVisualStyleButtons();
    dom.pauseModal.classList.add("hidden");
    dom.shopModal.classList.add("hidden");
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
    closeModeConfirmModal();
    renderLeaderboard();
    renderMasteryMatrix();
    dom.pauseModal.classList.add("hidden");
    dom.shopModal.classList.add("hidden");
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

    closeModeConfirmModal();
    dom.tablesModal.classList.add("hidden");
    dom.shopModal.classList.add("hidden");
    dom.statsModal.classList.add("hidden");
    closeDebugModal();
    dom.pauseModal.classList.remove("hidden");
    refreshPauseState();
  }

  function closePauseModal() {
    dom.pauseModal.classList.add("hidden");
    refreshPauseState();
  }

  async function forcePwaUpdate() {
    if (!("serviceWorker" in navigator)) {
      window.location.reload();
      return;
    }

    try {
      const registration = await navigator.serviceWorker.getRegistration();
      if (!registration) {
        window.location.reload();
        return;
      }

      let didReload = false;
      const reloadOnce = () => {
        if (didReload) return;
        didReload = true;
        window.location.reload();
      };

      navigator.serviceWorker.addEventListener("controllerchange", reloadOnce, { once: true });
      await registration.update();

      if (registration.waiting) {
        registration.waiting.postMessage({ type: "SKIP_WAITING" });
        setTimeout(reloadOnce, 1800);
        return;
      }

      if (registration.installing) {
        registration.installing.addEventListener("statechange", () => {
          if (registration.waiting) {
            registration.waiting.postMessage({ type: "SKIP_WAITING" });
          }
        });
        setTimeout(reloadOnce, 2200);
        return;
      }
    } catch (_) {
      // Fallback: if update fails, at least refresh the app.
    }

    window.location.reload();
  }

  function returnToTitleScreen() {
    clearAllEnemies();
    clearEnemyAmbientLoop();
    setCastleFire(false);
    stopVictoryCelebration();
    setBossVisibility(false);
    setBossDefeatOverlayVisible(false);

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
    state.pendingChampion = false;
    state.simpleAdvanceAnimation = null;
    state.lastQuestionKey = "";
    state.lastFrame = 0;
    state.sessionId += 1;
    state.bossBattle.active = false;
    state.bossBattle.streak = 0;
    state.bossBattle.requiredStreak = BOSS_REQUIRED_STREAK;
    state.bossBattle.timeLimit = BOSS_TIME_LIMIT_SECONDS;
    state.bossBattle.timeRemaining = BOSS_TIME_LIMIT_SECONDS;
    state.bossBattle.usedKeys = new Set();

    dom.pauseModal.classList.add("hidden");
    dom.tablesModal.classList.add("hidden");
    dom.shopModal.classList.add("hidden");
    dom.statsModal.classList.add("hidden");
    closeModeConfirmModal();
    closeDebugModal();
    dom.gameOver.classList.add("hidden");
    if (dom.gameOverTitle) {
      dom.gameOverTitle.textContent = l("Défaite", "Defeat");
    }
    dom.finalScoreText.textContent = `${l("Score final", "Final score")}: 0`;
    dom.scoreSaveFeedback.textContent = "";
    dom.playerNameInput.disabled = false;
    dom.saveScoreBtn.disabled = false;
    dom.questionText.textContent = formatOperationPrompt(6, 7);
    dom.titleScreen.classList.remove("hidden");

    updateHud();
    updateBossPanel();
    applyWorldTheme();
    syncBackgroundMusic();
    showFeedback(l("Choisis un mode puis lance la partie.", "Choose a mode then start the game."), "");
  }

  function startGame() {
    if (state.started) {
      return;
    }

    state.started = true;
    state.paused = false;
    dom.pauseModal.classList.add("hidden");
    dom.tablesModal.classList.add("hidden");
    dom.shopModal.classList.add("hidden");
    dom.statsModal.classList.add("hidden");
    closeModeConfirmModal();
    closeDebugModal();
    dom.titleScreen.classList.add("hidden");
    syncBackgroundMusic();
    resetGame();
  }

  function gameLoop(timestamp) {
    if (!state.lastFrame) {
      state.lastFrame = timestamp;
    }

    const dt = (timestamp - state.lastFrame) / 1000;
    state.lastFrame = timestamp;

    if (state.started && !state.paused && !state.gameOver) {
      if (state.bossDefeatOverlayActive) {
        renderEnemies();
        requestAnimationFrame(gameLoop);
        return;
      }

      if (state.bossBattle.active) {
        state.bossBattle.timeRemaining = Math.max(0, state.bossBattle.timeRemaining - dt);
        updateBossPanel();
        if (state.bossBattle.timeRemaining <= 0) {
          failBossBattle(
            state.locale === LOCALES.FR
              ? `Le feu du dragon a explosé. Retour en ${getWaveLabel(BOSS_RETURN_WAVE)}.`
              : `Dragon fire exploded. Returning to ${getWaveLabel(BOSS_RETURN_WAVE)}.`
          );
        }
        renderEnemies();
        requestAnimationFrame(gameLoop);
        return;
      }

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

          if (!state.simpleAdvanceAnimation) {
            if (enemy.simpleEntryDelay > 0) {
              enemy.simpleEntryDelay = Math.max(0, enemy.simpleEntryDelay - dt);
            } else if (enemy.progress < enemy.simpleTargetProgress) {
              enemy.progress = Math.min(
                enemy.simpleTargetProgress,
                enemy.progress + enemy.simpleEntrySpeed * dt
              );
            }
          }
        }
        processSimpleAdvanceAnimation(dt);
      }

      renderEnemies();
      checkWaveEnd();
    }

    syncEnemyAmbientSfx();
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
  dom.bossDefeatGoBtn?.addEventListener("click", confirmBossDefeatReturn);
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
      if (state.started && !state.gameOver) {
        openModeConfirmModal(mode);
        return;
      }
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

  dom.operationSelect?.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-operation]");
    if (!button) {
      return;
    }
    setOperation(button.dataset.operation || OPERATIONS.MULTIPLICATION);
  });

  dom.audioSfxToggleBtn?.addEventListener("click", () => {
    setAudioChannelEnabled("sfx", !state.audio.sfxEnabled);
  });
  dom.audioSfxVolumeSlider?.addEventListener("input", (event) => {
    setAudioChannelVolume("sfx", Number(event.target.value) / 100);
  });
  dom.audioMusicVolumeSlider?.addEventListener("input", (event) => {
    setAudioChannelVolume("music", Number(event.target.value) / 100);
  });

  dom.startBtn.addEventListener("click", startGame);
  dom.pauseBtn.addEventListener("click", openPauseModal);
  dom.openShopBtn?.addEventListener("click", openShopModal);
  dom.openTablesBtn.addEventListener("click", openTablesModal);
  dom.openStatsBtn.addEventListener("click", openStatsModal);
  dom.openShopInlineBtn.addEventListener("click", openShopModal);
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
  dom.closeShopBtn.addEventListener("click", closeShopModal);
  dom.resumeBtn.addEventListener("click", closePauseModal);
  dom.backTitleBtn.addEventListener("click", returnToTitleScreen);
  dom.pwaUpdateBtn?.addEventListener("click", forcePwaUpdate);
  dom.modeConfirmCancelBtn?.addEventListener("click", closeModeConfirmModal);
  dom.modeConfirmAcceptBtn?.addEventListener("click", () => {
    const mode = state.pendingModeChange;
    closeModeConfirmModal();
    if (mode && mode !== state.mode) {
      setMode(mode);
    }
  });
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

  dom.shopCategorySelect?.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-shop-category]");
    if (!button) {
      return;
    }

    const category = button.dataset.shopCategory;
    if (!Object.values(SHOP_CATEGORIES).includes(category)) {
      return;
    }

    state.shopCategory = category;
    saveProfile();
    renderShop();
  });

  dom.shopGrid?.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-shop-item-key]");
    if (!button || button.disabled) {
      return;
    }

    const itemKey = button.dataset.shopItemKey;
    if (!itemKey) {
      return;
    }
    buyOrEquipShopItem(itemKey);
  });

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
        showFeedback(l("Garde au moins une table active.", "Keep at least one table active."), "bad");
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
    showFeedback(l("Progression des tables réinitialisée.", "Table progress reset."), "");
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

    if (event.key === "Escape" && !dom.modeConfirmModal.classList.contains("hidden")) {
      closeModeConfirmModal();
      return;
    }

    if (event.key === "Escape" && !dom.shopModal.classList.contains("hidden")) {
      closeShopModal();
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

  const handleViewportResize = () => {
    dom.frame?.style.setProperty("--platform-upshift-y", `${getPlatformUpshiftY()}px`);
    updateWorldSpaceAnchors();
    renderEnemies();
    if (state.bonusChest.active && state.bonusChest.el) {
      const baseBonusSize = getEnemyDisplaySizePx();
      const chestSize =
        state.bonusChest.type === "hero"
          ? clamp(baseBonusSize * BONUS_HERO_SIZE_MULTIPLIER, 36, 144)
          : baseBonusSize;
      const position = getBonusChestSpawnPosition(chestSize, state.bonusChest.type || "chest");
      state.bonusChest.el.style.width = `${chestSize.toFixed(2)}px`;
      state.bonusChest.el.style.left = `${position.x.toFixed(2)}px`;
      state.bonusChest.el.style.top = `${position.y.toFixed(2)}px`;
    }
  };
  window.addEventListener("resize", handleViewportResize);
  window.visualViewport?.addEventListener("resize", handleViewportResize);

  loadProfile();
  loadDebugTuning();
  loadLeaderboard();
  preloadSfx();
  preloadMusic();
  syncBackgroundMusic();
  applyLocalizedStaticTexts();
  applyVisualStyle();
  renderDebugControls();
  applyDebugTuningToView();
  updateModeButtons();
  updateVisualStyleButtons();
  updateOperationButtons();
  updateHud();
  renderTablesGrid();
  renderShop();
  renderLeaderboard();
  renderMasteryMatrix();
  applyWorldTheme();
  updateBossPanel();
  showFeedback(l("Choisis un mode puis lance la partie.", "Choose a mode then start the game."), "");
  requestAnimationFrame(gameLoop);
})();
