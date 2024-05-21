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
import { passWidgetStyle } from "./passWidgetStyle";

export default function PassWidget() {

    const { index, setIndex } = React.useContext(CreatContext)

    const handleScreenPress = () => {
        setIndex(0)
    };

    const recoveryButtonHandler = () => {
        setIndex(9)
    };


    return (
        <Modal visible={true}>
            <View style={passWidgetStyle.view}>
                <View style={passWidgetStyle.block}>
                    <View style={passWidgetStyle.block_container}>
                        <View style={passWidgetStyle.top}>
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
                        <Text style={passWidgetStyle.text}>Введите пароль</Text>
                        <TextInput
                            style={passWidgetStyle.inputfiled}
                            placeholder="Введите ваш пароль"/>
                        <TouchableOpacity style={passWidgetStyle.button} >
                            <Text style={passWidgetStyle.button_text}> Подтвердить</Text>
                        </TouchableOpacity>
                        <View style={passWidgetStyle.text_bottom}>
                            <Text style={passWidgetStyle.text_bottom_text}>Забыли пароль? </Text>
                            <TouchableOpacity onPress={()=>recoveryButtonHandler()}>
                                <Text style={passWidgetStyle.reg_text}>Нажмите сюда для восстановления </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <StatusBar barStyle="dark-content" />
        </Modal>
    );

}
