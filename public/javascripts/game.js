import Note from './note'

export default class Game {
  constructor(canvas) {
    this.c = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height};
    // this.c.fillStyle = 'lightgray';
    // this.c.fillRect(100, 100, 600, 600);
    
    this.note = new Note(120, 0, this.c)
    // this.note.animate()
    
    this.addListeners = this.addListeners.bind(this)
    this.drawTargets = this.drawTargets.bind(this)
    this.addListeners()
    // this.drawTargets()
    this.animate = this.animate.bind(this)
    this.animate()

  }

  drawTargets() {
    this.c.beginPath()
    this.c.arc(100, 100, 50, 0, Math.PI * 2, false)
    // this.c.fillStyle("black")
    // this.c.stroke()
    // this.c.beginPath()
    // this.c.arc(100, 100, 30, 0, Math.PI * 2, false)
    // this.c.fillStyle("gray")
    // // this.c.strokeStyle = "blue";
    this.c.stroke()
  }

  animate() {
    this.c.clearRect(0, 0, innerWidth, innerHeight);
    this.drawTargets();
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
    })
  }
} 