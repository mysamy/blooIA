const wrapper = document.querySelector(".carousel__wrapper");
const cards = Array.from(wrapper.children);
const width = 350;
let index = 0;

wrapper.innerHTML += wrapper.innerHTML;

const cardsDouble = Array.from(wrapper.children);
console.log(cards.length - 1);
function next() {
      index++;
      console.log(index);
      wrapper.style.transition = "transform 0.5s ease-in-out";
      wrapper.style.transform = `translateX(-${index * width}px)`;
      if (index >= cards.length) {
            setTimeout(() => {
                  wrapper.style.transition = "none";
                  index = 0;
                  wrapper.style.transform = "translateX(0)";
            }, 500);
      }
}
function prev() {
      console.log(index);
      if (index <= 0) {
            index = cards.length ;
            console.log(index);
            wrapper.style.transition = "none";
            wrapper.style.transform = `translateX(-${index * width}px)`;
            console.log(wrapper.style.transform);
      }

      setTimeout(() => {
            index--;
            wrapper.style.transition = "transform 0.5s ease-in-out";
            wrapper.style.transform = `translateX(-${index * width}px)`;
      }, 20);
}


// scroll down to right
const sectionScroll = document.querySelector(".hize")
const  scroll = document.querySelector(".hize__slider")

window.addEventListener("scroll", () => {

})

// animation delay texte
document.querySelectorAll('.text--fade-in').forEach((el, index) => {
      el.style.animation = `fade-in 3s cubic-bezier(.39,.575,.565,1.000) both ${index * 0.2}s`;
  });




// modal
const modal = document.querySelector('#modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');

openModal.addEventListener('click', ()=> {
      modal.showModal();
});

closeModal.addEventListener('click', ()=> {
      modal.close();
});