import * as actionTypes from "../actionTypes/notifyUser";

export const notifyUser = (message, messageType) => {
  return {
    type: actionTypes.NOTIFY_USER,
    message,
    messageType,
  };
};
  