import { StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>ユーザー名</Text>
        <TextInput style={styles.inputbg}/>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>メールアドレス</Text> 
        <TextInput style={styles.inputbg}/>
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
    color: "#fff"
  },
  inputbg: {
    backgroundColor: "#222",
    height: 60,
    color: "#fff"
  }
});
