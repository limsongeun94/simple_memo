import { StyleSheet, Dimensions } from "react-native";
import { color, color_dark } from "./color";
import { useRecoilValue } from "recoil";
import { darkModeState } from "./state";

const styles = (props) => {
  const darkModeS = useRecoilValue(darkModeState);

  const windowWidth = Dimensions.get("window").width;

  const myStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: darkModeS == "light" ? color.pink : color_dark.charcoal,
      alignItems: "center",
      justifyContent: "flex-start",
      padding: 30,
    },
    header: {
      marginBottom: 15,
      fontSize: 22,
      color: darkModeS == "light" ? "black" : color_dark.beige,
    },
    set_btn: {
      position: "absolute",
      right: 30,
      top: 45,
    },
    wrapper: {
      backgroundColor: darkModeS == "light" ? color.beige : color_dark.somke,
      marginVertical: 7,
      borderRadius: 20,
      padding: 15,
      width: windowWidth - 60,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    add_btn: {
      backgroundColor: color.cyan,
      width: 60,
      height: 60,
      borderRadius: 30,
      position: "absolute",
      bottom: 85,
      right: 60,
      elevation: 7,
      padding: 10,
    },
    add_btn_text_wrap: {
      height: 40,
      width: 40,
      borderRadius: 20,
      backgroundColor: color.beige,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    add_btn_text: {
      fontSize: 25,
      fontWeight: 500,
      color: color.cyan,
    },
    input_box_unfocus: {
      backgroundColor: color.beige,
      alignItems: "flex-start",
      width: windowWidth - 60,
      borderRadius: 7,
      borderColor: "lightgray",
      borderWidth: 1,
      padding: 10,
      textAlignVertical: "top",
    },
    input_box_onfocus: {
      backgroundColor: color.beige,
      alignItems: "flex-start",
      width: windowWidth - 60,
      borderRadius: 7,
      borderColor: "gray",
      borderWidth: 2,
      padding: 10,
      textAlignVertical: "top",
    },
    input_btn: {
      marginTop: 10,
      textAlign: "right",
    },
    submit_btn: {
      backgroundColor: color.cyan,
      width: windowWidth - 60,
      height: 55,
      borderRadius: 15,
      justifyContent: "center",
      alignItems: "center",
    },
    submit_btn_text: {
      color: "white",
      fontSize: 20,
      fontWeight: 500,
    },
    menu_hide: {
      display: "none",
    },
    menu_visible: {
      position: "absolute",
      right: 25,
      top: 20,
    },
    delete_update_btn: {
      width: 100,
      height: 37,
      justifyContent: "center",
      paddingLeft: 7,
      backgroundColor: darkModeS == "light" ? "white" : color_dark.dove,
      elevation: 7,
    },
    wrapper_set: {
      backgroundColor: darkModeS == "light" ? color.beige : color_dark.somke,
      marginVertical: 7,
      borderRadius: 20,
      padding: 15,
      width: windowWidth - 60,
      flexDirection: "column",
      justifyContent: "space-between",
    },
  });

  return myStyle;
};

export default styles;
