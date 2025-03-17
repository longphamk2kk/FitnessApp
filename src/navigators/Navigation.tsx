import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Onboarding1 from '../screens/Onboarding1/Onboarding1';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={Onboarding1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
