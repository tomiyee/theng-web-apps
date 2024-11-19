import { Box, Button, Card, CardContent, CardHeader, Divider, Grid2, IconButton, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import _ from 'lodash';
import FloatField from '../../components/FloatField';
import { Clear } from '@mui/icons-material';
import LineItemSection from './LineItem';
import PersonSection from './PersonSection';

type FareShareProps = {};

const updateIndividual = (
  itemizedBill: IndividualContribution[],
  individualId: string,
  updateFn: (individualContribution: IndividualContribution) => IndividualContribution,
) => {
  return itemizedBill.map((individual) =>
    individual.id === individualId ? updateFn(individual) : individual,
  );
};

const FareShare: React.FC<FareShareProps> = () => {
  const [itemizedBill, setItemizedBill] = useState<IndividualContribution[]>([
    newIndividualContributor(),
  ]);

  const partialUpdate = ({
    individualId,
    itemId,
    itemCost,
    itemName,
    deleteItem,
  }: {
    individualId: string;
    itemId: string;
    itemCost?: number;
    itemName?: string;
    deleteItem?: boolean;
  }) => {
    setItemizedBill(
      updateIndividual(itemizedBill, individualId, (old) => ({
        ...old,
        itemizedContributions: deleteItem
          ? old.itemizedContributions.filter((lineItem) => lineItem.id !== itemId)
          : old.itemizedContributions.map((lineItem) => {
            // Do not modify irrelevant line items
            if (lineItem.id !== itemId) return lineItem;
            return {
              ...lineItem,
              cost: itemCost ?? lineItem.cost,
              itemName: itemName ?? lineItem.itemName,
            };
          }),
      })),
    );
  };
  const subtotal = _.sumBy(
    itemizedBill.flatMap((indiv) => indiv.itemizedContributions),
    (lineItem) => lineItem.cost,
  );
  const [total, setTotal] = useState(0);

  const onChange = (id: string, newValue: IndividualContribution) => {
    setItemizedBill(itemizedBill.map(individual => individual.id === id ? newValue : individual))
  }
  return (
    <Box component={'main'} width="100%" alignItems='center' justifyContent='center' display='flex'>
      <Card>
        <CardContent>
          <Typography variant='h1'>Fare Share</Typography>
          <Divider />
          <Grid2 maxWidth={600} container spacing={1} width='100%'>
            {itemizedBill.map((individual) => (
              <PersonSection
                key={individual.id}
                value={individual}
                onChange={(newValue) => onChange(individual.id, newValue)}
                onDelete={() => setItemizedBill(old => old.filter(e => e.id !== individual.id))}
              />
            ))}
            <Button
              fullWidth
              variant="contained"
              onClick={() => setItemizedBill([...itemizedBill, { ...newIndividualContributor() }])}
            >
              Add a Person
            </Button>
            <Grid2 size={10}>
              <Typography>Subtotal: ${subtotal.toFixed(2)}</Typography>
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
        </CardContent>
      </Card>
    </Box>
  );
};
export default FareShare;







const newIndividualContributor = (): IndividualContribution => {
  return {
    id: crypto.randomUUID(),
    name: '',
    itemizedContributions: [newLineItem(1)],
  };
};

export const newLineItem = (n?: number): LineItem => {
  return {
    id: crypto.randomUUID(),
    itemName: `Item #${n}`,
    cost: 0,
  };
};
export type IndividualContribution = {
  name: string;
  /** An aribtrary unique ID for this indivudual */
  id: string;
  itemizedContributions: LineItem[];
};

export type LineItem = {
  /** An arbitrary unique ID for this individual */
  id: string;
  itemName: string;
  cost: number;
};
