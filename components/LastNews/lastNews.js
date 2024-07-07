import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { lastNewsStyle } from "./lastNewsStyle";
import {newsPageLink} from "../../pages/NewsPage/newsPageLink";

export function LastNews( {lastNews} ) {

    const handlerNewsClick = newsPageLink();

    // РЕНДЕРИМ НОВОСТИ ИЗ СОСТОЯНИЯ LastNews
    const renderNews = () => {
        return lastNews.slice(0,3).map((news) => (
            <View
                style={lastNewsStyle.lastNews_block}
                key={news.id}
            >
                <Image
                    style={lastNewsStyle.lastNews_block_img}
                    source={{ uri: news.fullImgUrl }}
                />
                <TouchableOpacity
                    style={lastNewsStyle.lastNews_block_text}
                    onPress={() => handlerNewsClick(news.id)}
                >
                    <Text style={lastNewsStyle.lastNews_block_text_time}>{news.createdAtTime}</Text>
                    <Text style={lastNewsStyle.lastNews_block_text_title}>{news.title}</Text>
                    <Text
                        numberOfLines={2}
                        ellipsizeMode="tail"
                    >
                        {news.description.length > 100
                            ? news.description.substring(0, 100) + "..."
                            : news.description}
                    </Text>
                </TouchableOpacity>
            </View>
        ));
    }

    return (
        <View style={lastNewsStyle.lastNews_wrapper}>
            <TouchableOpacity>
                <Text style={lastNewsStyle.lastNews_title}>Последние новости</Text>
            </TouchableOpacity>
            <View style={lastNewsStyle.lastNews_container}>
                {renderNews()}
            </View>
        </View>
    )
}
