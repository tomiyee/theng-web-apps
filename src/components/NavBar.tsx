import { AppBar, Toolbar } from "@mui/material";
import React from "react";

type NavBarProps = {}

export const NavBar: React.FC<NavBarProps> = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          Theng Scripts
        </Toolbar>
      </AppBar>
      <Toolbar/>
    </>
  )
}