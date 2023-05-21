import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles";
import { useRecoilValue } from "recoil";
import { darkModeState, fontFamilyState } from "../state";
import AppText from "../AppText";

const RenderItem = (props) => {
  const darkModeS = useRecoilValue(darkModeState);
  const fontFamilyS = useRecoilValue(fontFamilyState);

  const item = props.item;
  const [menu, setMenu] = useState(false);
  return (
    <View style={styles(darkModeS).wrapper}>
      <StatusBar />
      <View>
        <AppText>{item.time}</AppText>
        <AppText style={{ fontSize: 11, color: "gray" }}>{item.date}</AppText>
        <AppText style={{ marginTop: 5 }}>{item.contents}</AppText>
      </View>
      <View>
        <TouchableOpacity
          hitSlop={{ top: 5, bottom: 5, left: 25, right: 25 }}
          onPress={menu ? () => setMenu(false) : () => setMenu(true)}
        >
          <AppText style={{ color: "gray", fontSize: 17 }}>⋮</AppText>
        </TouchableOpacity>
      </View>
      <View
        style={
          menu ? styles(darkModeS).menu_visible : styles(darkModeS).menu_hide
        }
      >
        <TouchableOpacity
          style={styles(darkModeS).delete_update_btn}
          onPress={() => props.onUpdate(item.id)}
        >
          <AppText>수정</AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles(darkModeS).delete_update_btn}
          onPress={() => props.onDelete(item.id)}
        >
          <AppText>삭제</AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  const darkModeS = useRecoilValue(darkModeState);

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
    navigation.navigate("Input", { id: id });
  };

  useEffect(() => {
    showItems();
  }, [isFocused]);

  return (
    <View style={styles(darkModeS).container}>
      <Text style={styles(darkModeS).header}>MEMO150</Text>
      <TouchableOpacity
        style={styles(darkModeS).set_btn}
        onPress={() => navigation.navigate("Set")}
      >
        <Image
          style={{
            width: 28,
            height: 28,
          }}
          source={require("../setting_icon.png")}
        />
      </TouchableOpacity>
      <FlatList
        data={memo}
        renderItem={(item) => (
          <RenderItem {...item} onDelete={onDelete} onUpdate={onUpdate} />
        )}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        style={styles(darkModeS).add_btn}
        onPress={() => navigation.navigate("Input")}
      >
        <View style={styles(darkModeS).add_btn_text_wrap}>
          <Text style={styles(darkModeS).add_btn_text}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
