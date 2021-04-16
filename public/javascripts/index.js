import Game from './game';
import { modalHandler } from './modal';

document.addEventListener('DOMContentLoaded', () => {
    let startBtn = document.getElementById('start-btn')
    startBtn.addEventListener('click', () => {
        document.getElementsByClassName('game-view')[0].classList.remove('hidden')
        document.getElementsByClassName('main-menu-container')[0].classList.add('hidden')
    })



    const canvas = document.getElementById('canvas');
    canvas.style.backgroundSize = "100% 100%";
    new Game(canvas);

    modalHandler()
})
