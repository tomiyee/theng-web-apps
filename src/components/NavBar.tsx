import { AppBar, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

type NavBarProps = {};

export const NavBar: React.FC<NavBarProps> = () => {
  const navigate = useNavigate();
  return (
    <>
      <AppBar>
        <Toolbar variant="dense">
          <IconButton onClick={() => navigate('')}>
            <HomeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar variant="dense" />
    </>
  );
};
