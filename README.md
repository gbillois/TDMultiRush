# MultipliRush TD

MultipliRush TD est un jeu Tower Defense en HTML/CSS/JS pour apprendre les tables de multiplication.

## Concept

- Des vagues d'ennemis avancent vers le chateau.
- Chaque bonne reponse a une multiplication lance un tir magique.
- Le jeu propose un mode `Simple` et un mode `Normal`.
- Les tables peuvent etre configurees.
- Le systeme adapte les questions en fonction des tables moins maitrisees.

## Fonctionnalites

- Interface mobile style fantasy/cartoon
- Ecran titre avant lancement
- Selection des tables (1 a 12)
- Memorisation locale de la progression des tables
- Leaderboard local avec nom du joueur
- Effets visuels: projectiles, secousses, feu du chateau
- Variations d'ennemis selon les vagues

## Lancer le jeu

Aucune installation n'est necessaire.

1. Ouvrir `index.html` dans un navigateur moderne.
2. Cliquer sur `Lancer la partie`.

Option pratique (serveur local Python):

```bash
cd /Users/gerome/Desktop/TDTable
python3 -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## Controles

- Clavier numerique a l'ecran
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

Ce projet est publie sous licence MIT. Voir `LICENSE`.
