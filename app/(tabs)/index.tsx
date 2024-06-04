import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.callbtn}>
        <Text style={styles.text}>たすけをよぶ</Text>
      </View>
      <View style={styles.callbtn}>
        <Text style={styles.text}>ちゃっと</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20
  },
  scview: {
    width: "100%"
  },
  title: {
    fontSize: 15,
  },
  separator: {
    marginVertical: 14,
    height: 1,
    width: '90%',
  },
  callbtn: {
    width: "60%",
    height: 150,
    borderRadius: 20,
    backgroundColor: "#ddd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#000",
    fontSize: 30
  }
});
