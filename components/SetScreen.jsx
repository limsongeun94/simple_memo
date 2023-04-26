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
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles.js";
import { RadioButton, MD3LightTheme as DefaultTheme } from "react-native-paper";

const SetScreen = () => {
  const [darkMode, setDarkMode] = useState("");
  const [fontFamily, setFontFamily] = useState("");
  const [fontSize, setFontSize] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>간단한 메모</Text>
      <View style={styles.wrapper_set}>
        <Text style={{ marginBottom: 10, fontWeight: 500 }}>다크모드 설정</Text>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton
              value="light"
              status={darkMode == "light" ? "checked" : "unchecked"}
              onPress={() => setDarkMode("light")}
              color="#9BE3DE"
            />
            <Text>라이트 모드</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton
              value="dark"
              status={darkMode == "dark" ? "checked" : "unchecked"}
              onPress={() => setDarkMode("dark")}
              color="#9BE3DE"
            />
            <Text>다크 모드</Text>
          </View>
        </View>
      </View>
      <View style={styles.wrapper_set}>
        <Text style={{ marginBottom: 10, fontWeight: 500 }}>글꼴 설정</Text>
      </View>
      <View style={styles.wrapper_set}>
        <Text style={{ marginBottom: 10, fontWeight: 500 }}>
          글자 크기 설정
        </Text>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton
              value="small"
              status={fontSize == "small" ? "checked" : "unchecked"}
              onPress={() => setFontSize("small")}
              color="#9BE3DE"
            />
            <Text>작게</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton
              value="medium"
              status={fontSize == "medium" ? "checked" : "unchecked"}
              onPress={() => setFontSize("medium")}
              color="#9BE3DE"
            />
            <Text>중간</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton
              vluae="big"
              status={fontSize == "big" ? "checked" : "unchecked"}
              onPress={() => setFontSize("big")}
              color="#9BE3DE"
            />
            <Text>크게</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const theme = {
  ...DefaultTheme,
};

export default SetScreen;
