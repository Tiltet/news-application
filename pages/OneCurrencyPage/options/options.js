import React, {useEffect, useState} from 'react';
import { Text, View } from "react-native";
import { optionsStyle } from "./optionsStyle";
import axios from "axios";

export function Options({ currencyId }) {

    const [ currencyInfo, setCurrencyInfo ] = useState({
        past: 0,
        present: 0,
        average: 0,
        weekly: 0,
        monthly: 0,
        now: 0,
    });
    const [ data, setData ] = useState("")

    useEffect(() => {

        let sum = 0;
        let weekly = 0;
        let monthly = 0;

        axios.get("http://localhost:4000/currency/params/" + currencyId + "?pageSize=15")
            .then(res => {
                console.log("http://localhost:4000/currency/params/" + currencyId + "?pageSize=15" + " - good");
                res.data.forEach((item, index) => {
                    if (index < 7)
                        weekly += parseFloat(item.rate)
                    if (index < 10)
                        monthly += parseFloat(item.rate)
                    sum += parseFloat(item.rate)
                })
                setCurrencyInfo({
                    past: parseFloat(res.data[1].rate).toFixed(4),
                    present: parseFloat(res.data[0].rate).toFixed(4),
                    average: (sum / 15).toFixed(4),
                    weekly: (weekly / 7).toFixed(4),
                    monthly: (monthly / 10).toFixed(4),
                    now: parseFloat(res.data[1].rate).toFixed(4),
                });
            })
            .catch(error => {
                console.log(error);
            })
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
                    <Text style={optionsStyle.list_item_text}>{currencyInfo.weekly}</Text>
                </View>
                <View style={optionsStyle.list_item}>
                    <Text style={optionsStyle.list_item_text}>Месячный диапазон</Text>
                    <Text style={optionsStyle.list_item_text}>{currencyInfo.monthly}</Text>
                </View>
                <View style={optionsStyle.list_item}>
                    <Text style={optionsStyle.list_item_text}>Прямо сейчас</Text>
                    <Text style={optionsStyle.list_item_text}>{currencyInfo.present}</Text>
                </View>
            </View>
        </View>
    )
}
