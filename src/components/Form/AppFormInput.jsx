import { useFormik, useFormikContext } from 'formik';
import React from 'react';
import InputField from '../Input/Input';
/**
 *
 * @param {object} obj
 * @param {string} obj.name
 * @param {string} obj.label
 * @param {import("@mui/material").TextFieldProps} obj.inputProps
 * @param {React.ReactNode | undefined } obj.trailingIcon
 */
const AppFormInput = ({ name, label, inputProps, trailingIcon }) => {
  const {
    values,
    handleChange,
    setFieldTouched,
    errors,
    touched,
  } = useFormikContext();
  return (
    <InputField
      name={name}
      {...inputProps}
      sx={{ marginBottom: '14px', width: '100%' }}
      label={label}
      value={values[name]}
      InputProps={{ endAdornment: trailingIcon }}
      onChange={handleChange}
      onBlur={()=>setFieldTouched(name)}
      error={touched[name] && errors[name]}
      errorText={touched[name] ? errors[name]:undefined}
    />
  );
};

export default AppFormInput;
