import React, {useContext, useEffect} from "react";
import {Button, IconButton, Typography} from "@mui/material";
import "./Modal.scss";
import {ModalContext} from "../../contexts/ModalContext/ModalContext";
import {IQrCode} from "../../interfaces/IQrCode";
import QRCode from 'qrcode';
import jsPDF from "jspdf";
import {Api} from "../../api/Api";
export default function QrCodeGenModal() {
  const {modalData} = useContext(ModalContext);

  useEffect(() => {
    generateQrCode(modalData as IQrCode);
  }, [])
  const generateQrCode = (qrCode: IQrCode) => {
    // generate qr code
    const urlStr = Api.getLink("/api/qr/scanned/" + qrCode.id);
    const canvas = document.getElementById("qrCodeCanvas") as HTMLCanvasElement;
    const canvasPdf = document.getElementById("canvasPdf") as HTMLCanvasElement;
    QRCode.toCanvas(canvas, urlStr, {
      width: 125,
      margin: 0,
      color: {
        light: "#5C9EAD",
        dark: "#FFFFFF"
      }
    }, error => {
      if (error) console.error(error)
    })
    QRCode.toCanvas(canvasPdf, urlStr, {
      width: 125,
      margin: 0,
      color: {
        light: "#FFFFFF",
        dark: "#000000"
      }
    }, error => {
      if (error) console.error(error)
    })
  }

  const downloadQrCode = () => {
    const doc = new jsPDF({
      format: [125, 125],
      unit: "px",
      orientation: "l",
    });
    const canvasPdf = document.getElementById("canvasPdf") as HTMLCanvasElement;
    const imgData = canvasPdf.toDataURL("image/png");
    doc.addImage(imgData, "PNG", 0, 0, 125, 125);
    doc.save("qrCode.pdf");
  }


  return <div className={"containerModal"}>
    <div className={"containerQrData"}>
      <div className={"containerQr"}>
        <canvas id={"qrCodeCanvas"} width={300} height={300}/>
      </div>
      <Typography variant={"h5"} color={"primary.dark"}>{(modalData as IQrCode).name}</Typography>
      <Typography variant={"body1"}>{(modalData as IQrCode).url}</Typography>
    </div>
    <Button variant={"contained"} color={"secondary"} onClick={downloadQrCode} fullWidth>Télécharger</Button>
    {/*this canvas is display none is here only for pdf generation*/}
    <canvas id={"canvasPdf"} style={{display:"none"}}></canvas>
  </div>
}
