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
import {innstructionidgetStyle} from "./instructionWidgetStyle";

export function InstructionWidget() {

    const { index, setIndex } = React.useContext(CreatContext)

    const handleScreenPress = () => {
        setIndex(0)
    };

    return (
        <Modal visible={true}>
            <View style={innstructionidgetStyle.container}>
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
                        <View style={innstructionidgetStyle.text_container}>
                            <Text style={innstructionidgetStyle.upper_text}>Инструкция отправлена!</Text>
                            <View style={innstructionidgetStyle.middle_text_container}>
                                <Text style={{fontSize:15}} > На вашу почту отправлена инструкция</Text>
                                <Text style={{fontSize:15}}> по восстановлению пароля</Text>
                            </View>
                            <View style={innstructionidgetStyle.lower_text_container}>
                                <View style={innstructionidgetStyle.nothingtext_container}>
                                    <Text> Ничего не пришло?</Text>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Text style={innstructionidgetStyle.text_underline}> Нажмите сюда, чтобы прислать </Text>
                                        <Text style={innstructionidgetStyle.text_underline}> заново</Text>
                                    </TouchableOpacity>

                                </View>

                            </View>

                        </View>
                    </View>
                </View>
            </View>
            <StatusBar barStyle="dark-content" />
        </Modal>
    );

}
