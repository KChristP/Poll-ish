import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import { createStore } from 'redux';
import {signup, login, logout} from './actions/session_actions'
import RootReducer from './reducers/root_reducer'
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
  if (window.currentUser){
    const preloadedState = {session: {currentUser: window.currentUser}};
  }
  let store = configureStore(preloadedState);
  window.Store = store
  window.Signup = signup
  window.Login = login
  window.Logout = logout

  ReactDOM.render(<Root store ={store}/>, document.getElementById("root"))
})
