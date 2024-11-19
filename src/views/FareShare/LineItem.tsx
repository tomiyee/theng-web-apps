import { Grid2, IconButton, TextField } from "@mui/material";
import FloatField from "../../components/FloatField";
import { Clear } from "@mui/icons-material";
import { LineItem } from "./fareShareUtils";

type LineItemProps = {
  /** The number of grid columns to indent by */
  indent: number;
  lineItem: LineItem;
  onChange: (value: LineItem) => void;
  onDelete: () => void;
};

const LineItemSection: React.FC<LineItemProps> = (props) => {
  const { indent, lineItem, onChange, onDelete } = props;

  return (
    <>
      <Grid2 size={indent} />
      <Grid2 size={7} display='flex'>
        <TextField
          fullWidth
          value={lineItem.itemName}
          onChange={(e) => onChange({ ...lineItem, itemName: e.target.value })}
          slotProps={{
            input: {
              startAdornment:
                <IconButton onClick={onDelete} >
                  <Clear />
                </IconButton>
            }
          }}
        />
      </Grid2>
      <Grid2 size={4}>
        <FloatField
          textFieldProps={{ fullWidth: true }}
          value={lineItem.cost}
          onChange={(cost) => onChange({ ...lineItem, cost })
          }
        />
      </Grid2>
    </>
  );
}
export default LineItemSection;