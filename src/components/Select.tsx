import {
  FormControl,
  InputLabel,
  MenuItem,
  MenuItemProps,
  Select as MuiSelect,
  SelectChangeEvent,
  SelectProps,
} from '@mui/material';
import React, { useCallback, useRef } from 'react';
import { v4 } from 'uuid';

export type DropdownOption<T> = {
  value: T;
  label: string;
  /** A unique key for rendering the menu item */
  key: React.Key;
};

type DropdownSelectProps<T> = {
  /** The input label */
  label?: string;
  options: DropdownOption<T>[];
  value: T;
  onChange: (newValue: T) => void;
  selectProps?: Omit<SelectProps<T>, 'value' | 'onChange' | 'labelId' | 'id'>;
};

/** @description A wrapper over the Mui Select component that takes menu items as an object */
const Select = <T extends MenuItemProps['value']>(props: DropdownSelectProps<T>) => {
  const { options, label, value, onChange, selectProps } = props;
  const inputLabelId = useRef(v4());

  const changeHandler = useCallback((e: SelectChangeEvent<T>) => {
    onChange(e.target.value as T);
  }, []);

  return (
    <FormControl fullWidth>
      <InputLabel id={inputLabelId.current}>{label}</InputLabel>
      <MuiSelect
        labelId={inputLabelId.current}
        id={`${inputLabelId.current}-input`}
        label={label}
        value={value}
        onChange={changeHandler}
        {...selectProps}
      >
        {options.map(({ value, label }) => (
          <MenuItem value={value}>{label}</MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};
export default Select;
