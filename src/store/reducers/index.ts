import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import {firestoreReducer } from 'redux-firestore';
import notifyUserReducer from '../reducers/notifyUser';
import settingsReducer from '../reducers/settings';

const reducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify: notifyUserReducer,
  settings: settingsReducer
});

export default reducer;