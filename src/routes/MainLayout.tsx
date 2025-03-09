import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { themeOptions } from './theme';

const theme = createTheme(themeOptions);

export const MainLayout: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </ThemeProvider>
  );
};
