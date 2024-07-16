import React, { useEffect, useState } from 'react';
import { View } from "react-native";
import { Comment } from "../../../components/Comment/comment";
import { BottomComments } from "../bottomComments/bottomComments";
import { commentsStyle } from "./commentsStyle";
import { getComments } from "./commentsRequest";

export function Comments({ newsId }) {

    const [ commentsData, setCommentsData ] = useState([])

    useEffect(() => {
        getComments(newsId)
            .then(res => {
                setCommentsData(res)
            })
    }, []);


    const renderComments = () => {
        return commentsData.map((comment, index) => (
            <View style={commentsStyle.comment}>
                <Comment comment={comment}/>
                <View style={commentsStyle.comment_bottom}>
                    <BottomComments/>
                </View>
            </View>
        ))
    }

    return (
        <View style={commentsStyle.container}>
            {renderComments()}
        </View>
    )
}
