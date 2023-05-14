import HomeScreen from "./components/HomeScreen.jsx";
import InputScreen from "./components/InputScreen.jsx";
import SetScreen from "./components/SetScreen.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { RecoilRoot } from "recoil";
import { useFonts } from "expo-font";
import { IBMPlexSansKR_400Regular } from "@expo-google-fonts/ibm-plex-sans-kr";
import { GamjaFlower_400Regular } from "@expo-google-fonts/gamja-flower";
import { GowunDodum_400Regular } from "@expo-google-fonts/gowun-dodum";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    IBMPlexSansKR_400Regular,
    GamjaFlower_400Regular,
    GowunDodum_400Regular,
  });
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerMode: "none" }}>
          {fontsLoaded ? (
            <>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen
                name="Input"
                component={InputScreen}
                options={({ route }) => {
                  route.params?.id;
                }}
              />
              <Stack.Screen name="Set" component={SetScreen} />
            </>
          ) : (
            <Stack.Screen name="Loading" component={LoadingScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
