import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import CreatContext from "../../../context/context";
import SearchContext from "../../../context/searchContext";
import { currencyListStyle } from "./currencyListStyle";
import { currencyListRequest } from "./currencyListRequest";

export function CurrencyList() {

    const { index, setIndex } = React.useContext(CreatContext)
    const { searchData, setSearchData } = React.useContext(SearchContext)
    const [ data, setData ] = useState('')

    useEffect(() => {
        currencyListRequest()
            .then(response => {
                setData(response)
            })
            .catch(error => {
                console.error("Ошибка при получение Курса Валют")
            })
    }, []);

    // ОБРАБОТЧИК НАЖАТИЯ НА КНОПКУ ВАЛЮТЫ
    const handlerOneCurrency = (id) => {
        setSearchData(id)
        setIndex(17)
    }

    const renderOneCurrency = ({ id, name ,rate, percentage, difference}) => {
        return (
            <View style={currencyListStyle.line}>
                <TouchableOpacity
                    style={currencyListStyle.line_item}
                    onPress={() => handlerOneCurrency(id)}
                >
                    <Text>{name}</Text>
                </TouchableOpacity>
                <View style={currencyListStyle.line_item}>
                    <Text style={currencyListStyle.line_item_text}>{rate}</Text>
                </View>

                { percentage >= 0 && (
                    <View style={currencyListStyle.line_item}>
                        <AntDesign name="caretup" size={8} color="green" style={{ paddingRight: 5}} />
                        <Text style={currencyListStyle.line_item_text_green}>{percentage}%</Text>
                    </View>
                ) }
                { percentage < 0 && (
                    <View style={currencyListStyle.line_item}>
                        <AntDesign name="caretup" size={8} color="red" style={{ paddingRight: 5}} />
                        <Text style={currencyListStyle.line_item_text_red}>{percentage * -1}%</Text>
                    </View>
                ) }

                { difference < 0 && (
                    <View style={currencyListStyle.line_item}>
                        <Text style={currencyListStyle.line_item_text}>{difference * -1}</Text>
                    </View>
                )}
                { difference >= 0 && (
                    <View style={currencyListStyle.line_item}>
                        <Text style={currencyListStyle.line_item_text}>{difference}</Text>
                    </View>
                )}

                { percentage >= 0 && (
                    <View style={currencyListStyle.line_item}>
                        <AntDesign name="up" size={10} color="red" style={{ paddingRight: 5 }} />
                        <Text style={currencyListStyle.line_item_text_red}>Продавать</Text>
                    </View>
                ) }
                { percentage < 0 && (
                    <View style={currencyListStyle.line_item}>
                        <AntDesign name="up" size={10} color="green" style={{ paddingRight: 5 }} />
                        <Text style={currencyListStyle.line_item_text_green}>Покупать</Text>
                    </View>
                ) }
            </View>
        )
    }

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            <View style={currencyListStyle.container}>
                <View style={currencyListStyle.top_line}>
                    <View style={currencyListStyle.line_item}>
                        <Text style={currencyListStyle.top_line_item_text}>Валюта</Text>
                    </View>
                    <View style={currencyListStyle.line_item}>
                        <Text style={currencyListStyle.top_line_item_text}>Курс</Text>
                    </View>
                    <View style={currencyListStyle.line_item}>
                        <Text style={currencyListStyle.top_line_item_text}>Изменение, %</Text>
                    </View>
                    <View style={currencyListStyle.line_item}>
                        <Text style={currencyListStyle.top_line_item_text}>Изменение</Text>
                    </View>
                    <View style={currencyListStyle.line_item}>
                        <Text style={currencyListStyle.top_line_item_text}>Тех. рейтинг</Text>
                    </View>
                </View>
                {renderOneCurrency({
                    name: "EUR / USD",
                    id: "EURToUSD",
                    rate: parseFloat(data.EURToUSD).toFixed(4),
                    percentage: data.percentageEURToUSD,
                    difference: data.differenceEURToUSD,
                })}
                {renderOneCurrency({
                    name: "USD / JPY",
                    id: "USDToJPY",
                    rate: parseFloat(data.USDToJPY).toFixed(4),
                    percentage: data.percentageUSDToJPY,
                    difference: data.differenceUSDToJPY,
                })}
                {renderOneCurrency({
                    name: "GBP / USD",
                    id: "GBPToUSD",
                    rate: parseFloat(data.GBPToUSD).toFixed(4),
                    percentage: data.percentageGBPToUSD,
                    difference: data.differenceGBPToUSD,
                })}
                {renderOneCurrency({
                    name: "USD / RUB",
                    id: "USDToRUB",
                    rate: parseFloat(data.USDToRUB).toFixed(4),
                    percentage: data.percentageUSDToRUB,
                    difference: data.differenceUSDToRUB,
                })}
                {renderOneCurrency({
                    name: "EUR / RUB",
                    id: "EURToRUB",
                    rate: parseFloat(data.EURToRUB).toFixed(4),
                    percentage: data.percentageEURToRUB,
                    difference: data.differenceEURToRUB,
                })}
                {renderOneCurrency({
                    name: "USD / RON",
                    id: "USDToRON",
                    rate: parseFloat(data.USDToRON).toFixed(4),
                    percentage: data.percentageUSDToRON,
                    difference: data.differenceUSDToRON,
                })}
                {renderOneCurrency({
                    name: "EUR / RON",
                    id: "EURToRON",
                    rate: parseFloat(data.EURToRON).toFixed(4),
                    percentage: data.percentageEURToRON,
                    difference: data.differenceEURToRON,
                })}
            </View>
        </ScrollView>
    )
}
