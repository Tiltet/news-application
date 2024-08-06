import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import config from "../../config.json";

export function requestLogin(email, password) {
    return axios.post(`${config.API_BASE_URL}/auth/login`, {
        email: email,
        password: password,
    })
        .then(async (response) => {

            await AsyncStorage.setItem("token", response.data.accessToken)
            await AsyncStorage.setItem("login", response.data.login)
            await AsyncStorage.setItem("age", response.data.age)
            await AsyncStorage.setItem("location", response.data.location)
            await AsyncStorage.setItem("favoriteNewsCategory", response.data.favoriteNewsCategory)

            // КОММЕНТАРИЙ С ТОКЕНОМ
            console.log("Token - " + response.data.accessToken)

            console.log(`${config.API_BASE_URL}/auth/login - good`);

        })
        .catch((error) => {
            console.error(`${config.API_BASE_URL}/auth/login - `, error);
            Alert.alert("Неправильный логин или пароль!")
            throw error
        })
}
