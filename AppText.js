import { StyleSheet, Text, View } from "react-native";
import { useRecoilValue } from "recoil";
import { darkModeState, fontFamilyState } from "./state";
import { color, color_dark } from "./color";
import { useFonts } from "expo-font";
import { IBMPlexSansKR_400Regular } from "@expo-google-fonts/ibm-plex-sans-kr";
import { GamjaFlower_400Regular } from "@expo-google-fonts/gamja-flower";
import { GowunDodum_400Regular } from "@expo-google-fonts/gowun-dodum";
import LoadingScreen from "./components/LoadingScreen";

const AppText = (props) => {
  const darkModeS = useRecoilValue(darkModeState);
  const fontFamilyS = useRecoilValue(fontFamilyState);

  let [fontsLoaded] = useFonts({
    IBMPlexSansKR_400Regular,
    GamjaFlower_400Regular,
    GowunDodum_400Regular,
  });

  return (
    <Text
      {...props}
      style={{
        ...(fontFamilyS == "ibm"
          ? styles.ibm
          : fontFamilyS == "gamjaflower"
          ? styles.gamjaflower
          : fontFamilyS == "gowundodum"
          ? styles.gowundodum
          : {}),
        color: darkModeS == "light" ? "black" : color_dark.beige,
        ...props.style,
      }}
    >
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  ibm: {
    fontFamily: "IBMPlexSansKR_400Regular",
    lineHeight: 18,
  },
  gamjaflower: {
    fontFamily: "GamjaFlower_400Regular",
    lineHeight: 18,
  },
  gowundodum: {
    fontFamily: "GowunDodum_400Regular",
    lineHeight: 18,
  },
});

export default AppText;
