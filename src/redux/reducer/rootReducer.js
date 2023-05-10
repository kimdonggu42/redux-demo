import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { showReducer } from "./showReducer";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
  counterReducer,
  showReducer,
  authReducer
});