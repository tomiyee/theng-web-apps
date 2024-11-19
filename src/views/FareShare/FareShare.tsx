import { Box, Button, Card, CardContent, Divider, Grid2, Typography } from '@mui/material';
import React, { useState } from 'react';
import _ from 'lodash';
import FloatField from '../../components/FloatField';
import PersonSection from './PersonSection';
import FareShareTable from './FareShareTable';
import { IndividualContribution, INITIAL_BILL, newIndividualContributor } from './fareShareUtils';

type FareShareProps = {};

const FareShare: React.FC<FareShareProps> = () => {
  const [itemizedBill, setItemizedBill] = useState<IndividualContribution[]>(INITIAL_BILL);

  const [total, setTotal] = useState(0);

  const onChange = (id: string, newValue: IndividualContribution) => {
    setItemizedBill(itemizedBill.map(individual => individual.id === id ? newValue : individual))
  }
  return (
    <Box component={'main'} width="100%" alignItems='center' justifyContent='center' display='flex'>
      <Card>
        <CardContent sx={{ maxWidth: 600 }}>
          <Typography variant='h1'>Fare Share</Typography>
          <Typography pb={1}>
            Split the bill based on how much each person bought. Those
            who bought less get to pay (proportionally) less! (e.g. If you are responsible for 50% of the cost, then you pay 50% of the final total)</Typography>
          <Divider />
          <Grid2 container spacing={1} width='100%' pt={1}>
            {itemizedBill.map((individual) => (
              <PersonSection
                key={individual.id}
                value={individual}
                onChange={(newValue) => onChange(individual.id, newValue)}
                onDelete={() => setItemizedBill(old => old.filter(e => e.id !== individual.id))}
              />
            ))}
            <Grid2 size={8} display='flex' alignItems='center'>
              <Button
                fullWidth
                variant="contained"
                onClick={() => setItemizedBill([...itemizedBill, { ...newIndividualContributor(itemizedBill.length + 1) }])}
              >
                Add a Person
              </Button>
            </Grid2>
            <Grid2 size={4}>
              <FloatField
                value={total}
                onChange={setTotal}
                textFieldProps={{
                  label: 'Total',
                  size: 'small',
                }}
              />
            </Grid2>
          </Grid2>
          <Typography variant='h3' pt={2}>The Final Split</Typography>
          <FareShareTable itemizedBill={itemizedBill} total={total} />
        </CardContent>
      </Card>
    </Box>
  );
};
export default FareShare;
