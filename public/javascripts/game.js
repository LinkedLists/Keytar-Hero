import Note from './note'
import { drawTargets } from './target'
import Target from './target'
import { song } from './song/test'

export default class Game {
  constructor(canvas) {
    this.c = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height};
    this.score = 0;
    this.song;
    this.isPlaying = false;
    this.notes = this.generateNoteArray();
    
    this.addListeners = this.addListeners.bind(this)
    this.addListeners()
    this.animate = this.animate.bind(this)
    this.checkCollisionDown = this.checkCollisionDown.bind(this)
    this.checkCollisionUp = this.checkCollisionUp.bind(this)
    this.scoreboard = this.scoreboard.bind(this)
    this.generateNotes = this.generateNotes.bind(this)
    this.playSong = this.playSong.bind(this)
    this.tempoSetter = this.tempoSetter.bind(this)
    this.generateTargets = this.generateTargets.bind(this);
    this.targets = this.generateTargets()
    this.animate();
    this.playSong();
  }

  animate() {
    ////////////////////////
    //FIGURE OUT WHY//////////
    this.bandAidFix(this.c)
    //////////////////////////////
    
    this.c.clearRect(0, 0, canvas.width, canvas.height);
    this.scoreboard()
    
    this.targets.forEach( target => {
      this.c.save();
      target.displayTarget()
      this.c.restore();
    })
    // this.notes is a 2D array to handle simultaneous inputs
    // this updates all notes and clears any notes that are
    // out of bounds
    this.notes.forEach( subArr => {
      subArr.forEach( note => {
        note.update()
      })
      // if the first note in each subArr is out of bounds then clear it
      if (subArr[0] !== undefined) {
        if (subArr[0].holdValue !== 0 && subArr[0].outOfBoundsTail(this.dimensions.height)) {
          subArr[0].color = 'gray';
          console.log("note is unshifted");
          subArr.shift();
        }
        else if (subArr[0].holdValue === 0 && subArr[0].outOfBounds(this.dimensions.height)) {
          subArr[0].color = 'gray';
          console.log("note is unshifted");
          subArr.shift();
        }
      }
    })

    requestAnimationFrame(this.animate)
  }

  checkCollisionDown(x) {
    let note = this.notes[x][0];
    if (
      note && 
      note.inBounds(this.dimensions.height)) {
        if (note.color !== "black") {
          if (note.holdValue !== 0) {
            console.log("holding")
            note.holdFlag = true;
            note.color = 'purple';
            this.score += 5;
            this.targets[x].successfulHit = true
          } else {
            console.log("hit")
            this.targets[x].successfulHit = true
            this.score += 20;
            this.notes[x].shift();
            setTimeout(() => {this.targets[x].successfulHit = false}, 80)
          }
        }
      }
  }

  checkCollisionUp(x) {
    let note = this.notes[x][0];
    this.targets[x].successfulHit = false;
    // make sure there is a note to look at when a keyup occurs
    if (note) {
      if (note.holdFlag && note.inBoundsTail(this.dimensions.height)) {
        console.log("hold released")
        this.score += 1;
        note.holdFlag = false;
        this.notes[x].shift();
      }
      else if (note.holdFlag && !note.inBoundsTail(this.dimensions.height)) {
        note.color = 'black';
        console.log("missed")
        note.holdFlag = false;
      }
    }
  }

  addListeners() {
    addEventListener('keydown', e => {
      if (e.key == "1") {
        this.checkCollisionDown(0)
      } 
      if (e.key == "2") {
        this.checkCollisionDown(1)
      } 
      if (e.key == "3") {
        this.checkCollisionDown(2)
      } 
      if (e.key == "4") {
        this.checkCollisionDown(3)
      } 
      if (e.key == "5") {
        this.checkCollisionDown(4)
      } 
    })
    addEventListener('keyup', e => {
      if (e.key == "1") {
        this.checkCollisionUp(0)
      } 
      if (e.key == "2") {
        this.checkCollisionUp(1)
      } 
      if (e.key == "3") {
        this.checkCollisionUp(2)
      } 
      if (e.key == "4") {
        this.checkCollisionUp(3)
      } 
      if (e.key == "5") {
        this.checkCollisionUp(4)
      } 
    })
  }

  scoreboard() {
    const x = this.dimensions.width / 20;
    const y = this.dimensions.height / 10
    let score = document.getElementsByClassName('score-board') 
    score.innerHTML = this.score
    this.c.font = "bold 50px Arial";
    this.c.fillStyle = "white";
    this.c.fillText(this.score, x, y);
    this.c.lineWidth = 2;
    this.c.strokeText(this.score, x, y);
    this.c.stroke();
  }

  generateNoteArray() {
    let notes = new Array(5);
    for (let i = 0; i < notes.length; i++) {
      notes[i] = new Array();
    }
    return notes
  }

  generateNotes() {
    let counter = 0
    setInterval( () => {
      counter++
      if (song.length > 0) {
        if (song[0].rest) {
          counter -= song[0].tempo
          song.shift()
        }
        else if (song[0].kill) {
          counter += 1
          song.shift()
        }
        if (counter === 1 && song[0].tempo > 1) {
          this.tempoSetter();
          counter = 0
        }
        else if (counter === 2) {
          counter = 0
          this.tempoSetter();
        }
      }
    }, 319)
  }
      
  tempoSetter() {
    let noteParams = song.shift();
    let note = new Note(noteParams.x, noteParams.y, this.c, this.returnColor(noteParams.x), noteParams.hold)
    this.notes[noteParams.pos].push(note)
    if (noteParams.chain) {
      let noteParams2 = song.shift();
      let note2 = new Note(noteParams2.x, noteParams2.y, this.c, this.returnColor(noteParams2.x), noteParams.hold)
      this.notes[noteParams2.pos].push(note2)
    }
    clearInterval(this.generateNotes)
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
    const delay = 5709 - (innerHeight / 8) / 60 * 1000 ;
    console.log(delay)
    console.log(innerHeight)
    // intro takes 5709ms until a note should be playble

    // (innerHeight / 8) / 60 is the time it takes for the note
    // to become playable assuming 60 fps
    // * 1000 to change to ms

    this.song = document.getElementById('audio');
    let start = document.getElementById('start');
    let pause = document.getElementById('pause');
    let resume = document.getElementById('resume');
    start.addEventListener('click', () => {
      setTimeout(this.generateNotes, 3604);
      document.getElementById('audio').play();
      this.isPlaying = true;
      // requestAnimationFrame(this.animate)
    });
    pause.addEventListener('click', () => {
      document.getElementById('audio').pause();
      this.isPlaying = false;
      clearInterval(this.generateNotes)
      console.log("wtf")
      cancelAnimationFrame(this.animate)
      cancelAnimationFrame(drawTargets)
    });
    resume.addEventListener('click', () => {
      document.getElementById('audio').play();
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