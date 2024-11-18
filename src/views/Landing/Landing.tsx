import { Box, Card, Stack, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import { Checklist } from '@mui/icons-material';

const Landing: React.FC = () => {
  return (
    <Box component={'main'} width="100%">
      <Box display="flex" flexWrap={'wrap'} gap={2}>
        {/* <AppComponent title="Fare Share" Icon={PriceCheckIcon} path="fare-share" />
        <AppComponent title="Num Pad Trainer" Icon={Dialpad} path="num-pad-trainer" /> */}
        <AppComponent title="Rice Purity Test" Icon={Checklist} path="rice-purity-test" />
      </Box>
    </Box>
  );
};
export default Landing;

type AppComponentProps = {
  title: string;
  Icon: typeof PriceCheckIcon;
  path: string;
};

const AppComponent: React.FC<AppComponentProps> = ({ title, Icon, path }) => {
  const navigate = useNavigate();
  return (
    <Card>
      <Stack
        justifyContent="center"
        alignItems="center"
        width={144}
        height={144}
        onClick={() => navigate(path)}
        sx={{ borderRadius: '8px', cursor: 'pointer' }}
      >
        <Icon style={{ fontSize: '64px' }} />
        <Typography textAlign={'center'}>{title}</Typography>
      </Stack>
    </Card>
  );
};
