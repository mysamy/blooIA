class Carousel {
	
	/**
	 * @param element - The `element` parameter typically refers to the HTML element that the constructor
	 * will be working with. It could be a reference to a specific DOM element on the webpage.
	 * @param [options] - The `options` parameter in the constructor function is an object that allows you
	 * to pass additional configuration settings or properties when creating an instance of the class. It
	 * is optional, meaning you can provide default values for these options if they are not specified
	 * when creating an instance.
	 * @param {Object} options.slidesToScroll Nombre d'éléments a faire défiler
	 * @param {Object} options.slidesVisible Nombre d'éléments visible dans un slide
	 */
	constructor (element,options = {}) {
		
		this.element = element 
		// method assign permet de mettre des valeurs par default si lutilisteur ne met rien
		this.options = Object.assign({}, { 
			slidesToScroll: 1,
			slidesVisible: 1
		}, options)
		let children = Array.from(element.children)
		this.isMobile = false
		this.currentItem = 0

		// Modification du Dom
		this.root = this.createDivWithClass ('carousel')
		this.container = this.createDivWithClass ('carousel__wrapper')
		this.root.setAttribute("tabindex", '0')
		this.root.appendChild(this.container)
		this.element.appendChild(this.root)
		this.items = children.map((child) => {
			let item = this.createDivWithClass('carousel__item')
			item.appendChild(child)
			this.container.appendChild(item)
			return item
		})
		this.setStyle()
		this.createNavigation()
		

		// Evenements
		this.onWindowResize()
		window.addEventListener('resize', this.onWindowResize.bind(this))
		this.root.addEventListener("keyup", (e) => {
			if (e.key === 'ArrowRight' || e.key === 'Right') {
				this.next()
			} else if (e.key === 'ArrowLeft' || e.key === 'Left') {
				this.prev()
			}
		})
	}
	/**
	 * Applique les bonnes dimentions aux élément de la carousel
	 */
	setStyle () {
		let ratio = this.items.length / this.slidesVisible
		console.log(ratio);
		
		this.container.style.width = (ratio * 100) + "%"
		this.items.forEach(item => item.style.width = ((100 / this.slidesVisible) / ratio) + "%") 
	};
	
	
	createNavigation () {
		let nextButton = this.createDivWithClass('carousel__next')
		let prevButton = this.createDivWithClass('carousel__prev')
		
		
		this.root.appendChild(nextButton)
		this.root.appendChild(prevButton)
		nextButton.addEventListener('click', this.next.bind(this))
		prevButton.addEventListener('click', this.prev.bind(this))
	}

	next () {
		this.gotoItem(this.currentItem + this.slidesToScroll)
	}

	prev ( ) {
		this.gotoItem(this.currentItem - this.slidesToScroll)
	}
	/**
	 * Déplace le carousel ver l'élément cible
	 * @para (number) index 
	 *
	 */
	gotoItem (index) {
		
		if (index < 0) {
			
			index = this.items.length - this.options.slidesVisible
			
			}
			
			
		 else if (index >= this.items.length || this.items[this.currentItem + this.options.slidesVisible] === undefined && index > this.currentItem ) {
			index = 0
		}
		let translateX = index * -100 / this.items.length
		
		
		this.container.style.transform = `translate3d(${translateX}%, 0, 0)`
		this.currentItem = index
		
		
	}
	onWindowResize () {
		let mobile = window.innerWidth < 800
		if (mobile !== this.isMobile) {
			this.isMobile = mobile
			this.setStyle()
		}
	}


	/**
	 * 
	 * @param {string} className
	 * @returns {HTMLElement}
	 */
	createDivWithClass (className) {
		let div = document.createElement('div')
		div.setAttribute('class', className)
		return div

	}

	/**
	 * 
	 * @return {number}
	 */
	get slidesToScroll () {
		return this.isMobile ? 1 :  this.options.slidesToScroll

	}
	get slidesVisible () {
		return this.isMobile ? 1 : this.options.slidesVisible
	}
	
}

document.addEventListener('DOMContentLoaded', function () {
	new Carousel(document.querySelector('.how__carousel'), {
	
	slidesVisible: 3,
	slidesToScroll: 1
})
})
