import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
    Image,
    Modal,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import CreatContext from "../../context/context";

export default function LoginWidget() {


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
            <View style={styles.view}>
                <View style={styles.block}>
                    <View style={styles.block_container}>
                        <View style={styles.top}>
                            <Image
                                source={require('../../assets/img/logo.png')}
                                style={{ width: 120, height: 40 }}
                            />
                            <TouchableOpacity onPress={()=>handleScreenPress()}>
                                <Image
                                    source={require('../../assets/icons/search/cross.png')}
                                    style={{ width: 15, height: 15 }}
                                />
                            </TouchableOpacity>

                        </View>
                        <Text style={styles.text}>Войти</Text>
                        <Text style={styles.subtitle}>Введите свой email, чтобы войти</Text>
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
                            <Text>Отправляя свои данные, я принимаю политику конфиденциальности</Text>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={()=>continueButtonHandler()} >
                            <Text style={styles.button_text}> Продолжить</Text>
                        </TouchableOpacity>
                        <View style={styles.social}>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../assets/icons/login/google.png')}
                                    style={{ width: 50, height: 50 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../assets/icons/login/facebook.png')}
                                    style={{ width: 50, height: 50 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../assets/icons/login/apple.png')}
                                    style={{ width: 50, height: 50 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../assets/icons/login/twitter.png')}
                                    style={{ width: 50, height: 50 }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.text_bottom}>
                            <Text style={{ fontSize: 18 }}>Еще нет аккаунта? </Text>
                            <TouchableOpacity onPress={()=>regButtonHandler()}>
                                <Text style={styles.reg_text}>Зарегистрируйтесь! </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );

}

const  styles = StyleSheet.create({
    view:{
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
        height: 530,
        width: 370,
        backgroundColor: "#fff",
        display: "flex",
        borderWidth: 1,
        borderRadius: 40
    },
    block_container: {
        marginHorizontal: 40,
    },
    text: {
        alignSelf: "center",
        fontSize: 26,
        color: "#000",
        marginBottom: 10,
        fontWeight:"600"
    },
    top:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 20,
        marginBottom: 10
    },
    subtitle:{
        fontSize: 15,
        alignSelf: "center",
        marginBottom: 10

    },
    inputfiled:{
        padding: 10,
        alignSelf: "center",
        width: 300,
        height: 50,
        borderWidth: 1,
        borderRadius: 15
    },
    checkbox:{
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        width:20,
        height: 20,
        borderWidth: 1,
        borderRadius: 4,
        marginRight:5
    },
    checkbox_container: {
        marginTop: 15,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    button: {
        marginTop:20,
        alignSelf: "center",
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#88A2FF",
        width: 300,
        height: 50,
        borderRadius: 15,
    },
    button_text:{
        fontSize: 18,
        fontWeight:"700"
    },
    social:{
        paddingLeft:15,
        paddingRight:15,
        display:"flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 40
    },
    text_bottom:{
        marginTop:20,
        alignSelf: "center",
        display:"flex",
        flexDirection: "row"
    },
    reg_text:{
        color: "#88A2FF",
        fontSize:17 ,
        textDecorationLine: "underline",
        fontWeight:"600"
    }
})