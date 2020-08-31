import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const style = StyleSheet.create({
    wrapper: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12,
        backgroundColor: "white"
    }
})
export default function Card({ children }) {
    return <View style={style.wrapper}>{children}</View>
}