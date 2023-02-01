import './App.css'
import {Container, CssBaseline, ThemeProvider, Typography} from "@mui/material";
import {muiTheme} from "./mui-theme";
import React from "react";
import {Outlet} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline/>
      <Container maxWidth={"xl"}>
        <NavBar isAuth={false}/>
        <Outlet/>
      </Container>
    </ThemeProvider>
  )
}

export default App
