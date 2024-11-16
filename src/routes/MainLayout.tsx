import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Box, CssBaseline, Stack } from "@mui/material";


export const MainLayout: React.FC = () => {
  return (
    <>
      <CssBaseline/>

      <Stack height='100vh' width='100vw' alignItems='center'>
        <NavBar/>
        <Box flex={1} overflow='auto' width='100%' maxWidth={1000} pt={2} px={2}>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet/>
          </Suspense>
        </Box>
      </Stack>
    </>
  )
}