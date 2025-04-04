import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./navigators/Navigation";
import * as Font from "expo-font";

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    "Poppins-Thin": require("./assets/fonts/Poppins/Poppins-Thin.ttf"),
    "Poppins-ThinItalic": require("./assets/fonts/Poppins/Poppins-ThinItalic.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins/Poppins-Light.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
    "Poppins-Black": require("./assets/fonts/Poppins/Poppins-Black.ttf"),
    "Poppins-BlackItalic": require("./assets/fonts/Poppins/Poppins-BlackItalic.ttf"),
    "LeagueSpartan-Thin": require("./assets/fonts/LeagueSpartan/LeagueSpartan-Thin.ttf"),
    "LeagueSpartan-Light": require("./assets/fonts/LeagueSpartan/LeagueSpartan-Light.ttf"),
    "LeagueSpartan-Regular": require("./assets/fonts/LeagueSpartan/LeagueSpartan-Regular.ttf"),
    "LeagueSpartan-Medium": require("./assets/fonts/LeagueSpartan/LeagueSpartan-Medium.ttf"),
    "LeagueSpartan-SemiBold": require("./assets/fonts/LeagueSpartan/LeagueSpartan-SemiBold.ttf"),
    "LeagueSpartan-Bold": require("./assets/fonts/LeagueSpartan/LeagueSpartan-Bold.ttf"),
    "LeagueSpartan-Black": require("./assets/fonts/LeagueSpartan/LeagueSpartan-Black.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
}
