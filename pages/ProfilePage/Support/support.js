import {View, Text, TouchableOpacity, Image, TextInput} from "react-native";
import React, {useState} from "react";
import {accountStyle} from "../Account/accountStyle";
import  {supportStyle} from "./supportStyle";
import ModalDropdown from 'react-native-modal-dropdown';
import {profileStyle} from "../profilePageStyle";


export function Support() {

    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxPress = () => {
        setIsChecked(!isChecked);
    };

    const list = [
        'Option 1',
        'Option 2',
        'Option 3',
    ];

    const [selectedOption, setSelectedOption] = useState('');
    return (
        <View style={supportStyle.container}>
            <Text style={{fontSize: 30, marginTop: 20, marginBottom: 20}}> Привет, Jopa!</Text>
            <View style={supportStyle.middlecontainer}>
                <View>
                    <View style={supportStyle.uppercontainer}>
                        <View>
                            <Text style={supportStyle.headtext}>
                                Контакты
                            </Text>
                        </View>
                        <View style={supportStyle.textcontainer}>
                            <Text style={supportStyle.smalltext}> Наш email </Text>
                            <Text style={{fontWeight: "700"}}> ааааа0303@gmail.com </Text>
                        </View>
                        <View style={supportStyle.textcontainer}>
                            <Text style={accountStyle.smalltext}> Наш номер </Text>
                            <Text style={{fontWeight: "700"}}> +7 777 777 77 77</Text>
                        </View>
                        <View>
                            <Text>  Наши соцсети</Text>
                            <TouchableOpacity style={supportStyle.button}>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../../../assets/icons/login/facebook.png')}
                                        style={{ width: 40, height: 40 }}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Image
                                        source={require('../../../assets/icons/login/twitter.png')}
                                        style={{ width: 40, height: 40 }}
                                    />
                                </TouchableOpacity>

                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>

            <View style={supportStyle.middlecontainer}>
                <Text style={supportStyle.headtext}> Есть вопросы?</Text>
                <View style={supportStyle.input}>
                    <TextInput placeholder={"ФИО"}/>
                </View>

                <View style={supportStyle.input}>
                    <TextInput placeholder={"Местоположение"}/>
                </View>

                <View style={supportStyle.input}>
                    <TextInput placeholder={"Введите вопрос"}/>
                </View>
            </View>
        </View>

    )
}
