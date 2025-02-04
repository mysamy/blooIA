// Sauvegarder la position de défilement avant que la page ne soit fermée ou actualisée
// window.onbeforeunload = function () {
//   sessionStorage.setItem('scrollPosition', window.scrollY);
// };

// // Restaurer la position de défilement lors du chargement de la page
// window.onload = function () {
//   const scrollPosition = sessionStorage.getItem('scrollPosition');
//   if (scrollPosition) {
//     window.scrollTo(0, scrollPosition);
//   }
// };
const wrapper = document.querySelector('.carousel__container');
const items = document.querySelectorAll('.carousel__card');
let index = 0;

function scrollToNext() {
  index = (index + 1) % items.length;
  wrapper.scrollTo({
    left: items[index].offsetLeft - (wrapper.offsetWidth - items[index].offsetWidth) / 2,
    behavior: "smooth"
  });
}

setInterval(scrollToNext, 5000); // Change de carte toutes les 5 secondes