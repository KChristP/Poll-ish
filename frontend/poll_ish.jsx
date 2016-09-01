import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import { createStore } from 'redux';
import {signup, login, logout} from './actions/session_actions'
import RootReducer from './reducers/root_reducer'
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
  let store;
  let preloadedState;
  if (window.currentUser){
    preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.Store = store;
  ReactDOM.render(<Root store={store}/>, document.getElementById("root"))
})
