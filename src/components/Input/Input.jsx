import React from "react";
import { TextField, InputLabel, Input, FormHelperText } from "@mui/material";
/**
 *
 * @param {import('@mui/material').TextFieldProps } props
 */
const InputField = ({
  label,
  name,
  value,
  onChange,
  error,
  errorText,
  ...rest
}) => {
  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      error={error}
      helperText={errorText}
      {...rest}
    />
  );
};

export default InputField;
