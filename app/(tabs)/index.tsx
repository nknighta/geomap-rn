import { Platform, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { Link } from 'expo-router';

export default function TabOneScreen() {
  // get geolocation 
  // enable location permission for android devices
  const [location, setLocation] = useState<any>();
  const [errorMsg, setErrorMsg] = useState<string>();
  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Link
        style={styles.callbtn}
        href={{
          pathname: '/(displays)/main',
        }}>
        たすけをよぶ
      </Link>
      <Link
        style={styles.callbtn}
        href={{
          pathname: '/(displays)/chat',
        }}>
        ちゃっと
      </Link>
      <Text>{text}</Text>
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
    width: "100%",
    backgroundColor: "#ddd",
    padding: 24,
    textAlign: "center",
    marginVertical: 10,
    fontSize: 30
  },
});
