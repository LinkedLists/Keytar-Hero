
export default class Note {
  constructor(x, y, context) {
    this.x = x;
    this.y = y;
    this.c = context
    this.generateNote = this.generateNote.bind(this);
    this.update = this.update.bind(this);
    this.checkBounds = this.checkBounds.bind(this);

    this.dy = 5;
    // this.animate = this.animate.bind(this)
  }

  generateNote(x, y) {
    this.c.beginPath();
    this.c.rect(x, y, 60, 75);
    this.c.stroke();
  }

  update() {
    this.generateNote(this.x, this.y);
    this.y += this.dy;
  }

  // animate() {
  //   this.c.clearRect(0, 0, innerWidth, innerHeight);
  //   this.update();
  //   if (this.checkBounds()) {
  //     requestAnimationFrame(this.animate)
  //   }
  // }

  checkBounds() {
    return this.y + 120 >= innerHeight ? false : true
  }
}