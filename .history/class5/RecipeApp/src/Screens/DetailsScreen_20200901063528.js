import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Card from '../components/Card';

const DetailsScreen = ({ route }) => {
    const item = route.params.recipeItem;
    const { name, imageURL, ingredients, steps } = item;
    return (
        <ScrollView>
            <Image style={{ height: 350, width: "100%" }} source={{ uri: imageURL }}
                resizeMode='cover' />
            <View style={{ margin: 20 }}>
                <Text style={{ fontsize: 20 }}>
                    Ingredients
              </Text>
                <Card style={{ padding: 20, marginBottom: 10 }}>
                    {
                        ingredients.map((ingredint, index) => {
                            return (
                                <View key={ingredint.name}>
                                    <Text style={{ fontsize: 16, lineHeight: 21 }}>{`-${ingredint.quantity} ${ingredint.name}`}</Text>
                                </View>
                            )
                        }
                        )
                    }
                </Card>
            </View>

            <View style={{ margin: 20 }}>
                <Text style={{ fontsize: 20 }}>
                    Steps by step
              </Text>
                <Card style={{ padding: 20, marginBottom: 10 }}>
                    {
                        steps.map((step, index) => {
                            return (
                                <View key={step}>
                                    <Text style={{ fontsize: 16, lineHeight: 21 }}>{`-${step} `}</Text>
                                </View>
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