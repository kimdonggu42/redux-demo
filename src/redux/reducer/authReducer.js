import { AUTH } from "../action/actionType";

const initialState = false;

export const authReducer = (state = { isAuthenticated: initialState }, action) => {
  if (action.type === AUTH) {
    return {
      isAuthenticated: !state.isAuthenticated
    };
  } else {
    return state;
  }
};