import './App.css'
import {Container, CssBaseline, ThemeProvider, Typography} from "@mui/material";
import {muiTheme} from "./mui-theme";
import React from "react";
import {Outlet} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ModalProvider from "./contexts/ModalContext/ModalContext";

function App() {

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline/>
        <Container maxWidth={"xl"}>
        <ModalProvider>
          <NavBar isAuth={false}/>
          <div className={"outletContainer"}>
            <Outlet/>
          </div>
        </ModalProvider>
        </Container>
    </ThemeProvider>
  )
}

export default App
