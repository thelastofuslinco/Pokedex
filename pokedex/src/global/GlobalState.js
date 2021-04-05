import React from "react";

export const GlobalStateContext = React.createContext();

export function GlobalState({ children }) {
  const pokedex = "oiiiii"


  const states = { pokedex }
  const setters = {}
  const requests = {}

  const data = { states, setters, requests }

  return (
    <GlobalStateContext.Provider value={data}>
      {children}
    </GlobalStateContext.Provider>
  );
}