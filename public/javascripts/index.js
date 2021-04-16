import Game from './game';
import { modalHandler } from './modal';

document.addEventListener('DOMContentLoaded', () => {
  let startBtn = document.getElementById('start-btn')
  let selectBtn = document.getElementById('selection-back-btn')

  // carousel wheel elements
  let wheelNext = document.getElementById('selection-next-btn')
  let wheelPrev = document.getElementById('selection-prev-btn')
  let carouselWheel = document.getElementsByClassName('selection-circle')[0]
  let selectCircle = document.getElementsByClassName('song-selection-container-closed')[0]
  let songCarouselWheelItems = document.querySelectorAll('.song-carousel-item')
  let carouselPositionsSet = false
  let wheelIndex = 0
  let thetaDeg = (360 / songCarouselWheelItems.length)

  let mainMenu = document.getElementsByClassName('main-menu-container')[0]
  let homePage = document.getElementsByClassName('homepage-container')[0]
  let gameView = document.getElementsByClassName('game-view')[0]
  
  startBtn.addEventListener('click', () => {
    selectCircle.classList.add('song-selection-container-open')
    selectCircle.classList.remove('song-selection-container-closed')
    selectCircle.classList.remove('hidden')
    mainMenu.classList.add('hidden')

    if (!carouselPositionsSet) {
      setCarouselPositions()
      carouselPositionsSet = true
    }
  })

  selectBtn.addEventListener('click', () => {
    selectCircle.classList.remove('song-selection-container-open')
    selectCircle.classList.add('song-selection-container-closed')
    mainMenu.classList.remove('hidden')
  })


  function setCarouselPositions() {
    let centerx = parseFloat(getComputedStyle(songCarouselWheelItems[0]).left) 
    let centery = parseFloat(getComputedStyle(songCarouselWheelItems[0]).top) 

    let thetaRad = (Math.PI / 180.0) * (360 / songCarouselWheelItems.length)
  
    songCarouselWheelItems.forEach( (songItem, i) => {
      songItem.style.left = `${centerx + 200 * Math.cos(thetaRad * (i))}px`
      songItem.style.top = `${centery - 200 * Math.sin(thetaRad * (i))}px`
      songItem.style.transform = `rotate(${-1.0 * i * 360 / songCarouselWheelItems.length}deg)`
    })
  }

  wheelNext.addEventListener('click', () => {
    wheelIndex += 1
    carouselWheel.style.transform = `rotate(${-1.0 * thetaDeg * wheelIndex}deg)`
  })

  wheelPrev.addEventListener('click', () => {
    wheelIndex -= 1
    carouselWheel.style.transform = `rotate(${-1.0 * thetaDeg * wheelIndex}deg)`
  })

  let selectSong = document.getElementById('halsey')

  selectSong.addEventListener('click', () => {
    homePage.classList.add('hidden')
    gameView.classList.remove('hidden')
  })


  const canvas = document.getElementById('canvas');
  canvas.style.backgroundSize = "100% 100%";
  new Game(canvas);
  modalHandler()
})
