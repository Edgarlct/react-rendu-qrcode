import React from "react";
import {Button, Typography} from "@mui/material";
import "./NavBar.scss";

export default function NavBar(props: { isAuth: boolean }) {
  return (
    <div>
      <Typography variant={"h1"}>QR code</Typography>
      {
        props.isAuth
          ?
          <div>
            <Button variant={"contained"}>Déconnexion</Button>
          </div>
          :
          <div>
            <Button variant={"contained"}>Inscription</Button>
            <Button variant={"contained"}>Connexion</Button>
          </div>
      }
    </div>
  );
}
