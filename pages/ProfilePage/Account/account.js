import {View, Text, TouchableOpacity, TextInput} from "react-native";
import React, {useState} from "react";
import {accountStyle} from "./accountStyle";
import ModalDropdown from 'react-native-modal-dropdown';
import AsyncStorage from "@react-native-async-storage/async-storage";
import ButtonProfile from "../button/button";

export function Account() {

    const [isChecked, setIsChecked] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const handleEditPress = async () => {
        setIsEditing(true);
        const token = await AsyncStorage.getItem("token")
        console.log(token)
    }

    const handleSavePress = () => {
        setIsEditing(false);
    }

    const list = [
        'Option 1',
        'Option 2',
        'Option 3',
    ];

        return (
            <View style={accountStyle.container}>
                <Text style={accountStyle.title}> Привет, Jopa!</Text>
                <View style={accountStyle.middlecontainer}>
                    {isEditing ? (
                        <View>
                            <View>
                                <Text style={accountStyle.info_infoText}>
                                    Информация об аккаунте
                                </Text>
                            </View>
                            <Text style={accountStyle.text}>Имя</Text>
                            <TextInput style={accountStyle.edit_input}>

                            </TextInput>
                            <Text style={accountStyle.text}>E-mail</Text>
                            <TextInput style={accountStyle.edit_input} >

                            </TextInput>

                            <View style={accountStyle.edit_button_contatiner}>
                                <TouchableOpacity style={accountStyle.edit_button} onPress={handleSavePress}>
                                    <Text style={accountStyle.button_text}>Сохранить</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={accountStyle.cancel_button} onPress={handleSavePress}>
                                    <Text style={accountStyle.button_text}>Отмена</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ) : (
                        // Контейнер с текущей информацией об аккаунте
                        <View>
                            <View style={accountStyle.uppercontainer}>
                                <View>
                                    <Text style={accountStyle.info_title}>
                                        Информация об аккаунте
                                    </Text>
                                </View>
                                <View>
                                    <View style={accountStyle.info_text}>
                                        <Text style={accountStyle.info_text_title}>Имя</Text>
                                        <Text style={accountStyle.info_text_text}>Саша</Text>
                                    </View>
                                    <View style={accountStyle.info_text}>
                                        <Text style={accountStyle.info_text_title}>email</Text>
                                        <Text style={accountStyle.info_text_text}>ааааа0303@gmail.com</Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: 20, paddingBottom: 15, borderBottomWidth: 1, borderBottomColor: "#ACADAC" }}>
                                    <ButtonProfile text={"Изменить"} props={handleEditPress}/>
                                </View>
                                <View style={{ marginTop: 15 }}>
                                    <ButtonProfile text={"Изменить пароль"}/>
                                </View>
                            </View>
                            <View style={accountStyle.lowercontainer}>
                                <TouchableOpacity style={accountStyle.button}>
                                    <Text style={{color: "white"}}>Изменить пароль</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={accountStyle.forgetpass}> Забыли пароль?</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    )}

                </View>

                <View style={accountStyle.middlecontainer}>
                    <Text style={accountStyle.headtext}> Мой профиль</Text>
                    <View style={accountStyle.textcontainer}>
                        <Text style={accountStyle.smalltext}> Местоположение </Text>
                        <ModalDropdown dropdownStyle={accountStyle.dropdownContainer} defaultValue=""
                                       style={accountStyle.droplist}
                                       options={list}
                                       initialScrollIndex={0}
                        >
                        </ModalDropdown>
                    </View>

                    <View style={accountStyle.textcontainer}>
                        <Text style={accountStyle.smalltext}> Возраст </Text>
                        <ModalDropdown dropdownStyle={accountStyle.dropdownContainer} defaultValue=""
                                       style={accountStyle.droplist} options={list}
                                       initialScrollIndex={0}>
                        </ModalDropdown>
                    </View>

                    <View style={accountStyle.textcontainer}>
                        <Text style={accountStyle.smalltext}> Интересующие категории новостей </Text>
                        <ModalDropdown dropdownStyle={accountStyle.dropdownContainer} defaultValue=""
                                       style={accountStyle.droplist} options={list}
                                       initialScrollIndex={0}>
                        </ModalDropdown>
                    </View>
                </View>
            </View>

        )
}
