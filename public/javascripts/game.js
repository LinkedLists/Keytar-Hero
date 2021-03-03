import Note from './note'
import { drawTargets } from './target'
// import { scoreboard } from './score'

export default class Game {
  constructor(canvas) {
    this.c = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height};
    this.note = new Note(30, 0, this.c)
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
    // if (this.note.checkBounds()) 
    this.note.update();
    
    requestAnimationFrame(this.animate)
    // if(this.note.y >= 800) delete this.note;
  }

  checkCollision() {
    if (this.note.y >= 680) {
      console.log("hit")
      this.score += 1;
      delete this.note.y
    }
  }

  addListeners() {
    addEventListener('keydown', e => {
      if (e.key == "1") {
        // console.log("1")
        this.checkCollision()
      } 
      if (e.key == "2") {
        // console.log("2")
      } 
      if (e.key == "3") {
        // console.log("3")
      } 
      if (e.key == "4") {
        // console.log("4")
      } 
      if (e.key == "5") {
        // console.log("5")
      } 
    })
  }

  scoreboard() {
    const x = this.dimensions.width / 20;
    const y = this.dimensions.height / 10
    this.c.font = "bold 50px Arial";
    // this.c.font-weight = "bold";
    this.c.fillStyle = "white";
    this.c.fillText(this.score, x, y);
    this.c.lineWidth = 2;
    this.c.strokeText(this.score, x, y);
    this.c.stroke();
  }
} 