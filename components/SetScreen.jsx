import { View, Text, StatusBar } from "react-native";
import { useEffect, useState, useRef } from "react";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles.js";
import { RadioButton } from "react-native-paper";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { darkModeState, fontFamilyState } from "../state.js";
import AppText from "../AppText";

const SetScreen = () => {
  const [mode, setMode] = useRecoilState(darkModeState); // light | dark
  const [fontFamily, setFontFamily] = useRecoilState(fontFamilyState); // basic | ibm | gamjaflower | gowundodum

  return (
    <View style={styles(mode).container}>
      <StatusBar />
      <Text style={styles(mode).header}>MEMO150</Text>
      <View style={styles(mode).wrapper_set}>
        <AppText style={{ marginBottom: 10, fontWeight: 500 }}>
          다크모드 설정
        </AppText>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton
              value="light"
              status={mode == "light" ? "checked" : "unchecked"}
              onPress={() => setMode("light")}
              color="#719FB0"
              uncheckedColor={mode == "light" ? "black" : "#DFD3C3"}
            />
            <AppText>라이트 모드</AppText>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton
              value="dark"
              status={mode == "dark" ? "checked" : "unchecked"}
              onPress={() => setMode("dark")}
              color="#719FB0"
              uncheckedColor={mode == "light" ? "black" : "#DFD3C3"}
            />
            <AppText>다크 모드</AppText>
          </View>
        </View>
      </View>
      <View style={styles(mode).wrapper_set}>
        <AppText style={{ marginBottom: 10, fontWeight: 500 }}>
          글꼴 설정
        </AppText>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton
              value="basic"
              status={fontFamily == "basic" ? "checked" : "unchecked"}
              onPress={() => setFontFamily("basic")}
              color="#719FB0"
              uncheckedColor={mode == "light" ? "black" : "#DFD3C3"}
            />
            <AppText>시스템 글꼴</AppText>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton
              value="ibm"
              status={fontFamily == "ibm" ? "checked" : "unchecked"}
              onPress={() => setFontFamily("ibm")}
              color="#719FB0"
              uncheckedColor={mode == "light" ? "black" : "#DFD3C3"}
            />
            <AppText>IBM Plex Sans</AppText>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton
              value="gamjaflower"
              status={fontFamily == "gamjaflower" ? "checked" : "unchecked"}
              onPress={() => setFontFamily("gamjaflower")}
              color="#719FB0"
              uncheckedColor={mode == "light" ? "black" : "#DFD3C3"}
            />
            <AppText>Yoon 감자꽃</AppText>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton
              value="gowundodum"
              status={fontFamily == "gowundodum" ? "checked" : "unchecked"}
              onPress={() => setFontFamily("gowundodum")}
              color="#719FB0"
              uncheckedColor={mode == "light" ? "black" : "#DFD3C3"}
            />
            <AppText>고운돋움</AppText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SetScreen;
