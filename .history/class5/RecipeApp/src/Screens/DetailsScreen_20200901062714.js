import React from 'react';
import { ScrollView,Image } from 'react-native';

const DetailsScreen = ({route}) => {
    const item = route.params.recipeItem;
    const {name, imageURL, ingredients, steps} = item;
    return (
      <ScrollView>
          <Image style={{height:350, width:"100%"}} source={{uri:imageURL}}
          resizeMode='cover' />
          <View style={{margin: 20}}></View>
      </ScrollView>
    );
};

export default DetailsScreen;