import FormControlLabel from '@mui/material/FormControlLabel';
import { Checkbox, CheckboxProps } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

export interface CustomCheckbox extends CheckboxProps {
  label: string;
}

const CheckboxLabels: React.FC<CustomCheckbox> = (
  props: CustomCheckbox
) => (
  <FormControlLabel
    control={
      <Checkbox
        defaultChecked={props.defaultChecked}
        disabled={props.disabled}
        onChange={props.onChange}
      />
    }
    label={props.label}
  />
);

CheckboxLabels.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
};

CheckboxLabels.defaultProps = {
  label: '',
  disabled: false,
  defaultChecked: false,
};

export default CheckboxLabels;
