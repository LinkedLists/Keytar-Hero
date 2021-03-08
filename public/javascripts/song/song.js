import { verse_1 } from './verse_1';
import { bridge } from './bridge';
import { verse_2 } from './verse_2';
import { chorus } from './chorus';

const CONSTANTS = {
  pos1: 30,
  pos2: 150,
  pos3: 270,
  pos4: 390,
  pos5: 510,
}

export const song = [].concat(verse_1, bridge, chorus, verse_2, bridge, chorus)
