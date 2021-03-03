import Note from './note'
import { drawTargets } from './target'
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

    this.notes = this.generateNoteArray();
    this.note1 = new Note(CONSTANTS.pos1, 0, this.c)
    this.note2 = new Note(CONSTANTS.pos4, 0, this.c)
    this.notes[0].push(this.note1)
    this.notes[3].push(this.note2)
    
    this.addListeners = this.addListeners.bind(this)
    this.addListeners()
    this.animate = this.animate.bind(this)
    this.animate()
    this.checkCollision = this.checkCollision.bind(this)
    this.scoreboard = this.scoreboard.bind(this)
  }

  animate() {
    this.c.clearRect(0, 0, innerWidth, innerHeight);
    this.scoreboard()
    drawTargets(this.c);

    // this.notes.forEach( note => {
    //   note.update();
    // })
    this.notes.forEach( subArr => {
      // if (subArr.length > 0) {
        subArr.forEach( note => {
          note.update()
        })
        if (subArr[0] !== undefined && subArr[0].outOfBounds(800)) {
          console.log("note is unshifted");
          console.log(subArr[0])
          subArr.shift();
        }
      // }
    })

    // if (this.notes[0]) {    
    //   if (this.notes[0].outOfBounds(this.dimensions.height)) {
    //     console.log("note is unshifted");
    //     this.notes.shift();
    //   }
    // }

    // this.notes.forEach( note => {
    //   if (note) {    
    //     if (!note.update()) {
    //       console.log("note is unshifted");
    //       this.notes.shift();
    //     } 
    //   }
    // })

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
    // if (
    //   this.notes[0] && 
    //   this.notes[0].x === x) {
    //     if (this.notes[0].inBounds(this.dimensions.height)) {
    //       console.log("hit")
    //       this.score += 1;
    //       this.notes.shift();
    //     }
    // }
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
} 