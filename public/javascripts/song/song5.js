import { intro } from './jojo-easy/intro'
import { verse1 } from './jojo-easy/verse1'
import { bridge } from './jojo-easy/bridge'



const CONSTANTS = {
  pos1: 30,
  pos2: 150,
  pos3: 270,
  pos4: 390,
  pos5: 510,
}

export const song5 = {
  notes: [].concat(intro, verse1, bridge),
  // notes: [].concat(bridge),
  introDelay: 643,
  tempo: 100,
  dy: 9,
  totalNotes: 483

}