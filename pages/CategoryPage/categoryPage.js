import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { handleBusiness, handleEconomy, handlePolitics, handleWorldNews } from "./categoryPageRequest";
import { styles } from "../../style";
import { categoryPageStyle } from "./categoryPageStyle";
import {Dropdown} from "../../components/Dropdown/dropdown";
import {newsPageLink} from "../NewsPage/newsPageLink";

export function CategoryPage( {category } ) {

  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("За все время");
  const [size, setSize] = useState(5);
  const handlerNewsClick = newsPageLink();

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

  const handlerMoreNews = () => {
    setSize(size + 5)
  }

  const selectCategory = (index, category) => {
    setSelectedCategory(category);
  };

  // ФУНКЦИЯ РЕНДЕРИНГА НОВОСТЕЙ
  const renderNews = () => {
    return data.slice(0,size).map((item) => (
      <View style={categoryPageStyle.news_item} key={item.id}>
        <View style={categoryPageStyle.news_item_top}>
          <TouchableOpacity style={categoryPageStyle.news_block_text} onPress={() => handlerNewsClick(item.id)}>
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

  return (
    <View style={styles.container}>
      <Text style={categoryPageStyle.title}>{title}</Text>
      <View style={categoryPageStyle.header_container}>
        <View style={categoryPageStyle.header_count}>
          <Text style={categoryPageStyle.header_count_text}>{data.length} </Text>
          <Text style={categoryPageStyle.header_count_text}>статьей</Text>
        </View>
          <View style={{ width: "60%" }}>
            <Dropdown
                categories={["За период", "За неделю", "За месяц", "За год", "За все время"]}
                selectOption={selectCategory}
                selectedValue={selectedCategory}
            />
          </View>
      </View>

      {renderNews()}

      <TouchableOpacity
        style={categoryPageStyle.button}
        onPress={() => handlerMoreNews()}
      >
        <Text style={categoryPageStyle.button_text}>Еще 5 статей</Text>
      </TouchableOpacity>
    </View>
  )
}
