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
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles.js";

const SetScreen = () => {
  return (
    <View>
      <View>
        <Text>다크모드 설정</Text>
        <View>
          <View>
            <Text>라이트 모드</Text>
            <RadioButton value="light" />
          </View>
          <View>
            <Text>다크 모드</Text>
            <RadioButton value="dark" />
          </View>
        </View>
      </View>
      <View>
        <Text>글꼴 설정</Text>
      </View>
      <View>
        <Text>글자 크기 설정</Text>
        <View>
          <View>
            <Text>작게</Text>
            <RadioButton value="small" />
          </View>
          <View>
            <Text>중간</Text>
            <RadioButton value="medium" />
          </View>
          <View>
            <Text>크게</Text>
            <RadioButton vluae="big" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SetScreen;
