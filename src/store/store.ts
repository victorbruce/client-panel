import { createStore, compose } from "redux";
import firebase from "../shared/fbConfig";
import { createFirestoreInstance } from "redux-firestore";
import rootReducer from "./reducers";

// react-redux-firebase configuration
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

const composeEnhancers =
  (typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

// Check localStorage for settings
if (localStorage.getItem("settings") === 'undefined') {
  // create defaultSettings
  const defaultSettings = {
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: false,
    allowRegistration: false,
  };

  // set to localStorage
  localStorage.setItem('settings', JSON.stringify(defaultSettings))
}

const initialState = {settings: JSON.parse((localStorage as any).getItem('settings'))};

const store = createStore(rootReducer, initialState, composeEnhancers());

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export default store;
