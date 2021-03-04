let color1 = 'lightgray'
let color2 = 'lightgray'
let color3 = 'lightgray'
let color4 = 'lightgray'
let color5 = 'lightgray'

setColor()

export const drawTargets = (context) => {

  context.beginPath();
  context.arc(60, 740, 50, 0, Math.PI * 2, false);
  context.fillStyle = "black";
  context.fill();
  context.stroke();
  
  context.beginPath();
  context.arc(180, 740, 50, 0, Math.PI * 2, false);
  context.fillStyle = "black";
  context.fill();
  context.stroke();

  context.beginPath();
  context.arc(300, 740, 50, 0, Math.PI * 2, false);
  context.fillStyle = "black";
  context.fill();
  context.stroke();
  
  context.beginPath();
  context.arc(420, 740, 50, 0, Math.PI * 2, false);
  context.fillStyle = "black";
  context.fill();
  context.stroke();

  context.beginPath();
  context.arc(540, 740, 50, 0, Math.PI * 2, false);
  context.fillStyle = "black";
  context.fill();
  context.stroke();

  ////

  context.beginPath();
  context.arc(60, 740, 45, 0, Math.PI * 2, false);
  context.fillStyle = "green";
  context.fill();
  context.stroke();
  
  context.beginPath();
  context.arc(180, 740, 45, 0, Math.PI * 2, false);
  context.fillStyle = "red";
  context.fill();
  context.stroke();

  context.beginPath();
  context.arc(300, 740, 45, 0, Math.PI * 2, false);
  context.fillStyle = "yellow";
  context.fill();
  context.stroke();
  
  context.beginPath();
  context.arc(420, 740, 45, 0, Math.PI * 2, false);
  context.fillStyle = "blue";
  context.fill();
  context.stroke();

  context.beginPath();
  context.arc(540, 740, 45, 0, Math.PI * 2, false);
  context.fillStyle = "orange";
  context.fill();
  context.stroke();

  ////

  context.beginPath();
  context.arc(60, 740, 30, 0, Math.PI * 2, false);
  
  context.fillStyle = color1;
  context.fill();
  context.stroke();
  
  context.beginPath();
  context.arc(180, 740, 30, 0, Math.PI * 2, false);
  context.fillStyle = color2;
  context.fill();
  context.stroke();

  context.beginPath();
  context.arc(300, 740, 30, 0, Math.PI * 2, false);
  context.fillStyle = color3;
  context.fill();
  context.stroke();
  
  context.beginPath();
  context.arc(420, 740, 30, 0, Math.PI * 2, false);
  context.fillStyle = color4;
  context.fill();
  context.stroke();

  context.beginPath();
  context.arc(540, 740, 30, 0, Math.PI * 2, false);
  context.fillStyle = color5;
  context.fill();
  context.stroke();
};


  function setColor() {
    addEventListener('keydown', e => {
      if (e.key == "1") {
        color1 = 'black'
      } 
      if (e.key == "2") {
        color2 = 'black'
      } 
      if (e.key == "3") {
        color3 = 'black'
      } 
      if (e.key == "4") {
        color4 = 'black'
      } 
      if (e.key == "5") {
        color5 = 'black'
      } 
    }),
    addEventListener('keyup', e => {
      if (e.key == "1") {
        color1 = 'lightgray'
      } 
      if (e.key == "2") {
        color2 = 'lightgray'
      } 
      if (e.key == "3") {
        color3 = 'lightgray'
      } 
      if (e.key == "4") {
        color4 = 'lightgray'
      } 
      if (e.key == "5") {
        color5 = 'lightgray'
      } 
    })
  }
  // // console.log(color)


// export default class Target {
//   constructor(context) {
//     this.context = context;
//     this.color = 'lightgray'


//     this.context.beginPath();
//     this.context.arc(60, 740, 50, 0, Math.PI * 2, false);
//     this.context.fillStyle = "black";
//     this.context.fill();
//     this.context.stroke();

//     this.context.beginPath();
//     this.context.arc(60, 740, 45, 0, Math.PI * 2, false);
//     this.context.fillStyle = "green";
//     this.context.fill();
//     this.context.stroke();
    
//     this.context.beginPath();
//     this.context.arc(60, 740, 30, 0, Math.PI * 2, false);
//     this.context.fillStyle = this.color;
//     this.context.fill();
//     this.context.stroke();
//   }

//   addEventListener('keydown', e => {
//     if (e.key == "1") {
//       setColor()
//     } 
//   })

//   function setColor() {
//     // console.log(color)
//     color = 'black'
//   }
// }