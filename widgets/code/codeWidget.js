import React, {useState} from 'react';
import CreatContext from "../../context/context";
import { KeyboardAvoidingView, Platform, StatusBar} from "react-native";
import { Image, Modal, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { loginWidgetStyle } from "../login/loginWidgetStyle";
import { innstructionidgetStyle } from "../instruction/instructionWidgetStyle";
import { useRef } from "react";
import { codeWidgetStyle } from "./codeWidgetStyle";
import { requestCode } from "./codeWidgetRequest";

export function CodeWidget() {

    const { index, setIndex } = React.useContext(CreatContext)
    const [ codeValues, setCodeValues ] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);

    // ОБРАБОТЧИК НАЖАТИЯ НА КРЕСТИК
    const handleCrossPress = () => {
        setIndex(0)
    };

    const handleCodeChange = (text, index) => {
        const updatedValues = [...codeValues];
        updatedValues[index] = text;
        setCodeValues(updatedValues);

        if (text.length === 1 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        } else if (text.length === 0 && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    // ОБРАБОТЧИК НАЖАТИЯ НА КНОПКУ ПРОДОЛЖИТЬ
    const handlerContinue = async () => {
        const code = codeValues.join('');
        console.log(code);

        if (await requestCode(code)) {
            setIndex(6)
        }
    }

    return (
        <Modal visible={true}>
            <KeyboardAvoidingView
                style={loginWidgetStyle.view}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={innstructionidgetStyle.container}>
                    <View style={loginWidgetStyle.block}>
                        <View style={loginWidgetStyle.block_container}>
                            <View style={loginWidgetStyle.top}>
                                <Image
                                    source={require('../../assets/img/logo.png')}
                                    style={{ width: 80, height: 26 }}
                                />
                                <TouchableOpacity onPress={() => handleCrossPress()}>
                                    <Image
                                        source={require('../../assets/icons/search/cross.png')}
                                        style={{ width: 15, height: 15 }}
                                    />
                                </TouchableOpacity>

                            </View>
                            <View style={codeWidgetStyle.text_container}>
                                <Text style={codeWidgetStyle.upper_text}>Введите код</Text>
                                <View style={codeWidgetStyle.middle_text_container}>
                                    <Text style={codeWidgetStyle.middle_text}>На ваш E-mail отправлен{'\n'}одноразовый код</Text>
                                </View>
                                <View style={styles.container}>
                                    <View style={styles.codeContainer}>
                                        {Array.from({ length: 6 }, (_, index) => (
                                            <TextInput
                                                key={index}
                                                style={styles.codeBox}
                                                maxLength={1}
                                                keyboardType="numeric"
                                                onChangeText={(text) => handleCodeChange(text, index)}
                                                ref={(ref) => (inputRefs.current[index] = ref)}
                                            />
                                        ))}
                                    </View>
                                </View>
                                <TouchableOpacity
                                    style={codeWidgetStyle.button}
                                    onPress={() => handlerContinue()}
                                >
                                    <Text style={
                                        {
                                            fontSize: 15,fontWeight: "600"
                                        }
                                    }>
                                        Продолжить
                                    </Text>
                                </TouchableOpacity>
                                <View style={codeWidgetStyle.lower_text_container}>
                                    <View>
                                        <Text style={codeWidgetStyle.nothing_text}>
                                            Код не пришел?
                                        </Text>
                                    </View>
                                    <TouchableOpacity>
                                        <Text style={codeWidgetStyle.text_underline}>
                                            Нажмите сюда, чтобы{'\n'}прислать заново
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <StatusBar barStyle="dark-content" />
            </KeyboardAvoidingView>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    codeContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
    },
    codeBox: {
        display: "flex",
        width: 40,
        height: 40,
        borderWidth: 1.5,
        borderColor: 'black',
        textAlign: 'center',
        fontSize: 20,
        marginHorizontal: 5,
        borderRadius:10,
    },
});
