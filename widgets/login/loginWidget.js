import React, { useState } from "react";
import { StatusBar } from "react-native";
import {
    Image,
    Modal,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import CreatContext from "../../context/context";
import { loginWidgetStyle } from "./loginWidgetStyle";

export function LoginWidget() {


    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxPress = () => {
        setIsChecked(!isChecked);
    };

    const { index, setIndex } = React.useContext(CreatContext)

    const handleScreenPress = () => {
        setIndex(0)
    };

    const regButtonHandler = () => {
        setIndex(7)
    };

    const continueButtonHandler = () => {
        setIndex(8)
    };

    return (
        <Modal visible={true}>
            <View style={loginWidgetStyle.view}>
                <View style={loginWidgetStyle.block}>
                    <View style={loginWidgetStyle.block_container}>
                        <View style={loginWidgetStyle.top}>
                            <Image
                                source={require('../../assets/img/logo.png')}
                                style={{ width: 65, height: 20 }}
                            />
                            <TouchableOpacity onPress={()=>handleScreenPress()}>
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
                            placeholder="E-mail@mail.ru"/>
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
                        <TouchableOpacity style={loginWidgetStyle.button} onPress={()=>continueButtonHandler()} >
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
                            <TouchableOpacity onPress={()=>regButtonHandler()}>
                                <Text style={loginWidgetStyle.reg_text}>Зарегистрируйтесь!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <StatusBar barStyle="dark-content" />
        </Modal>
    );

}
