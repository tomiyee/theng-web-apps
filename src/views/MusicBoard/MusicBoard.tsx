import { Box, Stack } from '@mui/material';
import _ from 'lodash';
import React from 'react';
import { styles } from './styles';
import { COLUMNS, ROWS } from './constants';
import MusicBoardNotes from './MusicBoardNotes';

const MusicBoard = () => {
  return (
    <Stack
      component={'main'}
      width="100%"
      alignItems="center"
      justifyContent="center"
      display="flex"
    >
      <Box>Hello</Box>
      <Box display="flex" maxWidth="100%" gap="20px" paddingX="20px">
        <Box flex={0}>
          <DragDropLegend />
        </Box>
        <Box flex={1} overflow="auto">
          <Stack gap={1} width="fit-content">
            <div css={styles.droppablesGrid}>
              {_.range(COLUMNS / 4).map((i) => (
                <span key={i} css={styles.dropContainer} />
              ))}
              {_.range(COLUMNS / 4).map((i) => (
                <span key={i} css={styles.dropContainer} />
              ))}
              {_.range(COLUMNS / 4).map((i) => (
                <span key={i} css={styles.dropContainer} />
              ))}
              {_.range(COLUMNS / 4).map((i) => (
                <span key={i} css={styles.dropContainer} />
              ))}
              {_.range(COLUMNS / 4).map((i) => (
                <span key={i} css={styles.dropContainer} />
              ))}
              {_.range(COLUMNS / 4).map((i) => (
                <span key={i} css={styles.dropContainer} />
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
    </Stack>
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
      <span css={styles.dropContainer} />
      <span css={styles.dropContainer} />
      <span css={styles.dropContainer} />
      <span css={styles.dropContainer} />
      <span css={styles.dropContainer} />
      <span css={styles.dropContainer}> CHORD </span>
    </Box>
  );
};
