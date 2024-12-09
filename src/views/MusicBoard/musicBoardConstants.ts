export const OCTAVES = 3;

export const COLUMNS = 64;
export const ROWS = 1 + 7 * OCTAVES;
export const COL_WIDTH = '24px';
export const ROW_HEIGHT = '20px';
export const DROP_HEIGHT = '28px';

export enum MusicInstrument {
  FLUTE,
}

export enum MusicTempo {
  // Numbers are in bpm
  FAST = 144,
  NORMAL = 120,
  SLOW = 108,
}
