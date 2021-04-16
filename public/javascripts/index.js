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
  })

  selectBtn.addEventListener('click', () => {
    selectCircle.classList.remove('song-selection-container-open')
    selectCircle.classList.add('song-selection-container-closed')
    mainMenu.classList.remove('hidden')
  })

  let songCarouselWheelItems = document.querySelectorAll('.song-carousel-item')
  let centerx = parseFloat(getComputedStyle(songCarouselWheelItems[0]).left) 
  let centery = parseFloat(getComputedStyle(songCarouselWheelItems[0]).top) 

  let theta = (Math.PI / 180) * (360 / songCarouselWheelItems.length)

  songCarouselWheelItems.forEach( songItem => {
      songItem.style.left = `${centerx + 100 * Math.cos(theta)}px`
      songItem.style.top = `${centery + 100 * Math.sin(theta)}px`
  })


  const canvas = document.getElementById('canvas');
  canvas.style.backgroundSize = "100% 100%";
  new Game(canvas);
  modalHandler()
})
