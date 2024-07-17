import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { styles } from "../../style";
import { MainBlock } from "../../components/MainBlock/mainBlock";
import { NewsSlider } from "../../components/NewsSlyder/newsSlider";
import { Graphs } from "../../components/Graphs/graphs";
import { LastNews } from "../../components/LastNews/lastNews";
import staticNewsList from "../../static/staticNewsList";
import staticMainNews from "../../static/staticMainNews";
import staticLastNews from "../../static/staticLastNews";
import axios from "axios";

export function HomePage() {

    const [ data, setData ] = useState([]);
    const [ graphic, setGraphic ] = useState([]);
    const [ mainNews, setMainNews ] = useState([]);
    const [ bottomNewsThree, setBottomNewsThree ] = useState([]);
    const [ lastNews, setLastNews ] = useState([]);
    const [ swiperNews, setSwiperNews ] = useState([]);

    // ОТПРАВЛЯЕМ ЗАПРОС И ПОЛУЧАЕМ ДАННЫЕ
    useEffect(() => {
        axios.get('http://localhost:4000/news/home')
            .then(response => {
                setData(response.data);
                setBottomNewsThree(response.data.bottomNewsThree);
                setLastNews(response.data.mainNews);
                setSwiperNews(response.data.swipeNews);
                setMainNews(response.data.news[0]);
                console.log("http://localhost:4000/news/home - good");
            })
            .catch(error => {
                console.error('http://localhost:4000/news/home - ', error)
                setMainNews(staticMainNews)
                setBottomNewsThree(staticNewsList)
                setLastNews(staticLastNews)
            });

    }, []);

    return (
        <View>
            <View style={styles.container}>
                <MainBlock bottomNewsThree={bottomNewsThree} mainNews={mainNews} />
            </View>
            <NewsSlider swiperNews={swiperNews} />
            <View style={styles.container}>
                <Graphs/>
                <LastNews lastNews={lastNews} />
            </View>
        </View>
    )
}
