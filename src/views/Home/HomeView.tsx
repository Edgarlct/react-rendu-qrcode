import React from "react";
import {Typography} from "@mui/material";
import "./HomeView.scss";


export default function HomeView() {
      return (
          <div className={"homeContainer"}>
            <div className={"leftSideHome"}>
              <Typography variant={"h3"} color={"secondary"}>Générez vos qr code en toute simplicité</Typography>
              <Typography variant={"h6"} color={"primary.dark"}>
                Nous vous offrons la possibilité de générer vos qr code et
                de consultée des statistique de vos qr code tout en respectant la vie privé
              </Typography>
            </div>
            <div className={"rightSideHome"}>
              <img src={"/stat.png"} alt={"statistique"} className={"statImage"}/>
            </div>
          </div>
      );
}
