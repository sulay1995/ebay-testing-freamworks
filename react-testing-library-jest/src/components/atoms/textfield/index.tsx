import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

export interface TextFieldInterface {
  icon?: JSX.Element;
  label?: string;
  variant?: TextFieldProps['variant'];
  onChange?: VoidFunction;
  padding?: string;
}

const InputField: React.FC<TextFieldInterface> = (
  props: TextFieldInterface
) => (
  <TextField
    id="outlined-basic"
    label={props.label}
    variant={props.variant}
    onChange={props.onChange}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">{props.icon}</InputAdornment>
      ),
    }}
    style={{ padding: props.padding }}
  />
);

InputField.defaultProps = {
  label: '',
  variant: 'outlined',
};

export default InputField;
