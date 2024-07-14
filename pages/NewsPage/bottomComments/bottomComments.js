import React, {useState} from 'react';
import { View, Text } from "react-native";
import {bottomCommentsStyle} from "./bottomCommentsStyle";

export function BottomComments() {

    const [ comments, setComments ] = useState([1,2,3])

    const renderItems = () => {
        return comments.map((comment, i) => (
            <View style={bottomCommentsStyle.comment}>
                <Text>Ответ {i + 1}</Text>
            </View>
        ))
    }

    return(
        <View>
            {renderItems()}
        </View>
    )
}
