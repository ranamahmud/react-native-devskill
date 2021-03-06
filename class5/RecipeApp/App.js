import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Image, TextInput, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen';
import DetailsScreen from './src/Screens/DetailsScreen';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          title: "List of Recipes",
          headerStyle: {
            backgroundColor: "#f41414"
          },
          headerTintColor:"#fff"
        }} >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen}
        options = {({route}) => ({title: route.params.recipeItem.name})} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
