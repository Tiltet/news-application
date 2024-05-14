import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Swiper from 'react-native-swiper';
import { newsSliderStyle } from "../../styles/newSlyder/newsSliderStyle";

export function NewsSlider() {
  const images = [
    require('../../assets/img/flag.png'),
    require('../../assets/img/mainBlockImg.png'),
  ];

  const renderSlides = () => {
    return images.map((image, index) => (
      <View key={index} style={newsSliderStyle.slider_block}>
        <Image style={newsSliderStyle.image} source={image} />
        <TouchableOpacity style={newsSliderStyle.slider_block_text}>
          <Text style={newsSliderStyle.slider_block_title}>Обзор недели</Text>
          <Text style={newsSliderStyle.slider_block_description}>Лидер левой партии призвал Турцию не умирать за грязные интересы США</Text>
        </TouchableOpacity>
      </View>
    ));
  };

  return (
    <Swiper
      style={newsSliderStyle.slider}
      showsPagination={false}
      autoplay={true}
      loop={true}
    >
      {renderSlides()}
    </Swiper>
  );
}
