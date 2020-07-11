import * as actionTypes from "../actionTypes/notifyUser";

const initialState = {
  message: null,
  messageType: null,
};

const notifyUser = (state, action) => {
  return {
    ...state,
    message: action.message,
    messageType: action.messageType,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NOTIFY_USER:
      return notifyUser(state, action);
    default:
      return state;
  }
};

export default reducer;
