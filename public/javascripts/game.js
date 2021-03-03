import Note from './note'
import { drawTargets } from './target'
// import { scoreboard } from './score'

export default class Game {
  constructor(canvas) {
    this.c = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height};
    this.notes = []
    this.note = new Note(30, 0, this.c)
    this.notes.push(this.note)
    this.score = 0;
    
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

    if (this.notes[0]) {    
      if (this.notes[0].checkBounds(this.dimensions.height)) {
        this.notes[0].update();
      } else {
        console.log("note is unshifted");
        this.notes.shift();
      }
    }
    // if (this.note.checkBounds(this.dimensions.height)) {
    //   this.note.update();
    // } else {
    //   console.log("here")
    //   delete this.note.y
    // }
    
    
    requestAnimationFrame(this.animate)
  }

  checkCollision() {
    if (this.notes[0] && this.notes[0].checkBounds(this.dimensions.height)) {
      console.log("hit")
      this.score += 1;
      this.notes.shift();
    }
  }

  addListeners() {
    addEventListener('keydown', e => {
      if (e.key == "1") {
        this.checkCollision()
      } 
      if (e.key == "2") {
      } 
      if (e.key == "3") {
      } 
      if (e.key == "4") {
      } 
      if (e.key == "5") {
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