import React, { useEffect, useState } from 'react';
import { Text, View } from "react-native";
import { optionsStyle } from "./optionsStyle";
import { optionsCashRequest, optionsCryptoRequest } from "./optionsRequest";

export function Options({ currencyId, category }) {

    const [ currencyInfo, setCurrencyInfo ] = useState([
        {
            past: 0,
            present: 0,
            average: 0,
            weeklyMin: 0,
            weeklyMax: 0,
            monthlyMin: 0,
            monthlyMax: 0,
            now: 0,
        }
    ]);

    useEffect(() => {
        if (category === "cash") {
            optionsCashRequest(currencyId)
                .then(res => {
                    setCurrencyInfo(res)
                })
                .catch(error => {
                    console.error(error)
                })
        } else if (category === "crypto") {
            optionsCryptoRequest(currencyId)
                .then(res => {
                    setCurrencyInfo(res)
                })
                .catch(error => {
                    console.error(error)
                })
        }
    }, []);

    return(
        <View style={optionsStyle.container}>
            <View style={optionsStyle.list}>
                <View style={optionsStyle.list_item}>
                    <Text style={optionsStyle.list_item_text}>Прошлое значение</Text>
                    <Text style={optionsStyle.list_item_text}>{currencyInfo[0].past}</Text>
                </View>
                <View style={optionsStyle.list_item}>
                    <Text style={optionsStyle.list_item_text}>Настоящее значение</Text>
                    <Text style={optionsStyle.list_item_text}>{currencyInfo[0].present}</Text>
                </View>
                <View style={optionsStyle.list_item}>
                    <Text style={optionsStyle.list_item_text}>Среднее значение</Text>
                    <Text style={optionsStyle.list_item_text}>{currencyInfo[0].average}</Text>
                </View>
                <View style={optionsStyle.list_item}>
                    <Text style={optionsStyle.list_item_text}>Недельный диапазон</Text>
                    <Text style={optionsStyle.list_item_text}>{currencyInfo[0].weeklyMin} - {currencyInfo[0].weeklyMax}</Text>
                </View>
                <View style={optionsStyle.list_item}>
                    <Text style={optionsStyle.list_item_text}>Месячный диапазон</Text>
                    <Text style={optionsStyle.list_item_text}>{currencyInfo[0].monthlyMin} - {currencyInfo[0].monthlyMax}</Text>
                </View>
                <View style={optionsStyle.list_item}>
                    <Text style={optionsStyle.list_item_text}>Прямо сейчас</Text>
                    <Text style={optionsStyle.list_item_text}>{currencyInfo[0].present}</Text>
                </View>
            </View>
        </View>
    )
}
