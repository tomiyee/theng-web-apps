import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getTransport, start as startTone } from 'tone';
import { samplers } from './samplers';
import { MusicInstrument, MusicTempo } from './musicBoardConstants';

type MusicNote = {
  /** UUIDv4 for rendering purposes */
  id: string;
  /** An integer where 0 is the lowest pitch available */
  pitch: number;
  instrument: MusicInstrument;
  /** The beat the note starts on */
  beatStart: number;
  /** An integer */
  duration: number;
};

type MusicScoreState = {
  /** Should only be set through {@link MusicScoreState.actions.setTempo} */
  _tempo: MusicTempo;
  notes: MusicNote[];
  actions: {
    setTempo: (tempo: MusicTempo) => void;
    playNote: () => void;
  };
};

const useMusicScoreStore = create(
  persist<MusicScoreState>(
    (set) => ({
      _tempo: MusicTempo.NORMAL,
      notes: [
        {
          id: '0',
          pitch: 0,
          instrument: MusicInstrument.FLUTE,
          beatStart: 0,
          duration: 4,
        },
        {
          id: '1',
          pitch: 1,
          instrument: MusicInstrument.FLUTE,
          beatStart: 2,
          duration: 4,
        },
        {
          id: '2',
          pitch: 2,
          instrument: MusicInstrument.FLUTE,
          beatStart: 4,
          duration: 4,
        },
        {
          id: '3',
          pitch: 3,
          instrument: MusicInstrument.FLUTE,
          beatStart: 6,
          duration: 4,
        },
      ],
      actions: {
        setTempo: (tempo: MusicTempo) => {
          set({ _tempo: tempo });
          getTransport().bpm.value = tempo;
        },
        playNote: async () => {
          const toneTransport = getTransport();
          toneTransport.scheduleOnce((time) => {
            samplers[MusicInstrument.FLUTE].triggerAttackRelease('c4', '4n', time + 0.2);
            samplers[MusicInstrument.FLUTE].triggerAttackRelease('d4', '4n', time + 0.4);
            samplers[MusicInstrument.FLUTE].triggerAttackRelease('e4', '4n', time + 0.6);
            samplers[MusicInstrument.FLUTE].triggerAttackRelease('f4', '4n', time + 0.8);
            samplers[MusicInstrument.FLUTE].triggerAttackRelease('g4', '4n', time + 1);
            samplers[MusicInstrument.FLUTE].triggerAttackRelease('a4', '4n', time + 1.2);
          }, '+0');
        },
      },
    }),
    { name: 'music-score' },
  ),
);
export default useMusicScoreStore;

const initializeTone = async () => {
  await startTone();
  getTransport().start();
};
