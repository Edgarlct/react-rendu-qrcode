import React, {useEffect, useState} from "react";
import '../QrCode.scss';
import MainCard from "../../../components/MainCard/MainCard";
import {Button, IconButton, Typography} from "@mui/material";
import CustomButton from "../../../components/CustomButton/CustomButton";
import CustomField from "../../../components/CustomField/CustomField";
import QrCard from "../../../components/QrCard/QrCard";
import {Api} from "../../../api/Api";
import {IQrCode} from "../../../interfaces/IQrCode";

export default function QrCodeList() {
  const [scanASC, setScanASC] = useState(false);
  const [createASC, setCreateASC] = useState(false);
  const [search, setSearch] = useState("");
  const [qrCodes, setQrCodes] = useState<Array<IQrCode>>([]);
  const [qrCodesFiltered, setQrCodesFiltered] = useState<Array<IQrCode>>([]);

  useEffect(() => {
    handleLoadQrCode();
  }, [])

  const handleLoadQrCode = async () => {
    const qrCodes:IQrCode[] = await Api.get("/api/user/me/qr")
    if (qrCodes) {
      setQrCodes(qrCodes);
      setQrCodesFiltered(qrCodes);
    }
  }

  const handleSearch = (value: string) => {
    setSearch(value);
    if (value.length === 0) {
      setQrCodesFiltered(qrCodes);
      return;
    }
    // we search in name and url
    const qrCodesFiltered = qrCodes.filter((qrCode) => {
      return qrCode.name.toLowerCase().includes(value.toLowerCase()) || qrCode.url.toLowerCase().includes(value.toLowerCase());
    })
    setQrCodesFiltered(qrCodesFiltered);
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
          {
            qrCodesFiltered.map((qrCode, index) => {
              return <QrCard key={index} icon={"qr_code_2"} qrCodeData={qrCode}/>
            })
          }
        </div>
      </div>
    </div>
  )
}
