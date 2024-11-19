import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import _ from "lodash";
import { IndividualContribution } from "./fareShareUtils";

type FareShareTableProps = {
  itemizedBill: IndividualContribution[];
  total: number
}


const FareShareTable: React.FC<FareShareTableProps> = (props) => {
  const { itemizedBill, total } = props;
  const billSubtotal = _.sum(itemizedBill.map(individual => _.sumBy(individual.itemizedContributions, (lineItem) => lineItem.cost)));

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>
              Person
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>
              Personal Subtotal
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>
              Percent of Subtotal
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>
              Amount Owed
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {itemizedBill.map((individual) => {
            const personalSubtotal = _.sumBy(individual.itemizedContributions, (lineItem) => lineItem.cost)
            return (
              <TableRow key={individual.id}>
                <TableCell>
                  {individual.name}
                </TableCell>
                <TableCell>
                  ${(personalSubtotal).toFixed(2)}
                </TableCell>
                <TableCell>
                  {(billSubtotal === 0 ? 0 : personalSubtotal / billSubtotal * 100).toFixed(2)}%
                </TableCell>
                <TableCell>
                  ${((billSubtotal === 0 ? 0 : personalSubtotal / billSubtotal) * total).toFixed(2)}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default FareShareTable;