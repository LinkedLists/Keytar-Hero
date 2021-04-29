import { intro } from './evangelion/intro';
import { verse1 } from './evangelion/verse1'
import { outro } from './evangelion/outro'


const CONSTANTS = {
  pos1: 30,
  pos2: 150,
  pos3: 270,
  pos4: 390,
  pos5: 510,
}



export const song2 = {
  notes: [].concat(intro, verse1),
  introDelay: 12770,
  tempo: 156,
  dy: 8,
  totalNotes: 234
}


