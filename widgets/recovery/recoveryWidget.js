import React, {useState} from "react";
import {Alert, KeyboardAvoidingView, Platform, StatusBar} from "react-native";
import {
    Image,
    Modal,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import CreatContext from "../../context/context";
import { loginWidgetStyle } from "../login/loginWidgetStyle";
import {passWidgetStyle} from "../password/passWidgetStyle";

export function RecoveryWidget() {

    const { index, setIndex } = React.useContext(CreatContext)
    const [ email, setEmail ] = useState()

    // НАЖАТИЕ НА КНОПКУ КРЕСТИКА
    const handleScreenPress = () => {
        setIndex(0)
    };

    // НАЖАТИЕ НА КНОПКУ ПРОДОЛЖИТЬ
    const handlerContinue = () => {
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!emailRegex.test(email)) {
            Alert.alert("Неправильный email")
        } else {

            setIndex(11)
        }
    }

    return (
        <Modal visible={true}>
            <KeyboardAvoidingView
                style={passWidgetStyle.view}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={loginWidgetStyle.view}>
                    <View style={loginWidgetStyle.block}>
                        <View style={loginWidgetStyle.block_container}>
                            <View style={loginWidgetStyle.top}>
                                <Image
                                    source={require('../../assets/img/logo.png')}
                                    style={{ width: 80, height: 26 }}
                                />
                                <TouchableOpacity onPress={()=> handleScreenPress()}>
                                    <Image
                                        source={require('../../assets/icons/search/cross.png')}
                                        style={{ width: 15, height: 15 }}
                                    />
                                </TouchableOpacity>

                            </View>
                            <Text style={loginWidgetStyle.text}>Восстановление пароля</Text>
                            <Text style={loginWidgetStyle.subtitle}>Введите e-mail, который использовали для регистрации</Text>
                            <TextInput
                                style={loginWidgetStyle.inputfiled}
                                value={email}
                                onChangeText={setEmail}
                                placeholder="E-mail@mail.ru"/>
                            <TouchableOpacity
                                style={loginWidgetStyle.button}
                                onPress={() => handlerContinue()}
                            >
                                <Text style={loginWidgetStyle.button_text}>Подтвердить</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <StatusBar barStyle="dark-content" />
            </KeyboardAvoidingView>
        </Modal>
    );

}
