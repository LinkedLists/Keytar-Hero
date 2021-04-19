///USE THIS LATER MAYBE
export default class Wheel {
  constructor() {
    // carousel wheel elements
    this.wheelNext = document.getElementById('selection-next-btn')
    this.wheelPrev = document.getElementById('selection-prev-btn')
    this.carouselWheel = document.getElementsByClassName('selection-circle')[0]
    this.selectCircle = document.getElementsByClassName('song-selection-container-closed')[0]
    this.songCarouselWheelItems = document.querySelectorAll('.song-carousel-item')
      // make first item selectable
      this.songCarouselWheelItems[0].classList.add("selectable")
      this.carouselWheelLength = this.songCarouselWheelItems.length
    this.carouselPositionsSet = false

    this.wheelIndex = 0
    this.thetaDeg = (360 / this.carouselWheelLength)
    this.thetaRad = (Math.PI / 180.0) * (360 / this.carouselWheelLength)

    this.setCarouselPositions = this.setCarouselPositions.bind(this)
    this.addListeners = this.addListeners.bind(this)
    this.addListeners()
  }

  setCarouselPositions() {
    let centerx = parseFloat(getComputedStyle(this.songCarouselWheelItems[0]).left) 
    let centery = parseFloat(getComputedStyle(this.songCarouselWheelItems[0]).top) 

    this.songCarouselWheelItems.forEach( (songItem, i) => {
      songItem.style.left = `${centerx + 200 * Math.cos(this.thetaRad * (i))}px`
      songItem.style.top = `${centery - 200 * Math.sin(this.thetaRad * (i))}px`
      songItem.style.transform = `rotate(${-1.0 * i * 360 / this.carouselWheelLength}deg)`
    })
  }

  addListeners() {
    this.wheelNext.addEventListener('click', () => {
      this.removeSelectable()
      this.wheelIndex -= 1
      this.selectable()
      this.carouselWheel.style.transform = `rotate(${-1.0 * this.thetaDeg * this.wheelIndex}deg)`
    })
  
    this.wheelPrev.addEventListener('click', () => {
      this.removeSelectable()
      this.wheelIndex += 1
      this.selectable()
      this.carouselWheel.style.transform = `rotate(${-1.0 * this.thetaDeg * this.wheelIndex}deg)`
    })
  }

  //make current wheel item clickable
  selectable() {
    let index = this.wheelIndex % this.carouselWheelLength
    if (index < 0) {
      index *= -1
    }
    this.songCarouselWheelItems[index].classList.add("selectable")
  }
  //make prev item nonclickable
  removeSelectable() {
    if (this.wheelIndex % this.carouselWheelLength <= 0) {
      this.songCarouselWheelItems[-1 * this.wheelIndex % this.carouselWheelLength].classList.remove("selectable")
    } else {
      this.songCarouselWheelItems[this.wheelIndex % this.carouselWheelLength].classList.remove("selectable")
    }
  }
}