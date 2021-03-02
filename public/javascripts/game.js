export default class Game {
  constructor(canvas) {
    this.c = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height};
    this.c.fillStyle = 'lightgray';
    this.c.fillRect(100, 100, 600, 600);
  }
}