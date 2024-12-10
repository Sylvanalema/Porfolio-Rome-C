# Titre de l'issue :
Améliorer la section "À propos de moi"

Description :
La section "À propos de moi" du portfolio pourrait être enrichie pour mieux refléter mes compétences, ma personnalité et mon parcours. Actuellement, elle est trop basique et manque d'éléments visuels ou interactifs.

## Tâches à accomplir :

Ajouter une photo professionnelle ou une illustration représentative.
Inclure un court paragraphe sur mon parcours et mes objectifs professionnels.
Ajouter des icônes ou des liens vers mes réseaux sociaux (LinkedIn, GitHub, etc.).

    Rendre la section responsive pour une meilleure adaptation aux appareils mobiles.

## Critères d'acceptation :

    La section doit être esthétique et bien alignée avec le design général du site.
    Les informations doivent être claires et attrayantes.
    Les éléments interactifs doivent fonctionner correctement sur toutes les tailles d’écran.

Priorité :
Moyenne

Catégorie :
Amélioration

# Titre de l'issue :
Problème de configuration avec VS Code nécessitant une réinstallation et reconfiguration de Git

## Description :
J'ai rencontré un problème avec Visual Studio Code qui m'a obligé à le désinstaller et le réinstaller. Après la réinstallation, la configuration de Git a été réinitialisée, ce qui m'a contraint à reprogrammer mon user.name et mon user.email.

### Étapes pour reproduire :

    Utiliser Visual Studio Code normalement.
    Rencontrer un problème (erreur ou dysfonctionnement, à préciser si possible).
    Désinstaller VS Code pour tenter de résoudre le problème.
    Réinstaller VS Code.
    Observer que la configuration Git a été réinitialisée.

Résultat attendu :

    La configuration Git (comme user.name et user.email) devrait persister après une réinstallation de VS Code.

Résultat actuel :

    Après réinstallation de VS Code, la configuration Git a été réinitialisée, nécessitant une reconfiguration manuelle.

Tâches à accomplir :

Identifier pourquoi la configuration Git a été réinitialisée après la réinstallation de VS Code.
Documenter les étapes pour éviter ce problème à l’avenir.

    Ajouter une procédure pour reconfigurer Git rapidement après une réinstallation.

Critères d'acceptation :

    Une documentation claire est ajoutée dans le README ou un fichier spécifique pour résoudre ce type de problème.
    Le problème est mieux compris pour prévenir des erreurs similaires à l'avenir.

Priorité :
Basse à Moyenne (selon la fréquence du problème).

Catégorie :
Bug ou Documentation

Notes supplémentaires :

    Il pourrait être utile de vérifier si ce problème est lié à des paramètres globaux ou locaux de Git.
    Penser à vérifier les variables d'environnement liées à Git et VS Code.

# Problème de compilation SCSS en CSS et du lien Bootstrap qui ne fonctionne pas

## Description

J'ai rencontré un problème lors de la compilation de mes fichiers SCSS en CSS. De plus, l'intégration de Bootstrap via un lien CDN n'a pas fonctionné correctement, ce qui m'a obligé à enlever le lien pour résoudre l'affichage du projet.

## Détails du problème :

### 1. **Compilation SCSS en CSS** :
- Lorsque j'ai essayé de compiler mon fichier SCSS en CSS, je n'ai pas obtenu le résultat attendu. Aucune erreur n'a été retournée, mais le fichier CSS généré ne contient pas les styles que j'avais définis dans SCSS.
- **Solution temporaire** : J'ai dû enlever les styles SCSS et revenir aux fichiers CSS classiques pour que la page fonctionne correctement.

### 2. **Bootstrap via CDN** :
- J'ai essayé d'intégrer Bootstrap à l'aide d'un lien CDN, mais les styles n'ont pas été appliqués comme prévu. Aucune des classes de Bootstrap (comme `container`, `btn`, etc.) n'a eu d'effet.
- **Solution temporaire** : J'ai dû enlever le lien CDN de Bootstrap et revenir à une version locale ou utiliser une autre méthode d'intégration.

## Environnement de développement :
- **OS** : [Exemple : Windows 10, macOS, Linux]
- **Éditeur de code** : [Exemple : VS Code, Sublime Text, etc.]
- **Compilateur SCSS** : [Exemple : Node-sass, Dart-sass, etc.]
- **Version de Bootstrap** : [Exemple : Bootstrap 5.x]
  
## Étapes pour reproduire :
1. Essayer de compiler le fichier SCSS en CSS avec la commande appropriée.
2. Ajouter le lien CDN de Bootstrap dans le fichier HTML.
3. Observer que les styles SCSS ne sont pas appliqués et que Bootstrap ne fonctionne pas.

## Attendu :
- Le fichier SCSS devrait être compilé correctement en CSS.
- Bootstrap devrait être chargé via le lien CDN et appliquer les styles au projet.

## Résultat observé :
- Aucun style compilé depuis SCSS n'apparaît.
- Le lien CDN de Bootstrap ne fonctionne pas et les styles Bootstrap ne sont pas appliqués.
