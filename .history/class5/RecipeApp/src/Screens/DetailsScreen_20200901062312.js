import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const DetailsScreen = ({route}) => {
    const item = route.params.recipeItem;
    const {name, imageURL, ingredients, steps} = item;
    return (
      <ScrollView>
          <Image style={{height:300, width:'100%'}} source={{uri:imageURL}}
          resizeMode='cover' />
      </ScrollView>
    );
};

export default DetailsScreen;