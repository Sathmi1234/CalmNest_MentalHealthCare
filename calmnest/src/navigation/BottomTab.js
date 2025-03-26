import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../components/Home"; 
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const PlaceholderScreen = () => <View style={{ flex: 1, backgroundColor: "#E6F7FF" }} />;

const BottomNavigation = () => {
  return (
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home-outline";
            } else if (route.name === "Chat") {
              iconName = "chatbubble-outline";
            } else if (route.name === "Mood") {
              iconName = "happy-outline";
            } else if (route.name === "Notifications") {
              iconName = "notifications-outline";
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarStyle: { backgroundColor: "#fff", paddingBottom: 5 },
          tabBarActiveTintColor: "#246BFD",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Chat" component={PlaceholderScreen} />
        <Tab.Screen name="Mood" component={PlaceholderScreen} />
        <Tab.Screen name="Notifications" component={PlaceholderScreen} />
      </Tab.Navigator>
    
  );
};

export default BottomNavigation;
