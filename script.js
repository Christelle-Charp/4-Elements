
// Fonction pour afficher le menu Burger
let burger = document.querySelector(".burger");
let menu = document.querySelectorAll(".menu");

burger.addEventListener('click', function(e){
    e.preventDefault();
    burger.classList.toggle('active');
    menu.forEach(function(item) {
        item.classList.toggle('menu-burger');
    });
})

//les 2 fonctions suivantes permettent de gérer le scroll des carrousels
document.querySelector(".prev").addEventListener("click", function () {
    document.querySelectorAll(".carrousel-box").scrollBy({
        left: -100,
        behavior: "smooth" 
    });
});


document.querySelector(".next").addEventListener("click", function () {
    document.querySelectorAll(".carrousel-box").scrollBy({
        left: 100, 
        behavior: "smooth" 
    });
});