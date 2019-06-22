import React, { Component } from 'react'
import reducer from './reducers/index';
import firebase from './config/firebase';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import SwitchNavigator from './navigation/SwitchNavigator';
const middleware = applyMiddleware(thunkMiddleware, logger);
const store = createStore(reducer, middleware);


export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <SwitchNavigator />
      </Provider>
    )
  }
}