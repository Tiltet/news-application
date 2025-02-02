import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { handleCategory } from "./categoryPageRequest";
import { styles } from "../../style";
import { categoryPageStyle } from "./categoryPageStyle";
import { Dropdown } from "../../components/Dropdown/dropdown";
import { newsPageLink } from "../NewsPage/newsPageLink";

export function CategoryPage( {category, title} ) {

    const [ data, setData ] = useState([]);
    const [ selectedCategory, setSelectedCategory ] = useState("Сортировать");
    const [ page, setPage ] = useState(1)

    const handlerNewsClick = newsPageLink();

    // ОТПРАВЛЯЕТСЯ ЗАПРОС ВО ВРЕМЯ РЕНДЕРИНГА СТРАНИЦЫ
    useEffect(() => {
        handleCategory({ category: category, page: page })
            .then(newData => {
                setData([...data, ...newData])
            })
            .catch(error => {
                console.log('Ошибка при получении данных ' + category + ' ' + error);
            });
    }, [page]);

    // НАЖИМАЕМ НА КНОПКУ РЕНДЕРИТЬ НОВУЮ СТРАНИЦУ НОВОСТЕЙ
    const handlerMoreNews = () => {
        setPage(page + 1)
    }

    // НАЖИМАЕМ НА КНОПКУ РЕНДЕРИТЬ НОВУЮ СТРАНИЦУ НОВОСТЕЙ
    const selectCategory = (index, category) => {
        setSelectedCategory(category);
    };

    // ФУНКЦИЯ РЕНДЕРИНГА НОВОСТЕЙ
    const renderNews = () => {
        return data.map((item) => (
            <View style={categoryPageStyle.news_item} key={item.id}>
                <View style={categoryPageStyle.news_item_top}>
                    <TouchableOpacity
                        style={categoryPageStyle.news_block_text}
                        onPress={() => handlerNewsClick(item.id)}
                    >
                        <Text
                            numberOfLines={4}
                            style={categoryPageStyle.news_block_text_text}
                        >
                            {item.title.length > 100
                                ? item.title.substring(0, 100) + "..."
                                : item.title}
                        </Text>
                        <Text>{item.createdAtTime}</Text>
                    </TouchableOpacity>
                    <View style={categoryPageStyle.news_block_img}>
                        <Image
                            style={categoryPageStyle.image}
                            source={{ uri: item.fullImgUrl }}
                        />
                    </View>
                </View>
                <View style={categoryPageStyle.news_item_bottom}>
                    <TouchableOpacity style={categoryPageStyle.news_item_bottom_block_first}>
                        <Text style={categoryPageStyle.news_item_bottom_block_text_first}>Экономика</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={categoryPageStyle.news_item_bottom_block}>
                        <Text style={categoryPageStyle.news_item_bottom_block_text}>Молдова</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={categoryPageStyle.news_item_bottom_block}>
                        <Text style={categoryPageStyle.news_item_bottom_block_text}>ЕС</Text>
                    </TouchableOpacity>
                </View>
            </View>
        ))
    }

    return (
        <View style={styles.container}>
            <Text style={categoryPageStyle.title}>{title}</Text>
            <View style={categoryPageStyle.header_container}>
                <View style={categoryPageStyle.header_count}>
                    <Text style={categoryPageStyle.header_count_text}>{data.length} </Text>
                    <Text style={categoryPageStyle.header_count_text}>статьей</Text>
                </View>
                <View style={{ width: "60%" }}>
                    <Dropdown
                        categories={["Новые", "Популярные"]}
                        selectOption={selectCategory}
                        defaultValue={selectedCategory}
                    />
                </View>
            </View>

            {renderNews()}

            <TouchableOpacity
                style={categoryPageStyle.button}
                onPress={() => handlerMoreNews()}
            >
                <Text style={categoryPageStyle.button_text}>Еще статьи</Text>
            </TouchableOpacity>
        </View>
    )
}
