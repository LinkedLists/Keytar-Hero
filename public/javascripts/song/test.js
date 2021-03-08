const CONSTANTS = {
  pos1: 30,
  pos2: 150,
  pos3: 270,
  pos4: 390,
  pos5: 510,
}


export const song = [
  // verse 1
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },

  // rests
  { tempo: 1, hold: 0, chain: false, rest: true },

  // tempo here yayayayay
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: true },

  { kill: true },

  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },

  { tempo: 1, hold: 0, chain: false, rest: true },

  // tempo here yayayayay
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: true },

  { kill: true },

  // bridge

  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 8, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 8, chain: true },
  { tempo: 6, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 8, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 8, chain: true },
  { tempo: 6, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 8, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 8, chain: true },

  { tempo: 10, hold: 0, chain: false, rest: true },

  // chorus

  // I don't know why you hide
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  // hide
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 2, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 2, chain: true },
  { tempo: 1, hold: 0, chain: false, rest: true },

  // from the one and close your
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 2, hold: 0, chain: false },
  // eyes 
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 2, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 2, chain: true },
  { tempo: 1, hold: 0, chain: false, rest: true },

  // to the one mess up and
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: true },

  // lie
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 2, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 2, chain: true },
  { tempo: 1, hold: 0, chain: false, rest: true },

  // to the one that you
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },

  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { kill: true },

  // love
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 4, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 4, chain: true },
  { tempo: 2, hold: 0, chain: false, rest: true },
  
  // When you know you can
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 4, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 4, chain: true },
  { tempo: 2, hold: 0, chain: false, rest: true },

  // ///////////////////////////
  /////CHECK POINT
  ////////////////////////////////
  // cry
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 8, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 8, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },  
  // to the one always


  // confide 
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 8, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 8, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },

  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 8, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 8, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },

  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 4, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 4, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },

  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 4, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 4, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },

  { tempo: 8, hold: 0, chain: false, rest: true },

  // verse 2

  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  { tempo: 1, hold: 0, chain: false, rest: true },

  // tempo here yayayayay
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: true },
  { kill: true },

  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },

  // rests
  { tempo: 1, hold: 0, chain: false, rest: true },

  // tempo here yayayayay
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: true },

  { kill: true },

  // bridge 2
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 8, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 8, chain: true },
  { tempo: 6, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 8, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 8, chain: true },
  { tempo: 6, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 8, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 8, chain: true },

  { tempo: 10, hold: 0, chain: false, rest: true },


  // chorus 2

  // I don't know why you hide
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  // hide
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 2, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 2, chain: true },
  { tempo: 1, hold: 0, chain: false, rest: true },

  // from the one and close your
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 2, hold: 0, chain: false },
  // eyes 
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 2, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 2, chain: true },
  { tempo: 1, hold: 0, chain: false, rest: true },

  // to the one mess up and
  { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: true },

  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: true },

  // lie
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 2, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 2, chain: true },
  { tempo: 1, hold: 0, chain: false, rest: true },

  // to the one that you
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },

  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  { kill: true },

  // love
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 4, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 4, chain: true },
  { tempo: 2, hold: 0, chain: false, rest: true },
  
  // When you know you can
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 4, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 4, chain: true },
  { tempo: 2, hold: 0, chain: false, rest: true },
  


  // ///////////////////////////
  /////CHECK POINT
  ////////////////////////////////
  // cry
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 8, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 8, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },  
  // to the one always


  // confide 
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 8, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 8, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },

  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 8, chain: true },
  { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 8, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  { tempo: 2, hold: 0, chain: false, rest: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },

  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 4, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 4, chain: true },
  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },

  { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 4, chain: true },
  { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 4, chain: true },
  { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },

  
  { tempo: 8, hold: 0, chain: false, rest: true },









  // // cry
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 2, chain: true },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 2, chain: true },
  // { tempo: 1, hold: 0, chain: false, rest: true },

  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: true },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: true },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: true },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: true },

  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 2, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 2, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 0, chain: false },

  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 2, hold: 2, chain: true },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 2, hold: 2, chain: true },



  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 10, hold: 0, chain: false, rest: true },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: true },




  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos1, y: 0, pos: 0, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos2, y: 0, pos: 1, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos3, y: 0, pos: 2, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos4, y: 0, pos: 3, tempo: 1, hold: 0, chain: false },
  // { x: CONSTANTS.pos5, y: 0, pos: 4, tempo: 1, hold: 0, chain: false },
]
