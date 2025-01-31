import { SHOW_DIV, SHOW_CART_DIV } from "./ActionConstants";

export const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_DIV:
      return { ...state, showDiv: action.payload };
    case SHOW_CART_DIV:
      return { ...state, showCartDiv: action.payload };
    default:
      return state;
  }
};
