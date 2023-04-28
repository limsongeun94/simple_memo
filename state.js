import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

export const darkModeState = atom({
  key: "darkModeState",
  default: "light",
});

export const fontFamilyState = atom({
  key: "fontFamilyState",
  default: "",
});

export const fontSizeState = atom({
  key: "fontSizeState",
  default: "samll",
});
