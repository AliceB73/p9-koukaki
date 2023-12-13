//Animation d'apparition des titres des différentes sections


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const title = entry.target.querySelector('.title-span');

        if (entry.isIntersecting) {
            entry.target.classList.add("flow-four");
            return;
        } else {
            entry.target.classList.remove("flow-four");
        }
    });
});

const titlesSpan = document.querySelectorAll('.title-span');
titlesSpan.forEach(titleSpan => observer.observe(titleSpan));


// Effet de parallaxe du titre du site et des nuages


let clouds = document.querySelector(".big-cloud");

window.addEventListener("scroll", function () {
    const distance = window.scrollY;

    document.querySelector(
        ".content"
    ).style.transform = `translateY(${distance * 0.3}px)`;


    // Calculer la position de l'élément par rapport au haut de la fenêtre
    var rect = clouds.getBoundingClientRect();
    // Vérifier si l'élément est visible
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        // Calculer la progression du défilement dans la fenêtre
        var progress = (window.innerHeight - rect.top) / window.innerHeight;
        // Limiter l'amplitude à 300px vers la gauche
        var amplitude = Math.min(progress * 300, 300);
        // Appliquer l'effet de parallaxe à l'élément
        clouds.style.transform = 'translateX(' + (-amplitude) + 'px)';
    }
});


//Carousel

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    loop: false
});

// Animation du menu burger

let sidenav = document.getElementById("mySidenav");
let burgerIcon = document.querySelector(".burger-icon");
let logoNav = document.querySelector(".logo-nav");
let openBtn = document.getElementById("openBtn");

openBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Empêche le rechargement de la page
    burgerIcon.classList.toggle('active');
    sidenav.classList.toggle('active');
    logoNav.classList.toggle('logo-nav-active');
});