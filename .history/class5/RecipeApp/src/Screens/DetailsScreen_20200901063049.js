import React from 'react';
import {View,Text, ScrollView,Image } from 'react-native';
import Card from '../components/Card';

const DetailsScreen = ({route}) => {
    const item = route.params.recipeItem;
    const {name, imageURL, ingredients, steps} = item;
    return (
      <ScrollView>
          <Image style={{height:350, width:"100%"}} source={{uri:imageURL}}
          resizeMode='cover' />
          <View style={{margin: 20}}>
              <Text style={{fontsize:20}}>
                  Ingredients
              </Text>
              <Card>
                  {
                      ingredients.map((ingredint,index) => 
                      {
                          return(
                            <View key={ingredint.name}>{ingredint}</View>
                          )
                      }
                      )
                  }
              </Card>
          </View>
      </ScrollView>
    );
};

export default DetailsScreen;