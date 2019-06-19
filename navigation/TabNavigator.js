import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Activity from "../screens/Activity";
import Upload from "../screens/Activity";
import Profile from "../screens/Profile";

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: Platform.OS == "ios" ? " " : "Home",
        tabBarIcon: () => <Ionicons name="ios-home" size={32} />
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarLabel: Platform.OS == "ios" ? " " : "Search",
        tabBarIcon: () => <Ionicons name="ios-search" size={32} />
      }
    },
    Upload: {
      screen: Upload,
      navigationOptions: {
        tabBarLabel: Platform.OS == "ios" ? " " : "Upload",
        tabBarIcon: () => <Ionicons name="ios-add-circle-outline" size={32} />
      }
    },
    Activity: {
      screen: Activity,
      navigationOptions: {
        tabBarLabel: Platform.OS == "ios" ? " " : "Activity",
        tabBarIcon: () => <Ionicons name="ios-heart" size={32} />
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: Platform.OS == "ios" ? " " : "Profile",
        tabBarIcon: () => <Ionicons name="ios-person" size={32} />
      }
    }
  },
  {
    defaultNavigationOptions: {
      tabBarOptions: {
        tabStyle: {}
      }
    }
  }
);

export default createAppContainer(TabNavigator);
