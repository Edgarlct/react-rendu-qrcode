import {createContext, ReactNode, useContext} from "react";
import React from "react";
import "./ModalContext.scss";

export const ModalContext = createContext({
  open: false,
  setOpen: (value: boolean) => {},
  modalType: "login",
  setModalType: (value: string) => {}
});


const ModalProvider = (props: {children: ReactNode}) => {
  const [open, setOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState("login");
  const value = {open, setOpen, modalType, setModalType};

  return (
    <ModalContext.Provider value={value}>
      {props.children}
    </ModalContext.Provider>
  )
}

export default ModalProvider

