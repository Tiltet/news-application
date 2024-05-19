import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/style";
import { searchPageStyle } from "../../styles/Pages/Search/searchPageStyle";

export function SearchPage() {
  const [newsCount, setNewsCount] = useState(3);

  const renderThreeNews = () => {
    let newsItems = [];
    for (let i = 0; i < newsCount; i++) {
      newsItems.push(renderSearchNew());
    }

    return (
      <View>{newsItems}</View>
    );
  }

  const renderSearchNew = () => {
    return(
      <View style={searchPageStyle.news_item}>
        <View style={searchPageStyle.news_item_top}>
          <TouchableOpacity style={searchPageStyle.news_block_text}>
            <Text style={searchPageStyle.news_block_text_title}>Политика</Text>
            <Text style={searchPageStyle.news_block_text_text}>Премьер-министр Молдовы одобрил вступление в ЕС</Text>
            <Text>20:19</Text>
          </TouchableOpacity>
          <View style={searchPageStyle.news_block_img}>
            <Image style={searchPageStyle.image} source={require('../../assets/img/flag.png')}/>
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
    )
  }

  return (
    <View style={styles.container}>
      <View style={searchPageStyle.input_container}>
        <TextInput
          style={searchPageStyle.input}
          placeholder="Поиск..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={searchPageStyle.cross_wrapper}>
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
