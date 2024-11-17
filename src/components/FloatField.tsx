import { TextField, TextFieldProps } from "@mui/material"
import React, { useState } from "react"


type FloatFieldProps = {
  textFieldProps: Omit<TextFieldProps, keyof FloatFieldProps>
  value: number;
  /** Called as the user makes changes to the value */
  onChange?: (newValue: number) => void;
  /** Only called when the user blurs */
  onCommit?: (newValue: number) => void;
  /** Default 2 */
  precision?: number;
}

/** State is controlled */
const FloatField: React.FC<FloatFieldProps> = (props) => {
  const {textFieldProps, value, onChange, onCommit, precision = 2} = props;
  const [localValue, setLocalValue] = useState(value.toFixed(precision));
  return (
    <TextField
      value={localValue}
      onChange={(e) => {
        setLocalValue(e.target.value);
        const newValue = parseFloat(e.target.value);
        if (isNaN(newValue)) return;
        // Do nothing if the value is basically unchanged
        if (isApproxEqual(value, newValue)) return;
        onChange?.(newValue);
      }}
      onBlur={(e) => {
        const newValue = parseFloat(e.target.value);
        if (isNaN(newValue)) return;
        // Do nothing if the value is basically unchanged
        if (isApproxEqual(value, newValue)) return;
        onCommit?.(newValue);
      }}
      {...textFieldProps}
    />
  )
};
export default FloatField

const isApproxEqual = (a: number, b: number) =>  Math.abs(a - b) < 0.001
