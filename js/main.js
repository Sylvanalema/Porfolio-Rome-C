$(document).ready(function () {
    console.log("Script chargé avec succès !");

    // Fonction pour afficher une section
    function showSection(section) {
        console.log(`showSection appelé avec : ${section}`); // Debug

        // Masquer toutes les sections
        $('#home-section').hide(); // Cacher la section Accueil
        $('#dynamic-content').hide(); // Cacher le contenu dynamique

        // Afficher le contenu selon la section
        //section realisations
        if (section === 'realisations') {
            console.log("Affichage des réalisations");
            $('#dynamic-content').html(`
                <h2>Mes réalisations</h2>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Projet 1</h5>
                                <p class="card-text">Dans le cadre de ce projet, j'ai conçu sur Figma le wireframe d'un site fictif. Ce prototype comprend une page de connexion dédiée aux clients, une page de contact, une page présentant les produits, ainsi qu'une interface interne destinée à la gestion des produits</p>
                                <a href="asset/img/projet1.jpg" target="_blank">Voir mon premier projet</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Projet 2</h5>
                                <p class="card-text">Description de mon deuxième projet.</p>
                                <a href="asset/video/animaux.mp4" target="_blank">Voir mon deuxième projet</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Projet 3</h5>
                                <p class="card-text">Description de mon troisième projet.</p>
                                <a href="asset/video/projet-films.mp4" target="_blank">Voir mon troisième projet</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Projet 4</h5>
                                <p class="card-text">Description de mon quatrième projet.</p>
                                <a href="asset/video/les-artistes-peintres.mp4" target="_blank">Voir mon quatrième projet</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Projet 5</h5>
                                <p class="card-text">Pour ce projet, j'ai développé une page web en HTML intégrant une navigation fixe et responsive avec Bootstrap, des ancres pour un accès rapide aux sections (Accueil, Membres, Discographie, Agenda, Contact), ainsi qu'un carrousel d'images et des cartes Bootstrap organisées de manière responsive pour représenter les membres du groupe. J'ai également ajouté un tableau des dates de concert avec un design harmonisé au reste du site, incluant divers effets. Enfin, un formulaire avec des champs obligatoires et une validation d'adresse e-mail conforme au type HTML5 a été intégré, garantissant une expérience utilisateur fluide sur mobile.</p>
                                <a href="asset/video/ACDC.mp4" target="_blank">Voir mon cinquième projet</a>
                            </div>
                        </div>
                    </div>
                </div>
            `).show(); 
            //section cv
        } else if (section === 'cv') {
            console.log("Affichage du CV");
            $('#dynamic-content').html(`
                <div class="container d-flex justify-content-center align-items-center vh-100 text-light">
                    <div class="row w-100">
                        <div class="col-md-10 offset-md-1 p-4" style="background: rgba(0, 0, 0, 0.7); border-radius: 15px;">
                            <h2 class="text-center text-uppercase text-primary">Mon CV</h2>
                            <h3 class="text-uppercase text-warning mt-4">Compétences</h3>
                            <ul>
                                <li>Développement Front-End : HTML5, CSS3, JavaScript (Flexbox, Grid, animations, DOM, événements)</li>
                                <li>Développement Back-End : En cours d'acquisition</li>
                                <li>Gestion des versions : Git, GitHub, GitLab</li>
                                <li>Outils et Environnements : Visual Studio Code, Postman, Docker</li>
                                <li>Compétences Transversales : Gestion de projets Agile/Scrum (Trello), Analyse des besoins et conception (UML, wireframes)</li>
                                <li>Bureautique : Excel, Word, PowerPoint, Outlook</li>
                                <li>Outils créatifs : Canva, réseaux sociaux, newsletters</li>
                            </ul>
                            <h3 class="text-uppercase text-warning mt-4">Diplômes et Formations</h3>
                            <ul>
                                <li>Certification DWWM, Afpa Albi (Depuis septembre 2024)</li>
                                <li>BTS GPME, Purple Campus Albi (2022)</li>
                                <li>DAEU, Faculté d'Arles (2016)</li>
                                <li>BEP VAM, Jeanne d'Arc, Arles (2006)</li>
                            </ul>
                            <h3 class="text-uppercase text-warning mt-4">Expériences Professionnelles</h3>
                            <ul>
                                <li>Auto-entrepreneuse (Lisle-sur-Tarn, août 2023 - mars 2024) : Communication, réseaux sociaux, publicité</li>
                                <li>Responsable chez DDP (Arles, 2014 - 2016) : Gestion d'équipe, planning, stocks</li>
                                <li>Vendeuse chez Kiko (Marseille, 2011 - 2014)</li>
                                <li>Responsable remplaçante chez DenimStore (Montpellier, 2010 - 2011)</li>
                                <li>Responsable remplaçante chez Canon Shoes (Arles, 2009 - 2010)</li>
                            </ul>
                            <h3 class="text-uppercase text-warning mt-4">Atouts</h3>
                            <ul>
                                <li>Polyvalente</li>
                                <li>Esprit d'équipe</li>
                                <li>Dynamique</li>
                            </ul>
                            <div class="text-center mt-4">
                                <a href="asset/document/cv-Rome.pdf" target="_blank" class="btn btn-primary btn-lg">Voir mon CV complet</a>
                            </div>
                        </div>
                    </div>
                </div>
            `).show();
        } else {
            console.log("Affichage de la section Accueil");
            $('#home-section').show(); // Afficher Accueil
            $('#dynamic-content').hide(); // Cacher #dynamic-content
        }
    }
    // Gestion des clics sur les liens de la navbar
    $('#home-link').click(function (e) {
        e.preventDefault();
        console.log("Lien Accueil cliqué !");
        history.pushState({}, '', 'index.html'); // Met à jour l'URL
        showSection('home-section'); // Afficher la section Accueil
    });

    $('#show-realisations').click(function (e) {
        e.preventDefault();
        console.log("Lien Réalisations cliqué !");
        history.pushState({}, '', 'index.html?page=realisations'); // Met à jour l'URL
        showSection('realisations'); // Afficher "Réalisations"
    });

    $('#show-cv').click(function (e) {
        e.preventDefault();
        console.log("Lien CV cliqué !");
        history.pushState({}, '', 'index.html?page=cv'); // Met à jour l'URL
        showSection('cv'); // Afficher "CV"
    });

    // Afficher la bonne section au chargement de la page
    const urlParams = new URLSearchParams(window.location.search);
    const section = urlParams.get('page');
    if (section) {
        showSection(section); // Afficher la section correspondante
    } else {
        showSection('home-section'); // Afficher Accueil par défaut
    }
});

$(document).ready(function () {

    // Fonction de validation du formulaire
    function validateForm() {
        let isValid = true;

        // Réinitialiser les messages d'erreur
        $('.invalid-feedback').text('');
        $('#formResponse').text('');

        // Validation du champ prénom (max 20 caractères, non vide)
        const firstName = $('#firstName').val();
        if (firstName === '') {
            $('#firstNameError').text('Le prénom est requis.');
            isValid = false;
        } else if (firstName.length > 20) {
            $('#firstNameError').text('Le prénom ne peut pas dépasser 20 caractères.');
            isValid = false;
        }

        // Validation du champ nom (max 50 caractères, non vide)
        const lastName = $('#lastName').val();
        if (lastName === '') {
            $('#lastNameError').text('Le nom est requis.');
            isValid = false;
        } else if (lastName.length > 50) {
            $('#lastNameError').text('Le nom ne peut pas dépasser 50 caractères.');
            isValid = false;
        }

        // Validation du champ email (format d'email valide)
        const email = $('#email').val();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (email === '') {
            $('#emailError').text('L\'email est requis.');
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $('#emailError').text('L\'email doit être valide.');
            isValid = false;
        }

        // Validation du champ message (non vide)
        const message = $('#message').val();
        if (message === '') {
            $('#messageError').text('Le message ne peut pas être vide.');
            isValid = false;
        }

        return isValid;
    }

    // Lorsque le formulaire est soumis
    $('#contactForm').submit(function (e) {
        e.preventDefault(); // Empêche la soumission du formulaire

        // Valider le formulaire
        if (validateForm()) {
            // Si le formulaire est valide, afficher le message de confirmation
            $('#formResponse').html('<div class="alert alert-success">Merci, votre message a été envoyé !</div>');
            $('#contactForm')[0].reset(); // Réinitialiser le formulaire
        } else {
            // Si le formulaire n\'est pas valide, afficher un message d\'erreur
            $('#formResponse').html('<div class="alert alert-danger">Veuillez corriger les erreurs ci-dessus.</div>');
        }
    });

});
