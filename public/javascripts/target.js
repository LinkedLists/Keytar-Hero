// let color1 = 'lightgray'
// let color2 = 'lightgray'
// let color3 = 'lightgray'
// let color4 = 'lightgray'
// let color5 = 'lightgray'

const COLORS = {
  1: 'green',
  2: 'red',
  3: 'yellow',
  4: 'blue',
  5: 'orange',
}

// setColor()

// export const drawTargets = (context) => {

//   context.beginPath();
//   context.arc(60, 740, 50, 0, Math.PI * 2, false);
//   context.fillStyle = "black";
//   context.fill();
//   context.stroke();
  
//   context.beginPath();
//   context.arc(180, 740, 50, 0, Math.PI * 2, false);
//   context.fillStyle = "black";
//   context.fill();
//   context.stroke();

//   context.beginPath();
//   context.arc(300, 740, 50, 0, Math.PI * 2, false);
//   context.fillStyle = "black";
//   context.fill();
//   context.stroke();
  
//   context.beginPath();
//   context.arc(420, 740, 50, 0, Math.PI * 2, false);
//   context.fillStyle = "black";
//   context.fill();
//   context.stroke();

//   context.beginPath();
//   context.arc(540, 740, 50, 0, Math.PI * 2, false);
//   context.fillStyle = "black";
//   context.fill();
//   context.stroke();

//   ////

//   context.beginPath();
//   context.arc(60, 740, 45, 0, Math.PI * 2, false);
//   context.fillStyle = "green";
//   context.fill();
//   context.stroke();
  
//   context.beginPath();
//   context.arc(180, 740, 45, 0, Math.PI * 2, false);
//   context.fillStyle = "red";
//   context.fill();
//   context.stroke();

//   context.beginPath();
//   context.arc(300, 740, 45, 0, Math.PI * 2, false);
//   context.fillStyle = "yellow";
//   context.fill();
//   context.stroke();
  
//   context.beginPath();
//   context.arc(420, 740, 45, 0, Math.PI * 2, false);
//   context.fillStyle = "blue";
//   context.fill();
//   context.stroke();

//   context.beginPath();
//   context.arc(540, 740, 45, 0, Math.PI * 2, false);
//   context.fillStyle = "orange";
//   context.fill();
//   context.stroke();

//   ////

//   context.beginPath();
//   context.arc(60, 740, 30, 0, Math.PI * 2, false);
  
//   context.fillStyle = color1;
//   context.fill();
//   context.stroke();
  
//   context.beginPath();
//   context.arc(180, 740, 30, 0, Math.PI * 2, false);
//   context.fillStyle = color2;
//   context.fill();
//   context.stroke();

//   context.beginPath();
//   context.arc(300, 740, 30, 0, Math.PI * 2, false);
//   context.fillStyle = color3;
//   context.fill();
//   context.stroke();
  
//   context.beginPath();
//   context.arc(420, 740, 30, 0, Math.PI * 2, false);
//   context.fillStyle = color4;
//   context.fill();
//   context.stroke();

//   context.beginPath();
//   context.arc(540, 740, 30, 0, Math.PI * 2, false);
//   context.fillStyle = color5;
//   context.fill();
//   context.stroke();
// };


//   function setColor() {
//     addEventListener('keydown', e => {
//       if (e.key == "1") {
//         color1 = 'black'
//       } 
//       if (e.key == "2") {
//         color2 = 'black'
//       } 
//       if (e.key == "3") {
//         color3 = 'black'
//       } 
//       if (e.key == "4") {
//         color4 = 'black'
//       } 
//       if (e.key == "5") {
//         color5 = 'black'
//       } 
//     }),
//     addEventListener('keyup', e => {
//       if (e.key == "1") {
//         color1 = 'lightgray'
//       } 
//       if (e.key == "2") {
//         color2 = 'lightgray'
//       } 
//       if (e.key == "3") {
//         color3 = 'lightgray'
//       } 
//       if (e.key == "4") {
//         color4 = 'lightgray'
//       } 
//       if (e.key == "5") {
//         color5 = 'lightgray'
//       } 
//     })
//   }
  // // console.log(color)


export default class Target {
  constructor(context, num) {
    this.context = context;
    this.color = 'lightgray';
    this.num = num;
    this.pos = (num - 1) * 120 + 60;
    this.pressedFlag = false;
    this.successfulHit = false;

    this.setTarget = this.setTarget.bind(this);
    this.setPressed = this.setPressed.bind(this);
    this.displayTarget = this.displayTarget.bind(this);
    this.addListeners = this.addListeners.bind(this);
    this.addListeners();
  }

  displayTarget() {
    if (this.pressedFlag) {
      this.setPressed();
    } else {
      this.setTarget();
    }
  }

  setPressed(){
    if (this.successfulHit) {
      this.context.beginPath();
      this.context.arc(this.pos, 728, 60, 0, Math.PI * 2, false);
      this.context.fillStyle = "yellow";
      this.context.fill();
      this.context.stroke();
    }
    this.context.beginPath();
    this.context.arc(this.pos, 728, 50, 0, Math.PI * 2, false);
    this.context.fillStyle = "black";
    this.context.fill();
    this.context.stroke();

    this.context.beginPath();
    this.context.arc(this.pos, 728, 45, 0, Math.PI * 2, false);
    this.context.fillStyle = COLORS[this.num];
    this.context.fill();
    this.context.stroke();
    
    this.context.beginPath();
    this.context.arc(this.pos, 728, 30, 0, Math.PI * 2, false);
    this.context.fillStyle = this.color;
    this.context.fill();
    this.context.stroke();
  }

  setTarget(){
    this.context.beginPath();
    this.context.arc(this.pos, 740, 50, 0, Math.PI * 2, false);
    this.context.fillStyle = "black";
    this.context.fill();
    this.context.stroke();

    this.context.beginPath();
    this.context.arc(this.pos, 740, 45, 0, Math.PI * 2, false);
    this.context.fillStyle = COLORS[this.num];
    this.context.fill();
    this.context.stroke();
    
    this.context.beginPath();
    this.context.arc(this.pos, 740, 30, 0, Math.PI * 2, false);
    this.context.fillStyle = this.color;
    this.context.fill();
    this.context.stroke();
  }

  setGlow(){}
  
  killGlow(){}

  
  addListeners() {
    addEventListener('keydown', e => {
      if (e.key == this.num) {
        this.color = 'black'
        this.pressedFlag = true;
      } 
    }),
    addEventListener('keyup', e => {
      if (e.key == this.num) {
        this.color = 'lightgray'
        this.pressedFlag = false;
      } 
    })
  }
}