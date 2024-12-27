import React from 'react';
import { Button, Divider, Grid2, IconButton, TextField, Typography } from '@mui/material';
import LineItemSection from './LineItem';
import _ from 'lodash';
import { Clear } from '@mui/icons-material';
import { IndividualContribution, LineItem, newLineItem } from './fareShareUtils';

type PersonSectionProps = {
  value: IndividualContribution;
  onChange: (value: IndividualContribution) => void;
  onDelete: () => void;
};

const PersonSection: React.FC<PersonSectionProps> = (props) => {
  const { value, onChange, onDelete } = props;

  const updateLineItem = (id: string, newValue: LineItem) => {
    onChange({
      ...value,
      itemizedContributions: value.itemizedContributions.map((lineItem) =>
        lineItem.id === id ? newValue : lineItem,
      ),
    });
  };

  const deleteLineItem = (id: string) => {
    onChange({
      ...value,
      itemizedContributions: value.itemizedContributions.filter((lineItem) => lineItem.id !== id),
    });
  };

  const personalSubtotal = _.sumBy(value.itemizedContributions, (item) => item.cost);

  return (
    <>
      <Grid2 size={8} display="flex">
        <TextField
          fullWidth
          label="Name of Individual"
          value={value.name}
          slotProps={{
            input: {
              startAdornment: (
                <IconButton onClick={onDelete}>
                  <Clear />
                </IconButton>
              ),
            },
          }}
          onChange={(e) => onChange({ ...value, name: e.target.value })}
          onFocus={(e) => e.target.setSelectionRange(0, e.target.value.length)}
        />
      </Grid2>
      <Grid2 size={4} display="flex" alignItems="center" gap={1}>
        <Typography fontWeight="bold">Subtotal:</Typography>
        <Typography>${personalSubtotal.toFixed(2)}</Typography>
      </Grid2>
      {value.itemizedContributions.map((lineItem) => (
        <LineItemSection
          key={`${value.id}-${lineItem.id}`}
          indent={1}
          lineItem={lineItem}
          onChange={(newValue) => updateLineItem(lineItem.id, newValue)}
          onDelete={() => deleteLineItem(lineItem.id)}
        />
      ))}
      <Grid2 size={1} />
      <Grid2 size={11} pb={1}>
        <Button
          variant="outlined"
          fullWidth
          onClick={() =>
            onChange({
              ...value,
              itemizedContributions: [
                ...value.itemizedContributions,
                newLineItem(value.itemizedContributions.length + 1),
              ],
            })
          }
        >
          Add Line Item
        </Button>
      </Grid2>
      <Grid2 size={12}>
        <Divider />
      </Grid2>
    </>
  );
};
export default PersonSection;
