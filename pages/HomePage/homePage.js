import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { styles } from "../../styles/style";
import MainBlock from "../../components/MainBlock/mainBlock";
import { NewsSlider } from "../../components/NewsSlyder/newsSlider";
import { Graphs } from "../../components/Graphs/graphs";
import { LastNews } from "../../components/LastNews/lastNews";
import axios from "axios";

export function HomePage() {

  // ЕСЛИ НЕ ПРИШЛИ ДАННЫЕ С СЕРВЕРА
  const staticNews = [
    {
      id: "ee0039f6-2cdf-436e-8085-8d15bff46430",
      title: "Новости с сервера не пришли"
    },
    {
      id: "d77a09b6-0707-4f76-ae15-3bdea8ffea03",
      title: "Новости с сервера не пришли"
    },
    {
      id: "4dbb8e1e-08e8-496a-b5e4-7354f0bfc255",
      title: "Новости с сервера не пришли"
    }
  ];

  const [data, setData] = useState([]);
  const [bottomNewsThree, setBottomNewsThree] = useState([]);
  const [lastNews, setLastNews] = useState([]);
  const [swiperNews, setSwiperNews] = useState([]);

  // Отправляем запрос и получаем данные
  useEffect(() => {
    axios.get('http://localhost:4000/news/home')
      .then(response => {

        setData(response.data);
        setBottomNewsThree(response.data.bottomNewsThree);
        setLastNews(response.data.mainNews);
        setSwiperNews(response.data.swipeNews);

      })
      .catch(error => {
        console.log(error)
        setBottomNewsThree(staticNews)
      })
  }, []);

  return (
    <View>
        <View style={styles.container}>
          <MainBlock bottomNewsThree={bottomNewsThree} />
        </View>
        <NewsSlider swiperNews={swiperNews} />
        <View style={styles.container}>
          <Graphs/>
          <LastNews lastNews={lastNews} />
        </View>
    </View>
  )
}
