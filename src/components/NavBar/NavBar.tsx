import React, {useContext, useState} from "react";
import {Button, Typography} from "@mui/material";
import "./NavBar.scss";
import {ModalContext} from "../../contexts/ModalContext/ModalContext";

export default function NavBar(props: { isAuth: boolean }) {
  const { open, setOpen, modalType, setModalType } = useContext(ModalContext);
  const handleOpenLogin = () => {
    setOpen(true);
    setModalType("login");
  }

  const handleOpenRegister = () => {
    setOpen(true);
    setModalType("register");
  }

  return (
    <div className={"navContainer"}>
      <Typography variant={"h1"} color={"secondary"}>QR code</Typography>
      {
        props.isAuth
          ?
          <div>
            <Button variant={"contained"}>Déconnexion</Button>
          </div>
          :
          <div>
            <Button variant={"contained"} onClick={handleOpenRegister}>Inscription</Button>
            <Button variant={"contained"} onClick={handleOpenLogin}>Connexion</Button>
          </div>
      }
    </div>
  );
}
