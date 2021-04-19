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
    this.thetaDeg = (360 / carouselWheelLength)
  }
}