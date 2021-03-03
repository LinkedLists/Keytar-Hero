import Note from './note'
import { drawTargets } from './target'
// import { scoreboard } from './score'

export default class Game {
  constructor(canvas) {
    this.c = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height};
    this.score = 0;

    this.notes = []
    this.note1 = new Note(30, 0, this.c)
    this.note2 = new Note(390, 0, this.c)
    this.notes.push(this.note1)
    this.notes.push(this.note2)
    
    
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

    this.notes.forEach( note => {
      note.update();
    })

    if (this.notes[0]) {    
      if (this.notes[0].outOfBounds(this.dimensions.height)) {
        console.log("note is unshifted");
        this.notes.shift();
      }
    }

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
      this.notes[0] && 
      this.notes[0].x === x) {
        if (this.notes[0].inBounds(this.dimensions.height)) {
          console.log("hit")
          this.score += 1;
          this.notes.shift();
        }
    }
  }

  addListeners() {
    addEventListener('keydown', e => {
      if (e.key == "1") {
        this.checkCollision(30)
      } 
      if (e.key == "2") {
        this.checkCollision(150)
      } 
      if (e.key == "3") {
        this.checkCollision(270)
      } 
      if (e.key == "4") {
        this.checkCollision(390)
      } 
      if (e.key == "5") {
        this.checkCollision(510)
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
} 