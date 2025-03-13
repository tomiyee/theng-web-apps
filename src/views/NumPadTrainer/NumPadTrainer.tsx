/** @jsxImportSource @emotion/react */
import { Box, Button, Card, CardContent, css, Stack } from '@mui/material';
import { random } from 'lodash';
import React, { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

const SMALL_WIDTH = 40;
const BIG_WIDTH = 60;
const LOOK_AHEAD = 3;
const LOOK_BACK = 3;
const ANIMATION_DURATION = 0.1;
const NUMBER_KEYS = '0123456789'.split('');

const styles = {
  viewport: css`
    position: relative;
    width: ${SMALL_WIDTH * (LOOK_AHEAD + LOOK_BACK) + BIG_WIDTH}px;
    height: ${BIG_WIDTH}px;
    display: flex;
    overflow: hidden;
  `,
  numberCarousel: css`
    display: flex;
    align-items: center;
  `,
  number: css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 
    left ${ANIMATION_DURATION}s,
      font-size ${ANIMATION_DURATION}s,
      color ${ANIMATION_DURATION}s;
  `,
  bigNumber: css`
    width: ${BIG_WIDTH}px;
    height: ${BIG_WIDTH}px;
    font-size: ${BIG_WIDTH}px;
  `,
  smallNumber: css`
    width: ${SMALL_WIDTH}px;
    height: ${SMALL_WIDTH}px;
    font-size: ${SMALL_WIDTH}px;
    color: gray;
  `,
};

const NumPadTrainer: React.FC = () => {
  const [offset, setOffset] = useState(-LOOK_BACK);
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);
  const [numbers, setNumbers] = useState(() =>
    new Array(2 + LOOK_AHEAD).fill(0).map(() => random(0, 9)),
  );
  useHotkeys(NUMBER_KEYS, (e) => {
    // To prevent spamming the handler when pressed, we keep track of curently held buttons
    if (pressedKeys.includes(e.key)) return;
    setPressedKeys((old) => [...old, e.key]);
    // if it matches the currently enlarged image, add another number and shift everything
    if (parseInt(e.key) === numbers[Math.min(LOOK_BACK, LOOK_BACK + offset)]) {
      setNumbers((old) => [...old.slice(offset < 0 ? 0 : 1), random(0, 9)]);
      setOffset((old) => old + 1);
    }
  });
  useHotkeys(NUMBER_KEYS, (e) => setPressedKeys((old) => old.filter((key) => key !== e.key)), {
    keyup: true,
    keydown: false,
  });

  const reset = () => {
    setOffset(-LOOK_BACK);
    setNumbers(() => new Array(2 + LOOK_AHEAD).fill(0).map(() => random(0, 9)))
  }
  return (
    <Box display="flex" width="100%" height="100%" alignItems="center" justifyContent="center">
      <Card>
        <CardContent>
          <Stack>
            <NumberDisplay numbers={numbers} offset={offset} />
            <Button onClick={reset}>Reset</Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};
export default NumPadTrainer;

type NumberDisplayProps = {
  /** A list of length {@link LOOK_BACK} + 1 + {@link LOOK_AHEAD} */
  numbers: number[];
  offset: number;
};

const NumberDisplay: React.FC<NumberDisplayProps> = (props) => {
  const { numbers, offset } = props;
  return (
    <Box css={styles.viewport}>
      <Box css={styles.numberCarousel}>
        {numbers.map((num, i) => (
          <span
            key={offset + i}
            style={{ left: `${getLeftForIndex(i - Math.min(offset, 0))}px` }}
            css={[
              styles.number,
              i === LOOK_BACK + Math.min(0, offset) ? styles.bigNumber : styles.smallNumber,
            ]}
          >
            {num}
          </span>
        ))}
      </Box>
    </Box>
  );
};

const getLeftForIndex = (i: number) => {
  return (
    Math.min(i, LOOK_BACK) * SMALL_WIDTH +
    (i > LOOK_BACK ? 1 : 0) * BIG_WIDTH +
    Math.max(0, i - LOOK_BACK - 1) * SMALL_WIDTH
  );
};
