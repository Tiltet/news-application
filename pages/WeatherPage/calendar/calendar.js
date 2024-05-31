import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { calendarStyle } from "./calendarStyle";
import { daysStatic, monthStatic } from "./staticCalendar";

export function Calendar() {

  const [currentDate, setCurrentDate] = useState(new Date());
  const [ data, setData ] = useState(monthStatic)
  const [ month, setMonth ] = useState('')
  const [ days, setDays ] = useState('')

  useEffect(() => {
    const currentMonth = data.find(item => item.id === currentDate.getMonth() + 1);
    if (currentMonth) {
      setMonth(currentMonth.month)
      setDays(currentMonth.days)
    }
  })

  // РЕНДЕРИТ ДНИ ОТ 1 ДО 30/31
  const renderMonthDays = () => {
    const day = Array.from({ length: days }, (_, index) => index + 1);
    return day.map((item) => (
      <View style={calendarStyle.month_days_day}>
        <Text style={calendarStyle.month_days_day_text}>{item}</Text>
      </View>
      )
    );
  };

  // РЕНДЕРИТ ДНИ ОТ 1 ДО 30/31
  const renderDays = () => {
    return daysStatic.map((item) => (
      <View id={item} style={calendarStyle.days_day}>
        <Text style={calendarStyle.days_day_text}>{item}</Text>
      </View>
    ))
  }

  return (
    <View style={calendarStyle.container}>
      <View style={calendarStyle.calendar}>

        <View style={calendarStyle.calendar_top}>
          <Text style={calendarStyle.calendar_top_month}>{month} 2024</Text>
          <View style={calendarStyle.calendar_top_icons}>
            <TouchableOpacity>
              <Image
                style={{ width: 20, height: 20, marginRight: 10 }}
                source={require("../../../assets/icons/weather/arrow_left.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{ width: 20, height: 20, marginRight: 10 }}
                source={require("../../../assets/icons/weather/arrow_rigth.png")}
              />
            </TouchableOpacity>
          </View>
        </View>


        <View style={calendarStyle.days}>
          {renderDays()}
        </View>

        <View style={calendarStyle.month_days}>
          {renderMonthDays()}
        </View>

      </View>
    </View>
  )
}
