import React, {useEffect, useState} from "react";
import '../QrCode.scss';
import MainCard from "../../../components/MainCard/MainCard";
import {Button, IconButton, Typography} from "@mui/material";
import CustomButton from "../../../components/CustomButton/CustomButton";
import CustomField from "../../../components/CustomField/CustomField";
import QrCard from "../../../components/QrCard/QrCard";
import {Api} from "../../../api/Api";
import {IQrCode} from "../../../interfaces/IQrCode";
import dayjs from "dayjs";
import IStatQr from "../../../interfaces/IStatQr";

export default function QrCodeList() {
  const [scanASC, setScanASC] = useState(true);
  const [createASC, setCreateASC] = useState(false);
  const [search, setSearch] = useState("");
  const [qrCodes, setQrCodes] = useState<Array<IQrCode>>([]);
  const [qrCodesFiltered, setQrCodesFiltered] = useState<Array<IQrCode>>([]);
  const [percentMonth, setPercentMonth] = useState(0);
  const [percentWeek, setPercentWeek] = useState(0);


  useEffect(() => {
    handleLoadQrCode();
  }, [])

  const handleLoadQrCode = async () => {
    const qrCodes:IQrCode[] = await Api.get("/api/user/me/qr")
    calculateStats(qrCodes);
    if (qrCodes) {
      setQrCodes(qrCodes);
      setQrCodesFiltered(qrCodes);
    }
  }

  const calculateStats = (qrCode:IQrCode[]) => {
    // first we calculate stats for the current month
    let countThisMonth = 0;
    let countLastMonth = 0;
    let countThisWeek = 0;
    let countLastWeek = 0;
    for (const qrCodeEl of qrCode) {
      if (qrCodeEl.stats) {
        for (const stat of qrCodeEl.stats) {
          if (dayjs(stat.createAt).isSame(dayjs(), 'month')) {
            countThisMonth++;
          } else if (dayjs(stat.createAt).isSame(dayjs().subtract(1, 'month'), 'month')) {
            countLastMonth++;
          }
          if (dayjs(stat.createAt).isSame(dayjs(), 'week')) {
            countThisWeek++;
          } else if (dayjs(stat.createAt).isSame(dayjs().subtract(1, 'week'), 'week')) {
            countLastWeek++;
          }
        }
      }
    }
    setPercentMonth(Math.round(((countThisMonth - countLastMonth) / countLastMonth * 100) !== Infinity ? ((countThisMonth - countLastMonth) / countLastMonth * 100): 0 ) || 0);
    setPercentWeek(Math.round(((countThisWeek - countLastWeek) / countLastWeek * 100) !== Infinity ? ((countThisWeek - countLastWeek) / countLastWeek * 100): 0 ) || 0);
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
        <MainCard title={"Généré un qr code "} icon={"qr_code_2"} link={"/qr/code/add"}/>
        <div className={"containerCard stackContainer"}>
          <CustomButton title={"Nombre de scan"} icon={"circle"} activeIcon={"check_circle"}
                        fullWidth onClick={() => setScanASC(!scanASC)} active={scanASC} disabled={createASC}/>
          <CustomButton title={"Date de création"} icon={"circle"} activeIcon={"check_circle"}
                        fullWidth onClick={() => setCreateASC(!createASC)} active={createASC} disabled={scanASC}/>
        </div>
        <div className={"containerCard stackContainer"}>
          <Typography variant={"h4"} color={"secondary"}>Statistique global :</Typography>
          <div className={"statItem"}>
            <Typography variant={"h5"} color={"primary.dark"}>{percentMonth >= 0 ? "+"+percentMonth : percentMonth}% de scan ce mois</Typography>
            <IconButton size={"medium"}>
              <span className={`material-symbols-outlined mediumIcon ${percentMonth < 0 && 'invertIcon'}`}>arrow_outward</span>
            </IconButton>
          </div>
          <div className={"statItem"}>
            <Typography variant={"h5"} color={"primary.dark"}>{percentWeek >= 0 ? "+"+percentWeek : percentWeek}% de scan cette semaine</Typography>
            <IconButton size={"medium"}>
              <span className={`material-symbols-outlined mediumIcon ${percentWeek < 0 && 'invertIcon'}`}>
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
            qrCodesFiltered
              .sort((a:IQrCode, b:IQrCode) => {
                if (scanASC) {
                  return a.stats.length > b.stats.length ? -1 : 1;
                } else if (createASC) {
                  return dayjs(b.createdAt).isBefore(dayjs(a.createdAt)) ? -1 : 1;
                } else {
                  return 0;
                }
              })
              .map((qrCode, index) => {
                return <QrCard key={index} icon={"qr_code_2"} qrCodeData={qrCode}/>
              })
          }
        </div>
      </div>
    </div>
  )
}
