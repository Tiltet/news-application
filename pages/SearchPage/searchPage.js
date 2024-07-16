import React, { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../../style";
import { searchPageStyle } from "./searchPageStyle";
import CreatContext from "../../context/context";
import { searchPageRequest } from "./searchPageRequest";

export function SearchPage( {searchItem } ) {

    const [ inputText, setInputText ] = useState("");
    const [ newsCount, setNewsCount ] = useState(3);
    const [ amount, setAmount ] = useState(0);
    const [ data, setData ] = useState([]);
    const { index, setIndex } = React.useContext(CreatContext)

    const handlerNewsClick = (item) => {
        setIndex(item.id)
    }

    // Отправляем запрос и получаем данные
    useEffect(() => {
        console.log(searchItem)
        searchPageRequest(searchItem)
            .then((data) => {
                setData(data)
                setAmount(data.length)
                setNewsCount(3)
            })
            .catch(error => {
                console.log('Ошибка при получении данных Поиск: ', searchItem, " - ", error);
            });
    }, [searchItem]);

    // ОБРАБОТЧИК ДЛЯ НАЖАТИЯ НА КОПКУ ПОИСКА
    const handlerInputButtonPress = () => {
        console.log(inputText)
        searchPageRequest(inputText)
            .then((data) => {
                setData(data)
                setAmount(data.length)
                setNewsCount(3)
            })
            .catch(error => {
                console.log('Ошибка при получении данных Поиск: ', inputText, " - ", error);
            });
    }

    // ОБРАБОТЧИК ДЛЯ ОЧИСТКИ ПОЛЯ ВВОДА ИНФОРМАЦИИ
    const handlerClearInput = () => {
        setInputText(null);
    }

    // ОБРАБОТЧИК ДЛЯ ИЗМЕНЕНИЯ ПОЛЯ ВВОДА
    const handleChangeText = (newText) => {
        setInputText(newText);
    };

    // КНОПКА НАЖАТИЯ НА КНОПКУ "Еще 3 новости"
    const handlerButtonMoreNews = () => {
        if (newsCount + 3 > amount) {
            setNewsCount(amount)
        }
        else {
            setNewsCount(newsCount + 3)
        }
    }

    // РЕНДЕРИТ НАЙДЕНЫЕ НОВОСТИ
    const renderThreeNews = () => {
        return data.slice(0, newsCount).map((item) => (
            <View id={item.id} key={item.id} style={searchPageStyle.news_item}>
                <View style={searchPageStyle.news_item_top}>
                    <TouchableOpacity onPress={() => handlerNewsClick(item)} style={searchPageStyle.news_block_text}>
                        <Text style={searchPageStyle.news_block_text_title}>{item.category}</Text>
                        <Text numberOfLines={3} style={searchPageStyle.news_block_text_text}>
                            {item.title.length > 100
                                ? item.title.substring(0, 100) + "..."
                                : item.title}
                        </Text>
                        <Text>{item.createdAtTime}</Text>
                    </TouchableOpacity>
                    <View style={searchPageStyle.news_block_img}>
                        <Image
                            style={searchPageStyle.image}
                            source={{ uri: item.fullImgUrl }}
                        />
                    </View>
                </View>
                <View style={searchPageStyle.news_item_bottom}>
                    <TouchableOpacity style={searchPageStyle.news_item_bottom_block_first}>
                        <Text style={searchPageStyle.news_item_bottom_block_text_first}>Экономика</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={searchPageStyle.news_item_bottom_block}>
                        <Text style={searchPageStyle.news_item_bottom_block_text}>Молдова</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={searchPageStyle.news_item_bottom_block}>
                        <Text style={searchPageStyle.news_item_bottom_block_text}>ЕС</Text>
                    </TouchableOpacity>
                </View>
            </View>
        ));
    };

    return (
        <View style={styles.container}>
            <View style={searchPageStyle.input_container}>
                <TextInput
                    style={searchPageStyle.input}
                    value={inputText}
                    onChangeText={handleChangeText}
                    onSubmitEditing={handlerInputButtonPress}
                    placeholder="Поиск..."
                    placeholderTextColor="#999"
                />
                <TouchableOpacity
                    style={searchPageStyle.cross_wrapper}
                    onPress={handlerClearInput}
                >
                    <Image
                        style={searchPageStyle.cross}
                        source={require('../../assets/icons/search/cross.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={searchPageStyle.shown_container}>
                {amount === 0 ? (
                    <Text style={searchPageStyle.not_found_text}>Ничего не найдено :(</Text>
                ) : (
                    <Text>Показано 1-{newsCount} из {amount}</Text>
                )}
            </View>
            <View style={searchPageStyle.news_container}>
                {renderThreeNews()}
            </View>
            { amount !== 0 && amount !== newsCount ? (
                <TouchableOpacity
                    onPress={handlerButtonMoreNews}
                    style={searchPageStyle.button_container}
                >
                    <Text style={searchPageStyle.button}>Еще 3 новости</Text>
                </TouchableOpacity>
            ) : (
                <Text></Text>
            ) }
        </View>
    )
}
