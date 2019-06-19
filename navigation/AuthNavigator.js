import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "../screens/Login";
import Signup from "../screens/Signup";


const StackNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
          header: null
      }
    },
    Signup: {
      screen: Signup
    }
  }
);

export default createAppContainer(StackNavigator);
