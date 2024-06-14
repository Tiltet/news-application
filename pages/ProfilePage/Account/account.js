import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import React, {useEffect, useState} from "react";
import {accountStyle} from "./accountStyle";
import ButtonProfile from "../button/button";
import { Dropdown } from "../../../components/Dropdown/dropdown";
import CountryPicker from 'react-native-country-picker-modal';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CreatContext from "../../../context/context";

export function Account() {

    const { index, setIndex } = React.useContext(CreatContext)
    const [ isEditing, setIsEditing ] = useState(false);
    const [ selectedCountry, setSelectedCountry] = useState("");
    const [ selectedCode, setSelectedCode] = useState("BY");
    const [ isDatePickerVisible, setDatePickerVisibility ] = useState(false);
    const [ date, setDate ] = useState(18);
    const [ selectedCategory, setSelectedCategory ] = useState('');
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ nameChange, setNameChange ] = useState('');
    const [ emailChange, setEmailChange ] = useState('');

    // ПРЕОБРАЗУЕТ ПОЛУЧЕННУЮ ДАТУ РОЖДЕНИЯ В ВОЗРАСТ ПОЛЬЗОВАТЕЛЯ
    const calculateAge = (birthDate) => {
        const today = new Date();
        const birth = new Date(birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }

        return age;
    };


    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    // ВЫБОР ДАТЫ РОЖДЕНИЯ
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    // ВЫБОР ДАТЫ РОЖДЕНИЯ
    const handleConfirm = (when) => {
        const age = calculateAge(when);
        if (age < 10) {
            Alert.alert("Введите правильную дату рождения!")
            setDate(18)
        } else {
            setDate(age);
        }
        hideDatePicker();
    };

    // КНОПКА ВЫБОРА СТРАНЫ
    const handlerCountry = ( code, country ) => {
        setSelectedCountry(country)
        setSelectedCode(code);
    }

    // КНОПКА РЕДАКТИРОВАТЬ
    const handleEditPress = async () => {
        setIsEditing(true);
    }

    // СОХРАНЕНИЕ ИЗМЕНЕНИЙ
    const handleSavePress = () => {
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(emailChange)) {
            console.log(emailChange)
            Alert.alert("Неправильный email")
        }
        else {
            setName(nameChange)
            setEmail(emailChange)
        }
        setIsEditing(false);
    }

    // ВЫБРАТЬ КАТЕГОРИЮ
    const selectCategory = (index, category) => {
        setSelectedCategory(category);
    };

    // КНОПКА ВЫХОДА
    const handlerExit = () => {
        AsyncStorage.removeItem("token").then(r => console.log("Exit"));
        setIndex(1);
    }

    return (
        <View style={accountStyle.main_container}>
            <Text style={accountStyle.title}>Привет, {name}!</Text>
            {isEditing ? (
                // КОНТЕЙНЕР С ИЗМЕНЕНИЕМ ИНФОРМАЦИИ
                <View style={accountStyle.container}>
                    <View>
                        <Text style={accountStyle.container_title}>
                            Информация об аккаунте
                        </Text>
                        <View style={accountStyle.info_text}>
                            <Text style={accountStyle.info_text_title}>Имя</Text>
                            <TextInput
                                style={accountStyle.info_text_input}
                                value={nameChange}
                                onChangeText={setNameChange}
                            >
                            </TextInput>
                        </View>
                        <View style={accountStyle.info_text}>
                            <Text style={accountStyle.info_text_title}>E-mail</Text>
                            <TextInput
                                style={accountStyle.info_text_input}
                                value={emailChange}
                                onChangeText={setEmailChange}
                            >
                            </TextInput>
                        </View>
                    </View>

                    <View style={accountStyle.info_buttons}>
                        <View style={accountStyle.info_buttons_line}>
                            <View style={{ marginRight: 10 }}>
                                <ButtonProfile text={"Сохранить"} props={handleSavePress} backgroundColor={"#88A2FF"} />
                            </View>
                            <View>
                                <ButtonProfile text={"Отмена"} backgroundColor={"#000"} />
                            </View>
                        </View>
                    </View>
                </View>
            ) : (
                // КОНТЕЙНЕР С ТЕКУЩЕЙ ИНФОРМАЦИЕЙ
                <View style={accountStyle.container}>
                    <View style={accountStyle.uppercontainer}>
                        <View>
                            <Text style={accountStyle.container_title}>
                                Информация об аккаунте
                            </Text>
                        </View>
                        <View>
                            <View style={accountStyle.info_text}>
                                <Text style={accountStyle.info_text_title}>Имя</Text>
                                <Text style={accountStyle.info_text_text}>{name}</Text>
                            </View>
                            <View style={accountStyle.info_text}>
                                <Text style={accountStyle.info_text_title}>email</Text>
                                <Text style={accountStyle.info_text_text}>{email}</Text>
                            </View>
                        </View>
                        <View style={accountStyle.info_buttons}>
                            <View style={
                                [accountStyle.info_buttons_line,
                                    {
                                        borderBottomColor: "gray",
                                        borderBottomWidth: 1,
                                        paddingBottom: 10,
                                    }]}>
                                <View style={{ marginRight: 15 }}>
                                    <ButtonProfile text={"Изменить"} props={handleEditPress} backgroundColor={"#88A2FF"}/>
                                </View>
                                <View>
                                    <ButtonProfile text={"Выйти"} props={handlerExit} backgroundColor={"#000"} />
                                </View>
                            </View>
                            <View style={[accountStyle.info_buttons_line, {  }]}>
                                <ButtonProfile text={"Изменить пароль"} backgroundColor={'#88A2FF'}/>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={accountStyle.info_forgotPassword}>
                        <Text style={accountStyle.info_forgotPassword_text}> Забыли пароль?</Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* КОНТЕЙНЕР С ПРОФИЛЕМ */}
            <View style={accountStyle.container}>
                <Text style={accountStyle.container_title}>Мой профиль</Text>
                <View style={accountStyle.profile_item}>
                    <Text style={accountStyle.profile_item_text}>Местоположение</Text>
                    <View style={accountStyle.profile_item_country_container}>
                        <View style={{ marginHorizontal: 10 }}>
                            <CountryPicker
                                withFlag
                                withCountryNameButton
                                withAlphaFilter
                                withEmoji
                                onSelect={(country) => handlerCountry(country.cca2, country.name)}
                                countryCode={selectedCode}
                            />
                        </View>
                    </View>
                </View>
                <View style={accountStyle.profile_item}>
                    <Text style={accountStyle.profile_item_text}>Возраст</Text>
                    <View>
                        <View style={accountStyle.profile_item_country_container}>
                            <View style={{ marginHorizontal: 10, paddingVertical: 10 }}>
                                <TouchableOpacity onPress={showDatePicker}>
                                    <Text style={{ fontSize: 16 }}>{date}</Text>
                                </TouchableOpacity>
                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    onConfirm={handleConfirm}
                                    onCancel={hideDatePicker}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={accountStyle.profile_item}>
                    <Text style={accountStyle.profile_item_text}>Интересующие категории новостей</Text>
                    <View style={{ marginTop: 5 }}>
                        <Dropdown
                            categories={["Политика", "Мировые новости", "Экономика", "Бизнес"]}
                            selectOption={selectCategory}
                            selectedValue={selectedCategory}
                            iconSize={24}
                        />
                    </View>
                </View>
            </View>
        </View>

    )
}
