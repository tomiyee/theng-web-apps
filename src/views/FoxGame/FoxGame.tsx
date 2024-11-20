import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import _ from 'lodash';
import React, { useCallback, useState } from 'react';

type FoxLetter = 'F' | 'O' | 'X';
const foxLetters: FoxLetter[] = ['F', 'O', 'X'];

const FoxGame: React.FC = () => {
  const [boardSize, setBoardSize] = useState(5);
  const [boardState, setBoardState] = useState<FoxLetter[]>([]);
  const theme = useTheme();
  const foxStatus = checkBoardState(boardState, boardSize);
  const { hasFox } = foxStatus;
  const isFoxSquare = (i: number) => {
    if (!foxStatus.hasFox) return false;
    return (
      foxStatus.foxSquares.find(
        ({ rowIndex, columnIndex }) => rowIndex * boardSize + columnIndex === i,
      ) !== undefined
    );
  };
  const addFoxLetter = useCallback(() => {
    setBoardState((old) => [...old, _.sample(foxLetters) as FoxLetter]);
  }, []);

  return (
    <Card>
      <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
        <Stack spacing={1} width="fit-content" alignItems="center">
          <Typography variant="h1">Don't Find the Fox Game</Typography>
          <FormControl>
            <InputLabel id="board-size-label">Board Size</InputLabel>
            <Select
              value={boardSize}
              labelId="board-size-label"
              id="board-size-input"
              label="Board Size"
              onChange={(e) => setBoardSize(e.target.value as number)}
            >
              <MenuItem value={3}>3 x 3</MenuItem>
              <MenuItem value={4}>4 x 4</MenuItem>
              <MenuItem value={5}>5 x 5</MenuItem>
              <MenuItem value={6}>6 x 6</MenuItem>
              <MenuItem value={7}>7 x 7</MenuItem>
              <MenuItem value={8}>8 x 8</MenuItem>
              <MenuItem value={9}>9 x 9</MenuItem>
            </Select>
          </FormControl>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: `repeat(${boardSize}, 0fr)`,
              gap: theme.spacing(1),
              width: 'fit-content',
            }}
          >
            {_.range(boardSize * boardSize).map((i) => (
              <Card
                sx={{
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: isFoxSquare(i)
                    ? theme.palette.primary.light
                    : theme.palette.background.paper,
                }}
              >
                <Typography fontWeight={isFoxSquare(i) ? 'bold' : 'normal'}>
                  {i < boardState.length ? boardState[i] : ' '}
                </Typography>
              </Card>
            ))}
          </Box>
          <Button
            onClick={addFoxLetter}
            disabled={hasFox || boardState.length === boardSize * boardSize}
            variant="contained"
            fullWidth
          >
            Add Letter
          </Button>
          {(hasFox || boardState.length === boardSize * boardSize) && (
            <Button onClick={() => setBoardState([])}>Reset</Button>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};
export default FoxGame;

type FoxStatus =
  | {
      hasFox: true;
      foxSquares: { rowIndex: number; columnIndex: number }[];
    }
  | {
      hasFox: false;
    };

const checkBoardState = (boardState: FoxLetter[], boardSize: number): FoxStatus => {
  let foxStatus: FoxStatus = { hasFox: false };

  if (boardState.length === 0 || boardState[boardState.length - 1] === 'O') return foxStatus;

  // The row and column of the last item in the boardState
  const r = Math.floor((boardState.length - 1) / boardSize);
  const c = (boardState.length - 1) % boardSize;
  if (r > 1) {
    const s =
      boardState[r * boardSize + c] +
      boardState[(r - 1) * boardSize + c] +
      boardState[(r - 2) * boardSize + c];
    if (s === 'FOX' || s === 'XOF') {
      if (!foxStatus.hasFox) {
        foxStatus = { hasFox: true, foxSquares: [] };
      }
      foxStatus.foxSquares.push({ rowIndex: r, columnIndex: c });
      foxStatus.foxSquares.push({ rowIndex: r - 1, columnIndex: c });
      foxStatus.foxSquares.push({ rowIndex: r - 2, columnIndex: c });
    }
  }
  if (c > 1) {
    const s =
      boardState[r * boardSize + c] +
      boardState[r * boardSize + c - 1] +
      boardState[r * boardSize + c - 2];
    if (s === 'FOX' || s === 'XOF') {
      if (!foxStatus.hasFox) {
        foxStatus = { hasFox: true, foxSquares: [] };
      }
      foxStatus.foxSquares.push({ rowIndex: r, columnIndex: c });
      foxStatus.foxSquares.push({ rowIndex: r, columnIndex: c - 1 });
      foxStatus.foxSquares.push({ rowIndex: r, columnIndex: c - 2 });
    }
  }
  if (r > 1 && c > 1) {
    const s =
      boardState[r * boardSize + c] +
      boardState[(r - 1) * boardSize + (c - 1)] +
      boardState[(r - 2) * boardSize + (c - 2)];
    if (s === 'FOX' || s === 'XOF') {
      if (!foxStatus.hasFox) {
        foxStatus = { hasFox: true, foxSquares: [] };
      }
      foxStatus.foxSquares.push({ rowIndex: r, columnIndex: c });
      foxStatus.foxSquares.push({ rowIndex: r - 1, columnIndex: c - 1 });
      foxStatus.foxSquares.push({ rowIndex: r - 2, columnIndex: c - 2 });
    }
  }
  return foxStatus;
};
