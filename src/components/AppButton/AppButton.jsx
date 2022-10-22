import React from 'react';
import { Button, CircularProgress } from '@mui/material';
/**
 *
 * @param {import('@mui/material').ButtonProps} props
 *
 */
const AppButton = (props) => {
  const { isBusy, size, disabled,sx, ...rest } = props;
  return (
    <Button
      disableElevation
      sx={{ width: size === 'large' ? '100%' : 'fit-content',...sx }}
      disabled={disabled || isBusy}

      {...rest}
    >
      {!isBusy ? props.children : <CircularProgress size="32px" />}
    </Button>
  );
};

export default AppButton;
