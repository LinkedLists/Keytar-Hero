
export default class Note {
  constructor(x, y, context) {
    this.pos_x = x;
    this.pos_y = y;
    this.context = context
    this.generateNote = this.generateNote.bind(this);
    // this.generateNote(x, y)
  }

  generateNote(x, y) {
    this.context.beginPath();
    this.context.rect(x, y, 50, 100)
    this.context.stroke();
  }
}