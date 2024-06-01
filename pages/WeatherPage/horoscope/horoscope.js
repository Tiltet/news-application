import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { horoscopeStile } from "./horoscopeStile";

export function Horoscope() {

  const [ day, setDay ] = useState(true) // true - сегодня, false - завтра

  const handlerButton = (item) => {
    setDay(item)
  }

  return (
    <View style={horoscopeStile.container}>

      {/* ЗАГОЛОВОК */}
      <View style={horoscopeStile.header}>
        <Image
          style={horoscopeStile.header_image}
          source={require('../../../assets/icons/horoscope/scorpion.png')}
        />
        <View style={horoscopeStile.header_text}>
          <Text style={horoscopeStile.header_text_title}>СКОРПИОН</Text>
          <Text style={horoscopeStile.header_text_data}>03.02.2024</Text>
        </View>
      </View>

      {/* СЕГОДНЯ / ЗАВТРА */}
      <View style={horoscopeStile.buttons}>
        <TouchableOpacity onPress={() => handlerButton(true)}>
          { day === true ? (
            <View style={horoscopeStile.button_background}>
              <Text style={horoscopeStile.button_text}>Сегодня</Text>
            </View>
          ) : (
            <View style={horoscopeStile.button_background_checked}>
              <Text style={horoscopeStile.button_text}>Сегодня</Text>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlerButton(false)}>
          { day === true ? (
            <View style={horoscopeStile.button_background_checked}>
              <Text style={horoscopeStile.button_text}>Завтра</Text>
            </View>
          ) : (
            <View style={horoscopeStile.button_background}>
              <Text style={horoscopeStile.button_text}>Завтра</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* ГОРОСКОП */}
      <View style={horoscopeStile.horoscope}>
        <View style={horoscopeStile.horoscope_title_border}>
          <Text style={horoscopeStile.horoscope_title}>Гороскоп</Text>
        </View>

        { day === true ? (
          <Text style={horoscopeStile.horoscope_text}>Сегодня</Text>
        ) : (
          <Text style={horoscopeStile.horoscope_text}>Завтра</Text>
        )}

        </View>

    </View>
  )
}
