import Note from './note'

export default class Game {
  constructor(canvas) {
    this.c = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height};
    // this.c.fillStyle = 'lightgray';
    // this.c.fillRect(100, 100, 600, 600);

    this.note = new Note(0, 0, this.c)
    this.note.animate()

  }
} 