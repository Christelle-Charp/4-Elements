
// ------------ Fonction pour afficher le menu Burger --------------------
let burger = document.querySelector(".burger");
let menu = document.querySelectorAll(".menu");
//Utilisation d'une vérification si l'élément est présent sur la page pour ne pas bloquer l'execution des autres
// fonctions si absent
if (burger) {
    burger.addEventListener("click", function(e){
        e.preventDefault();
        burger.classList.toggle('active');
        menu.forEach(function(item) {
            item.classList.toggle('menu-burger');
        });
    });
};


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
function afficherFormulaire () {
    containerModals.style.display = "block";
    
    containerModals.innerHTML = `
    <div class="modal-booking">
            <div class="container-form">
                <button onclick="fermerModal()" id="btnClose" class="close">X</button>
                <form id="booking-form">
                    <h3>Réservation</h3>
                    <div class="customer">
                        <h4>Vous</h4>
                        <div class="name">
                            <div class="label-align">
                                <label for="prenom">Prénom :</label>
                                <input type="text" name="prenom" id="firstname">
                                <div id="firstnameError" class="error-box"></div>
                            </div>
                            <div class="label-align">
                                <label for="nom">Nom :</label>
                                <input type="text" name="nom" id="name">
                                <div id="nameError" class="error-box"></div>
                            </div>
                        </div>
                        <div class="adress">
                            <div class="align">
                                <div class="label-align">
                                    <label for="nbStreet">Numero de rue :</label>
                                    <input type="number" name="nbStreet" id="nbStreet">
                                    <div id="nbStreetError" class="error-box"></div>
                                </div>
                                <div class="label-align">
                                    <label for="street">Rue :</label>
                                    <input type="text" name="street" id="street">
                                    <div id="streetError" class="error-box"></div>
                                </div>
                            </div>
                            <div class="align">
                                <div class="label-align">
                                    <label for="cp">Code postal :</label>
                                    <input type="number" name="cp" id="cp">
                                    <div id="cpError" class="error-box"></div>
                                </div>
                                <div class="label-align">
                                    <label for="city">Ville :</label>
                                    <input type="text" name="city" id="city">
                                    <div id="cityError" class="error-box"></div>
                                </div>
                            </div>
                        </div>
                        <div class="contact">
                            <div class="label-align">
                                <label for="email">Email :</label>
                                <input type="email" name="email" id="email">
                                <div id="emailError" class="error-box"></div>
                            </div>
                            <div class="label-align">
                                <label for="phone">Telephone :</label>
                                <input type="text" name="phone" id="phone">
                                <div id="phoneError" class="error-box"></div>
                            </div>
                        </div>
                    </div>
                    <div id="lodging" class="lodging">
                        <h4>Votre hebergement</h4>
                        <div class="align">
                            <div class="hotel label-align">
                                <label for="hotel">Choisir un hotel :</label>
                                    <select name="hotel" id="hotel">
                                        <option value="choix">Votre Hotel</option>
                                        <option value="feu">Hôtel Feu</option>
                                        <option value="terre">Hôtel Terre</option>
                                        <option value="eau">Hôtel Eau</option>
                                        <option value="air">Hôtel Air</option>
                                    </select>
                                
                                <div id="hotelError" class="error-box"></div>
                            </div>
                            <div id="ChoiceFeu" class="room label-align" style="display:none;">
                                <label for="roomFeu">Choisir un logement :</label>
                                    <select name="roomFeu" id="roomFeu">
                                        <option value="igloo">Igloo privé</option>
                                        <option value="suite">Suite Laponne</option>
                                    </select>
                                
                                <div id="roomFeuError" class="error-box"></div>
                            </div>
                            <div id="ChoiceOther" class="room label-align" style="display:none;">
                                <label for="roomOther">Choisir un logement :</label>
                                    <select name="roomOther" id="roomOther">
                                        <option value="chambre">Chambre</option>
                                        <option value="suite">Suite</option>
                                    </select>
                                
                                <div id="roomOther" class="error-box"></div>
                            </div>
                        </div>
                        <div class="nbCustumer label-align">
                            <label for="nb-personne">Nbre de personne :</label>
                            <input type="number" name="nb-personne" id="nbPersonne">
                            <div id="nbPersonneError" class="error-box"></div>
                        </div>
                    </div>
                    <div class="dates">
                        <h4>Vos dates</h4>
                        <div class="align">
                            <div class="label-align">
                                <label for="arrivee">Date d'arrivée</label>
                                <input type="date" id="arrival">
                            </div>
                            <div class="label-align">
                                <label for="depart">Date de départ</label>
                                <input type="date" id="departure">
                            </div>
                        </div>
                        <div id="datesError" class="error-box"></div>
                    </div>
                    <div class="meal">
                        <h4>Vos repas</h4>
                        <div class="align">
                            <div class="label-align">
                                <label for="breakfast"><input type="checkbox" value="breakfast" id="breakfast">Petit Déjeuner</label>
                                <label for="lunch"><input type="checkbox" value="lunch" id="lunch">Déjeuner</label>
                                <label for="dinner"><input type="checkbox" value="dinner" id="dinner">Dîner</label>
                                <label for="ponctuel"><input type="checkbox" value="ponctuel" id="ponctuel">Ponctuel</label>
                            </div>
                            <div id="dietSection" style="display:none;">
                                <h5>Vos préférences alimentaires</h5>
                                <div class="label-align">
                                    <label for="diet">Ce que vous souhaitez nous préciser: </label>
                                    <select name="diet" id="diet">
                                        <option value="vegan">Vegan</option>
                                        <option value="vegetarien">Vegetarien</option>
                                        <option value="none">Aucun</option>
                                    </select>
                                </div>
                                <div id="dietError" class="error-box"></div>
                            </div>
                            <div id="allergySection" style="display:none;">
                                <h5>Vos restrictions alimentaires</h5>
                                <div class="label-align">
                                    <label for="allergy">Ce que vous souhaitez nous préciser: </label>
                                    <select name="allergy" id="allergy">
                                        <option value="gluten">Sans gluten</option>
                                        <option value="lactose">Sans lactose</option>
                                        <option value="allergy">autres allergies et intolérances</option>
                                        <option value="none">Aucune</option>
                                    </select>
                                </div>
                                <div id="allergyError" class="error-box"></div>
                            </div>
                        </div>
                    </div>
                    <div class="services">
                        <h4>Envie de +</h4>
                        <div class="label-align">
                            <label for="driver"><input type="checkbox" value="driver" id="driver">Chauffeur</label>
                            <label for="visite"><input type="checkbox" value="visite" id="visite">Visite du domaine</label>
                        </div>
                    </div>
                    <div class="cta">
                        <button class="reset-btn" type="reset">Annuler</button>
                        <button class="primary-btn" type="submit">Réserver</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="modal-facture" style="display:none;">
            <div class="container-facture">
                <div id="summaryContainer">
                </div>
            </div>
        </div>  
        <div class="modal-payement" style="display:none;">
            <div id="payementBox" class="container-payement">
            </div>
        </div>  
    `;
    if (breakfastCheckbox || lunchCheckbox || dinnerCheckbox || ponctuelCheckbox) {
        document.getElementById("breakfast").addEventListener("change", toggleDiet);
        document.getElementById("lunch").addEventListener("change", toggleDiet);
        document.getElementById("dinner").addEventListener("change", toggleDiet);
        document.getElementById("ponctuel").addEventListener("change", toggleDiet);
    };
}

function fermerModal() {
    containerModals.style.display = "none";
}

document.querySelectorAll(".reservation").forEach(function(element){
    element.addEventListener("click", afficherFormulaire);

    
});

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
        ChoiceFeu.style.display = "block";
        ChoiceOther.style.display = "none";
    } 
    if (hotel === "terre" || hotel === "eau" || hotel === "air") {
        ChoiceFeu.style.display = "none";
        ChoiceOther.style.display = "block";
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
            <button onclick="retourAccueil()" class="primary-btn">Retour à l'accueil</button>
        `
    }

    function retourAccueil() {
        document.querySelector(".modal-payement").style.display = "none";
        bookingForm.reset();
        document.querySelector(".modal-booking").style.display = "none";
        payementBox.innerHTML = "";
    }
}
    