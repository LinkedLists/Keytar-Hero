import Note from './note'

export default class Game {
  constructor(canvas) {
    this.c = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height};
    // this.c.fillStyle = 'lightgray';
    // this.c.fillRect(100, 100, 600, 600);

    this.note = new Note(150, 100, this.c)
    this.note.animate()

    this.x = 150
    this.y = 100

  }
} 