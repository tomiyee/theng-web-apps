/** @jsxImportSource @emotion/react */
import { Box, Card, CardContent, css } from '@mui/material';
import { random } from 'lodash';
import React, { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

const SMALL_WIDTH = 20;
const BIG_WIDTH = 40;
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
    position: absolute;
    transition: left ${ANIMATION_DURATION}s;
  `,
  number: css`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: font-size ${ANIMATION_DURATION}s;
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
  `,
};

const NumPadTrainer: React.FC = () => {
  const [shownIndex, setShownIndex] = useState(0);
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);
  const [numbers, setNumbers] = useState(() =>
    new Array(1 + LOOK_AHEAD).fill(0).map(() => random(0, 9)),
  );
  useHotkeys(NUMBER_KEYS, (e) => {
    // To prevent spamming the handler when pressed, we keep track of curently held buttons
    if (pressedKeys.includes(e.key)) return;
    setPressedKeys((old) => [...old, e.key]);
    // if it matches the currently enlarged image, add another number and shift everything
    if (parseInt(e.key) === numbers[shownIndex]) {
      setShownIndex(shownIndex + 1);
      setNumbers((old) => [...old, random(0, 9)]);
    }
  });
  useHotkeys(NUMBER_KEYS, (e) => setPressedKeys((old) => old.filter((key) => key !== e.key)), {
    keyup: true,
    keydown: false,
  });
  return (
    <Box display="flex" width="100%" height="100%" alignItems="center" justifyContent="center">
      <Card>
        <CardContent>
          <NumberDisplay numbers={numbers} shownIndex={shownIndex} />
        </CardContent>
      </Card>
    </Box>
  );
};
export default NumPadTrainer;

type NumberDisplayProps = {
  numbers: number[];
  shownIndex: number;
};

const NumberDisplay: React.FC<NumberDisplayProps> = (props) => {
  const { numbers, shownIndex } = props;
  return (
    <Box css={styles.viewport}>
      <Box css={styles.numberCarousel} style={{ left: -(shownIndex - LOOK_BACK) * SMALL_WIDTH }}>
        {numbers.map((num, i) => (
          <span
            key={i}
            css={[styles.number, i === shownIndex ? styles.bigNumber : styles.smallNumber]}
          >
            {num}
          </span>
        ))}
      </Box>
    </Box>
  );
};
