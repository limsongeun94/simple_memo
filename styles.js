import { StyleSheet, Dimensions } from "react-native";
import { color, color_dark } from "./color";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { darkModeState, fontFamilyState, fontSizeState } from "./state";

const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.pink,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 30,
  },
  header: {
    marginVertical: 15,
    fontSize: 22,
  },
  set_btn: {
    position: "absolute",
    right: 30,
    top: 50,
  },
  wrapper: {
    backgroundColor: color.beige,
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
    bottom: 80,
    right: 65,
    elevation: 7,
  },
  add_btn_text: {
    backgroundColor: color.beige,
    height: 40,
    width: 40,
    borderRadius: 20,
    position: "absolute",
    top: 10,
    left: 10,
    fontSize: 25,
    fontWeight: 500,
    textAlign: "center",
    justifyContent: "center",
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
    fontWeight: 400,
  },
  menu_hide: {
    display: "none",
  },
  menu_visible: {
    position: "absolute",
    right: 25,
    top: 20,
  },
  dlete_update_btn: {
    width: 100,
    height: 37,
    justifyContent: "center",
    paddingLeft: 7,
    backgroundColor: color.beige,
    elevation: 7,
  },
  wrapper_set: {
    backgroundColor: color.beige,
    marginVertical: 7,
    borderRadius: 20,
    padding: 15,
    width: windowWidth - 60,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
