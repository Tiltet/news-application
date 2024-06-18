import React, {useEffect, useState} from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { opinionPageStyle } from "./opinionPageStyle";
import { styles } from "../../style";
import { Dropdown } from "../../components/Dropdown/dropdown";
import { handleCategory } from "../CategoryPage/categoryPageRequest";

export function OpinionPage() {

    const [ selectedValue, setSelectedValue ] = useState('Экономика');
    const [ page, setPage ] = useState(1)
    const [ news, setNews ] = useState([]);

    const getPolls = () => {
        switch (selectedValue) {
            case "Политика":
                handleCategory({ category: 'policy', page: page })
                    .then(newData => {
                        setNews([...news, ...newData])
                    })
                    .catch(error => {
                        console.log('Ошибка при получении данных ОПРОСЫ' + 'policy' + ' ' + error);
                    })
                setPage(page + 1)
                break
            case "Экономика":
                handleCategory({ category: 'economy', page: page })
                    .then(newData => {
                        setNews([...news, ...newData])
                    })
                    .catch(error => {
                        console.log('Ошибка при получении данных ОПРОСЫ' + 'economy' + ' ' + error);
                    })
                setPage(page + 1)
                break
            case "Мировые новости":
                handleCategory({ category: 'world', page: page })
                    .then(newData => {
                        setNews([...news, ...newData])
                    })
                    .catch(error => {
                        console.log('Ошибка при получении данных ОПРОСЫ' + 'world' + ' ' + error);
                    })
                setPage(page + 1)
                break
            case "Бизнес":
                handleCategory({ category: 'business', page: page })
                    .then(newData => {
                        setNews([...news, ...newData])
                    })
                    .catch(error => {
                        console.log('Ошибка при получении данных ОПРОСЫ' + 'business' + ' ' + error);
                    })
                setPage(page + 1)
                break
            default:
                console.log("Error Opinion category")
                break
        }
        console.log("page = ", page, " length = ", news.length)
    }

    useEffect(() => {
        getPolls();
    }, [selectedValue]);

    // ВЫБИРАЕМ КАТЕГОРИЮ ОПРОСОВ
    const selectOption = (index, value) => {
        setPage(1);
        setNews([])
        setSelectedValue(value);
    };

    // ОБРАБОТЧИК НАЖАТИЯ НА КНОПКУ БОЛЬШЕ НОВОСТЕЙ
    const handlerButtonMoreNews = () => {
        setPage(page + 1);
        getPolls();
    }

    // ОБРАБОТЧИК НАЖАТИЯ НА КНОПКУ МНЕНИЯ
    const handlerButtonOpinionClick = (index) => {
        switch (index) {
            case 0:
                console.log("Не поддерживаю")
                break
            case 1:
                console.log("Поддерживаю")
                break
            case 2:
                console.log("Нейтрально")
                break
            default:
                console.error("handlerButtonOpinionClick")
                break
        }
    }

    // РЕНДЕРИТ НОВОСТИ
    const renderPolls = () => {
        return news.slice(0, 10 * page).map((item, index) => (
            <View key={index}>
                <View style={opinionPageStyle.poll_block}>
                    <Text style={opinionPageStyle.title}>Как вы относитесь к этому?</Text>
                    <Text style={opinionPageStyle.description}>{item.title}</Text>
                    <View style={opinionPageStyle.vote_block}>
                        <View style={opinionPageStyle.votes}>
                            <TouchableOpacity
                                style={opinionPageStyle.vote}
                                onPress={() => handlerButtonOpinionClick(0)}
                            >
                                <Image
                                    style={{width: 30, height: 30}}
                                    source={require('../../assets/icons/poll/unlike.png')}
                                />
                                <Text style={opinionPageStyle.vote_text}>Не поддерживаю</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={opinionPageStyle.vote}
                                onPress={() => handlerButtonOpinionClick(1)}
                            >
                                <Image
                                    style={{width: 30, height: 30}}
                                    source={require('../../assets/icons/poll/like.png')}
                                />
                                <Text style={opinionPageStyle.vote_text}>Поддерживаю</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={opinionPageStyle.vote}
                                onPress={() => handlerButtonOpinionClick(2)}
                            >
                                <Image
                                    style={{width: 30, height: 30}}
                                    source={require('../../assets/icons/poll/normal.png')}
                                />
                                <Text style={opinionPageStyle.vote_text}>Нейтрально</Text>
                            </TouchableOpacity>
                        </View>
                        <Image
                            style={opinionPageStyle.image}
                            source={require('../../assets/img/newsImg.png')}
                        />
                    </View>
                </View>
            </View>
        ))
    }

    return (
        <View style={styles.container}>
            <View style={opinionPageStyle.container}>

                <View style={{ width: "100%" }}>
                    <Dropdown
                        categories={['Экономика', 'Политика', 'Бизнес', 'Мировые новости']}
                        selectOption={selectOption}
                        selectedValue={selectedValue}
                    />
                </View>
                <Text style={opinionPageStyle.count}>{news.length} опроса</Text>
            </View>

            {renderPolls()}

            <TouchableOpacity
                style={opinionPageStyle.button}
                onPress={handlerButtonMoreNews}
            >
                <Text style={opinionPageStyle.button_text}>
                    Еще опросы
                </Text>
            </TouchableOpacity>
        </View>
    );
}
