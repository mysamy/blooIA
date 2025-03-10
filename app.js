const wrapper = document.querySelector(".carousel__wrapper");
const cards = Array.from(wrapper.children);
const width = 350;
let index = 0;
console.log(cards.length);
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
}
function prev() {
      
      if (index <= 0) {
            console.log(index);
            index = cards.length ;
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
const sectionScroll = document.querySelector(".hize")
const  scroll = document.querySelector(".hize__slider")

window.addEventListener("scroll", () => {

})

// animation delay texte
// document.querySelectorAll('.text--fade-in').forEach((el, index) => {
//       el.style.animation = `fade-in 3s cubic-bezier(.39,.575,.565,1.000) both ${index * 0.2}s`;
//   });




// modal
const modal = document.querySelector('#modal');
const openModal = document.querySelector('.burger-button');
const closeModal = document.querySelector('.close-button');

openModal.addEventListener('click', ()=> {
      modal.showModal();
      modal.style.display = "flex";
});

closeModal.addEventListener('click', ()=> {
      modal.close();
      modal.style.display = "none";
});


function move() {
      index++;
      wrapper.style.transition = "transform 1s ease-in-out";
      wrapper.style.transform = `translateX(-${index * width}px)`;
      console.log(index);
      if (index >= cards.length) {
            console.log(index);

            setTimeout(() => {
                  wrapper.style.transition = "none";
                  index = 0;
                  wrapper.style.transform = "translateX(0)";
            }, 1000);
      }
}
// setInterval(move, 2000);




// HYBRIDE SCROLL

const sticky = document.querySelector('.sticky')
console.log(sticky);

window.addEventListener('scroll', () => transform(sticky));

function transform(section){
      const offsetTop = section.parentElement.offsetTop ;
      console.log(offsetTop);
      const hizeSlider = section.querySelector('.hize__slider');
      console.log(hizeSlider);
      let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
	console.log(percentage);
      percentage = percentage < 0 ? 0 : percentage > 100 ? 200 : percentage;
	hizeSlider.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`
      console.log(hizeSlider);
}


