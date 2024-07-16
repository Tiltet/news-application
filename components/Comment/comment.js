import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, Image } from "react-native";
import { commentStyle } from "./commentStyle";

export function Comment({ comment }) {

    useEffect(() => {
        console.log(comment)
    }, []);

    return(
        <View style={commentStyle.comment}>
            <View style={commentStyle.comment_header}>
                <Text style={commentStyle.comment_header_login}>{comment.username}</Text>
                <Text style={commentStyle.comment_header_time}>{comment.viewDate}</Text>
            </View>
            <View style={commentStyle.comment_text}>
                <Text>{comment.text}</Text>
            </View>
            <View style={commentStyle.comment_bottom}>
                {/*
                <TouchableOpacity style={commentStyle.comment_bottom_like}>
                    <Image
                        style={{ width: 20, height: 20 }}
                        source={require("../../assets/icons/comments/heart.png")}
                    />
                    <Text style={commentStyle.comment_bottom_like_text}>5</Text>
                </TouchableOpacity>
                */}
                <TouchableOpacity style={commentStyle.comment_bottom_button}>
                    <Text style={commentStyle.comment_bottom_button_text}>Ответить</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
