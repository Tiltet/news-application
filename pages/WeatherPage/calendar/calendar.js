import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { calendarStyle } from "./calendarStyle";
import { daysStatic, monthStatic } from "./staticCalendar";

export function Calendar() {

  const [ currentDate, setCurrentDate ] = useState(new Date());
  const [ data, setData ] = useState(monthStatic)
  const [ monthNumber, setMonthNumber ] = useState(currentDate.getMonth() + 1)
  const [ month, setMonth ] = useState('')
  const [ days, setDays ] = useState('')

  useEffect(() => {
    const currentMonth = data.find(item => item.id === monthNumber);
    if (currentMonth) {
      setMonth(currentMonth.month)
      setDays(currentMonth.days)
    }
  })

  // РЕНДЕРИТ ДНИ ОТ 1 ДО 30/31
  const renderMonthDays = () => {
    const day = Array.from({ length: days }, (_, index) => index + 1);
    return day.map((item, index) => (
      <View id={index} style={calendarStyle.month_days_day}>
        { index === currentDate.getDate() - 1 && monthNumber === currentDate.getMonth() + 1 ? (
            <View style={calendarStyle.month_days_today}>
              <Text style={calendarStyle.month_days_day_text}>{item}</Text>
            </View>
        ) : (
          <View style={calendarStyle.month_days_not_today}>
            <Text style={calendarStyle.month_days_day_text}>{item}</Text>
          </View>
        ) }
      </View>
      )
    );
  };

  // РЕНДЕРИТ ДНИ ОТ 1 ДО 30/31
  const renderDays = () => {
    return daysStatic.map((item, index) => (
      <View id={index} style={calendarStyle.days_day}>
        <Text style={calendarStyle.days_day_text}>{item}</Text>
      </View>
    ))
  }

  // НАЖАТИЕ НА СТРЕЛКУ ВЛЕВО
  const handlerArrowLeft = () => {
    setMonthNumber(monthNumber - 1)
  }

  // НАЖАТИЕ НА СТРЕЛКУ ВПРАВО
  const handlerArrowRight = () => {
    setMonthNumber(monthNumber + 1)
  }

  return (
    <View style={calendarStyle.container}>
      <View style={calendarStyle.calendar}>

        <View style={calendarStyle.calendar_top}>
          <Text style={calendarStyle.calendar_top_month}>{month} 2024</Text>
          <View style={calendarStyle.calendar_top_icons}>
            <TouchableOpacity onPress={() => handlerArrowLeft()}>
              <Image
                style={{ width: 20, height: 20, marginRight: 10 }}
                source={require("../../../assets/icons/weather/arrow_left.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlerArrowRight()}>
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
