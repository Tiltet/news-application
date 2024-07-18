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
import {instructionWidgetStyle} from "./instructionWidgetStyle";

export function InstructionWidget() {

    const { index, setIndex } = React.useContext(CreatContext)

    const handleScreenPress = () => {
        setIndex(0)
    };

    return (
        <Modal visible={true}>
            <View style={instructionWidgetStyle.container}>
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

                        <View style={instructionWidgetStyle.text_container}>

                            <Text style={instructionWidgetStyle.upper_text}>Инструкция отправлена!</Text>
                            <Text style={instructionWidgetStyle.info_text}>На вашу почту отправлена инструкция по восстановлению пароля</Text>

                            <View style={instructionWidgetStyle.lower_text_container}>
                                <View>
                                    <Text>Ничего не пришло?</Text>
                                </View>
                                <TouchableOpacity>
                                    <Text
                                        style={instructionWidgetStyle.text_underline}
                                        ellipsizeMode="tail"
                                    >
                                        Нажмите сюда, чтобы прислать заново
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>
            </View>
            <StatusBar barStyle="dark-content" />
        </Modal>
    );

}
