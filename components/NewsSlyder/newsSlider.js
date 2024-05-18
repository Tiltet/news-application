import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Swiper from 'react-native-swiper';
import { newsSliderStyle } from "../../styles/Components/newsSlider/newsSliderStyle";

export function NewsSlider( {swiperNews} ) {

  const images = [
    require('../../assets/img/flag.png'),
    require('../../assets/img/mainBlockImg.png'),
  ];

  const renderSlides = () => {
    return swiperNews.map((item) => (
      <View key={item.id} style={newsSliderStyle.slider_block}>
        <Image style={newsSliderStyle.image} source={require('../../assets/img/newsImg.png')} />
        <TouchableOpacity style={newsSliderStyle.slider_block_text}>
          <Text style={newsSliderStyle.slider_block_title}>{item.title}</Text>
          <Text numberOfLines={2} ellipsizeMode="tail" style={newsSliderStyle.slider_block_description}>
              {item.description.length > 100
                ? item.description.substring(0, 100) + "..."
                : item.description}
          </Text>
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
