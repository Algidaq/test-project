import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { RegisterServiceContext } from './pages/register-page/services/RegisterServiceContext';
import RegisterService from './pages/register-page/services/RegisterService';
import { router } from './routes/router';
import { AuthService, AuthServiceContext } from './services/AuthService';
const theme = createTheme({
  palette: {
    primary: {
      main: '#0084d5',
      50: '#e0eff8',
      100: '#b2d7ee',
      200: '#7fbee5',
      300: '#42a6dd',
      400: '#0094d9',
      500: '#0084d5',
      600: '#0077c9',
      700: '#0066b8',
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthServiceContext.Provider value={new AuthService()}>
        <RegisterServiceContext.Provider value={new RegisterService()}>
          <RouterProvider router={router} />
        </RegisterServiceContext.Provider>
      </AuthServiceContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
