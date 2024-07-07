import React from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";
import { mainBlockStyle } from "./mainBlockStyle";
import CreatContext from "../../context/context";

export function MainBlock( { bottomNewsThree, mainNews } ) {

    const { index, setIndex } = React.useContext(CreatContext)

    //
    const handlerNewsClick = (item) => {
        setIndex(item.id)
    }

    // ВЫВОДИМ НА СТРАНИЦУ ЗАГОЛОВКИ НОВОСТЕЙ
    const renderTopThreeNews = () => {
        return bottomNewsThree.slice(1,4).map((item, index) => {
            if (index === 2) {
                return (
                    <View style={mainBlockStyle.main_block_border_last} key={item.id}>
                        <TouchableOpacity
                            onPress={() => handlerNewsClick(item)}
                        >
                            <Text style={mainBlockStyle.main_block_text}>{item.title}</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
            else if (index === 0) {
                return (
                    <View style={mainBlockStyle.main_block_border_first} key={item.id}>
                        <TouchableOpacity
                            onPress={() => handlerNewsClick(item)}
                        >
                            <Text style={mainBlockStyle.main_block_text}>{item.title}</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
            else {
                return (
                    <View
                        style={mainBlockStyle.main_block_border}
                        key={item.id}
                    >
                        <TouchableOpacity
                            onPress={() => handlerNewsClick(item)}
                        >
                            <Text style={mainBlockStyle.main_block_text}>{item.title}</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        });
    };

    // ВЫВОДИМ ВЕСЬ ГЛАВНЫЙ БЛОК
    return (
        <View style={mainBlockStyle.mainBlock_container}>
            <TouchableOpacity
                style={mainBlockStyle.mainBlock_mainNews}
                onPress={() => handlerNewsClick(mainNews)}
            >
                <Image
                    style={mainBlockStyle.mainBlock_img}
                    source={{uri: mainNews.imgUrl}}
                />
                <Text style={mainBlockStyle.main_block_title}>{mainNews.title}</Text>
            </TouchableOpacity>
            <View style={mainBlockStyle.main_block_wrapper}>
                {renderTopThreeNews()}
            </View>
        </View>
    );
}
