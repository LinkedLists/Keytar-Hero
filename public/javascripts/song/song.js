import { verse_1 } from './be_kind/verse_1';
import { bridge } from './be_kind/bridge';
import { bridge_2 } from './be_kind/bridge_2';
import { verse_2 } from './be_kind/verse_2';
import { chorus } from './be_kind/chorus';
import { chorus_2 } from './be_kind/chorus_2';

const CONSTANTS = {
  pos1: 30,
  pos2: 150,
  pos3: 270,
  pos4: 390,
  pos5: 510,
}

export const song = {
  notes: [].concat(verse_1, bridge, chorus, verse_2, bridge, chorus, bridge_2, chorus),
  introDelay: 3604,
  tempo: 319
}

// export const song = [].concat(verse_1, bridge, chorus, verse_2, bridge, chorus)

// export const introDelay = 3604
