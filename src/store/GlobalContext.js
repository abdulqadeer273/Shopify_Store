import { createContext } from "react";

const values = {
  state: {
    showDiv: false,
    showCartDiv:false
  },
  dispatch: (action) => {},
};
export const GlobalContext = createContext(values);
GlobalContext.displayName = "GlobalContext";
