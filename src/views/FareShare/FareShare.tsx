import { Box, Button, Grid2, IconButton, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import _ from "lodash";
import FloatField from "../../components/FloatField";
import { Clear } from "@mui/icons-material";

type FareShareProps = {};

const updateIndividual = (itemizedBill: IndividualContribution[], individualId: string, updateFn: (individualContribution: IndividualContribution) => IndividualContribution) => {
  return itemizedBill.map((individual) => individual.id === individualId ? updateFn(individual) : individual)
}

const FareShare: React.FC<FareShareProps> = () => {
  const [itemizedBill, setItemizedBill] = useState<IndividualContribution[]>([
    {
      name: "Tommy",
      id: "t",
      itemizedContributions: [
        {itemCost: 3.00, itemName: "There was something here", id: '1'}
      ]
    }
  ]);

  const partialUpdate = ({
    individualId, 
    itemId, 
    itemCost,
    itemName,
    deleteItem,
  }: {individualId: string, itemId: string, itemCost?: number, itemName?: string, deleteItem?: boolean}) => {
    setItemizedBill(updateIndividual(itemizedBill, individualId, (old) => ({
        ...old, 
        itemizedContributions: deleteItem ?old.itemizedContributions.filter(lineItem => lineItem.id !== itemId): old.itemizedContributions.map((lineItem) => {
          // Do not modify irrelevant line items
          if (lineItem.id !== itemId)
            return lineItem;
          return {
            ...lineItem,
            itemCost: itemCost ?? lineItem.itemCost,
            itemName: itemName ?? lineItem.itemName
          }
        })
      })))
  }
  const subtotal = _.sumBy(itemizedBill.flatMap(indiv => indiv.itemizedContributions), (lineItem) => lineItem.itemCost);
  const [total, setTotal] = useState(0);
  return (
    <Box component={'main'} width='100%'>
      <Stack maxWidth={600}>
        <Grid2 container spacing={1}>
          {itemizedBill.map((individual) => (
            <React.Fragment key={individual.id}>
              <Grid2 size={10}>
                <IconButton onClick={() => setItemizedBill(itemizedBill.filter(each => each.id !== individual.id))}>
                  <Clear/>
                </IconButton>
                <TextField label="Name of Individual" value={individual.name} size="small" onChange={(e) => {
                  setItemizedBill(itemizedBill.map((each) => each.id !== individual.id ? each : {...each, name: e.target.value})) 
                }}/>
              </Grid2>
              <Grid2 size={2}>
                Owes: ${(_.sumBy(individual.itemizedContributions, (item) => item.itemCost) * (total === 0 || subtotal === 0 ? 1 : total / subtotal)).toFixed(2)}
              </Grid2>
              {individual.itemizedContributions.map((item) => (
                <React.Fragment key={`${individual.id}-${item.id}`}>
                  <Grid2 size={1}/>
                <IconButton onClick={() => partialUpdate({individualId: individual.id, itemId: item.id,deleteItem: true})}>
                  <Clear/>
                </IconButton>
                  <Grid2 size={6}>
                    <TextField size='small' fullWidth value={item.itemName} onChange={(e) => partialUpdate({individualId: individual.id, itemId: item.id, itemName: e.target.value})} />
                  </Grid2>
                  <Grid2 size={4}>
                  <FloatField 
                    textFieldProps={{
                      fullWidth: true,
                      size: 'small',
                    }}
                    value={item.itemCost}
                    onChange={(cost) => partialUpdate({individualId: individual.id, itemId: item.id, itemCost: cost})}
                   />
                  </Grid2>
                </React.Fragment>
              ))}
              <Grid2 size={1}/>
              <Grid2 size={7}>
                <Button variant='outlined' fullWidth onClick={() => setItemizedBill(updateIndividual(itemizedBill, individual.id, (indiv) => ({...indiv, itemizedContributions: [...indiv.itemizedContributions, newItemizedContribution(indiv.itemizedContributions.length + 1)]})))}>
                  Add Line Item
                </Button>
              </Grid2>
              <Grid2 size={4}/>
            </React.Fragment>
          ))}
        <Button fullWidth variant='contained' onClick={() => setItemizedBill([...itemizedBill, {...newIndividualContributor()}])}>Add a Person</Button>
        <Grid2 size={10}>
          <Typography>
            Subtotal: ${subtotal.toFixed(2)}
          </Typography>
          <FloatField
              value={total}
              onChange={setTotal} textFieldProps={{
                label: 'Total',
                size:'small'
              }}          />
          </Grid2>
        </Grid2>

      </Stack>
    </Box>
  )
}
export default FareShare;


const newIndividualContributor = (): IndividualContribution => {
  return {
    id: crypto.randomUUID(),
    name: "",
    itemizedContributions: [newItemizedContribution(1)]
  }
}

const newItemizedContribution = (n?: number): ItemizedContribution => {
  return {
    id: crypto.randomUUID(),
    itemName: `Item #${n}`,
    itemCost: 0
  }
}


type IndividualContribution = {
  name: string,
  /** An aribtrary unique ID for this indivudual */
  id: string;
  itemizedContributions: ItemizedContribution[]
}

type ItemizedContribution = {
  /** An arbitrary unique ID for this individual */
  id: string;
  itemName: string;
  itemCost: number;
}