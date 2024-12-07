import React from 'react';
import { styles } from './styles';
import useMusicScoreStore from './useMusicScoreStore';
import { ROWS } from './constants';
import { useTheme } from '@mui/material';

const MusicBoardNotes: React.FC = () => {
  const notes = useMusicScoreStore((state) => state.notes);
  const theme = useTheme();
  return (
    <div css={styles.board}>
      {notes.map((note) => (
        <span
          style={{
            gridColumnStart: note.beatStart + 1,
            gridColumnEnd: note.beatStart + note.duration + 1,
            gridRow: ROWS - note.pitch,
            background: theme.palette.secondary.light,
            margin: '2px',
            opacity: 0.8,
            borderRadius: '4px',
          }}
        />
      ))}
    </div>
  );
};
export default MusicBoardNotes;
