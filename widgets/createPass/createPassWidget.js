import React, {useState} from "react";
import {Alert, KeyboardAvoidingView, Platform, StatusBar} from "react-native";
import { Image, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import CreatContext from "../../context/context";
import { createPassWidgetStyle } from "./createPassWidgetStyle";
import { loginWidgetStyle } from "../login/loginWidgetStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export function CreatePassWidget() {

    const { index, setIndex } = React.useContext(CreatContext)
    const [ login, setLogin ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ checkPassword, setCheckPassword ] = useState('')

    // ОБРАБОТЧИК НАЖАТИЯ НА КРЕСТИК
    const handleCrossPress = () => {
        setIndex(0)
    };

    // ОБРАБОТЧИК НАЖАТИЯ НА КНОПКУ ПРОДОЛЖИТЬ
    const handlerContinue = async () => {
        if (password.length < 5 || checkPassword.length < 5) {
            Alert.alert("Пароль должен быть длиннее 5 символов!")
        } else if (password !== checkPassword) {
            Alert.alert("Пароли не совпадают!")
        } else {
            const email = await AsyncStorage.getItem("email")

            console.log(email)
            console.log(login)
            console.log(password)

            try {
                const response = await axios.post('http://localhost:4000/auth/registration-password', {
                    login: login,
                    email: email,
                    password: password,
                    confirmPassword: checkPassword,
                });
                console.log('Registration successful');
                console.log(response.data)

                setIndex(12)

            } catch (error) {
                if (error.response && error.response.data.errorsMessages) {
                    error.response.data.errorsMessages.forEach((errorMessage) => {
                        console.error(errorMessage.message);
                        Alert.alert(errorMessage.message);
                    });
                } else {
                    console.error('Error:', error);
                }
            }
        }
    }

    return (
        <Modal visible={true}>
            <KeyboardAvoidingView
                style={loginWidgetStyle.view}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={createPassWidgetStyle.view}>
                    <View style={createPassWidgetStyle.block}>
                        <View style={createPassWidgetStyle.block_container}>
                            <View style={createPassWidgetStyle.top}>
                                <Image
                                    source={require('../../assets/img/logo.png')}
                                    style={{ width: 80, height: 26 }}
                                />
                                <TouchableOpacity onPress={()=> handleCrossPress()}>
                                    <Image
                                        source={require('../../assets/icons/search/cross.png')}
                                        style={{ width: 15, height: 15 }}
                                    />
                                </TouchableOpacity>

                            </View>
                            <View style={createPassWidgetStyle.text_container}>
                                <Text style={createPassWidgetStyle.text}>Придумайте имя{'\n'}и пароль</Text>
                            </View>
                            <Text style={createPassWidgetStyle.subtitle}>
                                Пароль должен содержать хотя бы 10 символов
                            </Text>
                            <TextInput
                                style={createPassWidgetStyle.inputfiled}
                                placeholder="Введите ваше имя"
                                onChangeText={(text) => {setLogin(text)}}
                                value={login}
                            />
                            <TextInput
                                style={createPassWidgetStyle.inputfiled}
                                placeholder="Введите ваш пароль"
                                onChangeText={(text) => {setPassword(text)}}
                                value={password}
                                secureTextEntry={true}
                            />
                            <TextInput
                                style={createPassWidgetStyle.inputfiled}
                                placeholder="Повторить введенный пароль"
                                onChangeText={(text) => {setCheckPassword(text)}}
                                value={checkPassword}
                                secureTextEntry={true}
                            />

                            <TouchableOpacity
                                style={createPassWidgetStyle.button}
                                onPress={() => handlerContinue()}
                            >
                                <Text style={createPassWidgetStyle.button_text}>Продолжить</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
            <StatusBar barStyle="dark-content"/>
        </Modal>
    );

}
