import { INCREASE_ONE, DECREASE_ONE, INCREASE_FIVE, TOGGLE, AUTH } from "../action/actionType";

export const increaseByOne = () => {
  return {
    type: INCREASE_ONE,
  };
};

export const increaseByFive = () => {
  return {
    type: INCREASE_FIVE,
    payload: 5
  };
};

export const decreaseByOne = () => {
  return {
    type: DECREASE_ONE,
  };
};

export const toggle = () => {
  return {
    type: TOGGLE,
  };
};

export const auth = () => {
  return {
    type: AUTH,
  };
};