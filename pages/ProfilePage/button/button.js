import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ButtonProfile( {text, props} ) {
    return (
        <TouchableOpacity style={styles.button} onPress={props}>
            <Text style={styles.button_text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        maxWidth: 150,
        height: 35,
        borderRadius: 5,
        backgroundColor: "#88A2FF",
    },
    button_text: {
        alignSelf:"center",
        color:"white",
    },
})
