import * as actionTypes from "../actionTypes/settings";

const initialState = {
  disableBalanceOnAdd: true,
  disableBalanceOnEdit: false,
  allowRegistration: false,
};

const disableBalanceOnAdd = (state, action) => {
  return {
    ...state,
    disableBalanceOnAdd: !state.disableBalanceOnAdd,
  };
};

const disableBalanceOnEdit = (state, action) => {
  return {
    ...state,
    disableBalanceOnEdit: !state.disableBalanceOnEdit,
  };
};

const allowRegistration = (state, action) => {
  return {
    ...state,
    allowRegistration: !state.allowRegistration,
  };
};

const reducer = (state = initialState, action) => {
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
