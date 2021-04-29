import { intro } from './jojo-easy/intro'
import { verse1 } from './jojo-easy/verse1'
import { bridge } from './jojo-easy/bridge'
import { bridge2 } from './jojo-easy/bridge2'
import { outro } from './jojo-easy/outro'



const CONSTANTS = {
  pos1: 30,
  pos2: 150,
  pos3: 270,
  pos4: 390,
  pos5: 510,
}

export const song3 = {
  notes: [].concat(intro, verse1, bridge, bridge2, outro),
  // notes: [].concat(bridge2, outro),
  introDelay: 643,
  tempo: 100,
  dy: 9,
  totalNotes: 306

}