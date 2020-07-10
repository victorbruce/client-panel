import { createStore, compose } from "redux";
import firebase from '../shared/fbConfig';
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


const initialState = {};

const store = createStore(rootReducer, initialState, composeEnhancers());

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export default store;
