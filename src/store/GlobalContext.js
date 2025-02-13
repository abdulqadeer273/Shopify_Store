import { createContext } from "react";

const values = {
  state: {
    auth: {
      token: localStorage.getItem("token"),
      user: JSON.parse(localStorage.getItem("user")),
    },
  },
  dispatch: (action) => {},
};
export const GlobalContext = createContext(values);
GlobalContext.displayName = "GlobalContext";
