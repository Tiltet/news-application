import React, { useEffect, useState } from 'react';
import { Alert, TextInput, TouchableOpacity, View, Text } from "react-native";
import { BottomComments } from "../bottomComments/bottomComments";
import { getComments, postBottomComment } from "./commentsRequest";
import Entypo from "@expo/vector-icons/Entypo";
import { pageStyle } from "../newsPageStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { commentsStyle } from "./commentsStyle";

export function Comments({ newsId, newCommentCheck, commentsCount }) {

    const [ commentsData, setCommentsData ] = useState([])
    const [ isAnswer, setIsAnswer ] = useState(null)
    const [ commentText, setCommentText ] = useState('')
    const [ pageNumber, setPageNumber ] = useState(1);
    const [ newAnswerCheck, setNewAnswerCheck ] = useState(false);

    // ПОЛУЧАЕМ ВСЕ КОММЕНТАРИИ К СТАТЬЕ
    useEffect( () => {
         getComments(newsId, pageNumber)
            .then(res => {
                setCommentsData(prevComments => prevComments.concat(res))
            })
    }, [newCommentCheck, pageNumber]);

    // ОБРАБОТЧИК НАЖАТИЯ НА КНОПКУ "ОТВЕТИТЬ"
    const handlerAnswer = async (id) => {
        const login = await AsyncStorage.getItem("login")

        if (commentText.length <= 5)
            Alert.alert("Комментарий должен быть не менее 5 символов!")

        postBottomComment(id, commentText, login)
            .then(() => {
                setCommentText("")
                setIsAnswer(false)
                setNewAnswerCheck(true)
            })
    }

    const renderComments = () => {
        return commentsData.map((comment) => (
            <View
                key={comment.id}
                style={commentsStyle.comment}
            >
                <View style={commentsStyle.comment}>
                    <View style={commentsStyle.comment_header}>
                        <Text style={commentsStyle.comment_header_login}>{comment.username}</Text>
                        <Text style={commentsStyle.comment_header_time}>{comment.viewDate}</Text>
                    </View>
                    <View style={commentsStyle.comment_text}>
                        <Text>{comment.text}</Text>
                    </View>
                </View>

                <View style={commentsStyle.comment_bottom}>
                    {
                        ( isAnswer === comment.id ) ? (
                            // ФОРМА ОТВЕТА НА КОММЕНТАРИЙ
                            <View style={commentsStyle.comment_answer}>
                                <TouchableOpacity
                                    style={commentsStyle.comment_answer_cross}
                                    onPress={() => {
                                        setCommentText('')
                                        setIsAnswer(null)}
                                    }
                                >
                                    <Entypo name="cross" size={24} color="black" />
                                </TouchableOpacity>
                                <TextInput
                                    numberOfLines={5}
                                    style={commentsStyle.comment_answer_input}
                                    placeholder={"Ответить..."}
                                    value={commentText}
                                    onChangeText={setCommentText}
                                    multiline={true}
                                />
                                <TouchableOpacity
                                    style={pageStyle.input_button}
                                    onPress={() => handlerAnswer(comment.id)}
                                >
                                    <Text style={pageStyle.input_button_text}>Отправить</Text>
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <TouchableOpacity
                                onPress={() => setIsAnswer(comment.id)}
                                style={commentsStyle.comment_bottom_button}
                            >
                                <Text style={commentsStyle.comment_bottom_button_text}>Ответить</Text>
                            </TouchableOpacity>
                        )
                    }
                </View>
                <View style={commentsStyle.comment_bottom}>
                    <BottomComments
                        commnetId={comment.id}
                        newBottomCommentCheck={newAnswerCheck}
                    />
                </View>
            </View>
        ))
    }

    return (
        <View style={commentsStyle.container}>

            {renderComments()}

            <TouchableOpacity
                style={commentsStyle.comment_more_button}
                onPress={() => setPageNumber(pageNumber + 1)}
            >
                <Text style={commentsStyle.comment_more_button_text}>Еще комментарии</Text>
            </TouchableOpacity>
        </View>
    )
}
