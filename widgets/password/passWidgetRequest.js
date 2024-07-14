import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Alert} from "react-native";

export function requestLogin(email, password) {
    return axios.post("http://localhost:4000/auth/login", {
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

            console.log("http://localhost:4000/auth/login - good");

        })
        .catch((error) => {
            console.error("http://localhost:4000/auth/login - ", error);
            Alert.alert("Неправильный логин или пароль!")
            throw error
        })
}
