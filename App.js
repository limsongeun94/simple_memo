import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useEffect, useState, useRef } from "react";
import { color } from "./color.js";
import {
  NavigationContainer,
  useIsFocused,
  StackActions,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RenderItem = (props) => {
  const item = props.item;
  const [menu, setMenu] = useState(false);
  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={{ fontWeight: 500 }}>{item.time}</Text>
        <Text style={{ fontSize: 11, color: "gray" }}>{item.date}</Text>
        <Text style={{ marginTop: 5 }}>{item.contents}</Text>
      </View>
      <View>
        <TouchableOpacity
          hitSlop={{ top: 5, bottom: 5, left: 25, right: 25 }}
          onPress={menu ? () => setMenu(false) : () => setMenu(true)}
        >
          <Text style={{ color: "gray", fontSize: 17 }}>⋮</Text>
        </TouchableOpacity>
      </View>
      <View style={menu ? styles.menu_visible : styles.menu_hide}>
        <TouchableOpacity
          style={styles.dlete_update_btn}
          onPress={() => props.onUpdate(item.id)}
        >
          <Text>수정</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.dlete_update_btn}
          onPress={() => props.onDelete(item.id)}
        >
          <Text>삭제</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [memo, setMemo] = useState([]);

  const showItems = async () => {
    const data = JSON.parse(await AsyncStorage.getItem("@key"));
    setMemo(data);
  };

  const onDelete = async (id) => {
    await AsyncStorage.setItem(
      "@key",
      JSON.stringify(memo.filter((el) => el.id != id))
    );
    setMemo(memo.filter((el) => el.id != id));

    const data = JSON.parse(await AsyncStorage.getItem("@key"));
    setMemo(data);
  };

  const onUpdate = (id) => {
    console.log("홈스크린", id);
    navigation.navigate("Input", { id: id });
  };

  useEffect(() => {
    showItems();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>간단한 메모</Text>
      <FlatList
        data={memo}
        renderItem={(item) => (
          <RenderItem {...item} onDelete={onDelete} onUpdate={onUpdate} />
        )}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        style={styles.add_btn}
        onPress={() => navigation.navigate("Input")}
      >
        <Text style={styles.add_btn_text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

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
      await AsyncStorage.mergeItem("@key", JSON.stringify([...copyMemo]));
      // input.current.clear();
      // const pushAction = StackActions.push("Home");
      // navigation.dispatch(pushAction);
      // navigation.navigate("Home");
      // navigation.replace("Home");
      // navigation.dispatch(StackActions.replace("Home", { id: id }));
    }
  };

  const getItems = async () => {
    const data = JSON.parse(await AsyncStorage.getItem("@key"));
    setMemo(data);
  };

  const setPrevContents = () => {
    if (memo.length == 0) {
      return;
    } else {
      const findIndex = memo.findIndex((el) => el.id == route.params?.id);
      setText(memo[findIndex].contents);
    }
  };

  useEffect(() => {
    getItems();
  }, [isFocused]);

  useEffect(() => {
    setPrevContents();
  }, [memo.length]);

  return (
    <View style={styles.container}>
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

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Input" component={InputScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.pink,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 30,
  },
  header: {
    fontSize: 20,
    marginVertical: 15,
    fontSize: 24,
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
    top: 20,
    right: 35,
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
});
