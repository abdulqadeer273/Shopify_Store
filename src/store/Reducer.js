import { LOGIN, LOGOUT } from "./ActionConstants";

export const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        auth: {
          token: action.payload.token,
          user: action.payload.user
        }
      };
    case LOGOUT:
      return {
        ...state,
        auth: {
          token: null,
          user: null
        }
      };
    default:
      return state;
  }
};
