import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  let [fontsLoaded] = useFonts({

  })
  return (
    <View style={styles.container}>
    <View>
      <View  style = {{marginTop: 40, marginHorizontal:24}}>
        <View>
          
        </View>
      </View>

    </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
