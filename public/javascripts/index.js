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
  let mainMenuL = document.getElementsByClassName('main-menu-l-container')[0]
  let mainMenuR = document.getElementsByClassName('main-menu-r-container')[0]
  let homePage = document.getElementsByClassName('homepage-container')[0]
  let gameView = document.getElementsByClassName('game-view')[0]

  // open wheel
  startBtn.addEventListener('click', () => {
    //this is useless now
    selectCircle.classList.add('song-selection-container-open')
    selectCircle.classList.remove('song-selection-container-closed')
    selectCircle.classList.remove('hidden')
    ////
    
    carouselWheel.classList.remove('circleClose')
    carouselWheel.classList.add('circleOpen')

    mainMenuL.classList.remove('Lopen')
    mainMenuR.classList.remove('Ropen')
    mainMenuL.classList.add('Lclose')
    mainMenuR.classList.add('Rclose')
    
    // try to to click this too fast lol
    setTimeout(() => {
      mainMenu.classList.add('hidden')
      //why do i need to remove it?
      mainMenuL.classList.remove('Lclose')
      mainMenuR.classList.remove('Rclose')
    }, 600)

    if (!carouselPositionsSet) {
      setCarouselPositions()
      carouselPositionsSet = true
    }
  })

  //close wheel
  selectBtn.addEventListener('click', () => {
    selectCircle.classList.remove('song-selection-container-open')
    selectCircle.classList.add('song-selection-container-closed')

    carouselWheel.classList.remove('circleOpen')
    carouselWheel.classList.add('circleClose')

    mainMenu.classList.remove('hidden')

    mainMenuL.classList.add('Lopen')
    mainMenuR.classList.add('Ropen')

    setTimeout(() => {
      selectCircle.classList.add('hidden')
      // carouselWheel.classList.remove('circleOpen')
      // carouselWheel.classList.add('circleClose')
    }, 450)

    setTimeout(() => {
      
      mainMenuL.classList.remove('Lopen')
      mainMenuR.classList.remove('Ropen')
    }, 1500)
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

  //play song
  const canvas = document.getElementById('canvas');
  selectSong.addEventListener('click', () => {
    homePage.classList.remove('fadeIn')
    homePage.classList.add('fadeOut')
    selectCircle.classList.remove('song-selection-container-open')
    selectCircle.classList.add('song-selection-container-closed')
    new Game(canvas);

    setTimeout(() => {
      homePage.classList.add('hidden')
      homePage.classList.remove('fadeOut')

      gameView.classList.remove('hidden')
      gameView.classList.add('fadeIn')


    }, 666)

  })


  canvas.style.backgroundSize = "100% 100%";
  // new Game(canvas);
  modalHandler()
})
