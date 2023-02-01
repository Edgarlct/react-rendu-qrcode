import React, {useState} from "react";
import {Button, Typography} from "@mui/material";
import CustomField from "../CustomField/CustomField";
import "./Modal.scss";

export default function LoginModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={"containerModal"}>
      <Typography variant={"h2"} color={"secondary"}>Connexion</Typography>
      <form className={"formContainer"}>
        <div>
          <CustomField label={"E-mail"} type={"text"} onChange={(value) => setEmail(value)}
                       value={email} icon={"alternate_email"} fullWidth/>
          <CustomField label={"Mot de passe"} type={"password"} icon={"password"} onChange={(value) => setPassword(value)}
                       value={password} fullWidth/>
        </div>
        <Button variant={"contained"} fullWidth color={"secondary"}>Connexion</Button>
      </form>
    </div>
  )
}
