import React from 'react';
import { StatusBar } from "react-native";
import {
    Image,
    Modal,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    StyleSheet,
} from "react-native";
import CreatContext from "../../context/context";
import { loginWidgetStyle } from "../login/loginWidgetStyle";
import {innstructionidgetStyle} from "../instruction/instructionWidgetStyle";
import {useRef} from "react";
import {codeWidgetStyle} from "./codeWidgetStyle";

export function CodeWidget() {

    const { index, setIndex } = React.useContext(CreatContext)

    const handleScreenPress = () => {
        setIndex(0)
    };


    const inputRefs = useRef([]);

    const handleCodeChange = (text, index) => {
        if (text.length === 1 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        } else if (text.length === 0 && index > 0) {
            inputRefs.current[index - 1].focus();
        }

        const code = inputRefs.current
            .map((ref) => ref.value)

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
                        <View style={codeWidgetStyle.text_container}>
                            <Text style={codeWidgetStyle.upper_text}>Введите код</Text>
                            <View style={codeWidgetStyle.middle_text_container}>
                                <Text style={{fontSize:15}} >На E-mail@mail.ru отправлен</Text>
                                <Text style={{fontSize:15}}> одноразовый код</Text>
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
                            <TouchableOpacity style={codeWidgetStyle.button}>
                                <Text style={{fontSize:15,fontWeight:"600"}}>Продолжить</Text>
                            </TouchableOpacity>
                            <View style={codeWidgetStyle.lower_text_container}>
                                <View style={codeWidgetStyle.nothingtext_container}>
                                    <Text>Код не пришел?</Text>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Text style={codeWidgetStyle.text_underline}> Нажмите сюда, чтобы прислать </Text>
                                        <Text style={codeWidgetStyle.text_underline}> заново</Text>
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

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 10,
    },
    codeBox: {
        width: 45,
        height: 45,
        borderWidth: 1.5,
        borderColor: 'black',
        textAlign: 'center',
        fontSize: 20,
        marginRight: 10,
        borderRadius:10,
    },
});
