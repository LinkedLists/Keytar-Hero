
export default class Note {
  constructor(x, y, context) {
    this.x = x;
    this.y = y;
    this.c = context
    this.generateNote = this.generateNote.bind(this);
    this.update = this.update.bind(this);
    this.checkBounds = this.checkBounds.bind(this);
    // this.generateNote(x, y)

    this.dy = 2;
    this.animate = this.animate.bind(this)
  }

  generateNote(x, y) {
    this.c.beginPath();
    this.c.rect(x, y, 50, 100)
    this.c.stroke();
  }

  update() {
    this.y += this.dy;
  }

  animate() {
    this.c.clearRect(0, 0, innerWidth, innerHeight)
    this.c.fillStyle = 'lightgray';
    this.c.fillRect(100, 100, 600, 600);
    // console.log(this.c.innerHeight)
    // console.log(this.x, this.y)
    this.generateNote(this.x, this.y);
    this.update();
    if (this.checkBounds()) {
      requestAnimationFrame(this.animate)
    }

    // console.log('ooo')
  }

  checkBounds() {
    return this.y + 100 >= 800 ? false : true
  }
}