import { Image, Text, View } from "react-native";
import { weatherStile } from "./weatherStile";
import { useEffect, useState } from "react";
import { handlerWeather } from "../weatherPageRequest";
import * as Location from 'expo-location';

export function Weather() {

  const [ currentDate, setCurrentDate ] = useState(new Date());
  const [ data, setData ] = useState({});
  const [ city, setCity ] = useState('');
  const [ errorMsg, setErrorMsg ] = useState('');

  useEffect(() => {

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      const reverseGeocodedLocation = await Location.reverseGeocodeAsync({ latitude, longitude });
      setCity(reverseGeocodedLocation[0].city);
    })();

    handlerWeather()
      .then(data => {
        setData(data)
      })
      .catch(error => {
        console.log('Ошибка при получении данных Погоды:', error);
      });
  }, [])

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
    return (
      <View style={weatherStile.weather_list_items}>
        <View style={weatherStile.weather_list_items_item}>
          <View style={weatherStile.weather_list_items_item_border}>
            <Text style={weatherStile.weather_list_items_item_data}>{data.dateOne}</Text>
          </View>
          <View style={weatherStile.weather_list_items_item_max}>
            <Text style={weatherStile.weather_list_items_item_max_text}>{data.dayTemperatureOne}°</Text>
            <Image
              style={weatherStile.weather_list_items_item_max_image}
              source={require('../../../assets/icons/header/sun.png')}
            />
          </View>
          <View style={weatherStile.weather_list_items_item_max}>
            <Text style={weatherStile.weather_list_items_item_max_text}>{data.nightTemperatureOne}°</Text>
            <Image
              style={weatherStile.weather_list_items_item_max_image}
              source={require('../../../assets/icons/header/sun.png')}
            />
          </View>
        </View>

        <View style={weatherStile.weather_list_items_item}>
          <View style={weatherStile.weather_list_items_item_border}>
            <Text style={weatherStile.weather_list_items_item_data}>{data.dateTwo}</Text>
          </View>
          <View style={weatherStile.weather_list_items_item_max}>
            <Text style={weatherStile.weather_list_items_item_max_text}>{data.dayTemperatureTwo}°</Text>
            <Image
              style={weatherStile.weather_list_items_item_max_image}
              source={require('../../../assets/icons/header/sun.png')}
            />
          </View>
          <View style={weatherStile.weather_list_items_item_max}>
            <Text style={weatherStile.weather_list_items_item_max_text}>{data.nightTemperatureTwo}°</Text>
            <Image
              style={weatherStile.weather_list_items_item_max_image}
              source={require('../../../assets/icons/header/sun.png')}
            />
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={weatherStile.container}>

      {/* ЗАГОЛОВОК С ГОРОДОМ */}
      <View style={weatherStile.title_block}>
        <Text style={weatherStile.title_text}>{city}</Text>
        <Image
          style={weatherStile.title_image}
          source={require("../../../assets/icons/weather/map.png")}
        />
      </View>

      {/* БЛОК С ПОГОДОЙ */}
      <View style={weatherStile.weather_blocks}>

        {/* ЛЕВЫЙ БЛОК */}
        <View style={weatherStile.weather_left_block}>
          <Image
            style={weatherStile.weather_left_block_image}
            source={require("../../../assets/icons/header/sun.png")}
          />
        </View>

        {/* ЦЕНТРАЛЬНЫЙ БЛОК */}
        <View style={weatherStile.weather_center_block}>
          <Text style={weatherStile.weather_center_block_title}>{data.currentTemperature}°</Text>
          <View>
            <Text style={weatherStile.weather_center_block_text}>{data.dayTemperature} / {data.nightTemperature}°</Text>
          </View>
        </View>

        {/* ПРАВЫЙ БЛОК */}
        <View style={weatherStile.weather_right_block}>
          <View style={weatherStile.weather_right_block_line}>
            <Image
              style={[weatherStile.weather_right_block_icon, { width: 27, height: 25 }]}
              source={require("../../../assets/icons/weather/wind.png")}
            />
            <Text style={weatherStile.weather_right_block_text}>{data.windMPH} м/с</Text>
          </View>
          <View style={weatherStile.weather_right_block_line}>
            <Image
              style={[weatherStile.weather_right_block_icon, { width: 25, height: 25 }]}
              source={require("../../../assets/icons/weather/wet.png")}
            />
            <Text style={weatherStile.weather_right_block_text}>{data.humidity}%</Text>
          </View>
          <View style={weatherStile.weather_right_block_line}>
            <Image
              style={[weatherStile.weather_right_block_icon, { width: 26, height: 25 }]}
              source={require("../../../assets/icons/weather/rain.png")}
            />
            <Text style={weatherStile.weather_right_block_text}>{data.chanceOfRain}%</Text>
          </View>
        </View>

      </View>

      {/* БЛОК С ПОГОДОЙ */}
      <View style={weatherStile.weather_list}>
        <Text style={weatherStile.weather_list_title}>Погода на неделю:</Text>
        {renderDays()}
      </View>

    </View>
  )
}
