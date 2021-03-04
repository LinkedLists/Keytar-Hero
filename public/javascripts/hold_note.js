import Note from './note'

export default class HoldingNote extends Note {
  constructor(props, holdValue = 1) {
    super(props);
    this.end_x;
    this.end_y;
    this.holdValue = holdValue;
    this.outOfBounds = this.outOfBounds.bind(this);
    this.inBounds = this.inBounds.bind(this);
    this.generateNote = this.generateNote.bind(this);
  }

  generateNote(x, y) {
    const beatMultiplier = 38.28
    const extenstionLength = this.holdValue * beatMultiplier * 4 + 30
    this.end_y = y - extenstionLength
    this.c.beginPath();
    this.c.arc(x + 30, this.end_y, 30, 0, Math.PI, true);
    this.c.lineTo(x, y)
    this.c.moveTo(x + 60, this.end_y)
    this.c.lineTo(x + 60, y)
    this.c.arc(x + 30, y , 30, 0, -Math.PI, false);
    this.c.fillStyle = this.color;
    this.c.fill();
    this.c.stroke();
  }

    // Is out of bounds of the target?
    outOfBounds(y) {
      return this.end_y -15 >= y ? true : false
    }
  
    // In bounds of the target?
    inBounds(y) {
      return this.end_y + 100 >= y ? true : false
    }
}