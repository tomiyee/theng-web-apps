import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getTransport, start as startTone, FrequencyClass, getContext, TimeClass } from 'tone';
import { samplers } from './samplers';
import {
  BEATS_PER_MEASURE,
  MEASURES_PER_COLUMN,
  MusicInstrument,
  MusicTempo,
} from './musicBoardConstants';

type MusicNote = {
  /** UUIDv4 for rendering purposes */
  id: string;
  /** An integer where 0 is the lowest pitch available, all white notes */
  pitch: number;
  instrument: MusicInstrument;
  /** The beat the note starts on in units of columns */
  beatStart: number;
  /** An integer number of columns */
  duration: number;
};
const context = getContext();
const NOTES: Record<number, FrequencyClass> = {
  0: new FrequencyClass(context, 'C3'),
  1: new FrequencyClass(context, 'D3'),
  2: new FrequencyClass(context, 'E3'),
  3: new FrequencyClass(context, 'F3'),
  4: new FrequencyClass(context, 'G3'),
  5: new FrequencyClass(context, 'A3'),
  6: new FrequencyClass(context, 'B3'),
  7: new FrequencyClass(context, 'C4'),
  8: new FrequencyClass(context, 'D4'),
  9: new FrequencyClass(context, 'E4'),
  10: new FrequencyClass(context, 'F4'),
  11: new FrequencyClass(context, 'G4'),
  12: new FrequencyClass(context, 'A4'),
  13: new FrequencyClass(context, 'B4'),
  14: new FrequencyClass(context, 'C5'),
  15: new FrequencyClass(context, 'D5'),
  16: new FrequencyClass(context, 'E5'),
  17: new FrequencyClass(context, 'F5'),
  18: new FrequencyClass(context, 'G5'),
  19: new FrequencyClass(context, 'A5'),
  20: new FrequencyClass(context, 'B5'),
  21: new FrequencyClass(context, 'C6'),
};

type MusicScoreState = {
  /** Should only be set through {@link MusicScoreState.actions.setTempo} */
  _tempo: MusicTempo;
  notes: MusicNote[];
  actions: {
    setTempo: (tempo: MusicTempo) => void;
    playArrangement: () => void;
    stopArrangement: () => void;
  };
};

// MIDI 48 is C3

const useMusicScoreStore = create<MusicScoreState>()(
  persist(
    (set, get) => ({
      _tempo: MusicTempo.NORMAL,
      notes: [
        {
          id: '0',
          pitch: 0,
          instrument: MusicInstrument.FLUTE,
          beatStart: 0,
          duration: 2,
        },
        {
          id: '01',
          pitch: 2,
          instrument: MusicInstrument.FLUTE,
          beatStart: 0,
          duration: 2,
        },
        {
          id: '02',
          pitch: 4,
          instrument: MusicInstrument.FLUTE,
          beatStart: 0,
          duration: 2,
        },
        {
          id: '1',
          pitch: 1,
          instrument: MusicInstrument.FLUTE,
          beatStart: 2,
          duration: 2,
        },
        {
          id: '11',
          pitch: 3,
          instrument: MusicInstrument.FLUTE,
          beatStart: 2,
          duration: 2,
        },
        {
          id: '12',
          pitch: 5,
          instrument: MusicInstrument.FLUTE,
          beatStart: 2,
          duration: 2,
        },
        {
          id: '2',
          pitch: 2,
          instrument: MusicInstrument.FLUTE,
          beatStart: 4,
          duration: 2,
        },
        {
          id: '3',
          pitch: 3,
          instrument: MusicInstrument.FLUTE,
          beatStart: 6,
          duration: 2,
        },
        {
          id: '4',
          pitch: 4,
          instrument: MusicInstrument.FLUTE,
          beatStart: 8,
          duration: 4,
        },
        {
          id: '5',
          pitch: 5,
          instrument: MusicInstrument.FLUTE,
          beatStart: 10,
          duration: 4,
        },
        {
          id: '6',
          pitch: 6,
          instrument: MusicInstrument.FLUTE,
          beatStart: 12,
          duration: 4,
        },
      ],
      actions: {
        setTempo: (tempo: MusicTempo) => {
          set({ ...get(), _tempo: tempo });
          getTransport().bpm.value = tempo;
        },
        playArrangement: async () => {
          const toneTransport = getTransport();
          const notes = get().notes;
          toneTransport.scheduleOnce((time) => {
            const baseContext = getContext();
            notes.forEach((note) => {
              const frequency = new FrequencyClass(baseContext, NOTES[note.pitch], 'midi').toNote();
              const duration = new TimeClass(baseContext, note.duration, 'n').toNotation();
              const offset =
                ((note.beatStart * MEASURES_PER_COLUMN * BEATS_PER_MEASURE) / get()._tempo) * 60;
              samplers[note.instrument].triggerAttackRelease(
                frequency,
                duration,
                time + offset,
                0.4,
              );
            });
          }, '+0');
        },
        stopArrangement: async () => {
          const toneTransport = getTransport();
          toneTransport.pause();
        },
      },
    }),
    { name: 'music-score', partialize: ({ actions, ...state }) => ({ ...state }) },
  ),
);
export default useMusicScoreStore;

export const initializeTone = async () => {
  await startTone();
  getTransport().start();
};
