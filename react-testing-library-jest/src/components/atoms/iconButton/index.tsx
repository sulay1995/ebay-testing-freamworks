import React from 'react';
import PropTypes from 'prop-types';

import { IconButton, IconButtonProps } from '@mui/material';

export interface CustomIconButton extends IconButtonProps {
  icon: JSX.Element;
  float: string;
}

const IconButtonComponent = ({
  icon,
  ...props
}: CustomIconButton) => (
  <IconButton
    data-testid="primary"
    color={props.color}
    disabled={props.disabled}
    onClick={props.onClick}
    sx={{ float: props.float }}
    name="primary"
  >
    {icon}
  </IconButton>
);

IconButtonComponent.propTypes = {
  icon: PropTypes.element.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  color: PropTypes.string,
};

IconButtonComponent.defaultProps = {
  disable: false,
  color: 'default',
  float: 'none',
};

export default IconButtonComponent;
