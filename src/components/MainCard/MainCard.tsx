import {IconButton, Typography} from "@mui/material";
import React from "react";
import './MainCard.scss';
import {useNavigate} from "react-router-dom";

export default function MainCard(props: {title:string, icon: string, link?: string, action?: () => void}) {
  const navigate = useNavigate();
  const handleClick = () => {
    if(props.action) {
      props.action();
    }
    if (props.link) {
      navigate(props.link);
    }
  }

  return (
    <div className={"containerCard pointer"} onClick={handleClick}>
      <Typography variant={"h3"} color={"secondary"}>{props.title}</Typography>
      <IconButton size={"large"}>
        <span className="material-symbols-outlined largeIcon">{props.icon}</span>
      </IconButton>
    </div>
  )
}
