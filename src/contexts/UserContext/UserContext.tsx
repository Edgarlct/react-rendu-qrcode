import React, {createContext, ReactNode, useEffect, useState} from "react";


export const UserContext = createContext({
  token: "",
  setToken: (value: string) => {},
  email: "",
  setEmail: (value: string) => {}
});

const UserProvider = (props: {children: ReactNode}) => {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const value = {token, setToken, email, setEmail};

  useEffect(() => {
    setToken(localStorage.getItem("@qr_code:token") || "");
  }, [])

  return (
    <UserContext.Provider value={value}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider
