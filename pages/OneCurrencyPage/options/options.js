import React, { useEffect, useState } from 'react';
import { Text, View } from "react-native";
import { optionsStyle } from "./optionsStyle";
import axios from "axios";

export function Options({ currencyId, check }) {

    const [ currencyInfo, setCurrencyInfo ] = useState({
        past: 0,
        present: 0,
        average: 0,
        weeklyMin: 0,
        weeklyMax: 0,
        monthlyMin: 0,
        monthlyMax: 0,
        now: 0,
    });

    useEffect(() => {
        if (check === "cash") {
            axios.get("http://localhost:4000/currency/params/" + currencyId + "?pageSize=15")
                .then(res => {

                    console.log("http://localhost:4000/currency/params/" + currencyId + "?pageSize=15" + " - good");

                    let sum = 0;
                    let weeklyMin = parseFloat(res.data[0].rate).toFixed(4);
                    let weeklyMax = parseFloat(res.data[0].rate).toFixed(4);
                    let monthlyMin = parseFloat(res.data[0].rate).toFixed(4);
                    let monthlyMax = parseFloat(res.data[0].rate).toFixed(4);

                    res.data.forEach((item, index) => {

                        const number = parseFloat(item.rate).toFixed(4)

                        if (index < 6)
                            if (number > weeklyMax)
                                weeklyMax = number;
                        if (number < weeklyMin)
                            weeklyMin = number;
                        if (index < 10)
                            if (number> monthlyMax)
                                monthlyMax = number;
                        if (number < monthlyMin)
                            monthlyMin = number;
                        sum += parseFloat(number)
                    })

                    setCurrencyInfo({
                        past: parseFloat(res.data[1].rate).toFixed(4),
                        present: parseFloat(res.data[0].rate).toFixed(4),
                        average: (sum / 15).toFixed(4),
                        weeklyMin: weeklyMin,
                        weeklyMax: weeklyMax,
                        monthlyMin: monthlyMin,
                        monthlyMax: monthlyMax,
                        now: parseFloat(res.data[1].rate).toFixed(4),
                    });
                })
                .catch(error => {
                    console.log(error);
                })
        } else if (check === "crypto") {
            axios.get("http://localhost:4000/crypto/full/" + currencyId + "?pageSize=15")
                .then(res => {

                    console.log("http://localhost:4000/crypto/full/" + currencyId + "?pageSize=15" + " - good");

                    let sum = 0;
                    let weeklyMin = parseFloat(res.data[0].rate).toFixed(4);
                    let weeklyMax = parseFloat(res.data[0].rate).toFixed(4);
                    let monthlyMin = parseFloat(res.data[0].rate).toFixed(4);
                    let monthlyMax = parseFloat(res.data[0].rate).toFixed(4);

                    res.data.forEach((item, index) => {

                        const number = parseFloat(item.rate).toFixed(4)

                        if (index < 6)
                            if (number > weeklyMax)
                                weeklyMax = number;
                        if (number < weeklyMin)
                            weeklyMin = number;
                        if (index < 10)
                            if (number> monthlyMax)
                                monthlyMax = number;
                        if (number < monthlyMin)
                            monthlyMin = number;
                        sum += parseFloat(number)
                    })

                    setCurrencyInfo({
                        past: parseFloat(res.data[1].rate).toFixed(4),
                        present: parseFloat(res.data[0].rate).toFixed(4),
                        average: (sum / 15).toFixed(4),
                        weeklyMin: weeklyMin,
                        weeklyMax: weeklyMax,
                        monthlyMin: monthlyMin,
                        monthlyMax: monthlyMax,
                        now: parseFloat(res.data[1].rate).toFixed(4),
                    });
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }, []);

    return(
        <View style={optionsStyle.container}>
            <View style={optionsStyle.list}>
                <View style={optionsStyle.list_item}>
                    <Text style={optionsStyle.list_item_text}>Прошлое значение</Text>
                    <Text style={optionsStyle.list_item_text}>{currencyInfo.past}</Text>
                </View>
                <View style={optionsStyle.list_item}>
                    <Text style={optionsStyle.list_item_text}>Настоящее значение</Text>
                    <Text style={optionsStyle.list_item_text}>{currencyInfo.present}</Text>
                </View>
                <View style={optionsStyle.list_item}>
                    <Text style={optionsStyle.list_item_text}>Среднее значение</Text>
                    <Text style={optionsStyle.list_item_text}>{currencyInfo.average}</Text>
                </View>
                <View style={optionsStyle.list_item}>
                    <Text style={optionsStyle.list_item_text}>Недельный диапазон</Text>
                    <Text style={optionsStyle.list_item_text}>{currencyInfo.weeklyMin} - {currencyInfo.weeklyMax}</Text>
                </View>
                <View style={optionsStyle.list_item}>
                    <Text style={optionsStyle.list_item_text}>Месячный диапазон</Text>
                    <Text style={optionsStyle.list_item_text}>{currencyInfo.monthlyMin} - {currencyInfo.monthlyMax}</Text>
                </View>
                <View style={optionsStyle.list_item}>
                    <Text style={optionsStyle.list_item_text}>Прямо сейчас</Text>
                    <Text style={optionsStyle.list_item_text}>{currencyInfo.present}</Text>
                </View>
            </View>
        </View>
    )
}
