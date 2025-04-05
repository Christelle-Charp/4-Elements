


// --------- Fonctions pour inverser les images ------------

let imgsFeu = document.querySelectorAll(".img-feu");

imgsFeu.forEach(function(imgFeu){
    imgFeu.addEventListener("click", function() {
        let big = imgFeu.querySelector(".big");
        let small = imgFeu.querySelector(".small");

        big.classList.remove('big');
        big.classList.add('small');

        small.classList.remove('small');
        small.classList.add('big');
    });
});



let imgsAir = document.querySelectorAll(".img-air");

imgsAir.forEach(function(imgAir){
    imgAir.addEventListener("click", function() {
        let big = imgAir.querySelector(".big");
        let small = imgAir.querySelector(".small");

        big.classList.remove('big');
        big.classList.add('small');

        small.classList.remove('small');
        small.classList.add('big');
    });
});

let imgsTerre = document.querySelectorAll(".img-terre");

imgsTerre.forEach(function(imgTerre){
    imgTerre.addEventListener("click", function() {
        let big = imgTerre.querySelector(".big");
        let small = imgTerre.querySelector(".small");

        big.classList.remove('big');
        big.classList.add('small');

        small.classList.remove('small');
        small.classList.add('big');
    });
});

let imgsEau = document.querySelectorAll(".img-eau");

imgsEau.forEach(function(imgEau){
    imgEau.addEventListener("click", function() {
        let big = imgEau.querySelector(".big");
        let small = imgEau.querySelector(".small");

        big.classList.remove('big');
        big.classList.add('small');

        small.classList.remove('small');
        small.classList.add('big');
    });
});


//------------les 2 fonctions suivantes permettent de gérer le scroll des carrousels-----------------
//Utilisation d'une vérification si l'élément est présent sur la page pour ne pas bloquer l'execution des autres
// fonctions si absent
let prev = document.querySelector(".prev");
if (prev) {
    prev.addEventListener("click", function () {
        document.querySelectorAll(".carrousel-box").scrollBy({
            left: -100,
            behavior: "smooth" 
        });
    });
};
let next = document.querySelector(".next");
if (next) {
    next.addEventListener("click", function () {
        document.querySelectorAll(".carrousel-box").scrollBy({
            left: 100, 
            behavior: "smooth" 
        });
    });
};

//--------------Fonction pour afficher formulaire -----------------
let containerModals = document.getElementById("containerModals");


/*function fermerModal() {
    containerModals.style.display = "none";
}*/

/*document.querySelectorAll(".reservation").forEach(function(element){
    element.addEventListener("click", function(){
        fetch("pages/form.html")
            .then(function(reponse) {
                if (!reponse.ok) {
                    throw new Error("Erreur : le formulaire n’a pas pu être chargé.");
                }
                console.log("formulaire chargé");
                return reponse.text();
            })

            .then(function(form){
                containerModals.innerHTML = form;
                console.log(form);

                // ---- Ecoute des évenements sur le formulaire----------

                //---------- Pour toggle -------------
                //---------- diet------------
                let dietSection = document.getElementById("dietSection");
                let breakfastCheckbox = document.getElementById("breakfast");
                let lunchCheckbox = document.getElementById("lunch");
                let dinnerCheckbox = document.getElementById("dinner");
                let ponctuelCheckbox = document.getElementById("ponctuel");

                if (breakfastCheckbox || lunchCheckbox || dinnerCheckbox || ponctuelCheckbox) {
                    document.getElementById("breakfast").addEventListener("change", toggleDiet);
                    document.getElementById("lunch").addEventListener("change", toggleDiet);
                    document.getElementById("dinner").addEventListener("change", toggleDiet);
                    document.getElementById("ponctuel").addEventListener("change", toggleDiet);
                };
                //-------------Allergy--------------
                let allergySection = document.getElementById("allergySection");
                if (breakfastCheckbox || lunchCheckbox || dinnerCheckbox || ponctuelCheckbox) {
                    document.getElementById("breakfast").addEventListener("change", toggleAllergy);
                    document.getElementById("lunch").addEventListener("change", toggleAllergy);
                    document.getElementById("dinner").addEventListener("change", toggleAllergy);
                    document.getElementById("ponctuel").addEventListener("change", toggleAllergy);
                };

                //--------- Pour fermer -------------
                let btnClose = document.getElementById("btnClose");
                let btnCancel = document.getElementById("btnCancel");

                if (btnCancel) {
                    btnCancel.addEventListener("click", closeForm);
                };

                if (btnClose) {
                    btnClose.addEventListener("click", closeForm);
                };

                
            })

            .catch(function(error) {
                // On affiche l'erreur dans la console du navigateur (F12 > Console)
                console.error("Erreur : " + error.message);
              });
    });

    
});*/

//---------Fonctions pour fermer formulaire ------
let btnClose = document.getElementById("btnClose");
let btnCancel = document.getElementById("btnCancel");

if (btnCancel) {
    btnCancel.addEventListener("click", closeForm);
};

if (btnClose) {
    btnClose.addEventListener("click", closeForm);
};

function closeForm () {
    document.querySelector(".modal-booking").style.display = "none";
};



// -----------Fonctions pour faire apparaitre les infos de régime alimentaire:------------------
//Utilisation d'une vérification si l'élément est présent sur la page pour ne pas bloquer l'execution des autres
// fonctions si absent
let dietSection = document.getElementById("dietSection");
let breakfastCheckbox = document.getElementById("breakfast");
let lunchCheckbox = document.getElementById("lunch");
let dinnerCheckbox = document.getElementById("dinner");
let ponctuelCheckbox = document.getElementById("ponctuel");

function toggleDiet () {

    let dietSection = document.getElementById("dietSection");
    let breakfastCheckbox = document.getElementById("breakfast");
    let lunchCheckbox = document.getElementById("lunch");
    let dinnerCheckbox = document.getElementById("dinner");
    let ponctuelCheckbox = document.getElementById("ponctuel");
    
    if (breakfastCheckbox.checked || lunchCheckbox.checked || dinnerCheckbox.checked || ponctuelCheckbox.checked) {
        dietSection.style.display = "block";
    } else {
        dietSection.style.display = "none";
    }

};

if (breakfastCheckbox || lunchCheckbox || dinnerCheckbox || ponctuelCheckbox) {
    document.getElementById("breakfast").addEventListener("change", toggleDiet);
    document.getElementById("lunch").addEventListener("change", toggleDiet);
    document.getElementById("dinner").addEventListener("change", toggleDiet);
    document.getElementById("ponctuel").addEventListener("change", toggleDiet);
};

// -----------Fonctions pour faire apparaitre les infos de restrictions alimentaires:------------------
//Utilisation d'une vérification si l'élément est présent sur la page pour ne pas bloquer l'execution des autres
// fonctions si absent
let allergySection = document.getElementById("allergySection");

function toggleAllergy () {
    
    if (breakfastCheckbox.checked || lunchCheckbox.checked || dinnerCheckbox.checked || ponctuelCheckbox.checked) {
        allergySection.style.display = "block";
    } else {
        allergySection.style.display = "none";
    }

};

if (breakfastCheckbox || lunchCheckbox || dinnerCheckbox || ponctuelCheckbox) {
    document.getElementById("breakfast").addEventListener("change", toggleAllergy);
    document.getElementById("lunch").addEventListener("change", toggleAllergy);
    document.getElementById("dinner").addEventListener("change", toggleAllergy);
    document.getElementById("ponctuel").addEventListener("change", toggleAllergy);
};

//---------------------------------Fonctions pour faire apparaitre type d'hébergement--------------
let lodging = document.getElementById("lodging");
let ChoiceFeu = document.getElementById("ChoiceFeu");
let ChoiceOther = document.getElementById("ChoiceOther");

function toggleRoom (){
    let hotel = document.getElementById("hotel").value;
    let roomFeu = document.getElementById("roomFeu").value;
    let roomOther = document.getElementById("roomOther").value;
    if (hotel === "feu") {
        ChoiceFeu.style.display = "flex";
        ChoiceOther.style.display = "none";
    } 
    if (hotel === "terre" || hotel === "eau" || hotel === "air") {
        ChoiceFeu.style.display = "none";
        ChoiceOther.style.display = "flex";
    }
};

if(lodging) {
    document.getElementById("hotel").addEventListener("change", toggleRoom);
};


//--------- Fonction qui s'appliquer au moment du click sur le bouton réserver du formulaire ---------------
let bookingForm = document.getElementById("booking-form");
if (bookingForm){
    bookingForm.addEventListener("submit", function(e){
        e.preventDefault(); // Empeche la page de se recharger
    
        // Récupérer les valeurs - Supprimer les espaces avec trim()
    
        let firstname = document.getElementById("firstname").value.trim(); // trim 
        // est une fonction native de js pour supprimer les espaces
        let name = document.getElementById("name").value.trim();
        let nbStreetValue = document.getElementById("nbStreet").value.trim();
        let nbStreet = parseInt(nbStreetValue);
        let street = document.getElementById("street").value.trim();
        let cpValue = document.getElementById("cp").value.trim();
        let cp = parseInt(cpValue);
        let city = document.getElementById("city").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let nbPersonneValue = document.getElementById("nbPersonne").value;
        let nbPersonne = parseInt(document.getElementById("nbPersonne").value);
        let arrival = new Date(document.getElementById("arrival").value);
        let departure = new Date(document.getElementById("departure").value);
        let driverCheckbox = document.getElementById("driver").checked;
        let visiteCheckbox = document.getElementById("visite").checked;
        let diet = document.getElementById("diet").value;
        let allergy = document.getElementById("allergy").value;
        let hotel = document.getElementById("hotel").value;
        let roomFeu = document.getElementById("roomFeu").value;
        let roomOther = document.getElementById("roomOther").value;

        //Initialiser le tableau d'erreurs à 0
        let errors = [];
        
        //Créer les regex pour le mail et le téléphone
        let emailRegex = /^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
        let phoneRegex = /^[0-9\s-/]{10,14}$/;

        //Faire les vérifications sur le nombre de caractères
    
        if(firstname.length < 2 || firstname.length > 50) errors.push({champs: "firstname", message: "Prénom invalide (2 à 50 caractères)"});
        if(name.length < 2 || name.length > 50) errors.push({champs: "name", message: "Nom invalide (2 à 50 caractères)"});
        if(nbStreetValue.length < 1 || nbStreetValue > 5) errors.push({champs: "nbStreet", message: "N° de rue invalide "});
        if(street.length < 2 || street.length > 150) errors.push({champs: "street", message: "Nom de rue invalide "});
        if(cpValue.length != 5 ) errors.push({champs: "cp", message: "Code postal invalide "});
        if(city.length < 5 || city.length > 100) errors.push({champs: "city", message: "Ville invalide "});
        if (!emailRegex.test(email)) errors.push({champs: "email", message: "Format d'email invalide "});
        if (!phoneRegex.test(phone)) errors.push({champs: "phone", message: "Format de téléphone invalide "});
        if(hotel === "choix") errors.push({champs: "hotel", message: "Merci de choisir un hôtel"});
        if (nbPersonneValue < 1 || nbPersonneValue > 2) errors.push({champs: "nbPersonne", message: "Nombre de voyageurs incorrect (1 à 2 personnes)"});
        if(arrival == "Invalid Date" || departure == "Invalid Date" || arrival >= departure) errors.push({champs: "dates", message: "Dates invalides"});

        //Calcul du prix
        const oneDay = 24 * 60 *60 * 1000;
        let nights = Math.round((departure - arrival) / oneDay);
        let total = 0;
        let optionSelect = "";
        let optionSelectBox = document.createElement("div");
        optionSelectBox.classList.add("select-box");
        
        //Prix selon logement
        if(roomFeu === "igloo") total += 500 * nights * nbPersonne;
        if(roomFeu === "suite") total += 850 * nights * nbPersonne;

        //Chauffeur
        if (document.getElementById("driver").checked) {
            total += 11 * nights;
            optionSelect += `<p>1 chauffeur</p>`;
        };

        //Visite guidée
        if (document.getElementById("visite").checked) {
            total += 20;
            optionSelect += `<p>1 visite guidée</p>`;
        }; 

        //Petit Déjeuner
        if (document.getElementById("breakfast").checked) {
            total += 15 * nights * nbPersonne;
            optionSelect += `<p>${nights * nbPersonne} petits déjeuners</p>`;
        };

        //Déjeuner
        if (document.getElementById("lunch").checked) {
            total += 25 * nights * nbPersonne;
            optionSelect += `<p>${nights * nbPersonne} déjeuners</p>`;
        };

        //Diner
        if (document.getElementById("dinner").checked) {
            total += 25 * nights * nbPersonne;
            optionSelect += `<p>${nights * nbPersonne} diners</p>`;
        };

        // diet
        if (breakfastCheckbox.checked || lunchCheckbox.checked || dinnerCheckbox.checked || ponctuelCheckbox.checked ) {
            optionSelect += `<p>Vous nous avons signalé une préférence alimentaire: ${diet}</p>`;
        }

        // allergy
        if (breakfastCheckbox.checked || lunchCheckbox.checked || dinnerCheckbox.checked || ponctuelCheckbox.checked ) {
            optionSelect += `<p>Vous nous avons signalé une restriction alimentaire: ${allergy}</p>`;
        }

        optionSelectBox.innerHTML = optionSelect;

        // résumé à afficher
        let summaryBox = document.createElement("div");
        summaryBox.classList.add("summary-box");
        summaryBox.innerHTML = `
                <h3>Votre reservation</h3>
                <div>
                    <h4>Récapitulatif de vos coordonnées</h4>
                    <p>Votre nom: ${name}</p>
                    <p>Votre prénom: ${firstname}</p>
                    <p>Votre adresse: ${nbStreet} ${street} ${cp} ${city}</p>
                    <p>Votre téléphone: ${phone}</p>
                    <p>Votre email: ${email}</p>
                </div>
                <div>
                    <h4>Récapitualtif de votre réservation</h4>
                    <p>Hôtel choisi: ${hotel}</p>
                    <p>Type de chambre: ${roomFeu}</p>
                    <p>Nombre de personnes: ${nbPersonne}</p>
                    <p>Vos Dates: du ${arrival.toLocaleDateString()} au ${departure.toLocaleDateString()}</p>
                    <p><span>Montant total estimé: ${total}€ incluant:</span></p>
                </div>
        `
        let cta = document.createElement("div");
        cta.classList.add("cta");
        cta.innerHTML = `
        <button onclick="closeFacture()" class="reset-btn" type="button">Modifier</button>
        <button onclick="openPayement()"class="primary-btn" type="button">Confirmer</button>
        `

        let summaryContainer = document.getElementById("summaryContainer");
        summaryContainer.innerHTML = "";

        //Je réinitialise à vide toutes les box erreur avec une boucle sur le tableau
        document.querySelectorAll(".error-box").forEach(function(box){
            box.innerHTML = "";
        });

        //Je parcours le fichier errors et je met chaque erreur si présente dans la bonne box
        errors.forEach(function(error){
            let errorBox = document.getElementById(error.champs + "Error"); 
            //cette partie permet de créer une variable pour chacune de mes box error
            // sans répéter la fonction à chaque fois
            if(errorBox) {
                errorBox.innerHTML = error.message;
            } 
        });

        if (errors.length === 0) {
            summaryContainer.appendChild(summaryBox);
            summaryContainer.appendChild(optionSelectBox);
            summaryContainer.appendChild(cta);
            document.querySelector(".modal-facture").style.display = "block";
            document.querySelector(".modal-booking").style.display = "none";

        };

    })

    function closeFacture() {
        document.querySelector(".modal-facture").style.display = "none";
        document.querySelector(".modal-booking").style.display = "block";
    }

    function openPayement() {
        document.querySelector(".modal-facture").style.display = "none";
        document.querySelector(".modal-payement").style.display = "block";
        let payementBox = document.getElementById("payementBox");
        payementBox.innerHTML = `
            <h3>Reservation confirmée!</h3>
            <a class="primary-btn" href="../index.html"title="Une aventure sensorielle luxueuse autour des quatres éléments Terre, Air, Eau et Feu">Retour à l'accueil</a>
        `
    }

    function retourAccueil() {
        document.querySelector(".modal-payement").style.display = "none";
        bookingForm.reset();
        document.querySelector(".modal-booking").style.display = "none";
        payementBox.innerHTML = "";
    }

}

// ------------ Fonction pour afficher le menu Burger --------------------
let burger = document.querySelector(".burger");
let menu = document.querySelectorAll(".menu");
let header = document.querySelector("header");

//Utilisation d'une vérification si l'élément est présent sur la page pour ne pas bloquer l'execution des autres
// fonctions si absent
if (burger) {
    burger.addEventListener("click", function(e){
        e.preventDefault();
        burger.classList.toggle('active');
        header.classList.toggle('open-burger');
        menu.forEach(function(item) {
            item.classList.toggle('menu-burger');
        });
    });
};
    