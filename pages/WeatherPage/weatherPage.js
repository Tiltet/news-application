import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "../../style";
import { weatherPageStyle } from "./weatherPageStyle";
import { staticHolidays } from "./staticHolidays";
import { CalendarWeather } from "./calendar/calendar";
import { Weather } from "./weather/weather";
import { Horoscope } from "./horoscope/horoscope";
import { Championship } from "./championship/championship";

export function WeatherPage() {

  const [ holidays, setHolidays ] = useState(staticHolidays)

  // РЕНДЕРИТ СОБЫТИЯ ДНЯ
  const renderHolidays = () => {
    return holidays.slice(0,4).map((item) => (
      <View
          key={item.id}
          style={weatherPageStyle.day_event_holiday}
      >
        <Image
          style={{ width: 25, height: 27 }}
          source={require("../../assets/icons/weather/holiday_blue.png")}
        />
        <Text style={weatherPageStyle.day_event_holiday_text}>
          {item.holiday.length > 60
            ? item.holiday.substring(0, 60) + "..."
            : item.holiday}
        </Text>
      </View>
    ))
  }

  return (
    <View style={styles.container}>
      <View style={weatherPageStyle.day_events}>
        <Text style={weatherPageStyle.day_event_title}>События дня</Text>
        <ScrollView style={weatherPageStyle.day_event_scroll}>
          {renderHolidays()}
        </ScrollView>
      </View>

      {/* КАЛЕНДАРЬ */}
      <View>
        <CalendarWeather/>
      </View>

      {/* ПОГОДА */}
      <View>
        <Weather/>
      </View>

      {/* ГОРОСКОП */}
      <View>
        <Horoscope/>
      </View>

      {/* ЧЕМПИОНАТ */}
      <View>
        <Championship/>
      </View>

    </View>
  )
}
