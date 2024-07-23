import {View, Text, TouchableOpacity, TextInput, Alert, Image, Linking} from "react-native";
import React, { useState } from "react";
import { accountStyle } from "../../pages/ProfilePage/Account/accountStyle";
import { supportStyle } from "./supportStyle";
import { loginWidgetStyle } from "../../widgets/login/loginWidgetStyle";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {postQuestion} from "./supportRequest";
import Entypo from "@expo/vector-icons/Entypo";
import {FontAwesome, Fontisto} from "@expo/vector-icons";

export function Support() {

    const [ isChecked, setIsChecked ] = useState(false);
    const [ text, setText ] = useState("")
    const [ name, setName ] = useState("")
    const [ city, setCity ] = useState('Kishinev')
    const [ email, setEmail ] = useState("")

    const getLocation = async () => {
        let {status} = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log('Разрешение на доступ к местоположению отклонено');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        const {latitude, longitude} = location.coords;
        const reverseGeocodedLocation = await Location.reverseGeocodeAsync({latitude, longitude});
        setCity(reverseGeocodedLocation[0].city);
        await AsyncStorage.setItem("city", reverseGeocodedLocation[0].city)
    }

    const handleCheckboxPress = async () => {
        setIsChecked(!isChecked);
        await getLocation()
        const emailStorage = await AsyncStorage.getItem("email")
        setEmail(emailStorage)
    };

    const handlerSendButton = async () => {
        if (!isChecked) {
            Alert.alert("Подтвердите Условия!")
        } else {
            postQuestion(name, city, text, email)
        }
    }

    const handleLink = (url) => {
        Linking.openURL(url)
    };

    return (
        <View style={supportStyle.container}>
            <Text style={accountStyle.title}>Свяжитесь с нами</Text>
            <View style={supportStyle.middlecontainer}>
                <View>
                    <View style={supportStyle.uppercontainer}>
                        <View>
                            <Text style={supportStyle.headtext}>Контакты</Text>
                        </View>
                        <View style={supportStyle.textcontainer}>
                            <Text style={supportStyle.smalltext}>Наш email</Text>
                            <Text style={{fontWeight: "700"}}>opozitia@gmail.com</Text>
                        </View>
                        {/*
                        <View style={supportStyle.textcontainer}>
                            <Text style={accountStyle.smalltext}>Наш номер </Text>
                            <Text style={{fontWeight: "700"}}>+7 777 777 77 77</Text>
                        </View>
                        */}
                        <View>
                            <Text>Наши соцсети</Text>
                            <View style={supportStyle.images}>
                                <TouchableOpacity
                                    style={{ marginRight: 10 }}
                                    onPress={() => handleLink("https://www.instagram.com/opozitia_md?igsh=MW95enJsd2hpMDEyYQ%3D%3D&utm_source=qr")}
                                >
                                    <Entypo name="instagram-with-circle" size={34} color="#374883" />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ marginRight: 10 }}
                                    onPress={() => handleLink("https://t.me/+UCduDNfmDl82ZTUy")}
                                >
                                    <Entypo name="facebook-with-circle" size={34} color="#374883" />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ marginRight: 10 }}
                                    onPress={() => handleLink("https://t.me/+UCduDNfmDl82ZTUy")}
                                >
                                    <FontAwesome name="telegram" size={34} color="#374883" />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ marginRight: 10 }}
                                    onPress={() => handleLink("https://chat.whatsapp.com/KCzk91cGR2625dhw70DSaj")}
                                >
                                    <Fontisto name="whatsapp" size={34} color="#374883" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={supportStyle.middlecontainer}>
                <Text style={supportStyle.headtext}> Есть вопросы?</Text>
                <View style={supportStyle.input}>
                    <TextInput
                        placeholder={"ФИО"}
                        value={name}
                        onChangeText={setName}
                    />
                </View>

                {/*
                <View style={supportStyle.input}>
                    <TextInput placeholder={"Местоположение"}/>
                </View>
                */}

                <View
                    style={supportStyle.inputlarge}>
                    <TextInput
                        placeholder={"Введите вопрос"}
                        value={text}
                        onChangeText={setText}
                        multiline={true}
                    />
                </View>
                <View style={supportStyle.checkbox_container}>
                    <TouchableOpacity
                        style={supportStyle.checkbox}
                        onPress={handleCheckboxPress}
                    >
                        <View>
                            {isChecked && (
                                <View
                                    style={{
                                        width: 10,
                                        height: 10,
                                        borderRadius: 10,
                                        backgroundColor: 'blue',
                                    }}
                                />
                            )}
                        </View>
                    </TouchableOpacity>
                    <View >
                        <Text style={loginWidgetStyle.checkbox_text}>
                            Подтверждаю, что я согласен на обработку моих персональных данных в соответствии с
                        </Text>
                        <TouchableOpacity>
                            <Text style={supportStyle.hypertext}>Условиями</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <TouchableOpacity
                    style={supportStyle.sendbutton}
                    onPress={() => handlerSendButton()}
                >
                    <Text style={supportStyle.sendbutton_text}>Отправить</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}
