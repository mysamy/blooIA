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




const buttonArrow = document.querySelector(".arrows-btn");
const slides = document.querySelectorAll(".carousel__wrapper");

let currentPosition = 0;
const step = 33.333333; 

buttonArrow.addEventListener("click", e => {
    if (e.target.nodeName === "BUTTON") {
        if (e.target.classList.contains("button__arrow--left")) {
            currentPosition -= step; 
            slides.forEach((slide) => {
                slide.style.transform = `translateX(${currentPosition}%)`;
            })
            
        }
        else if (e.target.classList.contains("button__arrow--right")){
            currentPosition += step;
            slides.forEach((slide) => {
                slide.style.transform = `translateX(${currentPosition}%)`;
            })
        }
    }
});