import React from 'react';
import { View, Text } from "react-native";
import {BottomComment} from "../bottomComment/bottomComment";

export function Comment() {

    const renderComment = () => {
        return(
            <View>
                <Text>21</Text>
            </View>
        )
    }

    return(
        <View style={}>
            {renderComment()}
            <BottomComment/>
        </View>
    )
}
