// Sauvegarder la position de défilement avant que la page ne soit fermée ou actualisée
// window.onbeforeunload = function () {
//       sessionStorage.setItem("scrollPosition", window.scrollY);
// };

// // Restaurer la position de défilement lors du chargement de la page
// window.onload = function () {
//       const scrollPosition = sessionStorage.getItem("scrollPosition");
//       if (scrollPosition) {
//             window.scrollTo(0, scrollPosition);
//       }
// };
// ajouter au local storage

// buttonArrow.addEventListener("click", e => {
//     if (e.target.nodeName === "BUTTON" ) {
//         if (e.target.classList.contains("button__arrow--left")) {
//             index -= step;
//             slides.forEach((slide) => {
//                 slide.style.transform = `translateX(${index}%)`;
//             })

//         }
//         else if (e.target.classList.contains("button__arrow--right")){
//             index += step;
//             slides.forEach((slide) => {
//                 slide.style.transform = `translateX(${index}%)`;
//             })
//         }
//     }
// });

// const buttonArrow = document.querySelector(".arrows-btn");
// const slides = document.querySelectorAll(".carousel__wrapper");

// let index = 0;
// const step = 350;
// // slide.style.animation = "left 3s linear infinite"
// function moveLeft() {
//       index -= step;
//       slides.forEach((slide) => {

//             slide.style.transform = `translateX(${index}px)`;
//       });
//       console.log(index);
//       console.log(-4 * step);
//       if (index <= -4 * step) {
//             slides.forEach((slide) => {
//                         slide.style.transition = "none";
//                   });

//             index = 0;

//             slides.forEach((slide) => {
//                   slide.style.transform = `translateX(${index})`;
//             });

//             setTimeout(() => {
//               slides.forEach((slide) => {
//                   slide.style.transition = "transform 0.5s ease"; // ✅ Correction ici
//                   console.log("transition appliquée");
//               });

//               moveLeft(); // 🔥 Déclencher moveLeft après avoir réactivé la transition
//           }, 0.500); // Petit délai pour assurer la réinitialisation avant l'animation
//       }
// }
// function moveRight() {

//   if (index <= 10 * step)  {console.log(step)
//       setTimeout(() => {
//           slides.forEach((slide) => {
//               slide.style.transition = "none";
//               console.log("transition appliquée");
//           });

//       }, 0.500);
//         slides.forEach((slide) => {
//                     slide.style.transition = "none";
//               });

//         index = 0;

//         slides.forEach((slide) => {
//               slide.style.transform = `translateX(${index}%)`;
//         });

//         index += step;

//   }
//   slides.forEach((slide) => {

//         slide.style.transform = `translateX(${index}%)`;
//   });
//   console.log(index);
//   console.log(10 * step);

// }
const wrapper = document.querySelector(".carousel__wrapper");
console.log(wrapper);

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const cards = Array.from(document.querySelectorAll(".carousel__card"));

console.log(cards);
// Cloner les cartes pour l'effet infini
const firstClone = cards[0].cloneNode(true);
console.log(firstClone);
const lastClone = cards[cards.length - 1].cloneNode(true);
console.log(lastClone);
// Ajoute un clone de la dernière carte au début
wrapper.appendChild(firstClone); // Clone de la première carte ajouté à la fin
wrapper.insertBefore(lastClone, wrapper.firstElementChild);

let index = 1;
const cardWidth = 350;

function moveSlide(direction) {
      if (direction === "next") {
            index++;
      } else {
            index--;
      }
      wrapper.style.transition = "transform 0.5s ease-in-out";
      wrapper.style.transform = `translateX(${-cardWidth * index}px)`;
      console.log(-cardWidth * index);
      console.log(wrapper);
}

nextBtn.addEventListener("click", () => moveSlide("next"));
prevBtn.addEventListener("click", () => moveSlide("prev"));

// Défilement automatique
// setInterval(() => moveSlide("next"), 3000);

// setTimeout(() => {
//       if (index >= cards.length + 1) {
//             index = 1;
//             wrapper.style.transition = "none";
//             wrapper.style.transform = `translateX(${-cardWidth * index}px)`;
//       } else if (index <= 0) {
//             index = cards.length;
//             wrapper.style.transition = "none";
//             wrapper.style.transform = `translateX(${-cardWidth * index}px)`;
//       }
// }, 500);
