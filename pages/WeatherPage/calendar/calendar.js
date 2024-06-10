import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { calendarStyle } from "./calendarStyle";
import { monthStatic } from "./staticCalendar";
import { Calendar } from 'react-native-calendars';

export function CalendarWeather() {

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

  return (
    <View style={calendarStyle.container}>
      <Calendar
          style={{
              borderRadius: 8,
              backgroundColor: '#F5F5F5',
              fontSize: 28,
          }}
          onMonthChange={(month) => {
              console.log('Месяц изменен:', month.month);
          }}
          theme={{
              backgroundColor: '#F5F5F5',
              calendarBackground: '#F5F5F5',
              textSectionTitleColor: '#666666',
              selectedDayBackgroundColor: '#007aff',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#fff',
              todayBackgroundColor: '#007aff',
              dayTextColor: '#333333',
              textDisabledColor: '#999999',
              dotColor: '#007aff',
              selectedDotColor: '#ffffff',
              arrowColor: '#007aff',
              disabledArrowColor: '#cccccc',
          }}
      />
    </View>
  )
}
