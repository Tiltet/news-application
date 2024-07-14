import React, { useEffect, useState } from "react";
import {View, Text, ImageBackground, Image, TouchableOpacity, TextInput} from "react-native";
import { styles } from "../../style";
import { pageStyle } from "./newsPageStyle";
import staticNews from "../../static/staticNews";
import { NewsRequest } from "./newsRequest";
import {commentsStyle} from "./comments/commentsStyle";

export function NewsPage( {id, handleScrollToTop} ) {

    const [ data, setData ] = useState(staticNews);
    const [ like, setLike ] = useState(0);
    const [ dislike, setDislike ] = useState(0);
    const [ checked, setChecked ] = useState(false);

    // ПОЛУЧАЕМ ДАННЫЕ КОНКРЕТНОЙ СТРАНИЦЫ
    useEffect(() => {
        handleScrollToTop()
        NewsRequest(id)
            .then(res => {
                setData(res);
            })
            .catch(error => {
                console.error(error)
            })
    }, [id]);

    // ОТОБРАЖАЕТ СТАТИСТИКУ ЛАКОВ И ДИЗЛАЙКОВ ДЛЯ СТАТЬИ
    const handleReaction = (reaction) => {
        switch (reaction) {
            case "like":
                setLike(like + 1);
                break
            case "dislike":
                setDislike(dislike + 1);
                break
            default:
                break
        }

        setChecked(true)
    }


    return (
        <View>
            {/* БЛОК С ЗАГОЛОВКОМ СТАТЬИ */}
            <ImageBackground
                source={{ uri: data.imgUrl }}
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
                <View>
                    <View style={pageStyle.count}>
                        <Text style={pageStyle.count_text}>0</Text>
                        <Text style={pageStyle.count_text}> комментариев</Text>
                    </View>
                    <View style={pageStyle.input}>
                        <TextInput
                            style={pageStyle.input_field}
                            numberOfLines={5}
                            placeholder={"Написать комментарий..."}
                            multiline
                        />
                        <TouchableOpacity style={pageStyle.input_button}>
                            <Text style={pageStyle.input_button_text}>Отправить</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>

                </View>
            </View>

        </View>
    )
}
