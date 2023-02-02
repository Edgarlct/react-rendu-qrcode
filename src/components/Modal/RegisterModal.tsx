import React, {useContext, useState} from "react";
import {Button, Typography} from "@mui/material";
import CustomField from "../CustomField/CustomField";
import "./Modal.scss";
import {Api} from "../../api/Api";
import {SnackBarContext} from "../../contexts/SnackBarContext/SnackBarContext";
import {ModalContext} from "../../contexts/ModalContext/ModalContext";

export default function RegisterModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { display, setDisplay, severity, setSeverity, message, setMessage } = useContext(SnackBarContext);
  const {setOpen} = useContext(ModalContext);

  const submit = async (e:any) => {
    e.preventDefault();
    if (password !== passwordConfirm || email.length === 0 && password.length === 0) return;
    const response: {email:string, id: number} = await Api.post("api/user", {"email": email, "password": password}, false);
    if (response && response.id) {
      setDisplay(true);
      setSeverity("success");
      setMessage("Inscription réussie");
      setOpen(false);
    } else {
      setDisplay(true);
      setSeverity("error");
      setMessage("Une erreur est survenue");
    }
  }

  return (
    <div className={"containerModal"}>
      <Typography variant={"h2"} color={"secondary"}>Inscription</Typography>
      <form className={"formContainer"} onSubmit={submit}>
        <div>
          <CustomField label={"E-mail"} type={"text"} onChange={(value) => setEmail(value)}
                       value={email} icon={"alternate_email"} fullWidth/>
          <CustomField label={"Mot de passe"} type={"password"} icon={"password"} onChange={(value) => setPassword(value)}
                       value={password} fullWidth/>
          <CustomField label={"Confirmation mot de passe"} type={"password"} icon={"password"} onChange={(value) => setPasswordConfirm(value)}
                       value={passwordConfirm} fullWidth/>
        </div>
        <Button variant={"contained"} fullWidth color={"secondary"} onClick={submit} type={"submit"}>Inscription</Button>
      </form>
    </div>
  )
}
