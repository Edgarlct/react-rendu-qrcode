import {IconButton, Typography} from "@mui/material";
import './QrCard.scss';
import {IQrCode} from "../../interfaces/IQrCode";
import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import dayjs from "dayjs";
import {ModalContext} from "../../contexts/ModalContext/ModalContext";
export default function QrCard(props: {icon:string, qrCodeData:IQrCode}) {
  const [date, setDate] = useState("");
  const {setOpen, setModalData, setModalType} = useContext(ModalContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (props.qrCodeData.createdAt) {
      const data = dayjs(props.qrCodeData.createdAt);
      setDate(data.format("DD/MM/YYYY"));
    }
  }, [])

  const navigateToQrCode = () => {
    navigate(`/qr/code/${props.qrCodeData.id}`);
  }

  const handleModalQrCode = () => {
    setModalData(props.qrCodeData);
    setModalType("qrCode");
    setOpen(true);
  }

  return (
    <div className={"containerQrCard"}>
      <IconButton size={"medium"} className={"containerCountStat"} onClick={handleModalQrCode}>
        <span className="material-symbols-outlined mediumIcon">{props.icon}</span>
        {
          props.qrCodeData.stats && <div className={"countStat"}>
                <span>{props.qrCodeData.stats?.length}</span>
            </div>
        }
      </IconButton>
      <div className={"containerData"}>
        <div>
          <Typography variant={"h5"} color={"primary.dark"}>{props.qrCodeData.name}</Typography>
          <Typography variant={"body1"}>{props.qrCodeData.url}</Typography>
        </div>
        <div className={"containerAction"}>
          <Typography variant={"body2"}>{date}</Typography>
          <div className={"detailButton"} onClick={navigateToQrCode}>
            <Typography variant={"h5"} color={"secondary"}>Détail</Typography>
            <span className="material-symbols-outlined colorSecondary">arrow_forward_ios</span>
          </div>
        </div>
      </div>
    </div>
  )
}
