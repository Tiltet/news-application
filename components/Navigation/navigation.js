import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { navigationStyle } from "./navigationStyle";
import { styles } from "../../style";
import SearchWidget from "../../widgets/SearchWidget/searchWidget";
import CreatContext from "../../context/context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Navigation() {

    const [ isBlurVisible, setIsBlurVisible ] = useState(false);
    const { index, setIndex } = React.useContext(CreatContext)

    // НАЖАТИЕ НА КНОПКУ ПОИСКА
    const handlerSearchPress = () => {
        setIsBlurVisible(true);
    };

    // ФУНКЦИЯ ПЕРЕХОДА НА ДРУГУЮ СТРАНИЦУ
    const handlerLinkClick = async (number) => {
        try {
            const token = await AsyncStorage.getItem("token");
            if (number === 6 && token !== null) {
                setIndex(15);
            } else {
                setIndex(number);
            }
        } catch (error) {
            console.error("Error handling link click:", error);
        }
    };

    return (
        <View style={navigationStyle.nav_container}>
            <View>
                <TouchableOpacity onPress={() => handlerLinkClick(0)}>
                    <Image
                        style={navigationStyle.nav_logo}
                        source={require('../../assets/img/logo.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={navigationStyle.nav_icon_container}>
                <View>
                    <TouchableOpacity onPress={() => handlerLinkClick(10)}>
                        <Image
                            style={navigationStyle.nav_icon}
                            source={require('../../assets/icons/header/message.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => handlerSearchPress()}>
                        <Image
                            style={navigationStyle.nav_icon}
                            source={require('../../assets/icons/header/search.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View>

                    <TouchableOpacity onPress={() => handlerLinkClick(6)}>
                        <Image
                            style={navigationStyle.nav_icon}
                            source={require('../../assets/icons/header/profile.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.flexbox}
                        onPress={() => handlerLinkClick(14)}
                    >
                        <Text style={navigationStyle.nav_weather_text}>11°</Text>
                        <Image
                            style={navigationStyle.nav_icon}
                            source={require('../../assets/icons/header/sun.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>


            {/* МОДАЛЬНОЕ ОКНО БЛУРА */}
            {isBlurVisible && (
                <SearchWidget
                    isBlurVisible={isBlurVisible}
                    setIsBlurVisible={setIsBlurVisible}
                />
            )}
        </View>
    );
}

