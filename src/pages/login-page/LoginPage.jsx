import React, { useContext } from 'react';
import { Stack, Typography, IconButton, FormHelperText } from '@mui/material';
import { AppForm, AppFormButton, AppFormInput } from '../../components/Form';
import useLoginPage from './login-page-state/useLoginPage';
import {
  initialLoginFormValues,
  loginFormValidationSchema,
} from './login-page-state/LoginPageState';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { AuthServiceContext } from '../../services/AuthService';
import { kError } from '../../enums/StateEnum';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const service = useContext(AuthServiceContext);
  const { state, handleFormSubmit, togglePasswordVisiblity } = useLoginPage({
    service,
  });
  return (
    <Stack
      width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <AppForm
        initialValues={initialLoginFormValues}
        onSubmit={handleFormSubmit}
        validationSchema={loginFormValidationSchema}
        initialErrors={loginFormValidationSchema.isValidSync(
          initialLoginFormValues
        )}
      >
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
          <Typography variant="h6" textTransform="uppercase">
            Login
          </Typography>
          {state.error && state.stateEnum === kError && (
            <FormHelperText
              sx={{
                color: ({ palette }) => palette.error.main,
                display: 'inline-block',
                mb: '16px',
                mt: '4px',
              }}
            >
              {state.error}
            </FormHelperText>
          )}
          <AppFormInput name="email" label="Email" />
          <AppFormInput
            name="password"
            label="password"
            inputProps={{ type: state.hidePassword ? 'password' : 'text' }}
            trailingIcon={
              <IconButton onClick={togglePasswordVisiblity}>
                {state.hidePassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            }
          />
          <Typography
            variant="body1"
            sx={{
              alignSelf: 'center',
              display: 'inline-block',
              '& a': {
                color: ({ palette }) => palette.primary.main,
                textDecoration: 'none',
                fontFamily: 'inherit',
                cursor: 'pointer',
              },
            }}
          >
            Don't have an account <Link to="/register">Register</Link>
          </Typography>
          <AppFormButton
            text="Login"
            stateEnum={state.stateEnum}
            buttonProps={{ sx: { marginTop: '16px' } }}
          />
        </Stack>
      </AppForm>
    </Stack>
  );
};

export default LoginPage;
