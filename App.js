import HomeScreen from "./components/HomeScreen.jsx";
import InputScreen from "./components/InputScreen.jsx";
import SetScreen from "./components/SetScreen.jsx";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useEffect, useState, useRef } from "react";
import { color } from "./color.js";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles.js";

const Stack = createStackNavigator();

export default function App() {
  return (
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
  );
}
