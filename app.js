// Sauvegarder la position de défilement avant que la page ne soit fermée ou actualisée
window.onbeforeunload = function () {
  sessionStorage.setItem('scrollPosition', window.scrollY);
};

// Restaurer la position de défilement lors du chargement de la page
window.onload = function () {
  const scrollPosition = sessionStorage.getItem('scrollPosition');
  if (scrollPosition) {
    window.scrollTo(0, scrollPosition);
  }
};

gsap.registerPlugin(ScrollTrigger);

// Créer la timeline
const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".slider__container",
    start: "top top", // Début de l'animation quand la section est visible
    end: "bottom top", // Fin de l'animation quand la section est entièrement visible
    pin: true, // Pinne la section pour stopper le scroll
    scrub: true, // L'animation suit le défilement
    onEnter: () => disableScroll(),
    onLeave: () => enableScroll(),
    onEnterBack: () => disableScroll(),
    onLeaveBack: () => enableScroll(),
    markers: true, // Afficher les marqueurs pour déboguer
  }
});

// Animation
timeline.from(".section", {
  opacity: 0,
  y: 50,
  duration: 1.5,
});

// Fonction pour désactiver le scroll
function disableScroll() {
  document.body.style.overflow = 'hidden'; // Désactive le scroll
}

// Fonction pour réactiver le scroll
function enableScroll() {
  document.body.style.overflow = ''; // Réactive le scroll
}