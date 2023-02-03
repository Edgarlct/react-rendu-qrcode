import React, {useContext, useState} from "react";
import {Button, Typography} from "@mui/material";
import CustomField from "../CustomField/CustomField";
import "./Modal.scss";
import {Api} from "../../api/Api";
import {SnackBarContext} from "../../contexts/SnackBarContext/SnackBarContext";
import {ModalContext} from "../../contexts/ModalContext/ModalContext";
import {UserContext} from "../../contexts/UserContext/UserContext";
import {useNavigate} from "react-router-dom";

export default function LoginModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setDisplay, setSeverity, setMessage } = useContext(SnackBarContext);
  const {setOpen} = useContext(ModalContext);
  const {setToken} = useContext(UserContext);
  const navigate = useNavigate();

  const submit = async (e:any) => {
    e.preventDefault();
    if (email.length === 0 || password.length === 0) return;
    const response: {access_token:string} = await Api.post("api/auth/login", {"email": email, "password": password}, false);
    if (response && response.access_token) {
      localStorage.setItem("@qr_code:token", response.access_token);
      setToken(response.access_token);
      setDisplay(true);
      setSeverity("success");
      setMessage("Connexion réussie");
      setOpen(false);
      navigate("/qr/code");
    } else {
      setDisplay(true);
      setSeverity("error");
      setMessage("Une erreur est survenue");
    }
  }

  return (
    <div className={"containerModal"}>
      <Typography variant={"h2"} color={"secondary"}>Connexion</Typography>
      <form className={"formContainer"} onSubmit={submit}>
        <div>
          <CustomField label={"E-mail"} type={"text"} onChange={(value) => setEmail(value)}
                       value={email} icon={"alternate_email"} fullWidth/>
          <CustomField label={"Mot de passe"} type={"password"} icon={"password"} onChange={(value) => setPassword(value)}
                       value={password} fullWidth/>
        </div>
        <Button variant={"contained"} fullWidth color={"secondary"} type={"submit"}>Connexion</Button>
      </form>
    </div>
  )
}
