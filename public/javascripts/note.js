
export default class Note {
  constructor(x, y, context, color) {
    this.x = x;
    this.y = y;
    this.c = context
    this.color = color;
    this.generateNote = this.generateNote.bind(this);
    this.generateHoldingNote = this.generateHoldingNote.bind(this);
    this.update = this.update.bind(this);
    this.outOfBounds = this.outOfBounds.bind(this);
    this.inBounds = this.inBounds.bind(this);


    // I want a note to be playable after being rendered to have a 
    // constant delay of about 2.1 seconds regardless of monitor size
    // this.dy = innerHeight / 126.25;
    this.dy = 8;
  }

  generateNote(x, y) {
    // this.c.beginPath();
    // this.c.rect(x, y - 75, 60, 75);
    // this.c.fillStyle = this.color;
    // this.c.fill();
    // this.c.stroke();

    this.c.beginPath();
    this.c.arc(x + 30, y, 30, 0, Math.PI * 2, false);
    this.c.fillStyle = this.color;
    this.c.fill();
    this.c.stroke();
  }

  generateHoldingNote(x, y, holdValue = 1) {
    const beatMultiplier = 38.28
    this.c.beginPath();
    this.c.arc(x + 30, y - holdValue * beatMultiplier * 2, 30, 0, Math.PI, true);
    this.c.lineTo(x, y)
    this.c.moveTo(x + 60, y - holdValue * beatMultiplier * 2)
    this.c.lineTo(x + 60, y)
    this.c.arc(x + 30, y , 30, 0, -Math.PI, false);
    this.c.fillStyle = this.color;
    this.c.fill();
    this.c.stroke();
  }

  update() {
    this.generateHoldingNote(this.x, this.y);
    this.y += this.dy;
  }

  // Is out of bounds of the target?
  outOfBounds(y) {
    return this.y -20 >= y ? true : false
  }

  // In bounds of the target?
  inBounds(y) {
    return this.y + 90 >= y ? true : false
  }
}