import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {  Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

function TabBarIconMaterial(props: {
  name: any;
  color: string;
}) {

  return <MaterialCommunityIcons size={34} {...props}/>
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors['light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'ホーム',
          tabBarIcon: ({ color }) => <TabBarIconMaterial name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'account',
          tabBarIcon: ({ color }) => <TabBarIconMaterial name="magnify" color={color} />,
        }}
        />
    </Tabs>
  );
}
