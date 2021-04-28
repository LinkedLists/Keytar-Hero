import { intro } from './jojo/intro'
import { outro } from './jojo/outro'
import { verse1 } from './jojo/verse1'
import { bridge } from './jojo/bridge'
import { bridge2 } from './jojo/bridge2'


const CONSTANTS = {
  pos1: 30,
  pos2: 150,
  pos3: 270,
  pos4: 390,
  pos5: 510,
}

export const song4 = {
  notes: [].concat(intro, verse1, bridge, bridge2, outro),
  introDelay: 643,
  tempo: 100,
  dy: 9,
  totalNotes: 483

}