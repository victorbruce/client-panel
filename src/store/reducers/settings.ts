import * as actionTypes from "../actionTypes/settings";

const disableBalanceOnAdd = (state, action) => {
  return {
    ...state,
    disableBalanceOnAdd: action.payload,
  };
};

const disableBalanceOnEdit = (state, action) => {
  return {
    ...state,
    disableBalanceOnEdit: action.payload,
  };
};

const allowRegistration = (state, action) => {
  return {
    ...state,
    allowRegistration: action.payload,
  };
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.DISABLE_BALANCE_ON_ADD:
      return disableBalanceOnAdd(state, action);
    case actionTypes.DISABLE_BALANCE_ON_EDIT:
      return disableBalanceOnEdit(state, action);
    case actionTypes.ALLOW_REGISTRATION:
      return allowRegistration(state, action);
    default:
      return state;
  }
};

export default reducer;
