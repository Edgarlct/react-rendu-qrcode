import React, {useContext, useState} from "react";
import {Button, Typography} from "@mui/material";
import "./NavBar.scss";
import {ModalContext} from "../../contexts/ModalContext/ModalContext";
import {Api} from "../../api/Api";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../contexts/UserContext/UserContext";

export default function NavBar() {
  const { open, setOpen, modalType, setModalType } = useContext(ModalContext);
  const { token, setToken } = useContext(UserContext);
  const navigate = useNavigate();
  const handleOpenLogin = () => {
    setOpen(true);
    setModalType("login");
  }

  const handleOpenRegister = () => {
    setOpen(true);
    setModalType("register");
  }

  const handleLogout = () => {
    localStorage.removeItem("@qr_code:token");
    setToken("");
    navigate("/");
  }

  return (
    <div className={"navContainer"}>
      <Typography variant={"h1"} color={"secondary"}>QR code</Typography>
      {
        token.length > 0
          ?
          <div>
            <Button variant={"contained"} onClick={handleLogout}>Déconnexion</Button>
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
