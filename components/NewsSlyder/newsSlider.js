import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Swiper from 'react-native-swiper';
import { newsSliderStyle } from "./newsSliderStyle";
import CreatContext from "../../context/context";

export function NewsSlider( { swiperNews } ) {

    // ЕСЛИ НЕ ПРИШЛИ ДАННЫЕ С СЕРВЕРА
    const staticNews = [
        {
            id: "ee0039f6-2cdf-436e-8085-8d15bff46430",
            title: "Новости с сервера не пришли 1",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/1200px-Flag_of_Moldova.svg.png"

        },
        {
            id: "d77a09b6-0707-4f76-ae15-3bdea8ffea03",
            title: "Новости с сервера не пришли 2",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/1200px-Flag_of_Moldova.svg.png"
        },
        {
            id: "4dbb8e1e-08e8-496a-b5e4-7354f0bfc255",
            title: "Новости с сервера не пришли 3",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/1200px-Flag_of_Moldova.svg.png"
        }
    ];

    const { index, setIndex } = React.useContext(CreatContext)

    const handlerNewsClick = (item) => {
        setIndex(item.id)
    }

    const renderSlides = () => {
        if (swiperNews.length === 0) {
            return staticNews.map((item) =>
                <View key={item.id} style={newsSliderStyle.slider_block}>
                    <Image
                        style={newsSliderStyle.image}
                        source={{ uri: item.imgUrl }}
                    />
                    <TouchableOpacity onPress={() => handlerNewsClick(item)} style={newsSliderStyle.slider_block_text}>
                        <Text
                            numberOfLines={3}
                            ellipsizeMode="tail"
                            style={newsSliderStyle.slider_block_title}>
                            Обзор недели
                        </Text>
                        <Text
                            numberOfLines={2}
                            ellipsizeMode="tail"
                            style={newsSliderStyle.slider_block_description}>
                            {item.title.length > 100
                                ? item.title.substring(0, 100) + "..."
                                : item.title}
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        }
        else {
            return swiperNews.map((item) => (
                <View key={item.id} style={newsSliderStyle.slider_block}>
                    <Image
                        style={newsSliderStyle.image}
                        source={{uri: item.imgUrl}}
                    />
                    <TouchableOpacity onPress={() => handlerNewsClick(item)} style={newsSliderStyle.slider_block_text}>
                        <Text
                            numberOfLines={3}
                            ellipsizeMode="tail"
                            style={newsSliderStyle.slider_block_title}>
                            Обзор недели
                        </Text>
                        <Text
                            numberOfLines={2}
                            ellipsizeMode="tail"
                            style={newsSliderStyle.slider_block_description}>
                            {item.title.length > 100
                                ? item.title.substring(0, 100) + "..."
                                : item.title}
                        </Text>
                    </TouchableOpacity>
                </View>
            ));
        }
    };

    return (
        <View>
            <Swiper
                style={newsSliderStyle.slider}
                showsPagination={false}
                autoplay={true}
                loop={true}
            >
                {renderSlides()}
            </Swiper>
        </View>

    );
}
