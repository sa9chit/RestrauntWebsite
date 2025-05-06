import { useState } from "react";
import { createContext } from "react";
import { UseLocalStorage } from "../cstmHook/forLocalStorage";
export const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  let [data, setData] = UseLocalStorage("ContextKey", {
    LoginTrue: false,
    foodItem: {},
  });
  return (
    <div>
      <Context.Provider value={{ data, setData }}>{children}</Context.Provider>
    </div>
  );
};
