import {IconButton, Typography} from "@mui/material";
import './QrCard.scss';
import {IQrCode} from "../../interfaces/IQrCode";
import {useNavigate} from "react-router-dom";
export default function QrCard(props: {icon:string, qrCodeData:IQrCode}) {
  const navigate = useNavigate();
  const navigateToQrCode = () => {
    navigate(`/qr/code/${props.qrCodeData.id}`);
  }

  return (
    <div className={"containerQrCard"}>
      <IconButton size={"medium"} className={"containerCountStat"}>
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
          <Typography variant={"body1"}>{props.qrCodeData?.date}</Typography>
          <div className={"detailButton"} onClick={navigateToQrCode}>
            <Typography variant={"h5"} color={"secondary"}>Détail</Typography>
            <span className="material-symbols-outlined colorSecondary">arrow_forward_ios</span>
          </div>
        </div>
      </div>
    </div>
  )
}
