import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, StatusBar } from "react-native";
import { Image, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import CreatContext from "../../context/context";
import { regWidgetStyle } from "./regWidgetStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {loginWidgetStyle} from "../login/loginWidgetStyle";

export function RegWidget() {

    const [ isChecked, setIsChecked ] = useState(false);
    const [ email, setEmail ] = useState('')

    const handleCheckboxPress = () => {
        setIsChecked(!isChecked);
    };

    const { index, setIndex } = React.useContext(CreatContext)

    // ОБРАБОТЧИК НАЖАТИЯ НА КРЕСТИК
    const handleCrossPress = () => {
        setIndex(0)
    };

    // ОБРАБОТЧИК НАЖАТИЯ НА КНОПКУ ПРОДОЛЖИТЬ
    const continueButtonHandler = async () => {
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!isChecked) {
            Alert.alert("Подтвердите конфеденциальность")
        }
        else if (!emailRegex.test(email)) {
            console.log(email)
            Alert.alert("Неправильный email")
        }
        else {
            await AsyncStorage.setItem('email', email);
            console.log("Email - ", email)
            setIndex(13)
        }
    }

    // ОБРАБОТЧИК НАЖАТИЯ НА КНОПКУ ВОЙТИ
    const loginButtonHandler = async () => {
        setIndex(6)
    };

    return (
        <Modal visible={true}>
            <KeyboardAvoidingView
                style={loginWidgetStyle.view}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={regWidgetStyle.view}>
                    <View style={regWidgetStyle.block}>
                        <View style={regWidgetStyle.block_container}>
                            <View style={regWidgetStyle.top}>
                                <Image
                                    source={require('../../assets/img/logo.png')}
                                    style={{ width: 65, height: 20 }}
                                />
                                <TouchableOpacity onPress={()=> handleCrossPress()}>
                                    <Image
                                        source={require('../../assets/icons/search/cross.png')}
                                        style={{ width: 15, height: 15 }}
                                    />
                                </TouchableOpacity>

                            </View>
                            <Text style={regWidgetStyle.text}>Регистрация</Text>
                            <Text style={regWidgetStyle.subtitle}>Для регистрации введите e-mail или воспользуйтесь сервисами ниже</Text>
                            <TextInput
                                style={regWidgetStyle.inputfiled}
                                placeholder="E-mail@mail.ru"
                                value={email}
                                onChangeText={setEmail}
                            />
                            <View style={regWidgetStyle.checkbox_container}>
                                <TouchableOpacity style={regWidgetStyle.checkbox} onPress={handleCheckboxPress}>
                                    <View>
                                        {isChecked && (
                                            <View
                                                style={{
                                                    width: 10,
                                                    height: 10,
                                                    borderRadius: 4,
                                                    backgroundColor: 'blue',
                                                }}
                                            />
                                        )}
                                    </View>
                                </TouchableOpacity>
                                <Text style={regWidgetStyle.checkbox_text}>Отправляя свои данные, я принимаю политику конфиденциальности</Text>
                            </View>
                            <TouchableOpacity
                                style={regWidgetStyle.button}
                                onPress={() => continueButtonHandler()}
                            >
                                <Text style={regWidgetStyle.button_text}>Продолжить</Text>
                            </TouchableOpacity>
                            <View style={regWidgetStyle.social}>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../../assets/icons/login/google.png')}
                                        style={{ width: 40, height: 40 }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../../assets/icons/login/facebook.png')}
                                        style={{ width: 40, height: 40 }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../../assets/icons/login/apple.png')}
                                        style={{ width: 40, height: 40 }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../../assets/icons/login/twitter.png')}
                                        style={{ width: 40, height: 40 }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={regWidgetStyle.text_bottom}>
                                <Text style={regWidgetStyle.text_bottom_text}>Уже есть аккаунт?</Text>
                                <TouchableOpacity onPress={()=> loginButtonHandler()}>
                                    <Text style={regWidgetStyle.reg_text}>Войдите!</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <StatusBar barStyle="dark-content" />
            </KeyboardAvoidingView>
        </Modal>
    );

}
