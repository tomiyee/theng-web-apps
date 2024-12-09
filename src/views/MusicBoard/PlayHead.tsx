import { Box, css, keyframes } from '@mui/material';
import { MEASURES_PER_COLUMN, COL_WIDTH, COLUMNS, ROW_HEIGHT, ROWS } from './musicBoardConstants';
import React, { useEffect, useRef } from 'react';

const effect = keyframes`
  0% {
    left: 0;
  }
  100% {
    left: calc(${COL_WIDTH} * ${COLUMNS});
  }
`;

const style = {
  playHead: css`
    width: ${COL_WIDTH};
    height: calc(${ROW_HEIGHT} * ${ROWS});
    background: rgba(200, 200, 255, 0.5);
    position: absolute;
    top: 0;
  `,
  animated: css`
    animation: ${effect} ${((MEASURES_PER_COLUMN * COLUMNS * 4) / 120) * 60}s linear infinite;
  `,
};

type PlayHeadProps = {
  containerRef: React.MutableRefObject<HTMLElement | null>;
  playing: boolean;
};

const PlayHead: React.FC<PlayHeadProps> = (props) => {
  const { containerRef, playing } = props;

  const playHeadRef = useRef<Element>(null);

  useEffect(() => {
    if (containerRef.current === null) return;
    if (playHeadRef.current === null) return;
    if (!playing) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (containerRef.current === null) return;
        const [entry] = entries;
        if (entry.intersectionRatio < 0.5) {
          containerRef.current.scrollLeft =
            containerRef.current.scrollLeft +
            entry.boundingClientRect.left -
            containerRef.current.getBoundingClientRect().left;
        }
      },
      { root: containerRef.current, threshold: 0.5 },
    );
    observer.observe(playHeadRef.current);
    return () => {
      if (playHeadRef.current !== null) observer.unobserve(playHeadRef.current);
      observer.disconnect();
    };
  }, [playing]);

  return <Box css={[style.playHead, playing && style.animated]} ref={playHeadRef} />;
};
export default PlayHead;
