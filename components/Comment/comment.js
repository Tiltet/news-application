import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { commentStyle } from "./commentStyle";
import Entypo from "@expo/vector-icons/Entypo";
import {pageStyle} from "../../pages/NewsPage/newsPageStyle";

export function Comment({ comment }) {

    const [ isAnswer, setIsAnswer ] = useState(true)
    const [ commentText, setCommentText ] = useState('')

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
                { isAnswer === true ? (
                    <TouchableOpacity
                        onPress={() => setIsAnswer(!isAnswer)}
                        style={commentStyle.comment_bottom_button}
                    >
                        <Text style={commentStyle.comment_bottom_button_text}>Ответить</Text>
                    </TouchableOpacity>
                ) : (
                    // ФОРМА ОТВЕТА НА КОММЕНТАРИЙ
                    <View style={commentStyle.comment_answer}>
                        <TouchableOpacity
                            style={commentStyle.comment_answer_cross}
                            onPress={() => {
                                setCommentText('')
                                setIsAnswer(!isAnswer)}
                        }
                        >
                            <Entypo name="cross" size={24} color="black" />
                        </TouchableOpacity>
                        <TextInput
                            numberOfLines={5}
                            style={commentStyle.comment_answer_input}
                            placeholder={"Ответить..."}
                            value={commentText}
                            onChangeText={setCommentText}
                            multiline={true}
                        />
                        <TouchableOpacity
                            style={pageStyle.input_button}
                        >
                            <Text style={pageStyle.input_button_text}>Отправить</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    )
}
