import Game from './game';
import { modalHandler } from './modal';

document.addEventListener('DOMContentLoaded', () => {
  let startBtn = document.getElementById('start-btn')
  let selectBtn = document.getElementById('selection-back-btn')

  let selectCircle = document.getElementsByClassName('song-selection-container-closed')[0]
  let mainMenu = document.getElementsByClassName('main-menu-container')[0]

  startBtn.addEventListener('click', () => {
    selectCircle.classList.add('song-selection-container-open')
    selectCircle.classList.remove('song-selection-container-closed')
    selectCircle.classList.remove('hidden')
    mainMenu.classList.add('hidden')
  })

  selectBtn.addEventListener('click', () => {
    selectCircle.classList.remove('song-selection-container-open')
    selectCircle.classList.add('song-selection-container-closed')
    mainMenu.classList.remove('hidden')
  })


  const canvas = document.getElementById('canvas');
  canvas.style.backgroundSize = "100% 100%";
  new Game(canvas);
  modalHandler()
})
