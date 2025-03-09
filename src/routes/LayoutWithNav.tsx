import { Stack, Box } from '@mui/material';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/NavBar';

export const LayoutWithNav = () => {
  return (
    <Stack height="100vh" width="100vw" alignItems="center">
      <NavBar />
      <Box flex={1} overflow="auto" width="100%" maxWidth={1400} pt={2} px={2}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Box>
    </Stack>
  );
};
