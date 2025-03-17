import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Onboarding1 from "./screens/Onboarding1/Onboarding1";

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Onboarding1 />
    </NavigationContainer>
  );
};

export default App;
