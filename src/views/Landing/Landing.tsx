import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import PriceCheckIcon from '@mui/icons-material/PriceCheck';

const Landing: React.FC = () => {
  return (
    <Box component={'main'} width='100%'>
      <Box display='flex' flexWrap={'wrap'} gap={2}>
        <AppComponent
          title="Fare Share"
          Icon={PriceCheckIcon}
          path="fare-share"
        />
      </Box>
    </Box>
  )
}
export default Landing;

type AppComponentProps = {
  title: string; 
  Icon: typeof PriceCheckIcon;
  path: string;
}

const AppComponent: React.FC<AppComponentProps> = ({title, Icon, path}) => {
  const navigate = useNavigate();
  return (
    <Stack 
      justifyContent='center' 
      alignItems='center' 
      width={144} 
      height={144} 
      onClick={() => navigate(path)}
      sx={{background: '#eee', borderRadius: '8px', cursor: 'pointer'}} 
    >
      <Icon style={{fontSize: "64px"}}/>
      <Typography textAlign={'center'}>{title}</Typography>
    </Stack>
  );
}