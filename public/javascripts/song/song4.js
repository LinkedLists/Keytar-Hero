import { intro } from './jojo/intro'
import { verse1 } from './jojo/verse1'
import { bridge } from './jojo/bridge'


const CONSTANTS = {
  pos1: 30,
  pos2: 150,
  pos3: 270,
  pos4: 390,
  pos5: 510,
}

export const song4 = {
  notes: [].concat(intro, verse1, bridge),
  introDelay: 643,
  // tempo: 222
  tempo: 100,
  dy: 9

}