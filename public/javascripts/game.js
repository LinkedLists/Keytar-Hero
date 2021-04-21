import Note from './note'
import Target from './target'
import { song } from './song/song'

export default class Game {
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
    this.noteDelay = null;

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
    this.playNotes = this.playNotes.bind(this)
  }


  selectSong(songId) {
    if (songId === 'song1') {
      this.allNotes = song.notes.slice()
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
      if (pos !== this.dimensions.height) note.update();
    })

    // this.visibleNotes is a 2D array containing a subarray of notes for each target
    // which allows for simultaneous inputs.
    // This updates all notes and clears any notes that are
    // out of bounds
    this.visibleNotes.forEach( (subArr, i) => {
      subArr.forEach( note => {
        note.update();
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

  addTargetListeners() {
    // Keydown will continue to listen if pressed
    // so keyLock will prevent the event from continuing
    let keyLock1 = false;
    let keyLock2 = false;
    let keyLock3 = false;
    let keyLock4 = false;
    let keyLock5 = false;
    addEventListener('keydown', e => {
      if (e.key == "1" && !keyLock1) {
        keyLock1 = true;
        this.checkCollisionDown(0)
      } 
      if (e.key == "2" && !keyLock2) {
        keyLock2 = true;
        this.checkCollisionDown(1)
      } 
      if (e.key == "3" && !keyLock3) {
        keyLock3 = true;
        this.checkCollisionDown(2)
      } 
      if (e.key == "4" && !keyLock4) {
        keyLock4 = true;
        this.checkCollisionDown(3)
      } 
      if (e.key == "5" && !keyLock5) {
        keyLock5 = true;
        this.checkCollisionDown(4)
      } 
    })
    addEventListener('keyup', e => {
      clearInterval(this.globalScore);
      if (e.key == "1") {
        keyLock1 = false;
        this.checkCollisionUp(0)
      } 
      if (e.key == "2") {
        keyLock2 = false;
        this.checkCollisionUp(1)
      } 
      if (e.key == "3") {
        keyLock3 = false;
        this.checkCollisionUp(2)
      } 
      if (e.key == "4") {
        keyLock4 = false;
        this.checkCollisionUp(3)
      } 
      if (e.key == "5") {
        keyLock5 = false;
        this.checkCollisionUp(4)
      } 
    })
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
    this.noteDelay = null;
    this.callGenerateNotes = setInterval( () => {
      // this.intervalValue += 1
      // this.counter++;
      // if (this.allNotes.length > 0) {
      //   if (this.allNotes[0].rest) {
      //     this.counter -= this.allNotes[0].tempo;
      //     this.allNotes.shift();
      //   }
      //   else if (this.allNotes[0].kill) {
      //     this.counter += 1;
      //     this.allNotes.shift();
      //   }
      //   if (this.counter === 1 && this.allNotes[0].tempo > 1) {
      //     this.noteGrabber();
      //     this.counter = 0;
      //   }
      //   else if (this.counter === 2) {
      //     this.counter = 0;
      //     this.noteGrabber();
      //   }
      // }
      this.playNotes()
    }, song.tempo)
  }
      
  noteGrabber() {
    let noteParams = this.allNotes.shift();
    let note = new Note(noteParams.x, noteParams.y, this.c, this.returnColor(noteParams.x), noteParams.hold)
    this.visibleNotes[noteParams.pos].push(note);
    if (noteParams.chain) {
      let noteParams2 = this.allNotes.shift();
      let note2 = new Note(noteParams2.x, noteParams2.y, this.c, this.returnColor(noteParams2.x), noteParams.hold)
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
    let homePage = document.getElementsByClassName('homepage-container')[0]
    let gameView = document.getElementsByClassName('game-view')[0]
    let selectCircle = document.getElementsByClassName('song-selection-container-closed')[0]

    setTimeout(() => {
      if (this.audio.currentTime === 0) {
        this.audio.play()
          .then(setTimeout(this.generateNotes, song.introDelay));
        this.isPlaying = true;
        requestAnimationFrame(this.animate)
      }
      //fade delay
    }, 1500)

    back.addEventListener('click', () => {
      resume.classList.add("hidden")
      
      this.allNotes = []
      this.visibleNotes = [];
      this.missedNotes = [];
      this.isPlaying = false;
      this.audio.pause()
      this.audio.currentTime = 0
      
      clearInterval(this.callGenerateNotes)
      gameView.classList.remove('fadeIn')
      gameView.classList.add('fadeOut')

      //clear notes in settime out or everything zeros out before fade away
      setTimeout(() => {
        this.score = 0;
        this.streak = 0;
        this.maxStreak = 0;
        selectCircle.classList.add('song-selection-container-open')
        selectCircle.classList.remove('song-selection-container-closed')
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
      this.allNotes = song.notes.slice()
      this.score = 0;
      this.streak = 0;
      this.maxStreak = 0;
      this.visibleNotes = this.generateNoteArray();
      this.missedNotes = [];
      pause.classList.remove("hidden")
      resume.classList.add("hidden")
      clearInterval(this.callGenerateNotes)
      if (!this.isPlaying) {
        this.isPlaying = true;
        requestAnimationFrame(this.animate)
      }
      // this.audio.pause()
      this.audio.currentTime = 0
      this.audio.play()
        .then(setTimeout(this.generateNotes, song.introDelay));
      
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

    // function playing() {
    //     playTime = Date.now();
    // }
    
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
      this.intervalValue %= song.tempo
      this.isPlaying = false;
      // if (this.noteDelay !== null) {
      //   clearTimeout(this.noteDelay);
      //   introDelay -= playTime;
      //   playTime = null;
      // } else {
        clearInterval(this.callGenerateNotes)
        clearTimeout(this.resumeTimeout)
      // }
    });
    resume.addEventListener('click', () => {
      // if (this.noteDelay !== null) {
        //   playing()
        //   setTimeout(this.generateNotes, introDelay)
        // } else {

      // let dif = stopButton()

      let dif = song.tempo - this.intervalValue
      // this.intervalValue = 0
      this.resumeTimeout = setTimeout( () => {
          // this.intervalValue = 0
          // console.log(this.intervalValue)
          this.playNotes()
          this.callGenerateNotes = setInterval( () => {
          this.playNotes()
        }, song.tempo)
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
      targets.push(new Target(this.c, i))
    }
    return targets
  }

  bandAidFix(c) {
    c.beginPath();
    c.rect(0, 0, 0, 0);
    c.stroke();
  }


} 