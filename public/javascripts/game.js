import Note from './note'

export default class Game {
  constructor(canvas) {
    this.c = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height};
    this.c.fillStyle = 'lightgray';
    this.c.fillRect(100, 100, 600, 600);

    // this.c.beginPath();
    // this.c.rect(150, 100, 50, 100);
    // this.c.stroke();
    this.animate = this.animate.bind(this)
    this.note = new Note(150, 100, this.c)
    

    let x = 150
    this.animate(x);
  }

  animate(x) {
    this.note.generateNote(x, 100);
    requestAnimationFrame(this.animate)
    this.c.clearRect(0, 0, this.c.innerWidth, this.c.innerHeight)
    console.log('ooo')
  }
} 