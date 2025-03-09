import { Outlet } from 'react-router-dom';
import { HomeButton } from './HomeButton';
import { useTheme } from '@mui/material';

export const LayoutWithoutNav = () => {
  const theme = useTheme();
  return (
    <>
      <HomeButton color={theme.palette.primary.main} />
      <Outlet />
    </>
  );
};
