import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Alert} from "react-native";

export function requestLogin(email, password) {
    return  axios.post("http://localhost:4000/auth/login", {
        email: email,
        password: password,
    })
        .then(async (response) => {
            await AsyncStorage.setItem("token", response.data.accessToken)

            console.log("http://localhost:4000/auth/login - good");

            return  axios.get('http://localhost:4000/user/profile', {
                headers: {
                    'Authorization': `Bearer ${response.data.accessToken}`
                }
            })
                .then((profile) => {

                    console.log("http://localhost:4000/user/profile - good");

                    AsyncStorage.setItem("login", response.data.login);
                    AsyncStorage.setItem("age", response.data.age);
                    AsyncStorage.setItem("location", response.data.location);
                    AsyncStorage.setItem("favoriteNewsCategory", response.data.favoriteNewsCategory);

                })
                .catch((error) => {
                    console.log("http://localhost:4000/user/profile - ", error)
                    Alert.alert("Что-то пошло не так. Попробуйте зайти позже")
                    throw error
                })

        })
        .catch((error) => {
            console.log("http://localhost:4000/auth/login - ", error);
            Alert.alert("Неправильный логин или пароль!")
            throw error
        })
}
