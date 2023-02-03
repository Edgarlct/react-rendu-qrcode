import MainCard from "../../../components/MainCard/MainCard";
import React, {FormEvent, useContext, useState} from "react";
import CustomField from "../../../components/CustomField/CustomField";
import {Button} from "@mui/material";
import {Api} from "../../../api/Api";
import {IQrCode} from "../../../interfaces/IQrCode";
import {IErrorResponse} from "../../../interfaces/IErrorResponse";
import {SnackBarContext} from "../../../contexts/SnackBarContext/SnackBarContext";
import {ModalContext} from "../../../contexts/ModalContext/ModalContext";

export default function QrCodeAdd() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const {setSeverity, setDisplay, setMessage} = useContext(SnackBarContext);
  const {setOpen, setModalType, setModalData} = useContext(ModalContext);

  const generateQrCode = async (event: FormEvent) => {
    event.preventDefault();
    // url must be a valid url check with regex
    if (!url.match(/^(http|https):\/\/[a-zA-Z0-9-_.]+\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)) return;
    if (name.length === 0 || url.length === 0) return;
    const qrCode:IQrCode|IErrorResponse = await Api.post("/api/user/me/qr", {"name": name, "url":url});
    if (qrCode) {
      if ((qrCode as IErrorResponse).error) {
        setDisplay(true);
        setSeverity("error");
        setMessage("L'url ou le nom est déjà utilisé");
      } else {
        setDisplay(true);
        setSeverity("success");
        setMessage("Le QR Code a bien été généré");
        setOpen(true);
        setModalType("qrCode");
        setModalData(qrCode);
      }
    }
  }

  return (
    <div className={"containerQrCodeDashboard"}>
      <div className={"leftPartContainer"}>
        <MainCard title={"Retour page d’acceuil"} icon={"home"} link={"/qr/code"}/>
      </div>
      <form onSubmit={(e)=>{generateQrCode(e)}}>
        <div className={"rightPartContainer cardContainer"}>
            <div>
              <CustomField label={"Titre"} type={"text"} icon={"match_case"} onChange={(name)=>{setName(name)}} value={name} fullWidth/>
              <CustomField label={"Url"} type={"text"} icon={"link"} onChange={(url)=>{setUrl(url)}} value={url} fullWidth/>
            </div>
            <Button variant={"contained"} color={"secondary"} disabled={name.length === 0 || url.length === 0} type={"submit"}>Créer</Button>
        </div>
      </form>
    </div>

  )
}
