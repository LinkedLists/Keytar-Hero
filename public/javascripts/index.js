import Game from "./game"
// import Game from Board.js

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    canvas.style.background = "url('../assets/g.png') no-repeat center";
    canvas.style.backgroundSize = "cover";
    canvas.style.backgroundSize = "cover";
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    new Game(canvas);
    console.log('hi')
    
})
