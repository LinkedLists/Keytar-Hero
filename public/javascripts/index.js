import Game from "./game"
// import Game from Board.js

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementsByClassName("modal");
    
    const canvas = document.getElementById('canvas');
    // canvas.style.background = "url('../assets/canvas.png') no-repeat center";
    // canvas.style.backgroundSize = "contain";

    canvas.style.backgroundSize = "100% 100%";
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    new Game(canvas);
    console.log('hi')
    
})


