import React from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";
import { mainBlockStyle } from "../../styles/mainBlock/mainBlockStyle";

export default function MainBlock({ bottomNewsThree }) {

  // ВЫВОДИМ НА СТРАНИЦУ ЗАГОЛОВКИ НОВОСТЕЙ
  const renderTopThreeNews = () => {
    return bottomNewsThree.map((item, index) => {
      if (index === 2) {
        return (
          <View style={mainBlockStyle.main_block_border_last} key={item.id}>
            <TouchableOpacity>
              <Text style={mainBlockStyle.main_block_text}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        )
      }
      else if (index === 0) {
        return (
          <View style={mainBlockStyle.main_block_border_first} key={item.id}>
            <TouchableOpacity>
              <Text style={mainBlockStyle.main_block_text}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        )
      }
      else {
        return (
          <View style={mainBlockStyle.main_block_border} key={item.id}>
            <TouchableOpacity>
              <Text style={mainBlockStyle.main_block_text}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        )
      }
    });
  };

  // ВЫВОДИМ ВЕСЬ ГЛАВНЫЙ БЛОК
  return (
    <View style={mainBlockStyle.mainBlock_container}>
      <TouchableOpacity style={mainBlockStyle.mainBlock_mainNews}>
        <Image style={mainBlockStyle.mainBlock_img} source={require('../../assets/img/mainBlockImg.png')}/>
        <Text style={mainBlockStyle.main_block_title}>Лидер левой партии призвал Турцию не умирать за грязные интересы США</Text>
      </TouchableOpacity>
      <View style={mainBlockStyle.main_block_wrapper}>
        {renderTopThreeNews()}
      </View>
    </View>
);
}
