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
import { useState } from "react";
import { color } from "./color.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const RenderItem = ({ item }) => {
  return (
    <View style={styles.wrapper}>
      <Text>{item.time}</Text>
      <Text>{item.contents}</Text>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  const memo_data = [
    {
      id: 0,
      time: "1시 20분",
      contents: "나는 밥을 먹었다.",
    },
    { id: 1, time: "12시 10분", contents: "나는 만두국을 먹었다." },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.header}>간단한 메모</Text>
      <FlatList
        data={memo_data}
        renderItem={RenderItem}
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

const InputScreen = ({ navigation }) => {
  const [focus, setFocus] = useState(false);
  return (
    <View style={styles.container}>
      <TextInput
        style={focus ? styles.input_box_onfocus : styles.input_box_unfocus}
        multiline={true}
        numberOfLines={7}
        maxLength={150}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        // onChangeText={(text) => onChangeText(text)}
        // value={value}
      />
      <View style={styles.input_btn}>
        <TouchableOpacity style={styles.submit_btn}>
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
  },
  add_btn: {
    backgroundColor: color.cyan,
    width: 60,
    height: 60,
    borderRadius: 30,
    position: "absolute",
    bottom: 70,
    right: 50,
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
});
