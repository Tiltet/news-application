import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { lastNewsStyle } from "../../styles/Components/lastNews/lastNewsStyle";

export function LastNews( {lastNews} ) {

  // Рендерим новости из состояния lastNews
  const renderNews = () => {
    return lastNews.map((news) => (
      <View key={news.id} style={lastNewsStyle.lastNews_block}>
        <Image
          style={lastNewsStyle.lastNews_block_img}
          source={{uri: news.imgUrl}}
        />
        <TouchableOpacity style={lastNewsStyle.lastNews_block_text}>
          <Text style={lastNewsStyle.lastNews_block_text_time}>{news.createdAtTime}</Text>
          <Text style={lastNewsStyle.lastNews_block_text_title}>{news.title}</Text>
          <Text numberOfLines={2} ellipsizeMode="tail">
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
