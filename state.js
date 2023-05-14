import AsyncStorage from "@react-native-async-storage/async-storage";
import { atom } from "recoil";

export const darkModeState = atom({
  key: "darkModeState",
  default: "light",
  effects: [
    async ({ onSet, setSelf }) => {
      const storedData = await AsyncStorage.getItem("@key_darkmode");
      setSelf(storedData);

      onSet(async (newValue) => {
        await AsyncStorage.setItem("@key_darkmode", newValue);
      });
    },
  ],
});

export const fontFamilyState = atom({
  key: "fontFamilyState",
  default: "basic",
  effects: [
    async ({ onSet, setSelf }) => {
      const storedData = await AsyncStorage.getItem("@key_fontfamily");
      setSelf(storedData);

      onSet(async (newValue) => {
        await AsyncStorage.setItem("@key_fontfamily", newValue);
      });
    },
  ],
});
