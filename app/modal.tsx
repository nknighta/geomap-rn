import { Platform, StyleSheet } from 'react-native';
import { Text, View, } from '@/components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ヘルプアプリについて</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View>
        <Text>バージョン: v0.1</Text>
      </View>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20
  },
  title: {
    fontSize: 15,
  },
  separator: {
    marginVertical: 14,
    height: 1,
    width: '90%',
  },
});
