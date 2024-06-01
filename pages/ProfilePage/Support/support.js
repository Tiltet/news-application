import {View, Text, TouchableOpacity} from "react-native";
import React, {useState} from "react";

export function Support() {

    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxPress = () => {
        setIsChecked(!isChecked);
    };

    return(
        <View>
            <Text> JOPA</Text>
        </View>

    )
}
