import { View, StatusBar } from "react-native";
import { useEffect, useState, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles.js";
import { RadioButton } from "react-native-paper";
import { useRecoilState, useRecoilValue } from "recoil";
import { darkModeState, fontFamilyState, fontSizeState } from "../state.js";
import Text from "../AppText";

const SetScreen = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState); // light | dark
  const [fontFamily, setFontFamily] = useRecoilState(fontFamilyState);
  const [fontSize, setFontSize] = useRecoilState(fontSizeState); // small | medium | big

  const darkModeS = useRecoilValue(darkModeState);
  const fontFamilyS = useRecoilValue(fontFamilyState);
  const fontSizeS = useRecoilValue(fontSizeState);

  return (
    <View style={styles(darkModeS).container}>
      <StatusBar />
      <Text style={styles(darkModeS).header}>간단한 메모</Text>
      <View style={styles(darkModeS).wrapper_set}>
        <Text style={{ marginBottom: 10, fontWeight: 500 }}>다크모드 설정</Text>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton
              value="light"
              status={darkMode == "light" ? "checked" : "unchecked"}
              onPress={() => setDarkMode("light")}
              color="#719FB0"
              uncheckedColor={darkModeS == "light" ? "black" : "#DFD3C3"}
            />
            <Text>라이트 모드</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton
              value="dark"
              status={darkMode == "dark" ? "checked" : "unchecked"}
              onPress={() => setDarkMode("dark")}
              color="#719FB0"
              uncheckedColor={darkModeS == "light" ? "black" : "#DFD3C3"}
            />
            <Text>다크 모드</Text>
          </View>
        </View>
      </View>
      <View style={styles(darkModeS).wrapper_set}>
        <Text style={{ marginBottom: 10, fontWeight: 500 }}>글꼴 설정</Text>
      </View>
      <View style={styles(darkModeS).wrapper_set}>
        <Text style={{ marginBottom: 10, fontWeight: 500 }}>
          글자 크기 설정
        </Text>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton
              value="small"
              status={fontSize == "small" ? "checked" : "unchecked"}
              onPress={() => setFontSize("small")}
              color="#719FB0"
              uncheckedColor={darkModeS == "light" ? "black" : "#DFD3C3"}
            />
            <Text>작게</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton
              value="medium"
              status={fontSize == "medium" ? "checked" : "unchecked"}
              onPress={() => setFontSize("medium")}
              color="#719FB0"
              uncheckedColor={darkModeS == "light" ? "black" : "#DFD3C3"}
            />
            <Text>중간</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton
              vluae="big"
              status={fontSize == "big" ? "checked" : "unchecked"}
              onPress={() => setFontSize("big")}
              color="#719FB0"
              uncheckedColor={darkModeS == "light" ? "black" : "#DFD3C3"}
            />
            <Text>크게</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SetScreen;
