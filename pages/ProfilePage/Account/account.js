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
    const [ isDatePickerVisible, setDatePickerVisibility ] = useState(false);
    const [ loginChange, setLoginChange ] = useState('');
    const [ emailChange, setEmailChange ] = useState('');
    const [ userInfo, setUserInfo] = useState({
        login: '',
        email: '',
        age: 18,
        selectedCountry: '',
        locationCode: '',
        selectedCategory: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const login = await AsyncStorage.getItem('login');
                const email = await AsyncStorage.getItem('email');
                const age = await AsyncStorage.getItem('age');
                const location = await AsyncStorage.getItem('location');
                const locationCode = await AsyncStorage.getItem('locationCode')
                const favoriteNewsCategory = await AsyncStorage.getItem('favoriteNewsCategory')
                setUserInfo({
                    ...userInfo,
                    login: login || '',
                    email: email || '',
                    age: age || 18,
                    locationCode: locationCode || 'MD',
                    selectedCountry: location || '',
                    selectedCategory: favoriteNewsCategory || '',
                });
            } catch (error) {
                console.error('Ошибка во время получения данных из AsyncStorage', error);
            }
        };
        fetchData();
    }, []);

    // Функция для проверки email
    const isValidEmail = (email) => {
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return emailRegex.test(email);
    };

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

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    // ВЫБОР ДАТЫ РОЖДЕНИЯ
    const handleConfirm = async (when) => {
        setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            age: calculateAge(when)
        }));
        await AsyncStorage.setItem('age', calculateAge(when).toString());
        hideDatePicker();
    };

    // КНОПКА ВЫБОРА СТРАНЫ
    const handlerCountry = async (code, country) => {
        setUserInfo({
            ...userInfo,
            selectedCountry: country,
        })
        setUserInfo({
            ...userInfo,
            locationCode: code,
        })
        await AsyncStorage.setItem('locationCode', code)
    }

    // КНОПКА РЕДАКТИРОВАТЬ
    const handleEditPress = async () => {
        setIsEditing(true);
    }

    // СОХРАНЕНИЕ ИЗМЕНЕНИЙ
    const handleSavePress = async () => {
        if (!isValidEmail(emailChange)) {
            Alert.alert("Неправильный email!")
        } else if (loginChange === '') {
            Alert.alert("Имя не заполнено!")
        } else {
            setUserInfo({
                ...userInfo,
                login: loginChange,
                email: emailChange,
            })
            await AsyncStorage.setItem("login", loginChange)
            await AsyncStorage.setItem("email", emailChange)
        }
        setIsEditing(false);
    }

    // ВЫБРАТЬ КАТЕГОРИЮ
    const selectCategory = async (index, category) => {
        setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            selectedCategory: category
        }));
        await AsyncStorage.setItem('favoriteNewsCategory', category);
    };

    // КНОПКА ВЫХОДА
    const handlerExit = () => {
        AsyncStorage.removeItem("token").then(r => console.log("Remove token"))
        AsyncStorage.removeItem("login").then(r => console.log("Remove login"))
        AsyncStorage.removeItem("email").then(r => console.log("Remove email"))
        AsyncStorage.removeItem("age").then(r => console.log("Remove age"))
        AsyncStorage.removeItem("location").then(r => console.log("Remove location"))
        AsyncStorage.removeItem("locationCode").then(r => console.log("Remove locationCode"))
        AsyncStorage.removeItem("favoriteNewsCategory").then(r => console.log("Remove favoriteNewsCategory"))
        setIndex(1);
    }

    return (
        <View style={accountStyle.main_container}>
            <Text style={accountStyle.title}>Привет, {userInfo.login}!</Text>
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
                                value={loginChange}
                                onChangeText={setLoginChange}
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
                                <ButtonProfile
                                    text={"Сохранить"}
                                    props={handleSavePress}
                                    backgroundColor={"#88A2FF"}
                                />
                            </View>
                            <View>
                                <ButtonProfile
                                    text={"Отмена"}
                                    props={handleSavePress}
                                    backgroundColor={"#000"}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            ) : (
                // КОНТЕЙНЕР С ТЕКУЩЕЙ ИНФОРМАЦИЕЙ
                <View style={accountStyle.container}>
                    <View style={accountStyle.uppercontainer}>
                        <View>
                            <Text style={accountStyle.container_title}>Информация об аккаунте</Text>
                        </View>
                        <View>
                            <View style={accountStyle.info_text}>
                                <Text style={accountStyle.info_text_title}>Имя</Text>
                                <Text style={accountStyle.info_text_text}>{userInfo.login}</Text>
                            </View>
                            <View style={accountStyle.info_text}>
                                <Text style={accountStyle.info_text_title}>email</Text>
                                <Text style={accountStyle.info_text_text}>{userInfo.email}</Text>
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
                                    <ButtonProfile
                                        text={"Изменить"}
                                        props={handleEditPress}
                                        backgroundColor={"#88A2FF"}
                                    />
                                </View>
                                <View>
                                    <ButtonProfile
                                        text={"Выйти"}
                                        props={handlerExit}
                                        backgroundColor={"#000"}
                                    />
                                </View>
                            </View>
                            <View style={accountStyle.info_buttons_line}>
                                <ButtonProfile
                                    text={"Изменить пароль"}
                                    backgroundColor={'#88A2FF'}
                                />
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={accountStyle.info_forgotPassword}>
                        <Text style={accountStyle.info_forgotPassword_text}>Забыли пароль?</Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* КОНТЕЙНЕР С ПРОФИЛЕМ */}
            <View style={accountStyle.container}>
                <Text style={accountStyle.container_title}>Мой профиль</Text>
                <View style={accountStyle.profile_item}>
                    <Text style={accountStyle.profile_item_text}>Интересующие категории новостей</Text>
                    <View style={{ marginTop: 5 }}>
                        <Dropdown
                            categories={["Политика", "Мировые новости", "Экономика", "Бизнес"]}
                            selectOption={selectCategory}
                            defaultValue={userInfo.selectedCategory}
                        />
                    </View>
                </View>
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
                                countryCode={userInfo.locationCode}
                            />
                        </View>
                    </View>
                </View>
                <View style={accountStyle.profile_item}>
                    <Text style={accountStyle.profile_item_text}>Возраст</Text>
                    <View style={accountStyle.profile_item_country_container}>
                        <View style={{ marginHorizontal: 10, paddingVertical: 10 }}>
                            <TouchableOpacity onPress={showDatePicker}>
                                <Text style={{ fontSize: 16 }}>{userInfo.age}</Text>
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
        </View>

    )
}
