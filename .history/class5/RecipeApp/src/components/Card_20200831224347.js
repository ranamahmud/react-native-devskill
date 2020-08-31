import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const style = StyleSheet.create({
    wrapper: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12,
        backgroundColor: "white",

        //android only
        elevation: 2,

        // ios only
        shadowColor:'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 4,

    }
})
export default function Card({ children, customStyle }) {
    return <View style={style.wrapper, customStyle}>{children}</View>
}