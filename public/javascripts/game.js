import Note from './note'
import { drawTargets } from './target'
import { song } from './song/test'
// import { scoreboard } from './score'

const CONSTANTS = {
  pos1: 30,
  pos2: 150,
  pos3: 270,
  pos4: 390,
  pos5: 510,
}

export default class Game {
  constructor(canvas) {
    this.c = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height};
    this.score = 0;
    this.song;

    this.notes = this.generateNoteArray();
    // this.note1 = new Note(CONSTANTS.pos1, 0, this.c)
    // this.note2 = new Note(CONSTANTS.pos4, 0, this.c)
    // this.notes[0].push(this.note1)
    // this.notes[3].push(this.note2)
    
    this.addListeners = this.addListeners.bind(this)
    this.addListeners()
    this.animate = this.animate.bind(this)
    this.checkCollision = this.checkCollision.bind(this)
    this.scoreboard = this.scoreboard.bind(this)
    this.generateNotes = this.generateNotes.bind(this)
    this.playSong = this.playSong.bind(this)
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
    drawTargets(this.c);

    // this.notes is a 2D array to handle simultaneous inputs
    // this updates all notes and clears any notes that are
    // out of bounds
    this.notes.forEach( subArr => {
      subArr.forEach( note => {
        note.update()
      })
      // if the first note in each subArr is out of bounds then clear it
      if (subArr[0] !== undefined && subArr[0].outOfBounds(800)) {
        console.log("note is unshifted");
        subArr.shift();
      }
    })
    // const elapsed = new Date().getTime() - start;
    // console.log(elapsed) 
    requestAnimationFrame(this.animate)
  }

  checkCollision(x) {
    if (
      this.notes[x][0]) 
      {
        if (this.notes[x][0].inBounds(this.dimensions.height)) {
          console.log("hit")
          this.score += 1;
          this.notes[x].shift();
        }
    }
  }

  addListeners() {
    addEventListener('keydown', e => {
      if (e.key == "1") {
        this.checkCollision(0)
      } 
      if (e.key == "2") {
        this.checkCollision(1)
      } 
      if (e.key == "3") {
        this.checkCollision(2)
      } 
      if (e.key == "4") {
        this.checkCollision(3)
      } 
      if (e.key == "5") {
        this.checkCollision(4)
      } 
    })
  }

  scoreboard() {
    const x = this.dimensions.width / 20;
    const y = this.dimensions.height / 10
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
    if (song.length > 0) {
      setInterval( () => {
        // if (song.length > 0) {
          let noteParams = song.shift();
          let note = new Note(noteParams.x, noteParams.y, this.c)
          this.notes[noteParams.pos].push(note)
        // }
        // console.log(this.notes)
      }, 638)
    }
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
    console.log(this.song);
    let start = document.getElementById('start');
    let pause = document.getElementById('pause');
    start.addEventListener('click', () => {
      setTimeout(this.generateNotes, 3604);
      document.getElementById('audio').play();
    });
    pause.addEventListener('click', () => {
      document.getElementById('audio').pause();
    });
}

  bandAidFix(c) {
    c.beginPath();
    c.rect(0, 0, 0, 0);
    c.stroke();
  }
  
} 