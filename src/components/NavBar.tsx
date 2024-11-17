import { AppBar, IconButton, Toolbar, useTheme } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

type NavBarProps = {};

export const NavBar: React.FC<NavBarProps> = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <>
      <AppBar>
        <Toolbar variant="dense">
          <IconButton onClick={() => navigate('')}>
            <HomeIcon sx={{ color: theme.palette.primary.contrastText }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar variant="dense" />
    </>
  );
};
