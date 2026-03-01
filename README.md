# MultipliRush TD

MultipliRush TD est un jeu Tower Defense en HTML/CSS/JS pour apprendre les tables de multiplication.

## Concept

- Des vagues d'ennemis avancent vers le château.
- Chaque bonne réponse à une multiplication lance un tir magique.
- Le jeu propose un mode `Simple` et un mode `Normal`.
- Les tables peuvent être configurées.
- Le système adapte les questions en fonction des tables moins maîtrisées.

## Fonctionnalités

- Interface mobile style fantasy/cartoon
- Écran titre avant lancement
- Sélection des tables (1 à 12)
- Mémorisation locale de la progression des tables
- Leaderboard local avec nom du joueur
- Effets visuels : projectiles, secousses, feu du château
- Variations d'ennemis selon les vagues

## Lancer le jeu

Aucune installation n'est nécessaire.

1. Ouvrir `index.html` dans un navigateur moderne.
2. Cliquer sur `Lancer la partie`.

Option pratique (serveur local Python):

```bash
cd /Users/gerome/Desktop/TDTable
python3 -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## Tests automatises (Web, iPhone, iPad)

Le projet inclut des tests E2E Playwright avec 3 cibles:

1. `web-classic` (desktop Chrome)
2. `iphone` (emulation iPhone + moteur WebKit)
3. `ipad` (emulation iPad + moteur WebKit)

### Installation

```bash
cd /Users/gerome/Desktop/TDTable
npm install
npm run test:e2e:install
```

### Execution

```bash
npm run test:e2e
```

Execution ciblee (exemple iPhone):

```bash
npx playwright test --project=iphone
```

### CI

Un workflow GitHub Actions est ajoute dans:

- `.github/workflows/e2e.yml`

Il lance automatiquement les tests Playwright sur:

1. `web-classic`
2. `iphone`
3. `ipad`

## Contrôles

- Clavier numérique à l'écran
- Clavier physique: `0-9`, `Backspace`, `Delete`, `Enter`

## Structure du projet

```text
TDTable/
  index.html
  styles.css
  game.js
  assets/
```

## Stockage local

Le jeu utilise `localStorage` pour:

- Profil et progression des tables
- Leaderboard local
- Dernier nom joueur

## Licence

Ce projet est publié sous licence MIT. Voir `LICENSE`.
