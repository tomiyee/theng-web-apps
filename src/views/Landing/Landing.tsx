import { Box, Typography } from "@mui/material";
import React from "react";
import DynamicGrid from "../../components/DynamicGrid";
import { Link } from "react-router-dom";

const Landing: React.FC = () => {
  return (
    <Box component={'main'} width='100%'>
      <DynamicGrid elementWidth={160}>
        <Link to={"fare-share"}>Hello</Link>
        <Typography>Hello</Typography>
      </DynamicGrid>
    </Box>
  )
}
export default Landing;