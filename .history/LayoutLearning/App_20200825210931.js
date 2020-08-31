import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'FlexDirection
' from './src/Flex/FlexDirection'
export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex: 3, backgroundColor: "orange" }} />
      <View style={{flex:2,  backgroundColor: "yellow" }} />
      <View style={{flex:1,  backgroundColor: "blue" }} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1  },
});
