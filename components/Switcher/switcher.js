import React from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import switcherStyle from "./switcherStyle";

export function Switcher({ isChecked, setChecked, firstLabel, secondLabel }) {
    return(
        <View style={switcherStyle.switcherContainer}>
            <TouchableOpacity
                style={[switcherStyle.switcherButtons, !isChecked ? [switcherStyle.activated, switcherStyle.activatedText] : null]}
                onPress={() => setChecked(false)}
            >
                <Text style={[switcherStyle.switcherButtons_text, !isChecked ? [switcherStyle.activated, switcherStyle.activatedText] : null]}>
                    {firstLabel}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[switcherStyle.switcherButtons, isChecked ? [switcherStyle.activated, switcherStyle.activatedText] : null]}
                onPress={() => setChecked(true)}
            >
                <Text style={[switcherStyle.switcherButtons_text, isChecked ? [switcherStyle.activated, switcherStyle.activatedText] : null]}>
                    {secondLabel}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
