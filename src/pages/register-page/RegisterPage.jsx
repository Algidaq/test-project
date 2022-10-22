import React, { useContext } from 'react';
import { FormHelperText, IconButton, Stack, Typography } from '@mui/material';
import { AppFormButton, AppForm, AppFormInput } from '../../components/Form';
import useRegisterPageState from './register-page-state/useRegisterPageState';
import {
  registerFormInitialValues,
  registerValidationSchema,
} from './register-page-state/RegisterPageState';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Formik } from 'formik';
import PhotoSelectionInput from './components/PhotoSelectionInput/PhotoSelectionInput';
import { RegisterServiceContext } from './services/RegisterServiceContext';
import { kError } from '../../enums/StateEnum';

const RegisterPage = () => {
  const service = useContext(RegisterServiceContext);
  const { state, handleFormSubmit, togglePasswordVisiblity } =
    useRegisterPageState({ service });

  const fileRef = React.useRef();

  return (
    <Stack
      width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Formik
        initialValues={registerFormInitialValues}
        onSubmit={handleFormSubmit}
        validationSchema={registerValidationSchema}
      >
        {(formik) => (
          <Stack
            sx={{
              backgroundColor: '#F7FAFD',
              borderRadius: '8px',
              padding: '24px',
              width: { xs: '100%', sm: '400px' },
              minHeight: '200px',
              marginX: { sx: '16px', sm: 'auto' },
              overflowX: 'hidden',
            }}
            component="form"
            alignSelf="center"
            alignItems="flex-start"
            gap="12px"
          >
            <Typography variant="h6" textTransform="uppercase" mb="12px">
              Register
            </Typography>
            {state.error && state.stateEnum === kError && (
              <FormHelperText
                sx={{ color: ({ palette }) => palette.error.main, mb: '12px' }}
              >
                {state.error}
              </FormHelperText>
            )}
            <AppFormInput name="firstName" label="First Name" />
            <AppFormInput name="lastName" label="Last Name" />
            <AppFormInput
              name="email"
              label="Email"
              inputProps={{ type: 'email' }}
            />
            <AppFormInput
              name="password"
              label="Password"
              inputProps={{ type: state.hidePassword ? 'password' : 'text' }}
              trailingIcon={
                <IconButton onClick={togglePasswordVisiblity}>
                  {state.hidePassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              }
            />
            <PhotoSelectionInput
              fileRef={fileRef}
              imgSrcs={formik.values.photos}
              onClick={() => fileRef.current?.click()}
              onChange={(files) =>
                formik.setFieldValue('photos', [
                  ...files,
                  ...formik.values.photos,
                ])
              }
            />
            {formik.errors.photos && (
              <FormHelperText>{formik.errors.photos}</FormHelperText>
            )}

            <AppFormButton
              text="Register"
              stateEnum={state.stateEnum}
              buttonProps={{ sx: { marginTop: '16px' } }}
            />
          </Stack>
        )}
      </Formik>
    </Stack>
  );
};

export default RegisterPage;
