
export default class Note {
  constructor(x, y, context, color, holdValue = 0) {
    this.x = x;
    this.y = y;
    this.c = context
    this.holdValue = holdValue
    this.extenstionLength = 0;
    this.color = color;
    this.originalColor;
    this.holdFlag = false;


    this.generateNote = this.generateNote.bind(this);
    this.generateHoldingNote = this.generateHoldingNote.bind(this);
    this.update = this.update.bind(this);
    this.outOfBounds = this.outOfBounds.bind(this);
    this.inBounds = this.inBounds.bind(this);
    this.outOfBoundsTail = this.outOfBoundsTail.bind(this);
    this.inBoundsTail = this.inBoundsTail.bind(this);

    // need to make target object to get back original color
    this.setOriginalColor = this.setOriginalColor.bind(this);
    this.setOriginalColor();

    // I want a note to be playable after being rendered to have a 
    // constant delay of about 2.1 seconds regardless of monitor size
    // this.dy = innerHeight / 126.25;
    this.dy = 8;
  }

  setOriginalColor() {
    this.originalColor = this.color;
  }

  generateNote(x, y) {
    this.c.beginPath();
    this.c.arc(x + 30, y, 30, 0, Math.PI * 2, false);
    this.c.fillStyle = this.color;
    this.c.fill();
    this.c.stroke();
  }

  generateHoldingNote(x, y) {
    const beatMultiplier = 38.28
    this.extenstionLength = this.holdValue * beatMultiplier * 4 - 80
    if (this.holdFlag) {
      this.c.shadowBlur = 30;
      this.c.shadowOffsetX = 3;
      this.c.shadowOffsetY = 3;
      this.c.shadowColor = "orange";
    }
    this.c.beginPath();
    this.c.arc(x + 30, y - this.extenstionLength, 30, 0, Math.PI, true);
    this.c.lineTo(x, y)
    this.c.moveTo(x + 60, y - this.extenstionLength)
    this.c.lineTo(x + 60, y)
    this.c.arc(x + 30, y , 30, 0, -Math.PI, false);
    this.c.fillStyle = this.color;
    this.c.fill();
    this.c.shadowBlur = 0;
    this.c.stroke();


    // pinning the head and tail
    // this.c.beginPath();
    // this.c.arc(x, y, 5, 0, Math.PI * 2, true);
    // this.c.fillStyle = "black";
    // this.c.fill();
    // this.c.stroke();

    // this.c.beginPath();
    // this.c.arc(x, y - this.extenstionLength, 5, 0, Math.PI * 2, true);
    // this.c.fillStyle = "black";
    // this.c.fill();
    // this.c.stroke();

  }

  update() {
    this.c.save();
    // this.c.translate(this.x, this.y);
    if (this.holdValue !== 0) {
      this.generateHoldingNote(this.x, this.y)
    } else {
      this.generateNote(this.x, this.y);
    }
    this.y += this.dy;
    this.c.restore();
  }

  // Is out of bounds of the target?
  outOfBounds(y) {
    return this.y - 15 >= y ? true : false
  }

  outOfBoundsTail(y) {
    return this.y - this.extenstionLength - 160 >= y ? true : false
  }

  // In bounds of the target?
  inBounds(y) {
    return this.y + 120 >= y ? true : false
  }

  inBoundsTail(y) {
    return this.y - this.extenstionLength + 120 >= y ? true : false
  }

}