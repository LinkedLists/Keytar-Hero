import Game from "./game";
import { modalHandler } from './modal';
// import Game from Board.js

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    canvas.style.backgroundSize = "100% 100%";
    new Game(canvas);

    modalHandler()
})
