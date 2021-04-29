import { intro } from './evangelion/intro';
import { verse1 } from './evangelion/verse1';
import { verse2 } from './evangelion/verse2';
import { outro } from './evangelion/outro';


const CONSTANTS = {
  pos1: 30,
  pos2: 150,
  pos3: 270,
  pos4: 390,
  pos5: 510,
}



export const song2 = {
  // notes: [].concat(verse1),
  // introDelay: 1500,
  notes: [].concat(intro, verse1, verse2, outro),
  introDelay: 12780,
  tempo: 156,
  dy: 8,
  totalNotes: 205
}


