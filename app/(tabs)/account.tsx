import { StyleSheet, Switch, TextInput } from 'react-native';
import React, { useState } from 'react';

import EditScreenInfo from '@/components/EditScreenInfo';
import { useColorScheme } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {
  const color = useColorScheme();
  // 簡単モードフラグ
  const [isEnabled, setIsEnabled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  // 簡単モード切り替えハンドラ
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  // ダークモード切り替えハンドラ
  const toggleDark = () => setIsDark(previousState => !previousState);
  return (
    <View>
      <View style={styles.container}>
        <Text style={color == "light" ? styles.text : stylesdark.text}>ユーザー名</Text>
        <TextInput style={color == "light" ? styles.inputbg: stylesdark.inputbg} />
      </View>
      <View style={styles.container}>
        <Text style={color == "light" ? styles.text : stylesdark.text}>メールアドレス</Text>
        <TextInput style={color == "light" ? styles.inputbg: stylesdark.inputbg} />
      </View>
      <View style={styles.container}>
        <Text>{isEnabled ? "簡単モード": "かんたんもーど"}</Text>
        <View style={styles.toggeview}>
          <Text style={styles.toggeviewtext}>{isEnabled ? "ON": "OFF"}</Text>
          <Switch
            trackColor={{ false: '#aaa', true: '#00f' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#fff"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <View style={styles.container}>
        <Text>ダークモード</Text>
        <View style={styles.toggeview}>
          <Text style={styles.toggeviewtext}>{isDark ? "ダーク": "ライト"}</Text>
          <Switch
            trackColor={{ false: '#aaa', true: '#00f' }}
            thumbColor={isDark ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#fff"
            onValueChange={toggleDark}
            value={isDark}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 11
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: "#000"
  },
  inputbg: {
    fontSize: 20,
    height: 60,
  },
  toggeview: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  toggeviewtext:{
    fontSize: 20
  }
});

const stylesdark = StyleSheet.create({
  container: {
    padding: 11
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: "#fff"
  },
  inputbg: {
    height: 60,
    color: "#fff",
    fontSize: 20,
  }
});