import { Image, Text, View } from "react-native";
import { weatherStyle } from "./weatherStyle";
import { useEffect, useState } from "react";
import { handlerWeather } from "../weatherPageRequest";
import * as Location from 'expo-location';
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Weather() {

    const [ data, setData ] = useState({});
    const [ city, setCity ] = useState('');
    const [ errorMsg, setErrorMsg ] = useState('');

    useEffect(() => {

        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            const { latitude, longitude } = location.coords;
            const reverseGeocodedLocation = await Location.reverseGeocodeAsync({ latitude, longitude });
            setCity(reverseGeocodedLocation[0].city);
            await AsyncStorage.setItem("city", reverseGeocodedLocation[0].city)
        })();

        handlerWeather()
            .then(data => {
                setData(data)
            })
            .catch(error => {
                console.log('Ошибка при получении данных Погоды:', error);
            });
    }, [])

    // РЕНДЕРИТ ДНИ НЕДЕЛИ
    const renderDays = () => {
        return (
            <View style={weatherStyle.weather_list_items}>
                <View style={weatherStyle.weather_list_items_item}>
                    <View style={weatherStyle.weather_list_items_item_border}>
                        <Text style={weatherStyle.weather_list_items_item_data}>{data.dateOne}</Text>
                    </View>
                    <View style={weatherStyle.weather_list_items_item_max}>
                        <Text style={weatherStyle.weather_list_items_item_max_text}>{data.dayTemperatureOne}°</Text>
                        <Image
                            style={weatherStyle.weather_list_items_item_max_image}
                            source={require('../../../assets/icons/header/sun.png')}
                        />
                    </View>
                    <View style={weatherStyle.weather_list_items_item_max}>
                        <Text style={weatherStyle.weather_list_items_item_max_text}>{data.nightTemperatureOne}°</Text>
                        <Image
                            style={weatherStyle.weather_list_items_item_max_image}
                            source={require('../../../assets/icons/header/sun.png')}
                        />
                    </View>
                </View>

                <View style={weatherStyle.weather_list_items_item}>
                    <View style={weatherStyle.weather_list_items_item_border}>
                        <Text style={weatherStyle.weather_list_items_item_data}>{data.dateTwo}</Text>
                    </View>
                    <View style={weatherStyle.weather_list_items_item_max}>
                        <Text style={weatherStyle.weather_list_items_item_max_text}>{data.dayTemperatureTwo}°</Text>
                        <Image
                            style={weatherStyle.weather_list_items_item_max_image}
                            source={require('../../../assets/icons/header/sun.png')}
                        />
                    </View>
                    <View style={weatherStyle.weather_list_items_item_max}>
                        <Text style={weatherStyle.weather_list_items_item_max_text}>{data.nightTemperatureTwo}°</Text>
                        <Image
                            style={weatherStyle.weather_list_items_item_max_image}
                            source={require('../../../assets/icons/header/sun.png')}
                        />
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={weatherStyle.container}>

            {/* ЗАГОЛОВОК С ГОРОДОМ */}
            <View style={weatherStyle.title_block}>
                <Text style={weatherStyle.title_text}>{city}</Text>
                <Image
                    style={weatherStyle.title_image}
                    source={require("../../../assets/icons/weather/map.png")}
                />
            </View>

            {/* БЛОК С ПОГОДОЙ */}
            <View style={weatherStyle.weather_blocks}>

                {/* ЛЕВЫЙ БЛОК */}
                <View style={weatherStyle.weather_left_block}>
                    <Image
                        style={weatherStyle.weather_left_block_image}
                        source={require("../../../assets/icons/header/sun.png")}
                    />
                </View>

                {/* ЦЕНТРАЛЬНЫЙ БЛОК */}
                <View style={weatherStyle.weather_center_block}>
                    <Text style={weatherStyle.weather_center_block_title}>{data.currentTemperature}°</Text>
                    <View>
                        <Text style={weatherStyle.weather_center_block_text}>{data.dayTemperature} / {data.nightTemperature}°</Text>
                    </View>
                </View>

                {/* ПРАВЫЙ БЛОК */}
                <View style={weatherStyle.weather_right_block}>
                    <View style={weatherStyle.weather_right_block_line}>
                        <Image
                            style={[weatherStyle.weather_right_block_icon, { width: 27, height: 25 }]}
                            source={require("../../../assets/icons/weather/wind.png")}
                        />
                        <Text style={weatherStyle.weather_right_block_text}>{data.windMPH} м/с</Text>
                    </View>
                    <View style={weatherStyle.weather_right_block_line}>
                        <Image
                            style={[weatherStyle.weather_right_block_icon, { width: 25, height: 25 }]}
                            source={require("../../../assets/icons/weather/wet.png")}
                        />
                        <Text style={weatherStyle.weather_right_block_text}>{data.humidity}%</Text>
                    </View>
                    <View style={weatherStyle.weather_right_block_line}>
                        <Image
                            style={[weatherStyle.weather_right_block_icon, { width: 26, height: 25 }]}
                            source={require("../../../assets/icons/weather/rain.png")}
                        />
                        <Text style={weatherStyle.weather_right_block_text}>{data.chanceOfRain}%</Text>
                    </View>
                </View>

            </View>

            {/* БЛОК С ПОГОДОЙ */}
            <View style={weatherStyle.weather_list}>
                <Text style={weatherStyle.weather_list_title}>Погода на неделю:</Text>
                {renderDays()}
            </View>

        </View>
    )
}
