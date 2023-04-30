import HomeScreen from "./components/HomeScreen.jsx";
import InputScreen from "./components/InputScreen.jsx";
import SetScreen from "./components/SetScreen.jsx";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { RecoilRoot } from "recoil";

const Stack = createStackNavigator();

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerMode: "none" }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Input"
            component={InputScreen}
            options={({ route }) => {
              route.params?.id;
            }}
          />
          <Stack.Screen name="Set" component={SetScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
