import { useReducer } from "react";
import { GlobalContext } from "./GlobalContext";
import { reducer } from "./Reducer";

const initialState = {
  showDiv: false,
  showCartDiv:false
};
export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
