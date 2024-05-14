import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { lastNewsStyle } from "../../styles/lastNews/lastNewsStyle";
import axios from 'axios';

export function LastNews() {

  const [lastNews, setLastNews] = useState([]);

  // Хардкодед данные с бека,
  // если не удалось отправить запрос
  const newsData = [
    {
      id: 1,
      createdAtTime: "11:00",
      imgUrl: require('../../assets/img/newsImg.png'),
      title: "This is a news Title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun...",
    },
    {
      id: 2,
      createdAtTime: "12:30",
      imgUrl: require('../../assets/img/flag.png'),
      title: "Another News Title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    },
    {
      id: 3,
      createdAtTime: "23:30",
      imgUrl: require('../../assets/img/mainBlockImg.png'),
      title: "One more Title",
      description: "Красткое описание новости, Красткое описание новости, Красткое описание новости",
    },
  ];

  // Отправляем запрос на сервер и получаем json с новостями
  useEffect(() => {
    axios.get('http://localhost:4000/news/last-news')
      .then(response => {
        const data = response.data;
        const firstThreeNews = data.news.slice(0, 3);
        setLastNews(firstThreeNews);
        console.log(firstThreeNews);
      })
      .catch(error => {
        console.error(error);
        setLastNews(newsData);
      });
  }, []);

  // Рендерим новости из состояния lastNews
  const renderNews = () => {
    logUrls()
    return lastNews.map((news) => (
      <View key={news.id} style={lastNewsStyle.lastNews_block}>
        <Image
          style={lastNewsStyle.lastNews_block_img}
          source={news.imgUrl}
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

  // Логи изображений
  const logUrls = () => {
    lastNews.map((news) => (
      console.log(news.imgUrl)
    ))
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
