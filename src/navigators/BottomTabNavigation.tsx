import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View, StyleSheet } from "react-native";

// Import các màn hình
import Home from "../screens/Home/Home";
import Progress from "../screens/Progress/Progress";
import Favorite from "../screens/Favorite/Favorite";
import Support from "../screens/Support/Support";

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#B3A0FF",
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    height: 70,
    paddingBottom: 8,
  },
  tabIcon: {
    width: 30,
    height: 30,
  },
});

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ focused }) => {
          let iconSource;

          if (route.name === "Home") {
            iconSource = focused
              ? require("../assets/icons/BottomTab/icon_home_variant.png")
              : require("../assets/icons/BottomTab/icon_home_default.png");
          } else if (route.name === "Progress") {
            iconSource = focused
              ? require("../assets/icons/BottomTab/icon_resources_variant.png")
              : require("../assets/icons/BottomTab/icon_resources_default.png");
          } else if (route.name === "Favorite") {
            iconSource = focused
              ? require("../assets/icons/BottomTab/icon_favorite_variant.png")
              : require("../assets/icons/BottomTab/icon_favorite_default.png");
          } else if (route.name === "Support") {
            iconSource = focused
              ? require("../assets/icons/BottomTab/icon_support_variant.png")
              : require("../assets/icons/BottomTab/icon_support_default.png");
          }

          return <Image source={iconSource} style={styles.tabIcon} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Progress" component={Progress} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Support" component={Support} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
