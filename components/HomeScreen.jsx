import { FlatList, View, TouchableOpacity, Image } from "react-native";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles";
import { useRecoilValue } from "recoil";
import { darkModeState, fontFamilyState, fontSizeState } from "../state";
import Text from "../AppText";

const RenderItem = (props) => {
  const darkModeS = useRecoilValue(darkModeState);
  const fontFamilyS = useRecoilValue(fontFamilyState);
  const fontSizeS = useRecoilValue(fontSizeState);

  const item = props.item;
  const [menu, setMenu] = useState(false);
  return (
    <View style={styles(darkModeS).wrapper}>
      <View>
        <Text
          style={{
            fontWeight: 500,
          }}
        >
          {item.time}
        </Text>
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
      <View
        style={
          menu ? styles(darkModeS).menu_visible : styles(darkModeS).menu_hide
        }
      >
        <TouchableOpacity
          style={styles(darkModeS).delete_update_btn}
          onPress={() => props.onUpdate(item.id)}
        >
          <Text>수정</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles(darkModeS).delete_update_btn}
          onPress={() => props.onDelete(item.id)}
        >
          <Text>삭제</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  const darkModeS = useRecoilValue(darkModeState);
  const fontFamilyS = useRecoilValue(fontFamilyState);
  const fontSizeS = useRecoilValue(fontSizeState);

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
  }, [isFocused]);

  return (
    <View style={styles(darkModeS).container}>
      <Text style={styles(darkModeS).header}>간단한 메모</Text>
      <TouchableOpacity
        style={styles(darkModeS).set_btn}
        onPress={() => navigation.navigate("Set")}
      >
        <Image
          style={{
            width: 25,
            height: 25,
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
        <Text style={styles(darkModeS).add_btn_text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
