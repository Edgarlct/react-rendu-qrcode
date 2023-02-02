import React, {useContext} from "react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import {ModalContext} from "../../contexts/ModalContext/ModalContext";

export default function ModalContainer() {
  const {open, setOpen, modalType} = useContext(ModalContext);
  const getModalForm = (modalType: string) => {
    switch (modalType) {
      case "login":
        return <LoginModal/>
      case "register":
        return <RegisterModal/>
      default:
        return <LoginModal/>
    }
  }

  return (<>
    {
      open && <div className={"modalContainer"} onClick={(e) => setOpen(false)}>
          <div className={"modalContainerForm"} onClick={(e) => e.stopPropagation()}>
            { getModalForm(modalType) }
          </div>
        </div>
    }</>
  )
}
