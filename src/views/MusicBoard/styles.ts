import { css } from "@mui/material";
import { COL_WIDTH, COLUMNS, DROP_HEIGHT, ROW_HEIGHT, ROWS } from "./constants";

export const styles = {
  board: css`
    display: grid;
    grid-template-columns: repeat(${COLUMNS}, ${COL_WIDTH});
    grid-template-rows: repeat(${ROWS}, ${ROW_HEIGHT});
  `,
  gridBackgroundCell: css`
    background-color: #eee;
  `,
  grayCell: css`
    background-color: #ddd;
  `,
  leftBorder: css`
    border-left: 2px solid #999;
  `,
  boldBorder: css`
    border-left: 2px solid black;
  `,
  float: css`
    position: absolute;
    top: 0;
    left: 0;
  `,
  droppablesGrid: css`
    display: grid;
    grid-template-columns: repeat(${COLUMNS / 4}, calc(4 * ${COL_WIDTH}));
  `,
  /** Style for an individual cell in the droppable area */
  dropContainer: css`
    margin: 2px;
    border-radius: 4px;
    background: #ddd;
    height: ${DROP_HEIGHT};
  `,
  droppableLegend: css`
    display: grid;
    grid-template-columns: 100px;
  `,
}
