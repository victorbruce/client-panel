import * as actionTypes from "../actionTypes/settings";

export const disableBalanceOnAdd = () => {
  // get settings from localStorage
  const settings = JSON.parse((localStorage as any).getItem("settings"));

  // toggle
  settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd;

  // set settings back to localStorage
  localStorage.setItem("settings", JSON.stringify(settings));

  return {
    type: actionTypes.DISABLE_BALANCE_ON_ADD,
    payload: settings.disableBalanceOnAdd,
  };
};

export const disableBalanceOnEdit = () => {
  // get settings from localStorage
  const settings = JSON.parse((localStorage as any).getItem("settings"));

  // toggle
  settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit;

  // set settings back to localStorage
  localStorage.setItem("settings", JSON.stringify(settings));

  return {
    type: actionTypes.DISABLE_BALANCE_ON_EDIT,
    payload: settings.disableBalanceOnEdit,
  };
};

export const allowRegistration = () => {
  // get settings from localStorage
  const settings = JSON.parse((localStorage as any).getItem("settings"));

  // toggle
  settings.allowRegistration = !settings.allowRegistration;

  // set settings back to localStorage
  localStorage.setItem("settings", JSON.stringify(settings));

  return {
    type: actionTypes.ALLOW_REGISTRATION,
    payload: settings.allowRegistration,
  };
};
