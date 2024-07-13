import React, {useEffect, useState} from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { opinionPageStyle } from "./opinionPageStyle";
import { styles } from "../../style";
import { Dropdown } from "../../components/Dropdown/dropdown";
import { handleCategory } from "../CategoryPage/categoryPageRequest";
import PollComponent from "../../components/Poll/poll";

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
                        console.log('Ошибка при получении данных ОПРОСЫ ' + 'policy' + ' ' + error);
                    })
                setPage(page + 1)
                break
            case "Экономика":
                handleCategory({ category: 'economy', page: page })
                    .then(newData => {
                        setNews([...news, ...newData])
                    })
                    .catch(error => {
                        console.log('Ошибка при получении данных ОПРОСЫ ' + 'economy' + ' ' + error);
                    })
                setPage(page + 1)
                break
            case "Мировые новости":
                handleCategory({ category: 'world', page: page })
                    .then(newData => {
                        setNews([...news, ...newData])
                    })
                    .catch(error => {
                        console.log('Ошибка при получении данных ОПРОСЫ ' + 'world' + ' ' + error);
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

    // РЕНДЕРИТ НОВОСТИ
    const renderPolls = () => {
        return news.slice(0, 10 * page).map((item, index) => (
            <PollComponent
                key={index}
                item={item}
                index={index}
            />
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
