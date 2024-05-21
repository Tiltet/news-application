import React, { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/style";
import { searchPageStyle } from "../../styles/Pages/Search/searchPageStyle";
import axios from "axios";

export function SearchPage( {searchItem, setSearchItem } ) {

  const [inputText, setInputText] = useState("");
  const [newsCount, setNewsCount] = useState(3);
  const [amount, setAmount] = useState(0);
  const [data, setData] = useState([]);
  const [dataNews, setDataNews] = useState([]);

  // Отправляем запрос и получаем данные
  useEffect(() => {

    if (searchItem === null) {
      searchItem = ' '
    }

    axios.get('http://localhost:4000/news/search' + '?searchNameTerm=' + searchItem)
      .then(response => {

        if (searchItem === ' ') {
          searchItem = null
        }

        setData(response.data)
        setDataNews(response.data.news)
        setAmount(response.data.amount)
        setInputText(searchItem)

        if (response.data.amount < 3) {
          setNewsCount(response.data.amount)
        }
        else {
          setNewsCount(3)
        }

        console.log("Найдено новостей - ", response.data.amount);

      })
      .catch(error => {
        console.log(error)

        if (searchItem === ' ') {
          searchItem = null
        }

        setAmount(0)
        setNewsCount(0)
        setInputText(searchItem)
      })
  }, [searchItem]);

  // ОБРАБОТЧИК ДЛЯ НАЖАТИЯ НА КОПКУ ПОИСКА
  const handlerInputButtonPress = () => {
    axios.get('http://localhost:4000/news/search' + '?searchNameTerm=' + inputText)
      .then(response => {
        setData(response.data);
        setDataNews(response.data.news)
        setAmount(response.data.amount)

        if (response.data.amount < 3) {
          setNewsCount(response.data.amount)
        }
        else {
          setNewsCount(3)
        }

        console.log("Amount - ", amount)
        console.log("Найдено новостей - ", response.data.amount);
      })
      .catch(error => {
        console.log("Ошибка нажатия на кнопку ввода на странице поиска - ", error)
        setAmount(0)
        setNewsCount(0)
      })
  }

  // ОБРАБОТЧИК ДЛЯ ОЧИСТКИ ПОЛЯ ВВОДА ИНФОРМАЦИИ
  const handlerClearInput = () => {
    setInputText(null);
  }

  // ОБРАБОТЧИК ДЛЯ ИЗМЕНЕНИЯ ПОЛЯ ВВОДА
  const handleChangeText = (newText) => {
    setInputText(newText);
  };

  // КНОПКА НАЖАТИЯ НА КНОПКУ "Еще 3 новости"
  const handlerButtonMoreNews = () => {
    if (newsCount + 3 > amount) {
      setNewsCount(amount)
    }
    else {
      setNewsCount(newsCount + 3)
    }
  }

  // РЕНДЕРИТ НАЙДЕНЫЕ НОВОСТИ
  const renderThreeNews = () => {
    return dataNews.slice(0, newsCount).map((item) => (
      <View id={item.id} key={item.id} style={searchPageStyle.news_item}>
        <View style={searchPageStyle.news_item_top}>
          <TouchableOpacity style={searchPageStyle.news_block_text}>
            <Text style={searchPageStyle.news_block_text_title}>{item.category}</Text>
            <Text numberOfLines={3} style={searchPageStyle.news_block_text_text}>
              {item.title.length > 100
                ? item.title.substring(0, 100) + "..."
                : item.title}
            </Text>
            <Text>{item.createdAtTime}</Text>
          </TouchableOpacity>
          <View style={searchPageStyle.news_block_img}>
            <Image
              style={searchPageStyle.image}
              source={{uri: item.imgUrl}}
            />
          </View>
        </View>
        <View style={searchPageStyle.news_item_bottom}>
          <TouchableOpacity style={searchPageStyle.news_item_bottom_block_first}>
            <Text style={searchPageStyle.news_item_bottom_block_text_first}>Экономика</Text>
          </TouchableOpacity>
          <TouchableOpacity style={searchPageStyle.news_item_bottom_block}>
            <Text style={searchPageStyle.news_item_bottom_block_text}>Молдова</Text>
          </TouchableOpacity>
          <TouchableOpacity style={searchPageStyle.news_item_bottom_block}>
            <Text style={searchPageStyle.news_item_bottom_block_text}>ЕС</Text>
          </TouchableOpacity>
        </View>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={searchPageStyle.input_container}>
        <TextInput
          style={searchPageStyle.input}
          value={inputText}
          onChangeText={handleChangeText}
          onSubmitEditing={handlerInputButtonPress}
          placeholder="Поиск..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity
          style={searchPageStyle.cross_wrapper}
          onPress={handlerClearInput}
        >
          <Image
            style={searchPageStyle.cross}
            source={require('../../assets/icons/search/cross.png')}/>
        </TouchableOpacity>
      </View>
      <View style={searchPageStyle.shown_container}>
        {amount === 0 ? (
          <Text style={searchPageStyle.not_found_text}>Ничего не найдено :(</Text>
        ) : (
          <Text>Показано 1-{newsCount} из {amount}</Text>
        )}
      </View>
      <View style={searchPageStyle.news_container}>
        {renderThreeNews()}
      </View>
      { amount !== 0 ? (
          <TouchableOpacity
            onPress={handlerButtonMoreNews}
            style={searchPageStyle.button_container}>
            <Text style={searchPageStyle.button}>Еще 3 новости</Text>
          </TouchableOpacity>
      ) : (
        <Text></Text>
      ) }
    </View>
  )
}
