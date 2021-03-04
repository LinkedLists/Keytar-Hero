
export default class Note {
  constructor(x, y, context) {
    this.x = x;
    this.y = y;
    this.c = context
    this.generateNote = this.generateNote.bind(this);
    this.update = this.update.bind(this);
    this.outOfBounds = this.outOfBounds.bind(this);
    this.inBounds = this.inBounds.bind(this);


    // I want a note to be playable after being rendered to have a 
    // constant delay of about 2.1 seconds regardless of monitor size
    // this.dy = innerHeight / 126.25;
    this.dy = 8;
    console.log(this.dy)
  }

  generateNote(x, y) {
    this.c.beginPath();
    this.c.rect(x, y - 75, 60, 75);
    this.c.stroke();
  }

  update() {
    this.generateNote(this.x, this.y);
    this.y += this.dy;
  }

  // Is out of bounds of the target?
  outOfBounds(y) {
    return this.y + 40 - 75 >= y ? true : false
  }

  // In bounds of the target?
  inBounds(y) {
    return this.y + 150 -75 >= y ? true : false
  }
}