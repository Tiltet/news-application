import { Image, Text, View } from "react-native";
import { weatherStile } from "./weatherStile";
import { useState } from "react";

export function Weather() {

  const [ currentDate, setCurrentDate ] = useState(new Date());

  // Функция для форматирования даты с ведущими нулями
  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return (
      <View>
        <Text style={weatherStile.weather_list_items_item_data}>{day}.{month}.{year}</Text>
      </View>
    )
  };

  // РЕНДЕРИТ ДНИ НЕДЕЛИ
  const renderDays = () => {
    const days = Array.from({ length: 7 }, (_, index) => index + 1);
    return days.map((item, index) => (
      <View id={index} style={weatherStile.weather_list_items_item}>
        <View style={weatherStile.weather_list_items_item_border}>
          {formatDate(currentDate)}
        </View>
        <View style={weatherStile.weather_list_items_item_max}>
          <Text style={weatherStile.weather_list_items_item_max_text}>16°</Text>
          <Image
            style={weatherStile.weather_list_items_item_max_image}
            source={require('../../assets/icons/header/sun.png')}
          />
        </View>
        <View style={weatherStile.weather_list_items_item_max}>
          <Text style={weatherStile.weather_list_items_item_max_text}>6°</Text>
          <Image
            style={weatherStile.weather_list_items_item_max_image}
            source={require('../../assets/icons/header/sun.png')}
          />
        </View>
      </View>
    ))
  }

  return (
    <View style={weatherStile.container}>

      {/* ЗАГОЛОВОК С ГОРОДОМ */}
      <View style={weatherStile.title_block}>
        <Text style={weatherStile.title_text}>Москва</Text>
        <Image
          style={weatherStile.title_image}
          source={require("../../assets/icons/weather/map.png")}
        />
      </View>

      {/* БЛОК С ПОГОДОЙ */}
      <View style={weatherStile.weather_blocks}>

        {/* ЛЕВЫЙ БЛОК */}
        <View style={weatherStile.weather_left_block}>
          <Image
            style={weatherStile.weather_left_block_image}
            source={require("../../assets/icons/header/sun.png")}
          />
        </View>

        {/* ЦЕНТРАЛЬНЫЙ БЛОК */}
        <View style={weatherStile.weather_center_block}>
          <Text style={weatherStile.weather_center_block_title}>11°</Text>
          <View>
            <Text style={weatherStile.weather_center_block_text}>16° / 6°</Text>
          </View>
        </View>

        {/* ПРАВЫЙ БЛОК */}
        <View style={weatherStile.weather_right_block}>
          <View style={weatherStile.weather_right_block_line}>
            <Image
              style={[weatherStile.weather_right_block_icon, { width: 27, height: 25 }]}
              source={require("../../assets/icons/weather/wind.png")}
            />
            <Text style={weatherStile.weather_right_block_text}>35 м/с</Text>
          </View>
          <View style={weatherStile.weather_right_block_line}>
            <Image
              style={[weatherStile.weather_right_block_icon, { width: 25, height: 25 }]}
              source={require("../../assets/icons/weather/wet.png")}
            />
            <Text style={weatherStile.weather_right_block_text}>44%</Text>
          </View>
          <View style={weatherStile.weather_right_block_line}>
            <Image
              style={[weatherStile.weather_right_block_icon, { width: 26, height: 25 }]}
              source={require("../../assets/icons/weather/rain.png")}
            />
            <Text style={weatherStile.weather_right_block_text}>31%</Text>
          </View>
        </View>

      </View>

      {/* БЛОК С ПОГОДОЙ */}
      <View style={weatherStile.weather_list}>
        <Text style={weatherStile.weather_list_title}>Погода на неделю:</Text>
        <View style={weatherStile.weather_list_items}>
          {renderDays()}
        </View>
      </View>

    </View>
  )
}
