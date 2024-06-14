import {View, Text, TouchableOpacity, Image, TextInput} from "react-native";
import React, {useState} from "react";
import {accountStyle} from "../Account/accountStyle";
import  {supportStyle} from "./supportStyle";
import {loginWidgetStyle} from "../../../widgets/login/loginWidgetStyle";


export function Support() {

    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxPress = () => {
        setIsChecked(!isChecked);
    };

    const [selectedOption, setSelectedOption] = useState('');
    return (
        <View style={supportStyle.container}>
            <Text style={{fontSize: 30, marginTop: 20, marginBottom: 20}}> Привет, Jopa!</Text>
            <View style={supportStyle.middlecontainer}>
                <View>
                    <View style={supportStyle.uppercontainer}>
                        <View>
                            <Text style={supportStyle.headtext}>Контакты
                            </Text>
                        </View>
                        <View style={supportStyle.textcontainer}>
                            <Text style={supportStyle.smalltext}>Наш email </Text>
                            <Text style={{fontWeight: "700"}}>ааааа0303@gmail.com </Text>
                        </View>
                        <View style={supportStyle.textcontainer}>
                            <Text style={accountStyle.smalltext}>Наш номер </Text>
                            <Text style={{fontWeight: "700"}}>+7 777 777 77 77</Text>
                        </View>
                        <View>
                            <Text>Наши соцсети</Text>
                            <View style={supportStyle.images}>
                                <TouchableOpacity>
                                    <Image
                                        source={require('../../../assets/icons/login/facebook.png')}
                                        style={{ width: 40, height: 40 }}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity style={supportStyle.image}>
                                    <Image
                                        source={require('../../../assets/icons/login/twitter.png')}
                                        style={{ width: 40, height: 40 }}
                                    />
                                </TouchableOpacity>

                            </View>
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

                <View style={supportStyle.inputlarge}>
                    <TextInput placeholder={"Введите вопрос"}/>
                </View>
                <View style={supportStyle.checkbox_container}>
                    <TouchableOpacity style={supportStyle.checkbox} onPress={handleCheckboxPress}>
                        <View>
                            {isChecked && (
                                <View
                                    style={{
                                        width: 10,
                                        height: 10,
                                        borderRadius: 10,
                                        backgroundColor: 'blue',
                                    }}
                                />
                            )}
                        </View>
                    </TouchableOpacity>
                    <View >
                            <Text style={loginWidgetStyle.checkbox_text}>Подтверждаю, что я согласен на обработку моих персональных данных в соответствии с </Text>
                        <TouchableOpacity>
                            <Text style={supportStyle.hypertext}>Условиями</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <TouchableOpacity style={supportStyle.sendbutton}>
                    <Text style={{color:"white"}}> Отправить</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}
