Démarrer le script

Lorsque le document est prêt :
    Afficher message "Script chargé avec succès"

    Définir fonction `showSection(section)` :
        Masquer toutes les sections
        
        Si `section` est 'realisations' :
            Afficher les projets (Projets 1, 2, 3, 4, 5)
        Sinon si `section` est 'cv' :
            Afficher le CV avec compétences, diplômes, expériences
        Sinon :
            Afficher la section d'accueil

    Définir gestionnaire d'événement pour clic sur `#home-link` :
        Prévenir comportement par défaut
        Mettre à jour l'URL avec 'index.html'
        Appeler `showSection('home-section')`

    Définir gestionnaire d'événement pour clic sur `#show-realisations` :
        Prévenir comportement par défaut
        Mettre à jour l'URL avec 'index.html?page=realisations'
        Appeler `showSection('realisations')`

    Définir gestionnaire d'événement pour clic sur `#show-cv` :
        Prévenir comportement par défaut
        Mettre à jour l'URL avec 'index.html?page=cv'
        Appeler `showSection('cv')`

    Récupérer la section à partir de l'URL (`page` paramètre)
    Si `section` existe :
        Appeler `showSection(section)`
    Sinon :
        Appeler `showSection('home-section')`

    Définir fonction de validation de formulaire `validateForm()` :
        Initialiser `isValid` à vrai
        Vérifier chaque champ (prénom, nom, email, message)
        Si un champ est invalide, définir `isValid` à faux et afficher le message d'erreur
        
        Retourner `isValid`

    Définir gestionnaire d'événement pour soumission de `#contactForm` :
        Prévenir comportement par défaut
        Si `validateForm()` retourne vrai :
            Afficher message de succès et réinitialiser le formulaire
        Sinon :
            Afficher message d'erreur

Fin du script
