import axios from "axios";
import { Alert } from "react-native";

export async function requestCode(code) {
    try {
        const response = await axios.post('http://localhost:4000/auth/registration-code', {
            confirmationCode: code,
        });

        console.log('http://localhost:4000/auth/registration-code - good');
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
