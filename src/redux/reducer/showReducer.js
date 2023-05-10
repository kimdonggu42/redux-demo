import { TOGGLE } from "../action/actionType";

const initialState = true;

export const showReducer = (state = { isCount: initialState }, action) => {
  if (action.type === TOGGLE) {
    return {
      isCount: !state.isCount
    };
  } else {
    return state;
  }
};
