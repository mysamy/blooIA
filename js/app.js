const wrapper = document.querySelector(".carousel__wrapper");
const cards = Array.from(wrapper.children);
const width = 350;
let index = 0;
console.log(cards);
const buttonPrev = document.querySelector(".button__prev");
const buttonNext = document.querySelector(".button__next");

wrapper.innerHTML += wrapper.innerHTML;

const cardsDouble = Array.from(wrapper.children);

function next() {
      index++;
      console.log(index);
      console.log(cards.length);
      
      wrapper.style.transition = "transform 0.5s ease-in-out";
      wrapper.style.transform = `translateX(-${index * width}px)`;
      if (index >= 9) {
            setTimeout(() => {
                  wrapper.style.transition = "none";
                  index = 0;
                  wrapper.style.transform = "translateX(0)";

            }, 500);
      }
      zoomNext();
}

// function next() {
//       if (index >= cards.length) {
//             index = 0;
//             wrapper.style.transition = "none";
//             wrapper.style.transform = `translateX(0px)`;
//       }

//       setTimeout(() => {
//             index++;
//             wrapper.style.transition = "transform 0.5s ease-in-out";
//             wrapper.style.transform = `translateX(-${index * width}px)`;
//       }, 20);

//       zoomNext();
// }

function prev() {
      if (index <= 0) {
            index = cards.length;
            wrapper.style.transition = "none";
            wrapper.style.transform = `translateX(-${index * width}px)`;
      }

      setTimeout(() => {
            index--;
            wrapper.style.transition = "transform 0.5s ease-in-out";
            wrapper.style.transform = `translateX(-${index * width}px)`;
      }, 20);
      zoomPrev();
}

// scroll down to right
const sectionScroll = document.querySelector(".hize");
const scroll = document.querySelector(".hize__slider");

window.addEventListener("scroll", () => {});

document.querySelectorAll(".text--fade-in").forEach((el, index) => {
      el.style.animation = `fade-in 3s cubic-bezier(.39,.575,.565,1.000) both ${index * 0.2}s`;
});

// modal
const modal = document.querySelector("#modal");
const openModal = document.querySelector(".burger-button");
const closeModal = document.querySelector(".close-button");

openModal.addEventListener("click", () => {
      modal.showModal();
      modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
      modal.close();
      modal.style.display = "none";
});

// setInterval(move, 2000);

// HYBRIDE SCROLL

const sticky = document.querySelector(".sticky");

window.addEventListener("scroll", () => transform(sticky));

function transform(section) {
      const offsetTop = section.parentElement.offsetTop;

      const hizeSlider = section.querySelector(".hize__slider");

      let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;

      percentage = percentage < 0 ? 0 : percentage > 100 ? 200 : percentage;
      hizeSlider.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
}

const carouselContainer = document.querySelector(".carousel__container"); // La div externe
const cardContainer = document.querySelectorAll(".carousel__card");
console.log(carouselContainer);

function isElementInFirst(cardContainer, carouselContainer) {
      let containerRect = carouselContainer.getBoundingClientRect();

      let cardRect = cardContainer.getBoundingClientRect();

      let cardRelativeLeft = cardRect.left - containerRect.left;
      let cardCenterX = cardRelativeLeft + cardRect.width / 2;

      let containerTwoThirdX = (1 / 6) * containerRect.width;

      const tolerance = 60;
      return Math.abs(containerTwoThirdX - cardCenterX) <= tolerance;
}
function isElementInThird(cardContainer, carouselContainer) {
      let containerRect = carouselContainer.getBoundingClientRect();

      let cardRect = cardContainer.getBoundingClientRect();

      let cardRelativeLeft = cardRect.left - containerRect.left;
      let cardCenterX = cardRelativeLeft + cardRect.width / 2;

      let containerTwoThirdX = (5 / 6) * containerRect.width;

      const tolerance = 60;
      return Math.abs(containerTwoThirdX - cardCenterX) <= tolerance;
}
// Toutes les cartes
function zoomNext() {
      cardContainer.forEach((card) => {
            if (isElementInThird(card, carouselContainer)) {
                  card.classList.add("zoom");

                 
            } else {
                  card.classList.remove("zoom");
            }
      });
}
function zoomPrev() {
      cardContainer.forEach((card) => {
            if (isElementInFirst(card, carouselContainer)) {
                  card.classList.add("zoom");

                  console.log("card zoomedDDDDDDDDDDDD");
            } else {
                  card.classList.remove("zoom");
            }
      });
}
function move() {
      index++;

      wrapper.style.transition = "transform 1s ease-in-out";
      wrapper.style.transform = `translateX(-${index * width}px)`;

      if (index >= cards.length) {
            console.log(index);

            setTimeout(() => {
                  wrapper.style.transition = "none";
                  index = 0;
                  wrapper.style.transform = "translateX(0)";
            }, 1000);
      }
}

buttonPrev.addEventListener("click", (e) => {
      e.preventDefault();
      prev();
});

buttonNext.addEventListener("click", (e) => {
      e.preventDefault();
      next();
});

// MENU DEROULANT

const menuLien = document.querySelector(".modal-nav__link--has-dropdown");
menuLien.addEventListener("click", () => {
      
      
      let menuDeroulant = document.querySelector(".modal-nav__sub-menu"); 
      console.log(getComputedStyle(menuDeroulant).maxHeight);
      console.log(menuDeroulant.scrollHeight);
      if (getComputedStyle(menuDeroulant).maxHeight === "0px"){
      
            menuDeroulant.style.maxHeight = `${menuDeroulant.scrollHeight}px` ; 
      }
      else {menuDeroulant.style.maxHeight = "0px" ; }
}
)
      

