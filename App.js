import React, { Component } from 'react'
import Home from './screens/Home';
import reducer from './reducers/index';
import TabNavigator from './navigation/TabNavigator';
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