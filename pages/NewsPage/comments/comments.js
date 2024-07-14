import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from "react-native";
import {commentsStyle} from "./commentsStyle";;
import {BottomComments} from "../bottomComments/bottomComments";

export function Comments() {

    const [ comments, setComments ] = useState([1,2,3]);

    const renderComments = () => {
        return comments.map((item, index) => (
            <View style={commentsStyle.comment}>
                <View style={commentsStyle.comment_header}>
                    <Text style={commentsStyle.comment_header_login}>Тимофей</Text>
                    <Text style={commentsStyle.comment_header_time}>5 часов назад</Text>
                </View>
                <View style={commentsStyle.comment_text}>
                    <Text>
                        Maecenas dictum diam non purus facilisis, ut egestas nulla eleifend. Suspendisse non ante condimentum, pharetra arcu eu, mattis massa. Nam ullamcorper nisl sit amet neque pretium, vel scelerisque eros dapibus. Aliquam erat volutpat. In a nisl faucibus, tincidunt mi ac, ornare tortor.
                    </Text>
                </View>
                <View style={commentsStyle.comment_bottom}>
                    <TouchableOpacity style={commentsStyle.comment_bottom_like}>
                        <Image
                            style={{ width: 25, height: 25 }}
                            source={require("../../../assets/icons/comments/heart.png")}
                        />
                        <Text style={commentsStyle.comment_bottom_like_text}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={commentsStyle.comment_bottom_button}>
                        <Text style={commentsStyle.comment_bottom_button_text}>Ответить</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <BottomComments/>
                </View>
            </View>
        ))
    }

    return (
        <View>
            {renderComments()}
        </View>
    )
}
