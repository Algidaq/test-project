import React from 'react';
import AppButton from '../AppButton/AppButton';
import { useFormikContext } from 'formik';
import { Busy } from '../../enums/StateEnum';
/**
 *
 * @param {Object} obj
 * @param {string} obj.text
 * @param {string} obj.stateEnum
 * @param {import('@mui/material').ButtonProps} obj.buttonProps
 */
const AppFormButton = ({ text, stateEnum, buttonProps }) => {
  const { isValid, dirty, handleSubmit, errors } = useFormikContext();
  const isBusy = stateEnum === Busy;
  return (
    <AppButton
      {...buttonProps}
      disabled={!isValid || Object.keys(errors).length > 0}
      isBusy={isBusy}
      type="submit"
      onSubmit={handleSubmit}
      onClick={handleSubmit}
      variant="contained"
      size="large"
    >
      {text}
    </AppButton>
  );
};

export default AppFormButton;
