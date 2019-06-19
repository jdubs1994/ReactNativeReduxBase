import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';


const SwitchNavigator = createSwitchNavigator(
  {
    Home: {
      screen: TabNavigator,
    },
    Auth: {
      screen: AuthNavigator
    },
  },
  {
    initialRouteName: 'Auth'
  }
);

export default createAppContainer(SwitchNavigator);
