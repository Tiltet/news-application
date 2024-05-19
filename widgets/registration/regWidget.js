import React, { useState } from "react";
import { StatusBar, StyleSheet } from "react-native";
import {
    Image,
    Modal,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import CreatContext from "../../context/context";

export default function RegWidget() {


    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxPress = () => {
        setIsChecked(!isChecked);
    };

    const { index, setIndex } = React.useContext(CreatContext)

    const handleScreenPress = () => {
        setIndex(0)
    };

    const loginButtonHandler = () => {
        setIndex(6)
    };


    return (
        <Modal visible={true}>
            <View style={styles.view}>
                <View style={styles.block}>
                    <View style={styles.block_container}>
                        <View style={styles.top}>
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
                        <Text style={styles.text}>Регистрация</Text>
                        <Text style={styles.subtitle}>Для регистрации введите e-mail или воспользуйтесь сервисами ниже</Text>
                        <TextInput
                            style={styles.inputfiled}
                            placeholder="E-mail@mail.ru"/>
                        <View style={styles.checkbox_container}>
                            <TouchableOpacity style={styles.checkbox} onPress={handleCheckboxPress}>
                                <View>
                                    {isChecked && (
                                        <View
                                            style={{
                                                width: 10,
                                                height: 10,
                                                borderRadius: 4,
                                                backgroundColor: 'blue',
                                            }}
                                        />
                                    )}
                                </View>
                            </TouchableOpacity>
                            <Text style={styles.checkbox_text}>Отправляя свои данные, я принимаю политику конфиденциальности</Text>
                        </View>
                        <TouchableOpacity style={styles.button} >
                            <Text style={styles.button_text}> Продолжить</Text>
                        </TouchableOpacity>
                        <View style={styles.social}>
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
                        <View style={styles.text_bottom}>
                            <Text style={styles.text_bottom_text}>Уже есть аккаунт?</Text>
                            <TouchableOpacity onPress={()=> loginButtonHandler()}>
                                <Text style={styles.reg_text}>Войдите!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <StatusBar barStyle="dark-content" />
        </Modal>
    );

}

const styles= StyleSheet.create({
    view: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#000",
        backgroundColor: "transparent",
        height: "100%",
        width: "100%",
    },
    block: {
        paddingVertical: 20,
        width: '86%',
        backgroundColor: "#fff",
        display: "flex",
        borderWidth: 1,
        borderRadius: 40
    },
    block_container: {
        marginHorizontal: 30,
    },
    text: {
        marginTop: 15,
        alignSelf: "center",
        fontSize: 20,
        color: "#000",
        marginBottom: 10,
        fontWeight: "600",
    },
    top: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    subtitle: {
        fontSize: 13,
        alignSelf: "center",
    },
    inputfiled: {
        marginTop: 30,
        padding: 10,
        alignSelf: "center",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10
    },
    checkbox:{
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 4,
        marginRight:5
    },
    checkbox_text: {
        fontSize: 12,
    },
    checkbox_container: {
        width: "100%",
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    button: {
        marginTop: 20,
        alignSelf: "center",
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#88A2FF",
        width: '100%',
        height: 50,
        borderRadius: 15,
    },
    button_text: {
        fontSize: 14,
        fontWeight:"700"
    },
    social: {
        paddingLeft: 15,
        paddingRight: 15,
        display:"flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 40
    },
    text_bottom: {
        marginTop: 20,
        display: "flex",
        alignSelf: "center",
        flexDirection: "row"
    },
    text_bottom_text: {
        fontSize: 12,
        fontWeight: "500",
    },
    reg_text: {
        marginLeft: 5,
        color: "#88A2FF",
        fontSize: 12,
        textDecorationLine: "underline",
        fontWeight: "500",
    }
})
