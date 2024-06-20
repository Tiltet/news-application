import React, {useEffect, useState} from "react";
import {View, Text, ScrollView, TouchableOpacity} from "react-native";
import {currencyRequest} from "./currencyRequest";
import {currencyStyle} from "./currencyStyle";
import {AntDesign} from "@expo/vector-icons";
import CreatContext from "../../../context/context";

export function Currency() {

    const { index, setIndex } = React.useContext(CreatContext)
    const [ data, setData ] = useState('')

    useEffect(() => {
        currencyRequest()
            .then(response => {
                setData(response)
            })
            .catch(error => {
                console.log("Ошибка при получение Курса Валют")
            })
    }, []);

    const renderOneCurrency = ({ name ,rate, percentage, difference}) => {
        return (
            <View style={currencyStyle.line}>
                <TouchableOpacity
                    style={currencyStyle.line_item}
                    onPress={() => setIndex(17)}
                >
                    <Text>EUR / USD</Text>
                </TouchableOpacity>
                <View style={currencyStyle.line_item}>
                    <Text style={currencyStyle.line_item_text}>{rate}</Text>
                </View>

                { percentage >= 0 && (
                    <View style={currencyStyle.line_item}>
                        <AntDesign name="caretup" size={8} color="green" style={{ paddingRight: 5}} />
                        <Text style={currencyStyle.line_item_text_green}>{percentage}%</Text>
                    </View>
                ) }
                { percentage < 0 && (
                    <View style={currencyStyle.line_item}>
                        <AntDesign name="caretup" size={8} color="red" style={{ paddingRight: 5}} />
                        <Text style={currencyStyle.line_item_text_red}>{percentage * -1}%</Text>
                    </View>
                ) }

                <View style={currencyStyle.line_item}>

                    { difference < 0 && (
                        <Text style={currencyStyle.line_item_text}>{difference * -1}</Text>
                    )}
                    { difference >= 0 && (
                        <Text style={currencyStyle.line_item_text}>{difference}</Text>
                    )}

                </View>
                <View style={currencyStyle.line_item}>

                    { percentage >= 0 && (
                        <View style={currencyStyle.line_item}>
                            <AntDesign name="up" size={10} color="red" style={{ paddingRight: 5 }} />
                            <Text style={currencyStyle.line_item_text_red}>Продавать</Text>
                        </View>
                    ) }
                    { percentage < 0 && (
                        <View style={currencyStyle.line_item}>
                            <AntDesign name="up" size={10} color="green" style={{ paddingRight: 5 }} />
                            <Text style={currencyStyle.line_item_text_green}>Покупать</Text>
                        </View>
                    ) }

                </View>
            </View>
        )
    }

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            <View style={currencyStyle.container}>
                <View style={currencyStyle.top_line}>
                    <View style={currencyStyle.line_item}>
                        <Text style={currencyStyle.top_line_item_text}>Валюта</Text>
                    </View>
                    <View style={currencyStyle.line_item}>
                        <Text style={currencyStyle.top_line_item_text}>Курс</Text>
                    </View>
                    <View style={currencyStyle.line_item}>
                        <Text style={currencyStyle.top_line_item_text}>Изменение, %</Text>
                    </View>
                    <View style={currencyStyle.line_item}>
                        <Text style={currencyStyle.top_line_item_text}>Изменение</Text>
                    </View>
                    <View style={currencyStyle.line_item}>
                        <Text style={currencyStyle.top_line_item_text}>Тех. рейтинг</Text>
                    </View>
                </View>
                {renderOneCurrency({
                    name: "EUR / USD",
                    rate: parseFloat(data.EURToUSD).toFixed(4),
                    percentage: data.percentageEURToUSD,
                    difference: data.differenceEURToUSD,
                })}
                {renderOneCurrency({
                    name: "USD / JPY",
                    rate: parseFloat(data.USDToJPY).toFixed(4),
                    percentage: data.percentageUSDToJPY,
                    difference: data.differenceUSDToJPY,
                })}
                {renderOneCurrency({
                    name: "GBP / USD",
                    rate: parseFloat(data.GBPToUSD).toFixed(4),
                    percentage: data.percentageGBPToUSD,
                    difference: data.differenceGBPToUSD,
                })}
                {renderOneCurrency({
                    name: "USD / RUB",
                    rate: parseFloat(data.USDToRUB).toFixed(4),
                    percentage: data.percentageUSDToRUB,
                    difference: data.differenceUSDToRUB,
                })}
                {renderOneCurrency({
                    name: "EUR / RUB",
                    rate: parseFloat(data.EURToRUB).toFixed(4),
                    percentage: data.percentageEURToRUB,
                    difference: data.differenceEURToRUB,
                })}
                {renderOneCurrency({
                    name: "USD / RON",
                    rate: parseFloat(data.USDToRON).toFixed(4),
                    percentage: data.percentageUSDToRON,
                    difference: data.differenceUSDToRON,
                })}
                {renderOneCurrency({
                    name: "EUR / RON",
                    rate: parseFloat(data.EURToRON).toFixed(4),
                    percentage: data.percentageEURToRON,
                    difference: data.differenceEURToRON,
                })}
            </View>
        </ScrollView>
    )
}
