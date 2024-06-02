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
import {createPassWidgetStyle} from "./createPassWidgetStyle";

export function CreatePassWidget() {

    const { index, setIndex } = React.useContext(CreatContext)

    const handleScreenPress = () => {
        setIndex(0)
    };

    return (
        <Modal visible={true}>
            <View style={createPassWidgetStyle.view}>
                <View style={createPassWidgetStyle.block}>
                    <View style={createPassWidgetStyle.block_container}>
                        <View style={createPassWidgetStyle.top}>
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
                        <View style={createPassWidgetStyle.text_container}>
                            <Text style={createPassWidgetStyle.text}>Придумайте имя</Text>
                            <Text style={createPassWidgetStyle.text}>и пароль</Text>
                        </View>
                        <Text style={createPassWidgetStyle.subtitle}>Пароль должен содержать хотя бы 10 символов</Text>
                        <TextInput
                            style={createPassWidgetStyle.inputfiled}
                            placeholder="Введите ваше имя"/>
                        <TextInput
                            style={createPassWidgetStyle.inputfiled}
                            placeholder="Введите ваше имя"/>
                        <TextInput
                            style={createPassWidgetStyle.inputfiled}
                            placeholder="Введите ваше имя"/>

                        <TouchableOpacity style={createPassWidgetStyle.button} >
                            <Text style={createPassWidgetStyle.button_text}> Продолжить</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <StatusBar barStyle="dark-content" />
        </Modal>
    );

}
