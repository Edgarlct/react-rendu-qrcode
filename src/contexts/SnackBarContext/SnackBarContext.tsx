import React, {createContext, ReactNode, useEffect} from "react";
import {Alert, Snackbar} from "@mui/material";

export const SnackBarContext = createContext({
  display: false,
  setDisplay: (value: boolean) => {},
  message: "",
  setMessage: (value: string) => {},
  severity: "",
  setSeverity: (value: string) => {}
});

const SnackBarProvider = (props: {children: ReactNode}) => {
  const [display, setDisplay] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [severity, setSeverity] = React.useState("");
  const value = {display, setDisplay, message, setMessage, severity, setSeverity};

  return (
    <SnackBarContext.Provider value={value}>
        <Snackbar open={display} autoHideDuration={3000} onClose={() => {
          setDisplay(false)
        }}>
              <Alert severity={severity === "success" ? "success" : "error"} sx={{width: '100%'}}>
                {message}
              </Alert>
          </Snackbar>

      {props.children}
    </SnackBarContext.Provider>
  )
}

export default SnackBarProvider
