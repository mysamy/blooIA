class Carousel {
      /**
       * @param element - The `element` parameter typically refers to the HTML element that the constructor
       * will be working with. It could be a reference to a specific DOM element on the webpage.
       * @param [options] - The `options` parameter in the constructor function is an object that allows you
       * to pass additional configuration settings or properties when creating an instance of the class. It
       * is optional, meaning you can provide default values for these options if they are not specified
       * when creating an instance.
       * @param {Object} [options.slidesToScroll=1] Nombre d'éléments a faire défiler
       * @param {Object} [options.slidesVisible=1] Nombre d'éléments visible dans un slide
       * @param {boolean} [options.loop=false] Doit ton boucler en fin de carousel
       * @param {boolean} [options.infinite=false] carousel infini ou pas
       * @param {boolean} [options.navigation=true] Doit ton mettre une pagination
       *  @param {boolean} [options.pagination=false] 
       */
      constructor(element, options = {}) {
            this.element = element;
            // method assign permet de mettre des valeurs par default si lutilisteur ne met rien
            this.options = Object.assign(
                  {},
                  {
                        slidesToScroll: 1,
                        slidesVisible: 1,
                        loop: false,
                        pagination: false,
                        navigation: true,
                        infinite: false,
                  },
                  options
            );
            let children = Array.from(element.children);
            this.isMobile = false;
            this.currentItem = 0;
            this.moveCallbacks = [];

            // Modification du DOM
            this.root = this.createDivWithClass("carousel");
            this.container = this.createDivWithClass("carousel__wrapper");
            this.root.setAttribute("tabindex", "0");
            this.root.appendChild(this.container);
            this.element.appendChild(this.root);
            this.items = children.map((child) => {
                  let item = this.createDivWithClass("carousel__item");
                  item.appendChild(child);
                  return item;
            });
		  if (this.options.infinite) {
                  this.offset = this.options.slidesVisible * 2 - 1
                  this.items = [
                        ...this.items.slice(this.items.length - this.offset).map(item => item.cloneNode(true)),
                        ...this.items,
                        ...this.items.slice(0, this.offset).map(item => item.cloneNode(true)),
                  ]
                  this.gotoItem(this.offset, false)
              }
            this.items.forEach( item => this.container.appendChild(item))
            this.setStyle();
            if (this.options.navigation) {
                 this.createNavigation(); 
            }
            
            this.createPagination();

            // Evenements
            this.moveCallbacks.forEach((cb) => cb(this.currentItem));
            this.onWindowResize();
            window.addEventListener("resize", this.onWindowResize.bind(this));
            this.root.addEventListener("keyup", (e) => {
                  if (e.key === "ArrowRight" || e.key === "Right") {
                        this.next();
                  } else if (e.key === "ArrowLeft" || e.key === "Left") {
                        this.prev();
                  }
            });
            if (this.options.infinite) {
                              this.container.addEventListener ('transitionend', this.resetInfinite.bind(this))

            }
            
      }
      /**
       * Applique les bonnes dimentions aux élément de la carousel
       */
      setStyle() {
            let ratio = this.items.length / this.slidesVisible;
            console.log(ratio);

            this.container.style.width = ratio * 100 + "%";
		  console.log(this.container.style.width);
		  
            this.items.forEach((item) => (item.style.width = 100 / this.slidesVisible / ratio + "%"));
      }
      /**
       * Creer la navigation
       */
      createNavigation() {
            let nextButton = this.createDivWithClass("carousel__next");
            let prevButton = this.createDivWithClass("carousel__prev");

            this.root.appendChild(nextButton);
            this.root.appendChild(prevButton);
            nextButton.addEventListener("click", this.next.bind(this));
            prevButton.addEventListener("click", this.prev.bind(this));
            if (this.options.loop === true) {
                  return;
            }
            this.onMove((index) => {
                  if (index === 0) {
                        prevButton.classList.add("carousel__prev--hidden");
                  } else {
                        prevButton.classList.remove("carousel__prev--hidden");
                  }
                  if (this.items[this.currentItem + this.slidesVisible] === undefined) {
                        nextButton.classList.add("carousel__next--hidden");
                  } else {
                        nextButton.classList.remove("carousel__next--hidden");
                  }
            });
      }

      /**
       * Creer la Pagination
       */
      createPagination() {
            let pagination = this.createDivWithClass('carousel__pagination')
            let buttons = []
            this.root.appendChild(pagination)
            for (let i = 0; i < this.items.length; i = i + this.options.slidesToScroll) {
                  let button = this.createDivWithClass('carousel__pagination__button')
                  button.addEventListener('click', () => this.gotoItem(i))
                  pagination.appendChild(button)
                  buttons.push(button)
            }
            this.onMove(index => {
                 let activeButton = buttons[Math.floor(index / this.options.slidesToScroll)] 
                 if(activeButton) {
                  buttons.forEach(button => button.classList.remove('carousel__pagination__button--active'))
                  activeButton.classList.add('carousel__pagination__button--active')
                 }
            })
      }

      next() {
            this.gotoItem(this.currentItem + this.slidesToScroll);
      }

      prev() {
            this.gotoItem(this.currentItem - this.slidesToScroll);
      }
      /**
       * Déplace le carousel ver l'élément cible
       * @para (number) index
       *@param {boolean} [animation = true]
       */
      gotoItem(index, animation = true) {
            if (index < 0) {
                  if (this.options.loop) {
                        index = this.items.length - this.slidesVisible;
                  } else {
                        return;
                  }
            } else if (index >= this.items.length || (this.items[this.currentItem + this.slidesVisible] === undefined && index > this.currentItem)) {
                  if (this.options.loop) {
                        index = 0;
                  } else {
                        return;
                  }
            }
            let translateX = (index * -100) / this.items.length;
            if (animation === false) {
                  this.container.style.transition = 'none'
            }
            this.container.style.transform = `translate3d(${translateX}%, 0, 0)`;
            this.container.offsetHeight // force repaint
            if (animation === false) {
                  this.container.style.transition = ''
            }
            this.currentItem = index
            this.moveCallbacks.forEach(cb => cb(index))


             this.items.forEach((item, i) => {
        // Zoom class (comme tu as déjà)
        item.classList.remove("carousel__item--zoom");
        // Opacité en fonction de la visibilité
        if (i >= index && i < index + this.slidesVisible) {
            item.style.opacity = "1";
            item.style.pointerEvents = "auto"; // pour interaction possible
        } else {
            item.style.opacity = "0";
            item.style.pointerEvents = "none"; // désactive interactions hors zone visible
        }
    });
    		// const middleIndex = index + Math.floor(this.slidesVisible / 2);
            // const middleItem = this.items[middleIndex];
            // if (middleItem) {
            //       middleItem.classList.add("carousel__item--zoom");
            // }
            // this.currentItem = index;
            // this.moveCallbacks.forEach((cb) => cb(index));
      }
	 /**
        * Déplace le container pour donner l'impression d'un slide infini
        */
       resetInfinite () {
            if (this.currentItem <= this.options.slidesToScroll) {
                  this.gotoItem(this.currentItem + this.items.length - 2 * this.offset, false)
            } else if (this.currentItem >= this.items.length - this.offset) {
                  this.gotoItem(this.currentItem - (this.items.length - 2 * this.offset), false)
            }
       }
      /**
       * Rajoute un écouteur qui écoute le déplacement du carousel
       * @param {moveCallbacks} cb 
       */ 
      onMove(cb) {
            this.moveCallbacks.push(cb);
      }

      onWindowResize() {
            let mobile = window.innerWidth < 800;
            if (mobile !== this.isMobile) {
                  this.isMobile = mobile;
                  this.setStyle();
                  this.moveCallbacks.forEach((cb) => cb(this.currentItem));
            }
      }
      /**
       *
       * @param {string} className
       * @returns {HTMLElment}
       */
      createDivWithClass(className) {
            let div = document.createElement("div");
            div.setAttribute("class", className);
            return div;
      }

      /**
       *  @returns {number}
       */
      get slidesToScroll() {
            return this.isMobile ? 1 : this.options.slidesToScroll;
      }
      get slidesVisible() {
            return this.isMobile ? 1 : this.options.slidesVisible;
      }
}
let onReady = function() {
      new Carousel(document.querySelector(".how__carousel"), {
            slidesVisible: 3,
            slidesToScroll: 1,
            loop: true,
            navigation: true,
            pagination: true,
            infinite: true,
      });
}

if (document.readyState !== 'loading'){
      onReady()
}
document.addEventListener('DOMContentLoaded', onReady)