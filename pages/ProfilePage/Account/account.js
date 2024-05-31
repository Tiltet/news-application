import {View, Text, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import {accountStyle} from "./accountStyle";
import ModalDropdown from 'react-native-modal-dropdown';
import {profileStyle} from "../profilePageStyle";


export function Account() {

    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxPress = () => {
        setIsChecked(!isChecked);
    };

    return(
        <View style={accountStyle.container}>
            <Text style={{fontSize: 30, marginTop:20, marginBottom:20}}> Привет, Jopa!</Text>
                <View style={accountStyle.middlecontainer}>
                    <View>
                            <View style={accountStyle.uppercontainer}>
                                <View>
                                    <Text style={accountStyle.headtext}>
                                        Информация об аккаунте
                                    </Text>
                                </View>
                                <View style={accountStyle.textcontainer} >
                                    <Text style={accountStyle.smalltext}> Имя </Text>
                                    <Text style={{fontWeight:"700"}}> Саша </Text>
                                </View>
                                <View style={accountStyle.textcontainer} >
                                    <Text style={accountStyle.smalltext}> email </Text>
                                    <Text style={{fontWeight:"700"}}> ааааа0303@gmail.com </Text>
                                </View >
                                <TouchableOpacity style={accountStyle.button}>
                                    <Text style={{color:"white"}}>Изменить</Text>
                                </TouchableOpacity>
                            </View>
                        <View style={accountStyle.uppercontainer}>
                            <TouchableOpacity style={accountStyle.button}>
                                <Text style={{color:"white"}}>Изменить пароль</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={accountStyle.forgetpass}> Забыли пароль?</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>

                <View style={accountStyle.middlecontainer}>
                    <Text style={accountStyle.headtext}> Мой профиль</Text>
                    <View style={accountStyle.textcontainer} >
                            <Text style={accountStyle.smalltext}> Местоположение </Text>
                        <ModalDropdown
                          dropdownStyle={accountStyle.dropdownContainer}
                          defaultValue=""
                          style={accountStyle.droplist}
                          options={['option 1', 'option 2', "option 12"]}
                        >
                        </ModalDropdown>
                    </View>

                    <View style={accountStyle.textcontainer} >
                        <Text style={accountStyle.smalltext}> Возраст </Text>
                        <ModalDropdown dropdownStyle={accountStyle.dropdownContainer} defaultValue="" style={accountStyle.droplist} options={['option 1', 'option 2', "option 12"]}>
                        </ModalDropdown>
                    </View>

                    <View style={accountStyle.textcontainer} >
                        <Text style={accountStyle.smalltext}> Интересующие категории новостей </Text>
                        <ModalDropdown dropdownStyle={accountStyle.dropdownContainer} defaultValue="" style={accountStyle.droplist} options={['option 1', 'option 2', "option 12"]}>
                        </ModalDropdown>
                    </View>
                </View>
        </View>

    )
}
