import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { handleBusiness, handleEconomy, handlePolitics, handleWorldNews } from "./categoryPageRequest";
import { styles } from "../../style";
import { categoryPageStyle } from "./categoryPageStyle";

export function CategoryPage( {category } ) {

  const options = ['За период', 'За неделю', 'За месяц', 'За год', 'За все время'];
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [visible, setVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(options[0]);
  const [size, setSize] = useState(5);

  useEffect(() => {
    switch (category) {
      case 1:
        setTitle("Экономика")
        handleEconomy()
          .then(data => {
            setData(data)
          })
          .catch(error => {
            console.log('Ошибка при получении данных Экономика:', error);
          });
        break;
      case 2:
        setTitle("Политика")
        handlePolitics()
          .then(data => {
            setData(data)
          })
          .catch(error => {
            console.log('Ошибка при получении данных Политика:', error);
          });
        break
      case 3:
        setTitle("Бизнес")
        handleBusiness()
          .then(data => {
            setData(data)
          })
          .catch(error => {
            console.log('Ошибка при получении данных Бизнес:', error);
          });
        break
      case 4:
        setTitle("Мировые новости")
        handleWorldNews()
          .then(data => {
            console.log(data);
            setData(data)
          })
          .catch(error => {
            console.log('Ошибка при получении данных Мировые новости:', error);
          });
        break
      default:
        console.log('Error')
        break
    }
  }, []);


  // ФУНКЦИЯ РЕНДЕРИНГА НОВОСТЕЙ
  const renderNews = () => {
    return data.slice(0,size).map((item) => (
      <View style={categoryPageStyle.news_item} key={item.id}>
        <View style={categoryPageStyle.news_item_top}>
          <TouchableOpacity style={categoryPageStyle.news_block_text}>
            <Text numberOfLines={4} style={categoryPageStyle.news_block_text_text}>
              {item.title.length > 100
                ? item.title.substring(0, 100) + "..."
                : item.title}
            </Text>
            <Text>{item.createdAtTime}</Text>
          </TouchableOpacity>
          <View style={categoryPageStyle.news_block_img}>
            <Image
              style={categoryPageStyle.image}
              source={{ uri: item.fullImgUrl }}
            />
          </View>
        </View>
        <View style={categoryPageStyle.news_item_bottom}>
          <TouchableOpacity style={categoryPageStyle.news_item_bottom_block_first}>
            <Text style={categoryPageStyle.news_item_bottom_block_text_first}>Экономика</Text>
          </TouchableOpacity>
          <TouchableOpacity style={categoryPageStyle.news_item_bottom_block}>
            <Text style={categoryPageStyle.news_item_bottom_block_text}>Молдова</Text>
          </TouchableOpacity>
          <TouchableOpacity style={categoryPageStyle.news_item_bottom_block}>
            <Text style={categoryPageStyle.news_item_bottom_block_text}>ЕС</Text>
          </TouchableOpacity>
        </View>
      </View>
    ))
  }

  // ОБРАБОТЧИК НАЖАНИЯ НА ВЫПАДАЮЩИЙ СПИСОК
  const handlerListClicked = (item) => {
    setVisible(!visible)
    setSelectedValue(item)
  }

  // РЕНДЕРИТ ВЫПАДАЮЩИЙ СПИСОК
  const renderList = () => {
    return options.map((item) => (
      <TouchableOpacity onPress={() => handlerListClicked(item)} style={categoryPageStyle.header_list_text_container}>
        <Text style={categoryPageStyle.header_list_text}>{item}</Text>
      </TouchableOpacity>
    ))
  }

  // ОБРАБОТЧИК НАЖАНИЯ КНОПКИ ЕЩЕ 5 СТАТЕЙ
  const handlerMoreNews = () => {
    setSize(size + 5)
  }

  return (
    <View style={styles.container}>
      <Text style={categoryPageStyle.title}>{title}</Text>
      <View style={categoryPageStyle.header_container}>
        <View style={categoryPageStyle.header_count}>
          <Text style={categoryPageStyle.header_count_text}>{data.length} </Text>
          <Text style={categoryPageStyle.header_count_text}>статьей</Text>
        </View>
        <SafeAreaView>
          <TouchableOpacity style={categoryPageStyle.header_list} onPress={() => setVisible(!visible)}>
            <Text>{selectedValue}</Text>
            <Image
              style={categoryPageStyle.header_list_image}
              source={require("../../assets/icons/opinion/arrowUp.png")}
            />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
      {renderNews()}

      <TouchableOpacity
        style={categoryPageStyle.button}
        onPress={() => handlerMoreNews()}
      >
        <Text style={categoryPageStyle.button_text}>Еще 5 статей</Text>
      </TouchableOpacity>

      {/* Выпадающий список */}
      { visible ? (
        <View style={categoryPageStyle.header_list_drop}>
          {renderList()}
        </View>
      ) : (
        <Text style={{ position: "absolute" }}></Text>
      )}
    </View>
  )
}
