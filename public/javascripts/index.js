import Game from './game';
import Wheel from './wheel';
import { modalHandler } from './modal';

document.addEventListener('DOMContentLoaded', () => {
  let startBtn = document.getElementById('start-btn')
  let selectBtn = document.getElementById('selection-back-btn')
  let audio = document.getElementById('audio')
  audio.volume = 0.8
  let currentVolume = audio.volume
  let currentPreviewIndex = 0

  // carousel wheel elements
  let wheelNext = document.getElementById('selection-next-btn')
  let wheelPrev = document.getElementById('selection-prev-btn')
  let carouselWheel = document.getElementsByClassName('selection-circle')[0]
  let selectCircle = document.getElementsByClassName('song-selection-container-closed')[0]
  let wheelBtns = document.getElementsByClassName('carousel-wheel-btn-container')[0]
  let preview = document.getElementsByClassName('preview-carousel-container')[0]
  let previewCarousel = document.getElementsByClassName('preview-carousel')[0]
  let previewCarouselItems = document.querySelectorAll('.preview-img-container');
  let songCarouselWheelItems = document.querySelectorAll('.song-carousel-item')
      // make first item selectable
      songCarouselWheelItems[0].classList.add("selectable")
      let carouselWheelLength = songCarouselWheelItems.length
  let carouselPositionsSet = false
  let wheelIndex = 0
  let thetaDeg = (360 / carouselWheelLength)

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

    // wheelBtns.classList.remove('btnClose')
    // wheelBtns.classList.add('btnOpen')

    preview.classList.remove('carouselClosed')
    preview.classList.add('carouselOpen')

    cartWheelIn()
    // audio.currentTime = 0
    // if (audio.paused) audio.play()
    // volumeUp()
    // audioPreview()
    audioPreviewLoop()

    // selectCircle.classList.remove('circleClose')
    // selectCircle.classList.add('circleOpen')

    mainMenuL.classList.remove('Lopen')
    mainMenuR.classList.remove('Ropen')
    mainMenuL.classList.add('Lclose')
    mainMenuR.classList.add('Rclose')
    
    // try not to click this too fast lol
    setTimeout(() => {
      mainMenu.classList.add('hidden')
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

    // wheelBtns.classList.remove('btnOpen')
    // wheelBtns.classList.add('btnClose')

    mainMenu.classList.remove('hidden')

    mainMenuL.classList.add('Lopen')
    mainMenuR.classList.add('Ropen')

    preview.classList.remove('carouselOpen')
    preview.classList.add('carouselClosed')

    cartWheelOut()
    clearInterval(loop)
    volumeDown()
    setTimeout( () => {
      audio.pause()
      clearInterval(loop)
      clearTimeout(previewTimeout)
      clearInterval(intervalDown)
      clearInterval(intervalUp)
    }, 80)

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

  function cartWheelIn() {
    let transformVal = previewCarousel.style.transform
    if (transformVal.length === 0) {
      previewCarousel.style.transform = `rotateX(60deg)`
      setTimeout( () => {
        previewCarousel.style.transform = `rotateX(0deg)`
      }, 300)
    } else {
      transformVal = parseFloat(transformVal.substring(
        transformVal.lastIndexOf("(") + 1, 
        transformVal.lastIndexOf("d")
      ))
      previewCarousel.style.transform = `rotateX(${transformVal + 60}deg)`
      setTimeout( () => {
        previewCarousel.style.transform = `rotateX(${transformVal}deg)`
      }, 300)
    }
  }

  function cartWheelOut() {
    let transformVal = previewCarousel.style.transform
    if (transformVal.length === 0) {
      previewCarousel.style.transform = `rotateX(0deg)`
      setTimeout( () => {
        previewCarousel.style.transform = `rotateX(60deg)`
      }, 300)
    } else {
      transformVal = parseFloat(transformVal.substring(
        transformVal.lastIndexOf("(") + 1, 
        transformVal.lastIndexOf("d")
      ))
      previewCarousel.style.transform = `rotateX(${transformVal + 180}deg)`
      setTimeout( () => {
        previewCarousel.style.transform = `rotateX(${transformVal}deg)`
      }, 300)
    }
  }

  let degrees = []

  function setCarouselPositions() {
    let centerx = parseFloat(getComputedStyle(songCarouselWheelItems[0]).left) 
    let centery = parseFloat(getComputedStyle(songCarouselWheelItems[0]).top) 
    // let centerx = parseFloat(getComputedStyle(songCarouselWheelItems[0]).left) 
    // let centery = parseFloat(getComputedStyle(songCarouselWheelItems[0]).top) 

    let thetaRad = (Math.PI / 180.0) * (360 / carouselWheelLength)
  
    songCarouselWheelItems.forEach( (songItem, i) => {

      degrees.push(-1.0 * i * 360 / carouselWheelLength)

      songItem.style.left = `${centerx + 290 * Math.cos(thetaRad * (i))}px`
      songItem.style.top = `${centery - 290 * Math.sin(thetaRad * (i))}px`
      if (i !== 0) {
        // songItem.style.transform = `rotate(${-1.0 * i * 360 / carouselWheelLength}deg) translateY(-50%)`
        songItem.style.transform = `rotate(${-1.0 * i * 360 / carouselWheelLength}deg) perspective(200px) rotateY(28deg) translate(-50%, -50%)`
      } else {
        songItem.style.transform = `rotate(0deg)  translate(-50%, -50%)`
        songItem.style.opacity = `1`
        previewCarouselItems[0].style.opacity = '0.92'
        previewCarouselItems[0].style.cursor = 'pointer'
      }
    })
  }

  wheelNext.addEventListener('click', () => {
    removeSelectable()
    wheelIndex -= 1
    selectable()
    carouselWheel.style.transform = `rotate(${-1.0 * thetaDeg * wheelIndex}deg)`
    previewCarousel.style.transform = `rotateX(${wheelIndex/6 * 360}deg)`
  })


  wheelPrev.addEventListener('click', () => {
    removeSelectable()
    wheelIndex += 1
    selectable()
    carouselWheel.style.transform = `rotate(${-1.0 * thetaDeg * wheelIndex}deg)`

    previewCarousel.style.transform = `rotateX(${wheelIndex/6 * 360}deg)`
  })

  let audioUrls = [
    "https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Marshmello+Halsey++Be+Kind+Halsey+Lyric+Video.mp3",
    "https://keytar-hero-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Neon+Genesis+Evangelion++Opening++1080p+Japanese.mp3",
    "https://keytar-hero-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Breaking+the+Law.mp3",
    "https://keytar-hero-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+JoJo+Part+5+OST++Il+vento+doro+Improved+MET+Ver.mp3",
    // "https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+The+Weeknd++Save+Your+Tears+Audio.mp3",
    // "https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Ariana+Grande++positions+Lyrics.mp3",
  ]

  let loop
  function audioPreviewLoop(index = currentPreviewIndex) {
    clearInterval(loop)
    clearTimeout(previewTimeout)
    volumeDown()
    audioPreview(index)
    loop = setInterval( () => {
      clearTimeout(previewTimeout)
      clearInterval(intervalDown)
      clearInterval(intervalUp)
      volumeDown()
      audioPreview(index)
    }, 12000)
  }

  let previewTimeout
  function audioPreview(index = currentPreviewIndex) {
    // audio.pause()
    currentPreviewIndex = index
    previewTimeout = setTimeout( () => {
      audio.src = audioUrls[index]
      audio.play()
      volumeUp()
    }, 1000)
  }

  let intervalUp
  function volumeUp() {
    // audio.volume = 0
    clearInterval(intervalDown)
    clearInterval(intervalUp)
    intervalUp = setInterval(() => {
      if (audio.volume <= (currentVolume - currentVolume/100 )) {
        if (currentVolume/100 === 0 ) {
          audio.volume = currentVolume
          clearInterval(intervalUp)
        }
        audio.volume += currentVolume/100 
      } else {
        audio.volume = currentVolume
        clearInterval(intervalUp)
      }
    }, 15)
  }

  let intervalDown
  function volumeDown() {
    clearInterval(intervalDown)
    clearInterval(intervalUp)
    intervalDown = setInterval(() => {
      if (audio.volume >= currentVolume/60 ) {
        if (currentVolume/60 === 0 ) {
          // audio.pause()
          clearInterval(intervalDown)
        }
        audio.volume -= currentVolume/60 
      } else {
        // audio.pause()
        clearInterval(intervalDown)
      }
    }, 10)
  }

  //make current wheel item clickable
  function selectable() {
    let index = wheelIndex % carouselWheelLength
    if (index < 0) {
      index *= -1
    }
    else if (index > 0) {
      index = 6 - index
    }
    songCarouselWheelItems[index].classList.add("selectable")
    songCarouselWheelItems[index].style.transform = `rotate(${degrees[index]}deg) perspective(0px) rotateY(0deg) translate(-50%, -50%)`
    songCarouselWheelItems[index].style.opacity = `1`
    previewCarouselItems[index].style.cursor = 'pointer'
    previewCarouselItems[index].style.opacity = '0.92'
    // audioPreview(index)
    audioPreviewLoop(index)
  }

  //make prev item nonclickable
  function removeSelectable() {
    let index = wheelIndex % carouselWheelLength
    if (index <= 0) {
      index *= -1
    } 
    else {
      index = 6 - index
    }

    songCarouselWheelItems[index].classList.remove("selectable")
    songCarouselWheelItems[index].style.transform = `rotate(${degrees[index]}deg) perspective(200px) rotateY(28deg) translate(-50%, -50%)`
    songCarouselWheelItems[index].style.opacity = `0.6`
    previewCarouselItems[index].style.cursor = 'default'
    previewCarouselItems[index].style.opacity = '0.6'
    volumeDown()
  }

  // let selectSong = document.getElementById('halsey')
  // let selectSong = document.getElementsByClassName('selectable')[0]

  //play song
  const canvas = document.getElementById('canvas');
  songCarouselWheelItems.forEach( song => { song.addEventListener('click', () => {
    if (song.classList.contains('selectable')) {
      homePage.classList.remove('fadeIn')
      homePage.classList.add('fadeOut')
      selectCircle.classList.remove('song-selection-container-open')
      selectCircle.classList.add('song-selection-container-closed')
      clearInterval(loop)
      volumeDown()
      setTimeout(() => {
        volumeUp()
        audio.pause()
        audio.currentTime = 0
        new Game(canvas, song.id);
        homePage.classList.add('hidden')
        homePage.classList.remove('fadeOut')
  
        gameView.classList.remove('hidden')
        gameView.classList.add('fadeIn')
      }, 666)
    }
    }) 
  })


  let zDeg = 235 * 6 / Math.PI

  previewCarouselItems.forEach( (preview, i) => {
    preview.style.transform = `rotateX(${60 * i}deg) translateZ(${zDeg}px)`
  })


  canvas.style.backgroundSize = "100% 100%";
  // new Game(canvas);
  modalHandler()
})
