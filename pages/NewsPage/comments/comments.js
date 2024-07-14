import React from 'react';
import { View } from "react-native";
import { commentsStyle } from "./commentsStyle";
import {Comment} from "../comment/comment";

export function Comments() {
    return(
        <View>
            <View style={commentsStyle.comments}>
                <Comment/>
            </View>
        </View>
    )
}
