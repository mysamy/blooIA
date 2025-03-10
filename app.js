const wrapper = document.querySelector(".carousel__wrapper");
const cards = Array.from(wrapper.children);
const width = 350;
let index = 0;
console.log(cards);




wrapper.innerHTML += wrapper.innerHTML;

const cardsDouble = Array.from(wrapper.children);

function next() {
      index++;
      console.log(index);
      wrapper.style.transition = "transform 0.5s ease-in-out";
      wrapper.style.transform = `translateX(-${index * width}px)`;
      if (index >= cards.length) {
            console.log(index);
            setTimeout(() => {
                  wrapper.style.transition = "none";
                  index = 0;
                  wrapper.style.transform = "translateX(0)";
            }, 500);
      }
      zoom();
}
function prev() {
      
      if (index <= 0) {
            console.log(index);
            index = cards.length;
            wrapper.style.transition = "none";
            wrapper.style.transform = `translateX(-${index * width}px)`;
      }

      setTimeout(() => {
            index--;
            console.log(index);
            wrapper.style.transition = "transform 0.5s ease-in-out";
            wrapper.style.transform = `translateX(-${index * width}px)`;
      }, 20);
      
}

// scroll down to right
const sectionScroll = document.querySelector(".hize");
const scroll = document.querySelector(".hize__slider");

window.addEventListener("scroll", () => {});

// animation delay texte
// document.querySelectorAll('.text--fade-in').forEach((el, index) => {
//       el.style.animation = `fade-in 3s cubic-bezier(.39,.575,.565,1.000) both ${index * 0.2}s`;
//   });

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

const outerDiv = document.querySelector('.carousel__container'); // La div externe
const innerDiv = document.querySelectorAll('.carousel__card');
console.log(outerDiv);



   // Toutes les cartes
  function zoom() {
      function isElementInCenter(innerDiv, outerDiv) {
      const innerRect = innerDiv.getBoundingClientRect();
      console.log(innerRect);
      const outerRect = outerDiv.getBoundingClientRect();
  
      const innerCenterX = innerRect.left + innerRect.width / 2;
      const innerCenterY = innerRect.top + innerRect.height / 2;
  
      const outerCenterX = outerRect.left + outerRect.width / 2;
      const outerCenterY = outerRect.top + outerRect.height / 2;
  
     
     
      const tolerance = 50; // Ajustez cette valeur selon vos besoins
  
      return Math.abs(innerCenterX - outerCenterX) <= tolerance && 
             Math.abs(innerCenterY - outerCenterY) <= tolerance;
  }

     innerDiv.forEach(card => {
      if (isElementInCenter(card, outerDiv)) {
           
             card.classList.add('zoom');     
          
          console.log("card zoomedDDDDDDDDDDDD");
          
      } else {
          
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
      wrapper.addEventListener('transitionend', () => {
            zoom(); // Appel de la fonction zoom quand la transition est terminée
          });
      
}
zoom();