import 'react-native-gesture-handler';
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LandingScreen from "./src/components/Landing";
import SignupScreen from "./src/components/Signup";
import LoginScreen from "./src/components/Login";
import ChangePasswordScreen from './src/components/ChangePassword';
import HomeScreen from './src/components/Home';
import BottomNavigation from './src/navigation/BottomTab';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen}/>
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Home" component={BottomNavigation} />
        {/* <Stack.Screen name="BottomTab" component={BottomNavigation} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}