import { Text } from "react-native";
import { useRecoilValue } from "recoil";
import { darkModeState, fontFamilyState, fontSizeState } from "./state";
import { color, color_dark } from "./color";

const AppText = (props) => {
  const darkModeS = useRecoilValue(darkModeState);
  const fontFamilyS = useRecoilValue(fontFamilyState);
  const fontSizeS = useRecoilValue(fontSizeState);

  return (
    <Text
      {...props}
      style={{
        color: darkModeS == "light" ? "black" : color_dark.beige,
        ...props.style,
      }}
    >
      {props.children}
    </Text>
  );
};

export default AppText;
