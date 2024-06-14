import React, {useEffect, useState} from "react";
import {Alert, Keyboard, KeyboardAvoidingView, Platform, StatusBar} from "react-native";
import { Image, Modal, Text, TextInput, TouchableOpacity, View,} from "react-native";
import CreatContext from "../../context/context";
import { passWidgetStyle } from "./passWidgetStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {requestLogin} from "./passWidgetRequest";

export function PassWidget() {

    const [ keyboardHeight, setKeyboardHeight ] = useState(0);    // ОТСТУП ОТ КЛАВИАТУРЫ
    const [ password, setPassword ] = useState('')                  // ПАРОЛЬ
    const { index, setIndex } = React.useContext(CreatContext)              // КОНТЕКСТ ДЛЯ НАВИГАЦИИ

    // НУЖНО ДЛЯ ОТСТУПА КЛАВИАТУРЫ
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

    // НАЖАТИЕ НА КРЕСТИК
    const handleCrossPress = () => {
        setIndex(0)
    };

    // НАЖАТИЕ НА КНОПКУ ВОССТАНОВЛЕНИЯ
    const recoveryButtonHandler = () => {
        setIndex(9)
    };

// НАЖАТИЕ НА КНОПКУ ПРОДОЛЖИТЬ
    const continueButtonHandler = async () => {
        try {
            await requestLogin(await AsyncStorage.getItem("email"), password);
            console.log("Login Success");
            setIndex(0)
        } catch (error) {
            console.error("Error during login:", error);
        }
    }

    // НАЖАТИЕ НА КНОПКУ ПРОДОЛЖИТЬ
    const handlerPasswordChange = (newPassword) => {
        setPassword(newPassword)
    };

    return (
        <Modal visible={true}>
            <KeyboardAvoidingView
                style={passWidgetStyle.view}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={passWidgetStyle.block}>
                    <View style={passWidgetStyle.block_container}>
                        <View style={passWidgetStyle.top}>
                            <Image
                                source={require('../../assets/img/logo.png')}
                                style={{ width: 80, height: 26 }}
                            />
                            <TouchableOpacity onPress={()=>handleCrossPress()}>
                                <Image
                                    source={require('../../assets/icons/search/cross.png')}
                                    style={{ width: 15, height: 15 }}
                                />
                            </TouchableOpacity>

                        </View>
                        <Text style={passWidgetStyle.text}>Введите пароль</Text>
                        <TextInput

                            style={passWidgetStyle.inputfiled}
                            placeholder="Введите ваш пароль"
                            onChangeText={handlerPasswordChange}
                            value={password}
                            secureTextEntry={true}
                        />
                        <TouchableOpacity
                            style={passWidgetStyle.button}
                            onPress={() => continueButtonHandler()}
                        >
                            <Text style={passWidgetStyle.button_text}> Подтвердить</Text>
                        </TouchableOpacity>
                        <View style={passWidgetStyle.text_bottom}>
                            <Text style={passWidgetStyle.text_bottom_text}>Забыли пароль? </Text>
                            <TouchableOpacity onPress={()=> recoveryButtonHandler()}>
                                <Text style={passWidgetStyle.reg_text}>Нажмите сюда для восстановления </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
            <StatusBar barStyle="dark-content" />
        </Modal>
    );

}
