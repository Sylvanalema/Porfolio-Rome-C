# Algorithme du projet Portfolio

## Initialisation de la page :
- Initialiser la page web avec jQuery.
    - Cacher les sections dynamiques (réalisations, CV, contact).
    - Afficher la section d'accueil par défaut.
  
## Fonction d'affichage des réalisations :
1. Quand l'utilisateur clique sur le lien "Réalisations" :
    - Empêcher l'action par défaut du lien.
    - Cacher le contenu principal de la page (accueil).
    - Afficher les réalisations dynamiquement dans la section dédiée.

## Fonction d'affichage du CV :
2. Quand l'utilisateur clique sur le lien "CV" :
    - Empêcher l'action par défaut du lien.
    - Cacher le contenu principal de la page (accueil).
    - Afficher le CV dynamiquement dans la section dédiée.

## Fonction d'affichage du contact :
3. Quand l'utilisateur clique sur le lien "Contact" :
    - Afficher la section "Contact" avec un formulaire dynamique.
    - L'utilisateur peut remplir et envoyer le formulaire.
  
## Fonction de retour à l'accueil :
4. Quand l'utilisateur clique sur le lien "Accueil" :
    - Cacher toutes les sections dynamiques.
    - Réafficher le contenu principal de la page d'accueil.

## Fonction de gestion des URL :
- Quand une URL spécifique est visitée (ex: `/contact.html`), afficher la section correspondante (Contact).
