import React, {useEffect, useState} from 'react';
import { View } from "react-native";
import { bottomCommentsStyle } from "./bottomCommentsStyle";
import { Comment } from "../../../components/Comment/comment";
import { getBottomComments } from "./bottomCommentsRequest";

export function BottomComments( commentId ) {

    const [ comments, setComments ] = useState([1])

    useEffect(() => {
        getBottomComments(commentId.commnetId)
            .then(res => {
                setComments(res)
            })
    }, []);

    const renderItems = () => {
        return comments.map((comment) => (
            <View style={bottomCommentsStyle.comment}>
                <Comment
                    comment={comment}
                    Answer={true}
                />
            </View>
        ))
    }

    return(
        <View>
            {renderItems()}
        </View>
    )
}
