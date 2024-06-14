import React, {useEffect, useState} from "react";
import {Alert, Keyboard, KeyboardAvoidingView, StatusBar} from "react-native";
import { Image, Modal, Text, TextInput, TouchableOpacity, View, Platform } from "react-native";
import CreatContext from "../../context/context";
import { loginWidgetStyle } from "./loginWidgetStyle";
import AsyncStorage from '@react-native-async-storage/async-storage';

export function LoginWidget() {

    const [ isChecked, setIsChecked ] = useState(false)           // ПРОВЕРКА CHECKBOX
    const [ email, setEmail ] = useState('')                        // ТЕКСТ В TextInput
    const { index, setIndex } = React.useContext(CreatContext)              // КОНТЕКСТ ДЛЯ НАВИГАЦИИ
    const [ keyboardHeight, setKeyboardHeight ] = useState(0);    // ОТСТУП ОТ КЛАВИАТУРЫ

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (event) => {
            setKeyboardHeight(event.endCoordinates.height);
        });

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardHeight(0);
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    // НАЖАТИЕ НА CHECKBOX
    const handleCheckboxPress = () => {
        setIsChecked(!isChecked);
    };

    // НАЖАТИЕ НА КРЕСТИК
    const handleCrossPress = () => {
        setIndex(0)
    };

    // НАЖАТИЕ НА КНОПКУ РЕГИСТРАЦИИ
    const regButtonHandler = () => {
        setIndex(7)
    };

    // ИЗМЕНЕНИЕ ТЕКСТА В InputText
    const handleTextChange = (newEmail) => {
        setEmail(newEmail);
    };

    // НАЖАТИЕ НА КНОПКУ ПРОДОЛЖИТЬ
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
            setIndex(8)
        }
    };

    return (
        <Modal visible={true}>
            <KeyboardAvoidingView
                style={loginWidgetStyle.view}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={loginWidgetStyle.block}>
                    <View style={loginWidgetStyle.block_container}>
                        <View style={loginWidgetStyle.top}>
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
                        <Text style={loginWidgetStyle.text}>Войти</Text>
                        <Text style={loginWidgetStyle.subtitle}>Введите свой email, чтобы войти</Text>
                        <TextInput
                            style={loginWidgetStyle.inputfiled}
                            placeholder="E-mail@mail.ru"
                            onChangeText={handleTextChange}
                            value={email}
                        />
                        <View style={loginWidgetStyle.checkbox_container}>
                            <TouchableOpacity style={loginWidgetStyle.checkbox} onPress={handleCheckboxPress}>
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
                            <Text style={loginWidgetStyle.checkbox_text}>Отправляя свои данные, я принимаю политику конфиденциальности</Text>
                        </View>
                        <TouchableOpacity style={loginWidgetStyle.button} onPress={()=> continueButtonHandler()} >
                            <Text style={loginWidgetStyle.button_text}> Продолжить</Text>
                        </TouchableOpacity>
                        <View style={loginWidgetStyle.social}>
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
                        <View style={loginWidgetStyle.text_bottom}>
                            <Text style={loginWidgetStyle.text_bottom_text}>Еще нет аккаунта?</Text>
                            <TouchableOpacity onPress={()=> regButtonHandler()}>
                                <Text style={loginWidgetStyle.reg_text}>Зарегистрируйтесь!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
            <StatusBar barStyle="dark-content" />
        </Modal>
    );

}
