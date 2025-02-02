import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity, TextInput, Alert } from "react-native";
import { styles } from "../../style";
import { pageStyle } from "./newsPageStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import staticNews from "../../static/staticNews";
import { postComment, getCommentsCount, getNews } from "./newsRequest";
import { Comments } from "./comments/comments";
import { getVotes, postVote } from "../../components/Poll/pollRequest";
import { getComments } from "./comments/commentsRequest";

export function NewsPage( {id, handleScrollToTop} ) {

    const [ data, setData ] = useState(staticNews);
    const [ like, setLike ] = useState(0);
    const [ dislike, setDislike ] = useState(0);
    const [ checked, setChecked ] = useState(false);
    const [ commentCheck, setCommentCheck ] = useState(false)
    const [ commentText, setCommentText ] = useState('');
    const [ login, setLogin ] = useState('')
    const [ commentsCount, setCommentsCount ] = useState(0)

    // ПОЛУЧЕНИЕ ДАННЫХ ИЗ ХРАНИЛИЩА
    const fetchData = async () => {
        try {
            return await AsyncStorage.getItem('login')
        } catch (error) {
            console.error('Error fetching data from AsyncStorage:', error);
        }
    };

    useEffect(  () => {

        // ПОЛУЧАЕМ ЛОГИН ПОЛЬЗОВАТЕЛЯ, ЕСЛИ ЗАРЕГАН
        fetchData()
            .then(login => setLogin(login));

        handleScrollToTop()

        // ПОЛУЧАЕМ ДАННЫЕ СТАТЬИ
        getNews(id)
            .then(res => {
                setData(res);
            })
            .catch(error => {
                console.error(error)
            })

        // ПОЛУЧАЕМ КОЛИЧЕСТВО КОММЕНТАРИЕВ
        getCommentsCount(id)
            .then(res => {
                setCommentsCount(res)
            })


        // ПОЛУЧАЕМ ДАННЫЕ ОПРОСА
        getVotes(id)
            .then(res => {
                setDislike(res.voteNegative)
                setLike(res.votePositive)
            })
    }, [id]);

    // ОТОБРАЖАЕТ СТАТИСТИКУ ЛАКОВ И ДИЗЛАЙКОВ ДЛЯ СТАТЬИ
    const handleReaction = (reaction) => {

        if (login === null) {
            Alert.alert("Голосовать могут только зарегистрированные пользователи!")
        } else {
            switch (reaction) {
                case "like":
                    setLike(like + 1);
                    postVote(id, "Поддерживаю", login)
                    break
                case "dislike":
                    setDislike(dislike + 1);
                    postVote(id, "Не поддерживаю", login)
                    break
                default:
                    break
            }

            setChecked(true)
        }
    }

    // ОТПРАВЛЯЕМ КОМЕНТАРИИЙ
    const handlerAddComment = async () => {
        if (commentText.length < 5) {
            Alert.alert("Комментарий должен быть от 5 символов!")
            setCommentText('')
        }
        if (login === null) {
            Alert.alert("Комментарии могут оставлять только зарегистрированные пользователи!")
            setCommentText('')
        } else {
            // ОТПРАВЛЯЕМ КОММЕНТ
            await postComment(id, commentText, login)
            getComments(id)
                .then(() => {
                    setCommentCheck(!commentCheck)
                    setCommentsCount(commentsCount + 1)
                })
            setCommentText('')
        }
    }

    return (
        <View>
            {/* БЛОК С ЗАГОЛОВКОМ СТАТЬИ */}
            <ImageBackground
                source={{ uri: data.fullImgUrl }}
            >
                <View style={[pageStyle.header, { backgroundColor: "rgba(0, 0, 0, 0.5)" }]}>
                    <View style={styles.container}>
                        <View style={pageStyle.header_text}>
                            <Text style={pageStyle.category}>{data.category}</Text>
                            <Text style={pageStyle.title}>{data.title}</Text>
                        </View>

                        <View style={pageStyle.header_footer}>
                            <View style={pageStyle.data}>
                                <Text style={pageStyle.data_text}>{data.viewDate}</Text>
                            </View>
                            <View style={pageStyle.header_footer_icons}>
                                <TouchableOpacity>
                                    <Image
                                        style={{ width: 15, height: 15 }}
                                        source={require("../../assets/icons/news/comments.png")}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image
                                        style={{ width: 13, height: 13, marginRight: 5 }}
                                        source={require("../../assets/icons/news/share.png")}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>

            {/* БЛОК С ТЕКСТОМ СТАТЬИ */}
            <View style={styles.container}>
                <Text style={[pageStyle.main_text, { flex: 1, flexWrap: 'wrap' }]}>
                    {data.description.replace(/\s{4}/g, '\n\n')}
                </Text>
            </View>

            {/* FOOTER БЛОГА */}
            <View style={styles.container}>
                <View style={pageStyle.footer}>
                    <Text style={pageStyle.footer_time}>{data.createdAtTime}</Text>
                    <TouchableOpacity style={pageStyle.footer_share}>
                        <Image
                            style={{ width: 14, height: 14 }}
                            source={require("../../assets/icons/news/share_grey.png")}
                        />
                        <Text style={pageStyle.footer_share_text}>Поделиться</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* БЛОК СО СТАТИСТИКОЙ */}
            <View style={styles.container}>
                <View style={pageStyle.buttons}>
                    <View style={pageStyle.button}>
                        <Image
                            style={{ width: 25, height: 25 }}
                            source={require("../../assets/icons/poll/like.png")}
                        />
                        { checked === true ? (
                            <Text style={pageStyle.button_text}>{like}</Text>
                        ) : (
                            <TouchableOpacity
                                onPress={() => handleReaction("like")}
                            >
                                <Text style={pageStyle.button_text}>Понравилось</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                    <View style={pageStyle.button}>
                        <Image
                            style={{ width: 25, height: 25 }}
                            source={require("../../assets/icons/poll/unlike.png")}
                        />
                        { checked === true ? (
                            <Text style={pageStyle.button_text}>{dislike}</Text>
                        ) : (
                            <TouchableOpacity
                                onPress={() => handleReaction("dislike")}
                            >
                                <Text style={pageStyle.button_text}>Не понравилось</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </View>

            {/* БЛОК С КОММЕНТАРИЯМИ*/}
            <View style={styles.container}>
                <View style={pageStyle.count}>
                    <Text style={pageStyle.count_text}>{commentsCount}</Text>
                    <Text style={pageStyle.count_text}> комментариев</Text>
                </View>
                <View style={pageStyle.input}>
                    <TextInput
                        style={pageStyle.input_field}
                        numberOfLines={5}
                        placeholder={"Написать комментарий..."}
                        value={commentText}
                        onChangeText={setCommentText}
                        multiline={true}
                    />
                    <TouchableOpacity
                        style={pageStyle.input_button}
                        onPress={() => handlerAddComment()}
                    >
                        <Text style={pageStyle.input_button_text}>Отправить</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Comments
                        newsId={id}
                        newCommentCheck={commentCheck}
                    />
                </View>
            </View>
        </View>
    )
}
