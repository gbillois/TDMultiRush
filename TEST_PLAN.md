# Plan de test - MultipliRush TD

## 1) Objectif
Valider que le jeu fonctionne correctement avant et apres nettoyage de code/ressources, sans regression fonctionnelle visible.

## 2) Strategie globale
1. Capturer un baseline sur la version actuelle (branche stable).
2. Nettoyer sur une branche dediee (`codex/cleanup-resources`).
3. Rejouer exactement les memes tests.
4. Comparer les resultats baseline vs branche de nettoyage.

## 3) Environnement de test
1. Navigateur desktop: Chrome (dernier), Safari (dernier), Firefox (dernier).
2. Mobile: iOS Safari + Android Chrome (ou mode responsive + au moins 1 vrai appareil).
3. Lancement local:
```bash
cd /Users/gerome/Desktop/TDTable
python3 -m http.server 8000
```
4. URL: `http://localhost:8000`
5. Avant chaque run: vider `localStorage`, cache navigateur, et desinstaller le service worker si besoin.

## 4) Plan de test detaille

### A. Smoke test (bloquant)
1. Charger `index.html` sans erreur bloquante en console.
2. Cliquer `Lancer la partie`.
3. Repondre a 3 questions correctes et verifier:
   - le tir part,
   - le score augmente,
   - le jeu ne freeze pas.
4. Faire des erreurs volontaires jusqu'a perte:
   - ecran de fin visible,
   - bouton `Rejouer` fonctionnel.
5. Ouvrir/Fermer `Reglages`, `Stats`, `Boutique`, `Pause` sans blocage UI.

### B. Gameplay coeur
1. Mode `Normal`:
   - une bonne reponse declenche un tir,
   - progression de vague correcte.
2. Mode `Simple`:
   - verifier logique d'erreur/avancement specifique,
   - changement de mode affiche la confirmation et reset proprement la partie.
3. Vagues et progression:
   - compteur de vague et banniere coherents,
   - transitions de mondes sans assets manquants.
4. Boss:
   - apparition panel boss,
   - succes boss: victoire affichee,
   - echec boss: overlay defaite + retour niveau attendu.
5. Bonus:
   - coffre/ally apparaissent sans casser la boucle de jeu,
   - recompenses (pieces/vies) appliquees.

### C. Donnees persistantes (localStorage)
1. Changer tables actives, recharger la page, verifier conservation.
2. Jouer, modifier score/progression, recharger, verifier conservation.
3. Enregistrer un score leaderboard, verifier tri et limite top 10.
4. Reset progression des tables, verifier remise a zero.
5. Verifier qu'un `localStorage` corrompu ne casse pas le jeu (fallback propre).

### D. Boutique et skins
1. Ouvrir boutique en style `Castle` et `Fairy`.
2. Verifier categories `Tours`, `Chateaux`, `Projectiles`.
3. Cas achat impossible:
   - pas assez de pieces,
   - vague insuffisante.
4. Cas achat possible:
   - debit des pieces,
   - item debloque,
   - equipement applique visuellement.
5. Style `Basic`:
   - pas de logique boutique incompatible,
   - message de note style cohérent.

### E. Assets et ressources (critique pour cleanup)
1. Ouvrir DevTools Network et filtrer:
   - verifier absence de 404 sur `.png`, `.svg`, `.css`, `.js`, `.webmanifest`.
2. Verifier visuels de base:
   - tour,
   - chateau,
   - ennemis,
   - projectile,
   - dragon boss.
3. Refaire en changeant de style (`Basic`, `Castle`, `Fairy`).
4. Verifier casse de nom de fichier (ex: `.PNG` vs `.png`) sur macOS et si possible sur environnement Linux CI.

### F. PWA et cache
1. Verifier enregistrement du service worker (Application tab).
2. Recharger apres premiere visite: app toujours fonctionnelle.
3. Tester un hard refresh puis navigation offline:
   - shell charge,
   - pas d'ecran blanc.
4. Apres modif de version cache:
   - anciens caches purges,
   - nouveaux assets servis.

### G. UI/UX et accessibilite minimale
1. Desktop et mobile:
   - pas d'elements qui se chevauchent,
   - boutons principaux cliquables.
2. Clavier physique:
   - `0-9`, `Backspace`, `Delete`, `Enter` fonctionnent.
3. `Escape` ferme les modales attendues.
4. Verifier focus principal apres fermeture modales (pas de blocage interaction).

### H. Performance et stabilite
1. Session 10 minutes:
   - pas de degradation forte FPS,
   - pas de fuite memoire evidente.
2. Sur mobile:
   - pas de crash onglet,
   - interactions encore fluides en vague avancee.

## 5) Checklist de non-regression rapide (post-cleanup)
1. Aucun 404 reseau sur assets charges en partie.
2. Aucun `Uncaught` en console au lancement et pendant 3 vagues.
3. Sauvegarde/restauration `localStorage` OK.
4. Leaderboard: ajout score + tri OK.
5. Boutique: achat/equipement OK.
6. Boss: cycle succes + echec OK.
7. Service worker: install + offline shell OK.

## 6) Criteres Go / No-Go
1. Go:
   - 100% des tests bloquants (sections A, E, F) pass.
   - 0 bug critique (plantage, ecran blanc, perte de progression).
2. No-Go:
   - asset principal manquant,
   - regression gameplay coeur,
   - sauvegarde cassee,
   - comportement offline casse.

## 7) Rythme recommande pendant le cleanup
1. Petit lot de suppression/renommage.
2. Rejouer section A + E immediatement.
3. Commit.
4. Toutes les 3-5 modifications: rejouer A+B+C+F.
