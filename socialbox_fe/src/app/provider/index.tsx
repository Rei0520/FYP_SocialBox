"use client";

import { createContext, useState } from "react";
import { Header } from "../components/header/header";

interface myState {
  auth: {
    username: string;
    password: string;
  };
}

export interface contextProps extends myState {
  setContext: (context: myState) => void;
}

export const MyyStateContext = createContext<contextProps | null>(null);

export const Context = ({ children }: any) => {
  const [myContext, setMyContext] = useState({
    auth: {
      username: "",
      password: "",
    },
  });

  return (
    <MyyStateContext.Provider
      value={{ ...myContext, setContext: setMyContext }}
    >
      <Header />

      {children}
    </MyyStateContext.Provider>
  );
};
