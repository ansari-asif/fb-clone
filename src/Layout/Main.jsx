import React, { useState } from "react";
import { Outlet} from "react-router-dom";

import Navbar from "../components/Navbar";
import { Box, Stack,ThemeProvider,createTheme } from "@mui/material";
import Rightbar from "../components/Rightbar";
import Add from "../components/Add";
import Sidebar from "../components/Sidebar";

export default function Main() {
    const [mode, setMode] = useState('light');
    const darkTheme = createTheme({
      palette: {
        mode: mode
      }
    })
  return (
    <React.Fragment>
        <ThemeProvider theme={darkTheme}>
            <Box bgcolor={"background.default"} color={"text.primary"}>      
                <Navbar/>
                <Stack direction="row" spacing={2} justifyContent="space-between"> 
                    <Sidebar setMode={setMode} mode={mode}/>
                    <Outlet />
                    <Rightbar/>
                </Stack>
                <Add/>
            </Box>
        </ThemeProvider>
    </React.Fragment>
  )
}