import React from 'react';
import { ScrollView,Image } from 'react-native-gesture-handler';

const DetailsScreen = ({route}) => {
    const item = imageURL.params.recipeItem;
    const {name, imageURL, ingredients, steps} = item;
    return (
      <ScrollView>
        <h1>Hi</h1>
      </ScrollView>
    );
};

export default DetailsScreen;