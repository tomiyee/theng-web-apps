import { AppBar, Toolbar } from '@mui/material';
import React from 'react';
import { HomeButton } from '../routes/HomeButton';

type NavBarProps = {};

export const NavBar: React.FC<NavBarProps> = () => {
  return (
    <>
      <AppBar>
        <Toolbar variant="dense">
          <HomeButton />
        </Toolbar>
      </AppBar>
      <Toolbar variant="dense" />
    </>
  );
};
