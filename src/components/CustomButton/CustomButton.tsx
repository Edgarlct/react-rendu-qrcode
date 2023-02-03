import React from "react";
import {Button} from "@mui/material";
import "./CustomButton.scss";
import {ICustomButton} from "../../interfaces/ICustomButton";

export default function CustomButton(props: ICustomButton) {

  const handleClick = () => {
    if(props.onClick) {
      props.onClick();
    }
  }

  return (
    <Button variant={"contained"} size={"large"} color={props.color ? props.color : "primary"} fullWidth={!!props.fullWidth} onClick={handleClick}>
      <span className={"spanButton"}>{props.title} {props.icon && <span className="material-symbols-outlined mediumIcon">{
        props.activeIcon ? (props.active ? props.activeIcon : props.icon) : props.icon
      }</span>}</span>
    </Button>
  )
}
