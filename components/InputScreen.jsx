import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { useEffect, useState, useRef } from "react";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles.js";

const InputScreen = ({ route, navigation }) => {
  const isFocused = useIsFocused();
  const input = useRef();
  const [focus, setFocus] = useState(false);
  const [text, setText] = useState("");
  const onChangeText = (payload) => setText(payload);
  const [memo, setMemo] = useState([]);

  const onSubmit = async () => {
    if (route.params?.id == undefined) {
      if (text == "") {
        return;
      }
      const listItem = {
        id: Date.now(),
        time: moment().format(`${"HH"}시 ${"mm"}분`),
        date: moment().format(`${"YYYY"}년 ${"MM"}월 ${"DD"}일`),
        contents: text,
      };
      setMemo([...memo, listItem]);
      await AsyncStorage.setItem("@key", JSON.stringify([...memo, listItem]));
      input.current.clear();
      navigation.push("Home");
    } else {
      const findIndex = memo.findIndex((el) => el.id == route.params?.id);
      const copyMemo = [...memo];
      copyMemo[findIndex] = { ...copyMemo[findIndex], contents: text };
      setMemo([...copyMemo]);
      await AsyncStorage.setItem("@key", JSON.stringify([...copyMemo]));
      input.current.clear();
      navigation.push("Home");
    }
  };

  const getItems = async () => {
    const data = JSON.parse(await AsyncStorage.getItem("@key"));
    setMemo(data);
    const findIndex = data.findIndex((el) => el.id == route.params?.id);
    setText(data[findIndex].contents);
  };

  useEffect(() => {
    getItems();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>간단한 메모</Text>
      <TextInput
        style={focus ? styles.input_box_onfocus : styles.input_box_unfocus}
        multiline={true}
        numberOfLines={7}
        maxLength={150}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChangeText={onChangeText}
        value={text}
        ref={input}
      />
      <View style={styles.input_btn}>
        <TouchableOpacity style={styles.submit_btn} onPress={onSubmit}>
          <Text style={styles.submit_btn_text}>등록</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputScreen;
