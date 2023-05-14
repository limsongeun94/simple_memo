import { View, ActivityIndicator, Text, StyleSheet } from "react-native";
import { useRecoilValue } from "recoil";
import { darkModeState } from "../state";
import { color, color_dark } from "../color";

const LoadingScreen = () => {
  const darkModeS = useRecoilValue(darkModeState);
  return (
    <View style={styles(darkModeS).container}>
      <ActivityIndicator size="large" color={color.cyan} />
      <Text style={{ color: color.cyan }}>loading...</Text>
    </View>
  );
};

const styles = (props) => {
  const darkModeS = useRecoilValue(darkModeState);
  const myStyle = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: darkModeS == "light" ? color.pink : color_dark.charcoal,
    },
  });
  return myStyle;
};
export default LoadingScreen;
