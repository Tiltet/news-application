import React, {useEffect, useState} from 'react';
import { View, Text } from "react-native";
import { bottomCommentsStyle } from "./bottomCommentsStyle";
import { getBottomComments } from "./bottomCommentsRequest";
import { commentsStyle } from "../comments/commentsStyle";

export function BottomComments( commentId ) {

    const [ comments, setComments ] = useState([])

    useEffect(() => {
        getBottomComments(commentId.commnetId)
            .then(res => {
                setComments(res)
            })
    }, [commentId.newBottomCommentCheck]);

    const renderItems = () => {
        if (comments && comments.length > 0) {
            return comments.map((comment) => (
                <View key={comment.id} style={bottomCommentsStyle.comment}>
                    <View>
                        <Text style={commentsStyle.comment_header_login}>{comment.username}</Text>
                        <Text style={commentsStyle.comment_header_time}>{comment.viewDate}</Text>
                    </View>
                    <View style={commentsStyle.comment_text}>
                        <Text>{comment.text}</Text>
                    </View>
                </View>
            ));
        }
        return null;
    };
    return(
        <View>
            {renderItems()}
        </View>
    )
}
