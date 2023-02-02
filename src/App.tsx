import './App.css'
import {Container, CssBaseline, ThemeProvider, Typography} from "@mui/material";
import {muiTheme} from "./mui-theme";
import React from "react";
import {Outlet} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ModalProvider, {ModalContext} from "./contexts/ModalContext/ModalContext";
import SnackBarProvider from "./contexts/SnackBarContext/SnackBarContext";
import ModalContainer from "./components/Modal/ModalContainer";
import UserProvider from "./contexts/UserContext/UserContext";



function App() {

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline/>
        <Container maxWidth={"xl"}>
        <ModalProvider>
          <SnackBarProvider>
            <UserProvider>
              <NavBar/>
              <div className={"outletContainer"}>
                <Outlet/>
              </div>
              <ModalContainer/>
            </UserProvider>
          </SnackBarProvider>
        </ModalProvider>
        </Container>
    </ThemeProvider>
  )
}

export default App
