import {createContext, ReactNode} from "react";
import React from "react";
import "./ModalContext.scss";
import LoginModal from "../../components/Modal/LoginModal";
import RegisterModal from "../../components/Modal/RegisterModal";

export const ModalContext = createContext({
  open: false,
  setOpen: (value: boolean) => {},
  modalType: "login",
  setModalType: (value: string) => {}
});

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


const ModalProvider = (props: {children: ReactNode}) => {
  const [open, setOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState("login");
  const value = {open, setOpen, modalType, setModalType};

  return (
    <ModalContext.Provider value={value}>
      {
        open && <div className={"modalContainer"} onClick={() => setOpen(false)}>
            <div className={"modalContainerForm"} onClick={(e) => e.stopPropagation()}>
              { getModalForm(modalType) }
            </div>
          </div>
      }
      {props.children}
    </ModalContext.Provider>
  )
}

export default ModalProvider

