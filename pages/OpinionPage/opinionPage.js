import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView, VirtualizedList } from "react-native";
import { opinionPageStyle } from "./opinionPageStyle";
import staticOpinions from "../../static/staticOpinions";
import { styles } from "../../style";
import staticOpinionNews from "../../static/staticOpinionNews";

export function OpinionPage() {

  const [showList, setShowList] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [pollsCount, setPollsCount] = useState(3);
  const [news, setNews] = useState(staticOpinionNews);

  const toggleList = () => {
    setShowList(!showList);
  };

  const selectOption = (value) => {
    setSelectedValue(value);
    setShowList(false);
  };

  const handlerButtonMoreNews = () => {
    setPollsCount(pollsCount + 3);
  }

  // РЕНДЕРИТ НОВОСТИ
  const renderPolls = () => {
    return news.slice(0, pollsCount).map((item, index) => (
        <View>
          {/*<Text>{selectedValue}</Text>*/}
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
        <TouchableOpacity style={opinionPageStyle.selectedOption} onPress={toggleList}>
          <Text style={opinionPageStyle.text}>{selectedValue || 'Экономика'}</Text>
          <Image
            style={opinionPageStyle.arrow}
            source={require('../../assets/icons/opinion/arrowUp.png')}
          />
        </TouchableOpacity>
        {showList && (
          <View style={opinionPageStyle.listContainer}>
            <FlatList
              data={staticOpinions}
              keyExtractor={(item) => item.label}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={opinionPageStyle.option}
                  onPress={() => selectOption(item.label)}
                >
                  <Text style={opinionPageStyle.text_counter}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
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
