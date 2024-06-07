import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { opinionPageStyle } from "./opinionPageStyle";
import { styles } from "../../style";
import staticOpinionNews from "../../static/staticOpinionNews";
import {Dropdown} from "../../components/Dropdown/dropdown";

export function OpinionPage() {

  const [selectedValue, setSelectedValue] = useState('Экономика');
  const [pollsCount, setPollsCount] = useState(3);
  const [news, setNews] = useState(staticOpinionNews);

  const selectOption = (index, value) => {
    setSelectedValue(value);
  };

  const handlerButtonMoreNews = () => {
    setPollsCount(pollsCount + 3);
  }

  // РЕНДЕРИТ НОВОСТИ
  const renderPolls = () => {
    return news.slice(0, pollsCount).map((item, index) => (
        <View key={index}>
          <View style={opinionPageStyle.poll_block}>
            <Text style={opinionPageStyle.title}>Как вы относитесь к этому?</Text>
            <Text style={opinionPageStyle.description}>Премьер-министр Молдовы одобрил вступление в ЕС</Text>
            <View style={opinionPageStyle.vote_block}>
              <View style={opinionPageStyle.votes}>
                <TouchableOpacity style={opinionPageStyle.vote}>
                  <Image
                    style={{width: 30, height: 30}}
                    source={require('../../assets/icons/poll/unlike.png')}
                  />
                  <Text style={opinionPageStyle.vote_text}>Не поддерживаю</Text>
                </TouchableOpacity>
                <TouchableOpacity style={opinionPageStyle.vote}>
                  <Image
                    style={{width: 30, height: 30}}
                    source={require('../../assets/icons/poll/like.png')}
                  />
                  <Text style={opinionPageStyle.vote_text}>Поддерживаю</Text>
                </TouchableOpacity>
                <TouchableOpacity style={opinionPageStyle.vote}>
                  <Image
                    style={{width: 30, height: 30}}
                    source={require('../../assets/icons/poll/normal.png')}
                  />
                  <Text style={opinionPageStyle.vote_text}>Нейтрально</Text>
                </TouchableOpacity>
              </View>
              <Image
                style={opinionPageStyle.image}
                source={require('../../assets/img/newsImg.png')}
              />
            </View>
          </View>
        </View>
      ))
  }

  return (
    <View style={styles.container}>
      <View style={opinionPageStyle.container}>

        <View style={{ width: "100%" }}>
          <Dropdown
              categories={['Экономика', 'Политика', 'Бизнес', 'Мировые новости']}
              selectOption={selectOption}
              selectedValue={selectedValue}
          />
        </View>

        <Text style={opinionPageStyle.count}>24534 опроса</Text>
      </View>

      {renderPolls(selectedValue)}

      <TouchableOpacity
        style={opinionPageStyle.button}
        onPress={handlerButtonMoreNews}
      >
        <Text style={opinionPageStyle.button_text}>
          Еще 3 опроса
        </Text>
      </TouchableOpacity>
    </View>
  );
}
