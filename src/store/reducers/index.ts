import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import {firestoreReducer } from 'redux-firestore';
import notifyUserReducer from '../reducers/notifyUser';

const reducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify: notifyUserReducer
});

export default reducer;