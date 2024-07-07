import React, {useEffect, useState} from "react";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import CreatContext from "../../../context/context";
import {currencyStyle} from "../Currency/currencyStyle";
import {AntDesign} from "@expo/vector-icons";
import {cryptoCurrencyRequest} from "./cryptocurrencyRequest";

export function Cryptocurrency() {

    const { index, setIndex } = React.useContext(CreatContext)
    const [ data, setData ] = useState('')

    useEffect(() => {
        cryptoCurrencyRequest()
            .then(response => {
                setData(response)
            })
    }, []);

    const renderOneCurrency = ({ name, rate, percentage, difference }) => {
        return (
            <View style={currencyStyle.line}>
                <TouchableOpacity
                    style={currencyStyle.line_item}
                    onPress={() => setIndex(17)}
                >
                    <Text>{name}</Text>
                </TouchableOpacity>
                <View style={currencyStyle.line_item}>
                    <Text style={currencyStyle.line_item_text}>{rate}$</Text>
                </View>
                <View style={currencyStyle.line_item}>

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

                </View>
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
                        <Text style={currencyStyle.top_line_item_text}>Криптовалюта</Text>
                    </View>
                    <View style={currencyStyle.line_item}>
                        <Text style={currencyStyle.top_line_item_text}>Цена</Text>
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
                    name: "Bitcoin",
                    rate: parseFloat(data.rateBTC).toFixed(4),
                    percentage: data.percentageBTC,
                    difference: data.differenceBTC,
                })}
                {renderOneCurrency({
                    name: "Ethereum",
                    rate: parseFloat(data.rateETH).toFixed(4),
                    percentage: data.percentageETH,
                    difference: data.differenceETH,
                })}
                {renderOneCurrency({
                    name: "BNB",
                    rate: parseFloat(data.rateBNB).toFixed(4),
                    percentage: data.percentageBNB,
                    difference: data.differenceBNB,
                })}
                {renderOneCurrency({
                    name: "Notcoin",
                    rate: parseFloat(data.rateNOT).toFixed(4),
                    percentage: data.percentageNOT,
                    difference: data.differenceNOT,
                })}
                {renderOneCurrency({
                    name: "Solana",
                    rate: parseFloat(data.rateSOL).toFixed(4),
                    percentage: data.percentageSOL,
                    difference: data.differenceSOL,
                })}
                {renderOneCurrency({
                    name: "Litecoin",
                    rate: parseFloat(data.rateLTC).toFixed(4),
                    percentage: data.percentageLTC,
                    difference: data.differenceLTC,
                })}
                {renderOneCurrency({
                    name: "Bitcoin Cash",
                    rate: parseFloat(data.rateBCH).toFixed(4),
                    percentage: data.percentageBCH,
                    difference: data.differenceBCH,
                })}
            </View>
        </ScrollView>
    )
}
