import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Image, TextInput,Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen';
const Stack = createStackNavigator();

export default function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={HomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
