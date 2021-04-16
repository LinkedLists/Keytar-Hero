import Game from './game';
import { modalHandler } from './modal';

document.addEventListener('DOMContentLoaded', () => {
  let startBtn = document.getElementById('start-btn')
  let selectBtn = document.getElementById('selection-back-btn')

  let selectCircle = document.getElementsByClassName('song-selection-container-closed')[0]
  let mainMenu = document.getElementsByClassName('main-menu-container')[0]

  startBtn.addEventListener('click', () => {
    selectCircle.classList.add('song-selection-container-open')
    selectCircle.classList.remove('song-selection-container-closed')
    selectCircle.classList.remove('hidden')
    mainMenu.classList.add('hidden')

    setCarouselPositions()

  })

  selectBtn.addEventListener('click', () => {
    selectCircle.classList.remove('song-selection-container-open')
    selectCircle.classList.add('song-selection-container-closed')
    mainMenu.classList.remove('hidden')
  })


  function setCarouselPositions() {
    let songCarouselWheelItems = document.querySelectorAll('.song-carousel-item')
    let centerx = parseFloat(getComputedStyle(songCarouselWheelItems[0]).left) 
    let centery = parseFloat(getComputedStyle(songCarouselWheelItems[0]).top) 

    let theta = (Math.PI / 180.0) * (360 / songCarouselWheelItems.length)
    songCarouselWheelItems[0].style.left = `${centerx + 100 * Math.cos(theta)}px`
    songCarouselWheelItems[0].style.top = `${centery - 100 * Math.sin(theta)}px`
  
    songCarouselWheelItems.forEach( (songItem, i) => {
        songItem.style.left = `${centerx + 100 * Math.cos(theta * (i + 1))}px`
        songItem.style.top = `${centery - 100 * Math.sin(theta * (i + 1))}px`
    })
    // let theta = (Math.PI / 4.0)
    // songCarouselWheelItems[0].style.left = `${centerx + 100 * Math.cos(theta)}px`
    // songCarouselWheelItems[0].style.top = `${centery - 100 * Math.sin(theta)}px`
  }


  const canvas = document.getElementById('canvas');
  canvas.style.backgroundSize = "100% 100%";
  new Game(canvas);
  modalHandler()
})
