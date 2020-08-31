import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const style = StyleSheet.create({
    wrapper: {
        borderWidth: 1,
        widthborderColor: '#ddd',
        backgroundColor: "white"
    }
})
export default function Card({ children }) {
    return <View>{children}</View>
}