import { INCREASE_ONE, DECREASE_ONE, INCREASE_FIVE } from "../action/actionType";

const initialState = 0;

export const counterReducer = (state = { countNum: initialState }, action) => {
  if (action.type === INCREASE_ONE) {
    return {
      countNum: state.countNum + 1
    };
  } else if (action.type === INCREASE_FIVE) {
    return {
      countNum: state.countNum + action.payload
    }
  } else if (action.type === DECREASE_ONE) {
    return {
      countNum: state.countNum - 1
    };
  } else {
    return state;
  }
};