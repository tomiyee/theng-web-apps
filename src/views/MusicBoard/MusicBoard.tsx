import { Box, Button, Card, CardContent, Paper, Stack } from '@mui/material';
import _ from 'lodash';
import React from 'react';
import { styles } from './styles';
import { COLUMNS, ROWS } from './musicBoardConstants';
import MusicBoardNotes from './MusicBoardNotes';
import useMusicScoreStore from './useMusicScoreStore';

const MusicBoard = () => {
  const initializeTone = useMusicScoreStore((state) => state.actions.initializeTone);
  const playNote = useMusicScoreStore((state) => state.actions.playNote);
  const onClick = () => {
    initializeTone();
    playNote();
  };
  return (
    <Paper component="main" sx={{ pb: 2 }}>
      <Box display="flex" width="100%" padding="12px" gap={'12px'}>
        <Box flex={1} minWidth={100}>
          <Card>
            <CardContent>Rhythms</CardContent>
          </Card>
        </Box>
        <Box flex={1} minWidth={100}>
          <Card>
            <CardContent>Dynamics</CardContent>
          </Card>
        </Box>
        <Box flex={1} minWidth={100}>
          <Card>
            <CardContent>Chord</CardContent>
          </Card>
        </Box>
      </Box>
      <Button onClick={onClick}>Play Note</Button>
      <Box display="flex" maxWidth="100%" gap="20px" paddingX="20px">
        <Box flex={0}>
          <DragDropLegend />
        </Box>
        <Box flex={1} overflow="auto">
          <Stack gap={1} width="fit-content">
            <div css={styles.droppablesGrid}>
              {_.range(COLUMNS / 4).map((i) => (
                <span key={i} css={styles.dropContainer} style={{ backgroundColor: 'tan' }} />
              ))}
              {_.range(COLUMNS / 4).map((i) => (
                <span key={i} css={styles.dropContainer} style={{ backgroundColor: 'tan' }} />
              ))}
              {_.range(COLUMNS / 4).map((i) => (
                <span key={i} css={styles.dropContainer} style={{ backgroundColor: 'lightblue' }} />
              ))}
              {_.range(COLUMNS / 4).map((i) => (
                <span key={i} css={styles.dropContainer} style={{ backgroundColor: 'lightblue' }} />
              ))}
              {_.range(COLUMNS / 4).map((i) => (
                <span key={i} css={styles.dropContainer} style={{ backgroundColor: 'violet' }} />
              ))}
            </div>
            <Box position="relative">
              {/* The background tiles */}
              <div css={styles.board}>
                {_.range(COLUMNS * ROWS).map((i) => (
                  <GridBackground
                    columnIndex={i % COLUMNS}
                    rowIndex={Math.floor(i / COLUMNS)}
                    key={i}
                  />
                ))}
              </div>

              <div css={styles.float}>
                <MusicBoardNotes />
              </div>
            </Box>
          </Stack>
        </Box>
        <Box flex={0}>
          <DragDropLegend />
        </Box>
      </Box>
    </Paper>
  );
};
export default MusicBoard;

type GridBackgroundProps = {
  columnIndex: number;
  rowIndex: number;
};

const GridBackground: React.FC<GridBackgroundProps> = (props) => {
  const { columnIndex, rowIndex } = props;
  const hasLeftBorder = columnIndex % 4 === 0 && columnIndex !== 0;
  const hasBoldLeftBorder = columnIndex % 16 === 0 && columnIndex !== 0;
  const isGray = (columnIndex + rowIndex) % 2 === 0;
  return (
    <span
      css={[
        styles.gridBackgroundCell,
        isGray && styles.grayCell,
        hasLeftBorder && styles.leftBorder,
        hasBoldLeftBorder && styles.boldBorder,
      ]}
    />
  );
};

const DragDropLegend: React.FC = () => {
  return (
    <Box css={styles.droppableLegend}>
      <span css={styles.dropContainer} style={{ backgroundColor: 'tan' }}>
        {' '}
        PIANO DYNAMICS
      </span>
      <span css={styles.dropContainer} style={{ backgroundColor: 'tan' }}>
        {' '}
        PIANO RHYTHM
      </span>
      <span css={styles.dropContainer} style={{ backgroundColor: 'lightblue' }}>
        {' '}
        FLUTE DYNAMICS
      </span>
      <span css={styles.dropContainer} style={{ backgroundColor: 'lightblue' }}>
        {' '}
        FLUTE RHYTHM
      </span>
      <span css={styles.dropContainer} style={{ backgroundColor: 'violet' }}>
        {' '}
        CHORD{' '}
      </span>
    </Box>
  );
};
