import * as Tone from 'tone';
import FluteDb5 from './samples/FluteDb5.wav';
import { MusicInstrument } from './musicBoardConstants';

export const fluteSampler = new Tone.Sampler({
  urls: { Db5: FluteDb5 },
  release: 1,
}).toDestination();

/** The Tone.js samplers for each instrument */
export const samplers: Record<MusicInstrument, Tone.Sampler> = {
  [MusicInstrument.FLUTE]: fluteSampler,
};
