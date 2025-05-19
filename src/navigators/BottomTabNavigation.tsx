import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, View, StyleSheet } from "react-native";

// Import các màn hình
import Home from "../screens/Home/Home";
import Progress from "../screens/Progress/Progress";
import Favourite from "../screens/Favourite/Favourite";
import Support from "../screens/Support/Support";
import Profile from "../screens/Profile/Profile";
import ProfileEdit from "../screens/ProfileEdit/ProfileEdit";
import Search from "../screens/Search/Search";
import Notification from "../screens/Notification/Notification";
import Workout from "../screens/Workout/Workout";
import ProgressTracking from "../screens/ProgressTracking/ProgressTracking";
import Nutrition from "../screens/Nutrition/Nutrition";
import Community from "../screens/Community/Community";
import Recommendation from "../screens/Recommendation";
import WeeklyChallenge from "../screens/WeeklyChallenge/WeeklyChallenge";
import ArticleAndTips from "../screens/ArticleAndTips/ArticleAndTips";
import Settings from "../screens/Settings/Settings";
import NotificationSetting from "../screens/Settings/NotificationSetting";
import PasswordSetting from "../screens/Settings/PasswordSetting";
import TrainingDetail from "../screens/TrainingDetail";
import ExerciseDetail from "../screens/ExerciseDetail";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#B3A0FF",
    height: 70,
    paddingBottom: 8,
  },
  tabIcon: {
    width: 30,
    height: 30,
  },
});

// Stack Navigator cho Home Tab
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen
        name="NotificationSetting"
        component={NotificationSetting}
      />
      <Stack.Screen name="PasswordSetting" component={PasswordSetting} />
      <Stack.Screen name="Workout" component={Workout} />
      <Stack.Screen name="Nutrition" component={Nutrition} />
      <Stack.Screen name="Community" component={Community} />
      <Stack.Screen name="Recommendation" component={Recommendation} />
      <Stack.Screen name="WeeklyChallenge" component={WeeklyChallenge} />
      <Stack.Screen name="ArticleAndTips" component={ArticleAndTips} />
      <Stack.Screen name="TrainingDetail" component={TrainingDetail} />
      <Stack.Screen name="ExerciseDetail" component={ExerciseDetail} />
    </Stack.Navigator>
  );
};

// Stack Navigator cho Progress Tab
const ProgressStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ProgressScreen" component={Progress} />
      <Stack.Screen name="ProgressTracking" component={ProgressTracking} />
    </Stack.Navigator>
  );
};

// Stack Navigator cho Favourite Tab
const FavouriteStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="FavouriteScreen" component={Favourite} />
    </Stack.Navigator>
  );
};

// Stack Navigator cho Support Tab
const SupportStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SupportScreen" component={Support} />
    </Stack.Navigator>
  );
};

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
          } else if (route.name === "Favourite") {
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
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Progress" component={ProgressStack} />
      <Tab.Screen name="Favourite" component={FavouriteStack} />
      <Tab.Screen name="Support" component={SupportStack} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
