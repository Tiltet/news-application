import axios from "axios";
import { Alert } from "react-native";
import config from "../../config.json";

export async function requestCode(code) {
    try {
        const response = await axios.post(`${config.API_BASE_URL}/auth/registration-code`, {
            confirmationCode: code,
        });

        console.log(`${config.API_BASE_URL}/auth/registration-code - good`);
        return true

    } catch (error) {
        if (error.response && error.response.data.errorsMessages) {
            error.response.data.errorsMessages.forEach((errorMessage) => {
                console.error(errorMessage.message);
                Alert.alert(errorMessage.message);
            });
        } else {
            console.error('Error: ', error);
        }
        return false
    }
}
