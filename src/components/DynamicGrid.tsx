import { styled } from "@mui/material";
import { PropsWithChildren } from "react";

type DynamicGridProps = PropsWithChildren<{
  elementWidth: number;
}>

const DynamicGrid = styled('div')<DynamicGridProps>(({elementWidth}) => ({
  display: 'grid',
  width: '100%',
  gridTemplateColumns: `repeat(auto-fit, minmax(${elementWidth}px, 1fr))`,
  gap: 16,
  padding: 16,
}))

export default DynamicGrid;

