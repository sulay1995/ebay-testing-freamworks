import React from 'react';

import { Button, ButtonProps } from '@mui/material';

interface CustomButton extends ButtonProps {
  icon: JSX.Element;
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  justifyContent: string;
  onClick?: VoidFunction;
  border?: string;
}

export const ButtonComponent: React.FC<CustomButton> = (
  props: CustomButton
) => (
  <Button
    variant={props.variant}
    color={props.color}
    disabled={props.disabled}
    onClick={props.onClick}
    size={props.size}
    startIcon={props.icon}
    fullWidth={props.fullWidth}
    sx={{
      color: props.textColor,
      backgroundColor: props.backgroundColor,
      borderColor: props.borderColor,
      border: props.border,
      justifyContent: props.justifyContent,
    }}
  >
    {props.title}
  </Button>
);

ButtonComponent.defaultProps = {
  variant: 'outlined',
  disabled: false,
  icon: <></>,
  textColor: 'black',
  borderColor: '#E5E7ED',
  backgroundColor: '',
  color: 'primary',
  size: 'medium',
  fullWidth: false,
  justifyContent: 'center',
};

export default ButtonComponent;
