import * as actionTypes from "../actionTypes/settings";

export const disableBalanceOnAdd = () => {
  return {
    type: actionTypes.DISABLE_BALANCE_ON_ADD,
  };
};

export const disableBalanceOnEdit = () => {
  return {
    type: actionTypes.DISABLE_BALANCE_ON_EDIT,
  };
};

export const allowRegistration = () => {
  return {
    type: actionTypes.ALLOW_REGISTRATION,
  };
};
