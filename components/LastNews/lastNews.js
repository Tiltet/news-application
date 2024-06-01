import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { lastNewsStyle } from "./lastNewsStyle";
import CreatContext from "../../context/context";

export function LastNews( {lastNews} ) {

  const { index, setIndex } = React.useContext(CreatContext)

  const handlerNewsClick = (item) => {
    setIndex(item.id)
  }

  // Рендерим новости из состояния lastNews
  const renderNews = () => {
    return lastNews.slice(0,3).map((news) => (
      <View key={news.id} style={lastNewsStyle.lastNews_block}>
        <Image
          style={lastNewsStyle.lastNews_block_img}
          source={{ uri: news.imgUrl }}
        />
        <TouchableOpacity onPress={() => handlerNewsClick(news)} style={lastNewsStyle.lastNews_block_text}>
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
