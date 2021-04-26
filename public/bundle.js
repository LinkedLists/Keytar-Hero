/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wheel__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal__ = __webpack_require__(15);




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
  let previewCarouselImg = document.querySelectorAll('.preview-img');
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
        previewCarouselItems[0].classList.add("selectable")
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
        audio.volume = 0
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
    previewCarouselItems[index].classList.add("selectable")
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
    previewCarouselItems[index].classList.remove("selectable")
    volumeDown()
  }

  // let selectSong = document.getElementById('halsey')
  // let selectSong = document.getElementsByClassName('selectable')[0]
  let newGame
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
        newGame = new __WEBPACK_IMPORTED_MODULE_0__game__["a" /* default */](canvas, song.id);
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

    preview.addEventListener('click', () => {
      if (preview.classList.contains('selectable')) {
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
          newGame = new __WEBPACK_IMPORTED_MODULE_0__game__["a" /* default */](canvas, 'song' + (i + 1).toString());
          homePage.classList.add('hidden')
          homePage.classList.remove('fadeOut')
    
          gameView.classList.remove('hidden')
          gameView.classList.add('fadeIn')
        }, 666)
      }
    })
  })


  canvas.style.backgroundSize = "100% 100%";
  // new Game(canvas);
  Object(__WEBPACK_IMPORTED_MODULE_2__modal__["a" /* modalHandler */])()
})


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__note__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__target__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__song_song1__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__song_song4__ = __webpack_require__(12);





class Game {
  constructor(canvas, songId) {
    this.c = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height};
    this.score = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.audio;
    this.isPlaying = false;
    this.visibleNotes = this.generateNoteArray();
    this.missedNotes = [];
    // this.allNotes = song.notes.slice()
    this.allNotes = []
    this.currentSong;

    this.addTargetListeners = this.addTargetListeners.bind(this)
    this.addTargetListeners()
    this.animate = this.animate.bind(this)
    this.checkCollisionDown = this.checkCollisionDown.bind(this)
    this.checkCollisionUp = this.checkCollisionUp.bind(this)
    this.scoreboard = this.scoreboard.bind(this)
    this.generateNotes = this.generateNotes.bind(this)
    this.playSong = this.playSong.bind(this)
    this.noteGrabber = this.noteGrabber.bind(this)
    this.generateTargets = this.generateTargets.bind(this);
    this.targets = this.generateTargets();
    this.streakBoard = this.streakBoard.bind(this)
    this.resetStreak = this.resetStreak.bind(this)

    this.selectSong = this.selectSong.bind(this)
    this.selectSong(songId)

    this.callGenerateNotes;
    this.counter = 0;

    // Will need variables to save each intervalID when calling
    // setInterval when incrementing the score for holding notes
    this.score1;
    this.score2;
    this.score3;
    this.score4;
    this.score5;

    // this.animate();
    // this.playSong();

    this.intervalValue = 0
    this.resumeTimeout
    this.startTimeout
    this.restartTimeout
    this.playNotes = this.playNotes.bind(this)

    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)

    this.keyLock1 = false;
    this.keyLock2 = false;
    this.keyLock3 = false;
    this.keyLock4 = false;
    this.keyLock5 = false;

  }


  selectSong(songId) {
    if (songId === 'song1') {
      this.currentSong = __WEBPACK_IMPORTED_MODULE_2__song_song1__["a" /* song1 */]
      this.allNotes = __WEBPACK_IMPORTED_MODULE_2__song_song1__["a" /* song1 */].notes.slice()
      this.animate();
      this.playSong();
    }
    // else if (songId === 'song2') {
    //   this.allNotes = song3.notes.slice()
    //   this.animate();
    //   this.playSong();
    // }
    // else if (songId === 'song3') {
    //   this.allNotes = song3.notes.slice()
    //   this.animate();
    //   this.playSong();
    // }
    else if (songId === 'song4') {
      this.currentSong = __WEBPACK_IMPORTED_MODULE_3__song_song4__["a" /* song4 */]
      this.allNotes = __WEBPACK_IMPORTED_MODULE_3__song_song4__["a" /* song4 */].notes.slice()
      this.animate();
      this.playSong();
    }
  }

  animate() {
    this.bandAidFix(this.c)
    this.c.clearRect(0, 0, canvas.width, canvas.height);
    this.scoreboard();
    this.streakBoard();
    
    this.targets.forEach( target => {
      this.c.save();
      target.displayTarget()
      this.c.restore();
    })


    // this.missedNotes collects missed notes and allows for them to
    // continue falling offscreen.
    this.missedNotes.forEach( note => {
      let pos = note.y - note.extensionLength - 30
      if (pos !== this.dimensions.height) note.update(this.currentSong.dy);
    })

    // this.visibleNotes is a 2D array containing a subarray of notes for each target
    // which allows for simultaneous inputs.
    // This updates all notes and clears any notes that are
    // out of bounds
    this.visibleNotes.forEach( (subArr, i) => {
      subArr.forEach( note => {
        note.update(this.currentSong.dy);
      })

      // if the first note in each subArr is out of bounds then clear it
      if (subArr[0] !== undefined) {
        // Clear if a holding note is out of bounds
        if (subArr[0].holdValue !== 0 && subArr[0].outOfBoundsTail(this.dimensions.height)) {
          this.resetStreak();
          subArr[0].color = 'gray';
          console.log("note is unshifted");
          this.missedNotes.push(subArr.shift());
          
          if(i === 0) clearInterval(this.score1)
          if(i === 1) clearInterval(this.score2)
          if(i === 2) clearInterval(this.score3)
          if(i === 3) clearInterval(this.score4)
          if(i === 4) clearInterval(this.score5)

          // If a holding note was held for too long then clear the 
          // successful hit glow indicator from the target
          this.targets[i].successfulHit = false
        }
        // Clear if a single note is out of bounds
        else if (subArr[0].holdValue === 0 && subArr[0].outOfBounds(this.dimensions.height)) {
          this.resetStreak();
          subArr[0].color = 'gray';
          console.log("note is unshifted");
          subArr.shift();
        }
        // If a holding note was not hit then gray it out
        else if (
          subArr[0].holdValue !== 0 && 
          subArr[0].outOfBoundsHoldingNoteHead(this.dimensions.height) &&
          !subArr[0].holdFlag) {
            if (subArr[0].color !== 'black') subArr[0].color = 'gray';
            this.resetStreak();
            this.missedNotes.push(subArr.shift())
        }
      }
    })

    if (this.isPlaying) requestAnimationFrame(this.animate)
  }

  scoreIncrementer() {
    return setInterval(() => {
      this.score += 2
    }, 100);
  }

  checkCollisionDown(x) {
    let note = this.visibleNotes[x][0];
    if (note) {
      if (note.inBounds(this.dimensions.height)) {
        // As long as the note was not previously colored out then 
        // the hit was successful!
        if (note.color !== "black" && note.color !== "gray") {
          if (note.holdValue !== 0 && !note.outOfBoundsHoldingNoteHead(this.dimensions.height)) {
            console.log("holding")

            if(x === 0) this.score1 = this.scoreIncrementer()
            if(x === 1) this.score2 = this.scoreIncrementer()
            if(x === 2) this.score3 = this.scoreIncrementer()
            if(x === 3) this.score4 = this.scoreIncrementer()
            if(x === 4) this.score5 = this.scoreIncrementer()

            note.holdFlag = true;
            note.color = 'purple';
            this.targets[x].successfulHit = true
          } else {
            this.streak += 1;
            if (this.streak > this.maxStreak) this.maxStreak = this.streak;
            console.log("hit")
            this.targets[x].successfulHit = true
            this.score += 20;
            this.visibleNotes[x].shift();
            setTimeout(() => {this.targets[x].successfulHit = false}, 80)
          }
        }
      }
    }
  }

  checkCollisionUp(x) {
    let note = this.visibleNotes[x][0];
    this.targets[x].successfulHit = false;
    
    if(x === 0) clearInterval(this.score1)
    if(x === 1) clearInterval(this.score2)
    if(x === 2) clearInterval(this.score3)
    if(x === 3) clearInterval(this.score4)
    if(x === 4) clearInterval(this.score5)
    
    // make sure there is a note to look at when a keyup occurs
    if (note) {
      if (note.holdFlag && note.inBoundsTail(this.dimensions.height)) {
        this.streak += 1;
        if (this.streak > this.maxStreak) this.maxStreak = this.streak;
        console.log("hold released")
        note.holdFlag = false;
        this.visibleNotes[x].shift();
      }
      else if (note.holdFlag && !note.inBoundsTail(this.dimensions.height)) {
        this.resetStreak();
        note.color = 'black';
        console.log("missed")
        note.holdFlag = false;
      }
    }
  }

  handleKeyDown(e) {
    if (e.key == "1" && !this.keyLock1) {
      this.keyLock1 = true;
      this.checkCollisionDown(0)
    } 
    if (e.key == "2" && !this.keyLock2) {
      this.keyLock2 = true;
      this.checkCollisionDown(1)
    } 
    if (e.key == "3" && !this.keyLock3) {
      this.keyLock3 = true;
      this.checkCollisionDown(2)
    } 
    if (e.key == "4" && !this.keyLock4) {
      this.keyLock4 = true;
      this.checkCollisionDown(3)
    } 
    if (e.key == "5" && !this.keyLock5) {
      this.keyLock5 = true;
      this.checkCollisionDown(4)
    } 
  }

  handleKeyUp(e) {
    if (e.key == "1") {
      this.keyLock1 = false;
      this.checkCollisionUp(0)
    } 
    if (e.key == "2") {
      this.keyLock2 = false;
      this.checkCollisionUp(1)
    } 
    if (e.key == "3") {
      this.keyLock3 = false;
      this.checkCollisionUp(2)
    } 
    if (e.key == "4") {
      this.keyLock4 = false;
      this.checkCollisionUp(3)
    } 
    if (e.key == "5") {
      this.keyLock5 = false;
      this.checkCollisionUp(4)
    } 
  }

  addTargetListeners() {
    // Keydown will continue to listen if pressed
    // so keyLock will prevent the event from continuing

    window.addEventListener('keydown', e => this.handleKeyDown(e))
    window.addEventListener('keyup', e => this.handleKeyUp(e))
  }

  scoreboard() {
    let score = document.getElementById('score'); 
    score.innerHTML = this.score;
  }

  streakBoard() {
    let streak = document.getElementById('streak'); 
    let max = document.getElementById('max-streak'); 
    streak.innerHTML = this.streak;
    max.innerHTML = this.maxStreak;
    // let img = document.getElementById('streak-img')
    // if ( this.streak >=5 && this.streak < 20) {
    //   img.src = 'https://keytar-hero-seed.s3-us-west-1.amazonaws.com/1.png';
    // }
    // if ( this.streak >= 20 && this.streak < 65) {
    //   img.src = 'https://keytar-hero-seed.s3-us-west-1.amazonaws.com/2.png';
    // }
    // if ( this.streak >=65) {
    //   img.src = 'https://keytar-hero-seed.s3-us-west-1.amazonaws.com/3.png';
    // }
  }

  resetStreak() {
    if (this.maxStreak < this.streak) {
      this.maxStreak = this.streak;
    };
    this.streak = 0;
  }

  generateNoteArray() {
    let notes = new Array(5);
    for (let i = 0; i < notes.length; i++) {
      notes[i] = new Array();
    }
    return notes
  }

  playNotes() {
    this.intervalValue += 1
    this.counter++;
    if (this.allNotes.length > 0) {
      if (this.allNotes[0].rest) {
        this.counter -= this.allNotes[0].tempo;
        this.allNotes.shift();
      }
      else if (this.allNotes[0].kill) {
        this.counter += 1;
        this.allNotes.shift();
      }
      if (this.counter === 1 && this.allNotes[0].tempo > 1) {
        this.noteGrabber();
        this.counter = 0;
      }
      else if (this.counter === 2) {
        this.counter = 0;
        this.noteGrabber();
      }
    }
  }

  generateNotes() {
    this.callGenerateNotes = setInterval( () => {
      this.playNotes()
    }, this.currentSong.tempo)
  }
      
  noteGrabber() {
    let noteParams = this.allNotes.shift();
    let note = new __WEBPACK_IMPORTED_MODULE_0__note__["a" /* default */](noteParams.x, noteParams.y, this.c, this.returnColor(noteParams.x), noteParams.hold)
    this.visibleNotes[noteParams.pos].push(note);
    if (noteParams.chain) {
      let noteParams2 = this.allNotes.shift();
      let note2 = new __WEBPACK_IMPORTED_MODULE_0__note__["a" /* default */](noteParams2.x, noteParams2.y, this.c, this.returnColor(noteParams2.x), noteParams.hold)
      this.visibleNotes[noteParams2.pos].push(note2);
    }
  }

  returnColor(pos) {
    const colorCode = {
      30: "green",
      150: "red",
      270: "yellow",
      390: "blue",
      510: "orange",
    }
    return colorCode[pos]
  }

  playSong() {
    // looks like this is never used
    // const delay = 5709 - (innerHeight / 8) / 60 * 1000 ;
    // console.log("your canvas height in pixels is " + innerHeight);
    // intro takes 5709ms until a note should be playble

    this.audio = document.getElementById('audio');
    let restart = document.getElementById('restart');
    let pause = document.getElementById('pause');
    let resume = document.getElementById('resume');
    let mute = document.getElementById('mute');
    let unmute = document.getElementById('unmute');
    
    let back = document.getElementById('back');
    let startBtn = document.getElementById('start-btn')
    let previewCarousel = document.getElementsByClassName('preview-carousel')[0]
    let homePage = document.getElementsByClassName('homepage-container')[0]
    let gameView = document.getElementsByClassName('game-view')[0]
    let selectCircle = document.getElementsByClassName('song-selection-container-closed')[0]

    setTimeout(() => {
      if (this.audio.currentTime === 0) {
        this.audio.play()
          .then(this.startTimeout = setTimeout(this.generateNotes, this.currentSong.introDelay));
        this.isPlaying = true;
        requestAnimationFrame(this.animate)
      }
      //fade delay
    }, 1500)

    back.addEventListener('click', () => {
      resume.classList.add("hidden")
      

      window.removeEventListener('keydown', this.handleKeyDown)
      window.removeEventListener('keyup', this.handleKeyUp)

      this.allNotes = []
      this.visibleNotes = this.generateNoteArray();
      this.missedNotes = [];
      this.isPlaying = false;
      this.audio.pause()
      this.audio.currentTime = 0
      this.audio.muted = false
      
      clearInterval(this.callGenerateNotes)
      clearTimeout(this.startTimeout)
      gameView.classList.remove('fadeIn')
      gameView.classList.add('fadeOut')

      //clear notes in settime out or everything zeros out before fade away
      setTimeout(() => {
        this.score = 0;
        this.streak = 0;
        this.maxStreak = 0;
        selectCircle.classList.add('song-selection-container-open')
        selectCircle.classList.remove('song-selection-container-closed')
        // startBtn.click()
        homePage.classList.remove('hidden')
        homePage.classList.add('fadeIn')
        gameView.classList.add('hidden')
        gameView.classList.remove('fadeOut')
        if (!this.audio.paused) {
          this.audio.pause()
          this.audio.currentTime = 0
        }
      }, 666)
    })

    restart.addEventListener('click', () => {
      this.allNotes = this.currentSong.notes.slice()
      this.score = 0;
      this.streak = 0;
      this.maxStreak = 0;
      this.visibleNotes = this.generateNoteArray();
      this.missedNotes = [];
      this.counter = 0
      pause.classList.remove("hidden")
      resume.classList.add("hidden")
      clearInterval(this.callGenerateNotes)
      clearTimeout(this.restartTimeout)
      clearTimeout(this.startTimeout)
      if (!this.isPlaying) {
        this.isPlaying = true;
        requestAnimationFrame(this.animate)
      }
      // this.audio.pause()
      this.audio.currentTime = 0
      if (this.audio.paused) {
        this.audio.play().then(this.restartTimeout = setTimeout(this.generateNotes, this.currentSong.introDelay));
      } else {
        this.restartTimeout = setTimeout(this.generateNotes, this.currentSong.introDelay)
      }
      this.isPlaying = true;
      // requestAnimationFrame(this.animate)
    });
    
    mute.addEventListener('click', () => {
      if (!this.audio.muted) {
        this.audio.muted = true;
        mute.classList.add("hidden")
        unmute.classList.remove("hidden")
      } 
    });
    unmute.addEventListener('click', () => {
      if (this.audio.muted) {
        this.audio.muted = false;
        unmute.classList.add("hidden")
        mute.classList.remove("hidden")
      } 
    });

    let startTime;

    function startButton() {
        startTime = Date.now();
    }
    
    function stopButton() {
        if (startTime) {
            let endTime = Date.now();
            let difference = endTime - startTime;
            startTime = null;
            return difference
        } 
    }
    pause.addEventListener('click', () => {
      this.audio.pause();
      pause.classList.add("hidden")
      resume.classList.remove("hidden")
      // startButton()
      this.intervalValue %= this.currentSong.tempo
      this.isPlaying = false;
      clearInterval(this.callGenerateNotes)
      clearTimeout(this.resumeTimeout)
      
    });
    resume.addEventListener('click', () => {
      // let dif = stopButton()

      let dif = this.currentSong.tempo - this.intervalValue - 45
      dif = dif < 0 ? 0 : dif
      this.resumeTimeout = setTimeout( () => {
          this.playNotes()
          this.callGenerateNotes = setInterval( () => {
          this.playNotes()
        }, this.currentSong.tempo)
      }, dif)

      pause.classList.remove("hidden")
      resume.classList.add("hidden")

      this.audio.play();
      this.isPlaying = true;

      requestAnimationFrame(this.animate)
    })
  }



  generateTargets() {
    const targets = []
    for(let i = 1; i < 6; i++) {
      targets.push(new __WEBPACK_IMPORTED_MODULE_1__target__["a" /* default */](this.c, i))
    }
    return targets
  }

  bandAidFix(c) {
    c.beginPath();
    c.rect(0, 0, 0, 0);
    c.stroke();
  }


}
/* harmony export (immutable) */ __webpack_exports__["a"] = Game;
 

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

class Note {
  constructor(x, y, context, color, holdValue = 0) {
    this.x = x;
    this.y = y;
    this.c = context
    this.holdValue = holdValue
    this.extensionLength = 0;
    this.color = color;
    this.originalColor;
    this.holdFlag = false;
    // this.dy = 8;


    this.generateNote = this.generateNote.bind(this);
    this.generateHoldingNote = this.generateHoldingNote.bind(this);
    this.update = this.update.bind(this);
    this.outOfBounds = this.outOfBounds.bind(this);
    this.inBounds = this.inBounds.bind(this);
    this.outOfBoundsHoldingNoteHead = this.outOfBoundsHoldingNoteHead.bind(this);
    this.outOfBoundsTail = this.outOfBoundsTail.bind(this);
    this.inBoundsTail = this.inBoundsTail.bind(this);

    // need to make target object to get back original color
    this.setOriginalColor = this.setOriginalColor.bind(this);
    this.setOriginalColor();
  }

  setOriginalColor() {
    this.originalColor = this.color;
  }

  generateNote(x, y) {
    this.c.beginPath();
    this.c.arc(x + 80, y, 30, 0, Math.PI * 2, false);
    this.c.fillStyle = this.color;
    this.c.fill();
    this.c.stroke();
  }

  generateHoldingNote(x, y) {
    const beatMultiplier = 38.28
    this.extensionLength = this.holdValue * beatMultiplier * 4 - 80
    if (this.holdFlag) {
      this.c.shadowBlur = 30;
      this.c.shadowOffsetX = 3;
      this.c.shadowOffsetY = 3;
      this.c.shadowColor = "orange";
    }
    this.c.beginPath();
    this.c.arc(x + 80, y - this.extensionLength, 30, 0, Math.PI, true);
    this.c.lineTo(x + 50, y)
    this.c.moveTo(x + 110, y - this.extensionLength)
    this.c.lineTo(x + 110, y)
    this.c.arc(x + 80, y , 30, 0, -Math.PI, false);
    this.c.fillStyle = this.color;
    this.c.fill();
    this.c.shadowBlur = 0;
    this.c.stroke();
  }

  update(dy) {
    this.c.save();
    if (this.holdValue !== 0) {
      this.generateHoldingNote(this.x, this.y)
    } else {
      this.generateNote(this.x, this.y);
    }
    this.y += dy;
    this.c.restore();
  }

  // Is out of bounds of the target?
  outOfBounds(y) {
    return this.y - 75 >= y ? true : false
  }

  outOfBoundsTail(y) {
    return this.y - this.extensionLength - 210 >= y ? true : false
  }

  // In bounds of the target?
  inBounds(y) {
    return this.y + 170 >= y ? true : false
  }

  outOfBoundsHoldingNoteHead(y) {
    return this.y + 80 >= y ? true : false
  }

  inBoundsTail(y) {
    return this.y - this.extensionLength + 170 >= y ? true : false
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Note;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const COLORS = {
  1: 'green',
  2: 'red',
  3: 'yellow',
  4: 'blue',
  5: 'orange',
}

class Target {
  constructor(context, num) {
    this.context = context;
    this.color = 'lightgray';
    this.num = num;
    this.pos = (num - 1) * 120 + 110;
    this.pressedFlag = false;
    this.successfulHit = false;

    this.setTarget = this.setTarget.bind(this);
    this.setPressed = this.setPressed.bind(this);
    this.displayTarget = this.displayTarget.bind(this);
    this.addListeners = this.addListeners.bind(this);
    this.addListeners();
  }

  displayTarget() {
    if (this.pressedFlag) {
      this.setPressed();
    } else {
      this.setTarget();
    }
  }

  setPressed(){
    if (this.successfulHit) {
      this.context.shadowBlur = 30;
      this.context.shadowOffsetX = 3;
      this.context.shadowOffsetY = 3;
      this.context.shadowColor = "yellow";
    }
    this.context.beginPath();
    this.context.arc(this.pos, 678, 50, 0, Math.PI * 2, false);
    this.context.fillStyle = "black";
    this.context.fill();
    this.context.stroke();

    this.context.beginPath();
    this.context.arc(this.pos, 678, 45, 0, Math.PI * 2, false);
    this.context.fillStyle = COLORS[this.num];
    this.context.fill();
    this.context.stroke();
    
    this.context.beginPath();
    this.context.arc(this.pos, 678, 30, 0, Math.PI * 2, false);
    this.context.fillStyle = this.color;
    this.context.fill();
    this.context.stroke();
    this.context.shadowBlur = 0;
  }

  setTarget(){
    this.context.beginPath();
    this.context.arc(this.pos, 690, 50, 0, Math.PI * 2, false);
    this.context.fillStyle = "black";
    this.context.fill();
    this.context.stroke();

    this.context.beginPath();
    this.context.arc(this.pos, 690, 45, 0, Math.PI * 2, false);
    this.context.fillStyle = COLORS[this.num];
    this.context.fill();
    this.context.stroke();
    
    this.context.beginPath();
    this.context.arc(this.pos, 690, 30, 0, Math.PI * 2, false);
    this.context.fillStyle = this.color;
    this.context.fill();
    this.context.stroke();
  }
  
  addListeners() {
    addEventListener('keydown', e => {
      if (e.key == this.num) {
        this.color = 'black'
        this.pressedFlag = true;
      } 
    }),
    addEventListener('keyup', e => {
      if (e.key == this.num) {
        this.color = 'lightgray'
        this.pressedFlag = false;
      } 
    })
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Target;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__be_kind_verse_1__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__be_kind_bridge__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__be_kind_bridge_2__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__be_kind_verse_2__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__be_kind_chorus__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__be_kind_chorus_2__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__be_kind_ending__ = __webpack_require__(11);








const CONSTANTS = {
  pos1: 30,
  pos2: 150,
  pos3: 270,
  pos4: 390,
  pos5: 510,
}

const song1 = {
  notes: [].concat(__WEBPACK_IMPORTED_MODULE_0__be_kind_verse_1__["a" /* verse_1 */], __WEBPACK_IMPORTED_MODULE_1__be_kind_bridge__["a" /* bridge */], __WEBPACK_IMPORTED_MODULE_4__be_kind_chorus__["a" /* chorus */], __WEBPACK_IMPORTED_MODULE_3__be_kind_verse_2__["a" /* verse_2 */], __WEBPACK_IMPORTED_MODULE_1__be_kind_bridge__["a" /* bridge */], __WEBPACK_IMPORTED_MODULE_4__be_kind_chorus__["a" /* chorus */], __WEBPACK_IMPORTED_MODULE_2__be_kind_bridge_2__["a" /* bridge_2 */], __WEBPACK_IMPORTED_MODULE_5__be_kind_chorus_2__["a" /* chorus_2 */], __WEBPACK_IMPORTED_MODULE_6__be_kind_ending__["a" /* ending */]),
  introDelay: 3604,
  tempo: 319,
  dy: 8
}
/* harmony export (immutable) */ __webpack_exports__["a"] = song1;





/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CONSTANTS = {
  pos1: 30,
  pos2: 150,
  pos3: 270,
  pos4: 390,
  pos5: 510,
}

const verse_1 = [
  // verse 1
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },

  // rests
  { tempo: 1, hold: 0, chain: false, rest: true },

  // tempo here yayayayay
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: true },

  { kill: true },

  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },

  { tempo: 1, hold: 0, chain: false, rest: true },

  // tempo here yayayayay
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: true },

  { kill: true },
]
/* harmony export (immutable) */ __webpack_exports__["a"] = verse_1;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CONSTANTS = {
  pos1: 30,
  pos2: 150,
  pos3: 270,
  pos4: 390,
  pos5: 510,
}

const bridge = [
  // bridge

  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 8, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 8, chain: true },
  { tempo: 6, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 8, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 8, chain: true },
  { tempo: 6, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 8, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 8, chain: true },

  { tempo: 10, hold: 0, chain: false, rest: true },
]
/* harmony export (immutable) */ __webpack_exports__["a"] = bridge;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CONSTANTS = {
  pos1: 30,
  pos2: 150,
  pos3: 270,
  pos4: 390,
  pos5: 510,
}

const bridge_2 = [
  // bridge2
  { kill: true },
  { kill: true },
  // i know its hard
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 2, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 2, chain: true },
  { tempo: 1, hold: 0, chain: false, rest: true },

  // for you
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { kill: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  
  // but its not far
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 2, chain: true },
  { tempo: 2, hold: 0, chain: false, rest: true },

  //going sick in the head
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { kill: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 2, chain: true },
  { tempo: 1, hold: 0, chain: false, rest: true },

  //trying to get you there
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { kill: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 8, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 8, chain: true },
  { tempo: 6, hold: 0, chain: false, rest: true },
  // and i know its hard

  // but its not fair
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 8, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 8, chain: true },
  { tempo: 6, hold: 0, chain: false, rest: true },

  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 6, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 6, chain: true },
  { tempo: 4, hold: 0, chain: false, rest: true },

  // its not fair
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 4, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 4, chain: true },
  { tempo: 3, hold: 0, chain: false, rest: true },

]
/* harmony export (immutable) */ __webpack_exports__["a"] = bridge_2;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CONSTANTS = {
  pos1: 30,
  pos2: 150,
  pos3: 270,
  pos4: 390,
  pos5: 510,
}

const verse_2 = [
  // verse 2

  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  { tempo: 1, hold: 0, chain: false, rest: true },

  // tempo here yayayayay
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: true },
  { kill: true },

  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },

  // rests
  { tempo: 1, hold: 0, chain: false, rest: true },

  // tempo here yayayayay
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: true },

  { kill: true },
]
/* harmony export (immutable) */ __webpack_exports__["a"] = verse_2;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CONSTANTS = {
  pos1: 30,
  pos2: 150,
  pos3: 270,
  pos4: 390,
  pos5: 510,
}

const chorus = [
  // chorus

  // I don't know why you hide
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  // hide
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 2, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 2, chain: true },
  { tempo: 1, hold: 0, chain: false, rest: true },

  // from the one and close your
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 2, hold: 0, chain: false },
  // eyes 
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 2, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 2, chain: true },
  { tempo: 1, hold: 0, chain: false, rest: true },

  // to the one mess up and
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: true },

  // lie
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 2, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 2, chain: true },
  { tempo: 1, hold: 0, chain: false, rest: true },

  // to the one that you
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },

  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { kill: true },

  // love
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 4, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 4, chain: true },
  { tempo: 2, hold: 0, chain: false, rest: true },
  
  // When you know you can
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 4, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 4, chain: true },
  { tempo: 2, hold: 0, chain: false, rest: true },

  // ///////////////////////////
  /////CHECK POINT
  ////////////////////////////////
  // cry
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 8, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 8, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },  
  // to the one always


  // confide 
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 8, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 8, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },

  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 8, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 8, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },

  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 4, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 4, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },

  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 4, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 4, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },

  { tempo: 8, hold: 0, chain: false, rest: true },

]
/* harmony export (immutable) */ __webpack_exports__["a"] = chorus;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CONSTANTS = {
  pos1: 30,
  pos2: 150,
  pos3: 270,
  pos4: 390,
  pos5: 510,
}

const chorus_2 = [
  // chorus

  // I don't know why you hide
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  // hide
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 2, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 2, chain: true },
  { tempo: 1, hold: 0, chain: false, rest: true },

  // from the one and close your
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 2, hold: 0, chain: false },
  // eyes 
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 2, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 2, chain: true },
  { tempo: 1, hold: 0, chain: false, rest: true },

  // to the one mess up and
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: true },

  // lie
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 2, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 2, chain: true },
  { tempo: 1, hold: 0, chain: false, rest: true },

  // to the one that you
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },

  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { kill: true },

  // love
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 4, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 4, chain: true },
  { tempo: 2, hold: 0, chain: false, rest: true },
  
  // When you know you can
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 3, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 3, chain: true },
  { tempo: 3, hold: 0, chain: false, rest: true },

  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
]
/* harmony export (immutable) */ __webpack_exports__["a"] = chorus_2;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CONSTANTS = {
  pos1: 30,
  pos2: 150,
  pos3: 270,
  pos4: 390,
  pos5: 510,
}
321232123
const ending = [
  // chorus

  { tempo: 8, hold: 0, chain: false, rest: true },

  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 6, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 6, chain: true },
  { tempo: 5, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 2, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 2, chain: true },
  { tempo: 1, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 8, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 2, hold: 8, chain: true },
  { tempo: 7, hold: 0, chain: false, rest: true },

  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 6, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 6, chain: true },
  { tempo: 5, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 2, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 2, chain: true },
  { tempo: 1, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 3, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 2, hold: 3, chain: true },
  { tempo: 2, hold: 0, chain: false, rest: true },

  // I don't know why you hide
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  // hide
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 2, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 2, chain: true },
  { tempo: 1, hold: 0, chain: false, rest: true },

  // from the one and close your
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 2, hold: 0, chain: false },
  // eyes 
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 2, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 2, chain: true },
  { tempo: 1, hold: 0, chain: false, rest: true },

  // to the one mess up and
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: true },

  // lie
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 2, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 2, chain: true },
  { tempo: 1, hold: 0, chain: false, rest: true },

  // to the one that you
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },

  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { kill: true },

  // love
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 4, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 4, chain: true },
  { tempo: 2, hold: 0, chain: false, rest: true },

  
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 4, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 4, chain: true },
  
]
/* harmony export (immutable) */ __webpack_exports__["a"] = ending;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jojo_intro__ = __webpack_require__(13);



const CONSTANTS = {
  pos1: 30,
  pos2: 150,
  pos3: 270,
  pos4: 390,
  pos5: 510,
}

const song4 = {
  notes: [].concat(__WEBPACK_IMPORTED_MODULE_0__jojo_intro__["a" /* intro */]),
  introDelay: 643,
  // tempo: 222
  tempo: 100,
  dy: 9

}
/* harmony export (immutable) */ __webpack_exports__["a"] = song4;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CONSTANTS = {
  pos1: 30,
  pos2: 150,
  pos3: 270,
  pos4: 390,
  pos5: 510,
}

const intro = [

  // 1
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },

  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  // { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { kill: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },


  // 2
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },

  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  // { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { kill: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },



  // 3
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },

  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  // { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { kill: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  
  // 4
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },

  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  // { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { kill: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },

  // 5
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },

  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  // { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { kill: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },

  // 1
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },

  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  // { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { kill: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },

  // 2
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },

  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  // { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { kill: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  
  
  // middle
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { tempo: 8, hold: 0, chain: false, rest: true },



  // 3
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },

  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  // { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { kill: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  
  // 4
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },

  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  // { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { kill: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },



  // 1
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },

  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  // { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { kill: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },


  // 2
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },

  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  // { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { kill: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },



  // 3
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },

  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  // { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { kill: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  
  // 4
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },

  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  // { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { kill: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },

  // 5
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },

  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  // { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { kill: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },

  // middle
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { tempo: 8, hold: 0, chain: false, rest: true },

  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },

]
/* harmony export (immutable) */ __webpack_exports__["a"] = intro;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
///USE THIS LATER MAYBE
class Wheel {
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
    else if (index > 0) {
      index = 6 - index
    }
    this.songCarouselWheelItems[index].classList.add("selectable")
  }
  //make prev item nonclickable
  removeSelectable() {
    let index = this.wheelIndex % this.carouselWheelLength 
    if (index <= 0) {
      index *= -1
      this.songCarouselWheelItems[index].classList.remove("selectable")
    } else {
      this.songCarouselWheelItems[6 - index].classList.remove("selectable")
    }
  }
}
/* unused harmony export default */


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const modalHandler = () => {
  const openBtn = document.getElementById("open-modal");
  const modalScreen = document.getElementsByClassName("modal-screen")[0];
  const modal = document.getElementsByClassName("modal")[0];
  const closeBtn = document.getElementById("modal-close-btn");

  modalScreen.onclick = e => {
    if (e.target === modalScreen) {
      modal.classList.remove("open")
    }
  }
  
  openBtn.onclick = e => {
      modal.classList.add('open')
  }

  closeBtn.onclick = e => {
    modal.classList.remove('open')
}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = modalHandler;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map