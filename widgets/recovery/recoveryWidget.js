import React from "react";
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
import { loginWidgetStyle } from "../login/loginWidgetStyle";

export default function RecoveryWidget() {

    const { index, setIndex } = React.useContext(CreatContext)

    const handleScreenPress = () => {
        setIndex(0)
    };

    return (
        <Modal visible={true}>
            <View style={loginWidgetStyle.view}>
                <View style={loginWidgetStyle.block}>
                    <View style={loginWidgetStyle.block_container}>
                        <View style={loginWidgetStyle.top}>
                            <Image
                                source={require('../../assets/img/logo.png')}
                                style={{ width: 80, height: 26 }}
                            />
                            <TouchableOpacity onPress={()=>handleScreenPress()}>
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
                            placeholder="E-mail@mail.ru"/>
                        <TouchableOpacity style={loginWidgetStyle.button} >
                            <Text style={loginWidgetStyle.button_text}> Подтвердить</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <StatusBar barStyle="dark-content" />
        </Modal>
    );

}
