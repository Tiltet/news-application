import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ButtonProfile( { text, props, backgroundColor } ) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: backgroundColor }]}
            onPress={props}
        >
            <Text style={styles.button_text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        height: 35,
        borderRadius: 5,
    },
    button_text: {
        paddingHorizontal: 10,
        alignSelf: "center",
        color: "white",
    },
})
