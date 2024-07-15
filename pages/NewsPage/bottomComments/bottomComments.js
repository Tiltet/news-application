import React, {useState} from 'react';
import { View } from "react-native";
import { bottomCommentsStyle } from "./bottomCommentsStyle";
import { Comment } from "../../../components/Comment/comment";

export function BottomComments() {

    const [ comments, setComments ] = useState([])

    const renderItems = () => {
        return comments.map((comment, i) => (
            <View style={bottomCommentsStyle.comment}>
                <Comment/>
            </View>
        ))
    }

    return(
        <View>
            {renderItems()}
        </View>
    )
}
