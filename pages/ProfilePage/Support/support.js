import {View, Text, TouchableOpacity, TextInput, Alert} from "react-native";
import React, {useEffect, useState} from "react";
import { accountStyle } from "../Account/accountStyle";
import { supportStyle } from "./supportStyle";
import { loginWidgetStyle } from "../../../widgets/login/loginWidgetStyle";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {postQuestion} from "./supportRequest";

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

    return (
        <View style={supportStyle.container}>
            <Text style={accountStyle.title}>Свяжитесь с нами</Text>
            <View style={supportStyle.middlecontainer}>
                <View>
                    <View style={supportStyle.uppercontainer}>
                        <View>
                            <Text style={supportStyle.headtext}>Контакты
                            </Text>
                        </View>
                        <View style={supportStyle.textcontainer}>
                            <Text style={supportStyle.smalltext}>Наш email </Text>
                            <Text style={{fontWeight: "700"}}>ааааа0303@gmail.com </Text>
                        </View>
                        <View style={supportStyle.textcontainer}>
                            <Text style={accountStyle.smalltext}>Наш номер </Text>
                            <Text style={{fontWeight: "700"}}>+7 777 777 77 77</Text>
                        </View>
                        {/*
                        <View>
                            <Text>Наши соцсети</Text>
                            <View style={supportStyle.images}>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../../../assets/icons/login/facebook.png')}
                                        style={{ width: 40, height: 40 }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={supportStyle.image}>
                                    <Image
                                        source={require('../../../assets/icons/login/twitter.png')}
                                        style={{ width: 40, height: 40 }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        */}
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
