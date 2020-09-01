import React from 'react';
import { ScrollView,Image } from 'react-native-gesture-handler';

const DetailsScreen = ({route}) => {
    const item = route.params.recipeItem;
    const {name, imageURL, ingredients, steps} = item;
    return (
      <ScrollView>
       <h1>hi</h1>
      </ScrollView>
    );
};

export default DetailsScreen;