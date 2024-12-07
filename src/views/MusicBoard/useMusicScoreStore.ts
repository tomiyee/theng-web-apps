import { create } from "zustand";
import { persist } from "zustand/middleware";

enum MusicInstrument {
  FLUTE,
}

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
}

type MusicScoreState = {
  notes: MusicNote[]
}

const useMusicScoreStore = create(
  persist<MusicScoreState>(
    () => ({
      notes: [
        {
          id: "0",
          pitch: 0,
          instrument: MusicInstrument.FLUTE,
          beatStart: 0,
          duration: 4,
        },
        {
          id: "1",
          pitch: 1,
          instrument: MusicInstrument.FLUTE,
          beatStart: 2,
          duration: 4,
        },
        {
          id: "2",
          pitch: 2,
          instrument: MusicInstrument.FLUTE,
          beatStart: 4,
          duration: 4,
        },
        {
          id: "3",
          pitch: 3,
          instrument: MusicInstrument.FLUTE,
          beatStart: 6,
          duration: 4,
        }
      ]
    }),
    { name: "music-score" }
  )
)
export default useMusicScoreStore;