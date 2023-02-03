import React, {useState} from "react";
import '../QrCode.scss';
import MainCard from "../../../components/MainCard/MainCard";
import {Button, IconButton, Typography} from "@mui/material";
import CustomButton from "../../../components/CustomButton/CustomButton";
import CustomField from "../../../components/CustomField/CustomField";
import QrCard from "../../../components/QrCard/QrCard";

export default function QrCodeList() {
  const [scanASC, setScanASC] = useState(false);
  const [createASC, setCreateASC] = useState(false);
  const [search, setSearch] = useState("");



  const handleSearch = (value: string) => {
    setSearch(value);
  }

  return (
    <div className={"containerQrCodeDashboard"}>
      <div className={"leftPartContainer"}>
        <MainCard title={"Généré un qr code "} icon={"qr_code_2"}/>
        <div className={"containerCard stackContainer"}>
          <CustomButton title={"Nombre de scan"} icon={"expand_less"} activeIcon={"expand_more"}
                        fullWidth onClick={() => setScanASC(!scanASC)} active={scanASC}/>
          <CustomButton title={"Date de création"} icon={"expand_less"} activeIcon={"expand_more"}
                        fullWidth onClick={() => setCreateASC(!createASC)} active={createASC}/>
        </div>
        <div className={"containerCard stackContainer"}>
          <Typography variant={"h4"} color={"secondary"}>Statistique global :</Typography>
          <div className={"statItem"}>
            <Typography variant={"h5"} color={"primary.dark"}>+12% de scan ce mois</Typography>
            <IconButton size={"medium"}>
              <span className="material-symbols-outlined mediumIcon">arrow_outward</span>
            </IconButton>
          </div>
          <div className={"statItem"}>
            <Typography variant={"h5"} color={"primary.dark"}>-5% de scan cette semaine</Typography>
            <IconButton size={"medium"}>
              <span className="material-symbols-outlined mediumIcon invertIcon">
                arrow_outward
              </span>
            </IconButton>
          </div>
        </div>
      </div>
      <div className={"rightPartContainer"}>
        <CustomField label={"recherche"} type={"text"} icon={"search"} onChange={(value) => handleSearch(value)} value={search} fullWidth filled/>
        <div className={"containerQrCardList"}>
          <QrCard icon={"qr_code_2"} qrCodeData={{id:1, name:"Site perso", url: "http://localhost:8000", date:"12/12/2022", stats: ["1", "2"]}}/>
        </div>
      </div>
    </div>
  )
}
