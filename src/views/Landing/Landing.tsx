import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import { Checklist, ContentPasteSearch } from '@mui/icons-material';
import DynamicGrid from '../../components/DynamicGrid';
import { getOptionsFromEnum } from '../../utilities';
import DropdownSelect from '../../components/DropdownSelect';

enum Fruit { APPLES, ORANGES }

const Landing: React.FC = () => {
  const [f, setF] = useState(Fruit.APPLES)
  return (
    <Box component={'main'} width="100%">
      <Box display="flex" flexWrap={'wrap'} gap={2}>
        <DropdownSelect value={f} options={getOptionsFromEnum(Fruit)} onChange={setF} label="Fruits" />
        <DynamicGrid elementWidth={360}>
          {/* <AppComponent title="Num Pad Trainer" Icon={Dialpad} path="num-pad-trainer" /> */}
          <AppComponent
            title="Fare Share"
            Icon={PriceCheckIcon}
            path="fare-share"
            description="Split the bill based on how much each person bought! Those who bought more, owe more."
          />
          <AppComponent
            title="Don't Find the FOX"
            Icon={ContentPasteSearch}
            path="fox-game"
            description="Test your luck in not finding the FOX in a variety of board sizes."
          />
          <AppComponent
            title="Rice Purity Test"
            Icon={Checklist}
            path="rice-purity-test"
            description="The rice purity test except it remembers your selection, all stored locally in your browser."
          />
          <Box />
          <Box />
          <Box />
          <Box />
        </DynamicGrid>
      </Box>
    </Box>
  );
};
export default Landing;

type AppComponentProps = {
  title: string;
  Icon: typeof PriceCheckIcon;
  path: string;
  description: string;
};

const AppComponent: React.FC<AppComponentProps> = ({ title, Icon, path, description }) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ cursor: 'pointer' }} onClick={() => navigate(path)}>
      <CardContent>
        <Box width="100%" display="flex" gap={1}>
          <Box width={64} height={64} alignItems="center" justifyContent="center">
            <Icon style={{ fontSize: '64px' }} />
          </Box>
          <Stack flex={1}>
            <Typography fontWeight="bold">{title}</Typography>
            <Typography>{description}</Typography>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};
