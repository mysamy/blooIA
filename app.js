const wrapper = document.querySelector(".carousel__wrapper");
console.log(wrapper);

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const cards = Array.from(document.querySelectorAll(".carousel__card"));

console.log(cards);
// Cloner les cartes pour l'effet infini

const lastClone = cards[cards.length - 1].cloneNode(true);
console.log(lastClone);

let index = 0;
const cardWidth = 350;

function moveSlide(direction) {
      if (direction === "next") {
            if (index >= cards.length) {
                  index = 0;
            }
            const firstClone = cards[index].cloneNode(true);
            index++;

            wrapper.appendChild(firstClone);
           wrapper.style.transition = "transform 1s ease-in-out";
            wrapper.removeChild(wrapper.firstElementChild);

            cards
            console.log(index);
      } else {
            index--;
      }
      // 
      //  wrapper.style.transform = `translateX(0%)`;

      console.log(-cardWidth * index);
      console.log(index);
}

