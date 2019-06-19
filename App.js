import React, { Component } from 'react'
import Home from './screens/Home';
import reducer from './reducers/index';
import TabNavigator from './navigation/TabNavigator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import SwitchNavigator from './navigation/SwitchNavigator';
const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <SwitchNavigator />
      </Provider>
    )
  }
}
