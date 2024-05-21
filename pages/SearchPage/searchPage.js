import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/style";
import { searchPageStyle } from "../../styles/Pages/Search/searchPageStyle";
import axios from "axios";

export function SearchPage( {searchItem, setSearchItem } ) {
  const [newsCount, setNewsCount] = useState(3);
  const [amount, setAmount] = useState();
  const [data, setData] = useState([]);
  const [dataNews, setDataNews] = useState([]);

  // Отправляем запрос и получаем данные
  /*
  useEffect(() => {
    axios.get('http://localhost:4000/news/search' + '?searchNameTerm=' + searchItem)
      .then(response => {

        setData(response.data);
        setDataNews(response.data.news);
        setAmount(response.data.amount);

        console.log("Найдено новостей - ", response.data.amount);

      })
      .catch(error => {
        console.log(error)
      })
  }, [searchItem]);

   */

  // ОБРАБОТЧИК ДЛЯ НАЖАТИЯ НА КОПКУ ПОИСКА
  const handlerInputButtonPress = () => {
    console.log(searchItem);
    axios.get('http://localhost:4000/news/search' + '?searchNameTerm=' + searchItem)
      .then(response => {
        setData(response.data);
        setDataNews(response.data.news);
        setAmount(response.data.amount);
        console.log("Найдено новостей - ", response.data.amount);
      })
      .catch(error => {
        console.log("Ошибка нажатия на кнопку ввода на странице поиска - ", error)
      })
  }

  // ОБРАБОТЧИК ДЛЯ ОЧИСТКИ ПОЛЯ ВВОДА ИНФОРМАЦИИ
  const handlerClearInput = () => {
    setSearchItem(null);
  }

  // ОБРАБОТЧИК ДЛЯ ИЗМЕНЕНИЯ ПОЛЯ ВВОДА
  const handleChangeText = (newText) => {
    setSearchItem(newText);
  };

  // РЕНДЕРИТ НАЙДЕНЫЕ НОВОСТИ
  const renderThreeNews = () => {
    return dataNews.slice(0, newsCount).map((item, index) => (
      <View id={item.id} key={item.id} style={searchPageStyle.news_item}>
        <View style={searchPageStyle.news_item_top}>
          <TouchableOpacity style={searchPageStyle.news_block_text}>
            <Text style={searchPageStyle.news_block_text_title}>{item.category}</Text>
            <Text style={searchPageStyle.news_block_text_text}>{item.title}</Text>
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
          value={searchItem}
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
        {/*TODO CДЕЛАТЬ НОРМАЛЬНО*/}
        <Text>Показано 1-10 из 123</Text>
      </View>
      <View style={searchPageStyle.news_container}>
        {renderThreeNews()}
      </View>
      <TouchableOpacity
        onPress={() => setNewsCount(newsCount + 3)}
        style={searchPageStyle.button_container}>
        <Text style={searchPageStyle.button}>Еще 3 новости</Text>
      </TouchableOpacity>
    </View>
  )
}
