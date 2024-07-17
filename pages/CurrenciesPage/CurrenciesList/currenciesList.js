import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import CreatContext from "../../../context/context";
import SearchContext from "../../../context/searchContext";
import { currenciesListStyle } from "./currenciesListStyle";
import { cashRequest, cryptoRequest } from "./currenciesListRequest";

export function CurrenciesList({ category }) {

    const { index, setIndex } = React.useContext(CreatContext)
    const { searchData, setSearchData } = React.useContext(SearchContext)
    const [ pageIndex, setPageIndex ] = useState(17)
    const [ data, setData ] = useState([])

    useEffect( () => {
        switch (category) {
            case "cash":
                setPageIndex(17)
                cashRequest()
                    .then(response => {
                        setData(response)
                    })
                    .catch(error => {
                        console.error("Ошибка при получение Курса Валют - " + error)
                    })
                break
            case "crypto":
                setPageIndex(18)
                cryptoRequest()
                    .then(response => {
                        setData(response)
                    })
                    .catch(error => {
                        console.error("Ошибка при получение Курса Валют - " + error)
                    })
                break
            default:
                break
        }
    }, []);

    // ОБРАБОТЧИК НАЖАТИЯ НА КНОПКУ ВАЛЮТЫ
    const handlerOneCurrency = (id) => {
        setSearchData(id)
        setIndex(pageIndex)
    }

    // РЕНДЕРИТ ВСЕ ВАЛЮТЫ
    const renderCurrencies = () => {
        return data.map((item, index) => (
            <View
                key={item.id}
                style={currenciesListStyle.line}
            >
                <TouchableOpacity
                    style={currenciesListStyle.line_item}
                    onPress={() => handlerOneCurrency(item.id)}
                >
                    <Text>{item.label}</Text>
                </TouchableOpacity>

                <View style={currenciesListStyle.line_item}>
                    <Text style={currenciesListStyle.line_item_text}>{item.rate * 1}</Text>
                </View>

                { item.percentage >= 0 && (
                    <View style={currenciesListStyle.line_item}>
                        <AntDesign name="caretup" size={8} color="green" style={{ paddingRight: 5}} />
                        <Text style={currenciesListStyle.line_item_text_green}>{item.percentage * 1}%</Text>
                    </View>
                ) }
                { item.percentage < 0 && (
                    <View style={currenciesListStyle.line_item}>
                        <AntDesign name="caretup" size={8} color="red" style={{ paddingRight: 5}} />
                        <Text style={currenciesListStyle.line_item_text_red}>{item.percentage * -1}%</Text>
                    </View>
                ) }

                { item.difference < 0 && (
                    <View style={currenciesListStyle.line_item}>
                        <Text style={currenciesListStyle.line_item_text}>{item.difference * -1}</Text>
                    </View>
                )}
                { item.difference >= 0 && (
                    <View style={currenciesListStyle.line_item}>
                        <Text style={currenciesListStyle.line_item_text}>{item.difference * 1}</Text>
                    </View>
                )}

                { item.percentage >= 0 && (
                    <View style={currenciesListStyle.line_item}>
                        <AntDesign name="up" size={10} color="red" style={{ paddingRight: 5 }} />
                        <Text style={currenciesListStyle.line_item_text_red}>Продавать</Text>
                    </View>
                ) }
                { item.percentage < 0 && (
                    <View style={currenciesListStyle.line_item}>
                        <AntDesign name="up" size={10} color="green" style={{ paddingRight: 5 }} />
                        <Text style={currenciesListStyle.line_item_text_green}>Покупать</Text>
                    </View>
                ) }

            </View>
        ))
    }

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            <View style={currenciesListStyle.container}>
                <View style={currenciesListStyle.top_line}>
                    <View style={currenciesListStyle.line_item}>
                        <Text style={currenciesListStyle.top_line_item_text}>Валюта</Text>
                    </View>
                    <View style={currenciesListStyle.line_item}>
                        <Text style={currenciesListStyle.top_line_item_text}>Курс</Text>
                    </View>
                    <View style={currenciesListStyle.line_item}>
                        <Text style={currenciesListStyle.top_line_item_text}>Изменение, %</Text>
                    </View>
                    <View style={currenciesListStyle.line_item}>
                        <Text style={currenciesListStyle.top_line_item_text}>Изменение</Text>
                    </View>
                    <View style={currenciesListStyle.line_item}>
                        <Text style={currenciesListStyle.top_line_item_text}>Тех. рейтинг</Text>
                    </View>
                </View>

                {/* РЕНДЕРИТ ВСЕ ВАЛЮТЫ */}
                {renderCurrencies()}

            </View>
        </ScrollView>
    )
}
