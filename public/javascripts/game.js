import Note from './note'
import { drawTargets } from './target'

export default class Game {
  constructor(canvas) {
    this.c = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height};
    // this.c.fillStyle = 'lightgray';
    // this.c.fillRect(100, 100, 600, 600);
    
    this.note = new Note(120, 0, this.c)
    // this.note.animate()
    
    this.addListeners = this.addListeners.bind(this)
    // this.drawTargets = this.drawTargets.bind(this)
    this.addListeners()
    // this.drawTargets()
    this.animate = this.animate.bind(this)
    this.animate()
  }

  animate() {
    this.c.clearRect(0, 0, innerWidth, innerHeight);
    drawTargets(this.c);
    this.note.update();
    
    requestAnimationFrame(this.animate)
  }

  addListeners() {
    addEventListener('keydown', e => {
      if (e.key == "1") {
        console.log("1")
      } 
      if (e.key == "2") {
        console.log("2")
      } 
      if (e.key == "3") {
        console.log("3")
      } 
      if (e.key == "4") {
        console.log("4")
      } 
      if (e.key == "5") {
        console.log("5")
      } 
    })
  }
} 