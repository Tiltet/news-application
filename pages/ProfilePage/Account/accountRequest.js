import axios from "axios";
import config from "../../../config.json";

// ВО ВРЕМЯ ВЫХОДА ОТПРАВЛЯЕМ АКТУАЛЬНУЮ ИНФОРМАЦИЮ О ПРОФИЛЕ
export function postQuestion( userInfo ) {
    axios.put(`${config.API_BASE_URL}/users/profile/change-information`, {
        userId: userInfo.id,
        login: userInfo.login,
        email: userInfo.email,
        age: userInfo.age.toString(),
        location: userInfo.selectedCountry,
        favoriteNewsCategory: userInfo.selectedCategory
    })
        .then(() => {
            console.log(`${config.API_BASE_URL}/users/profile/change-information - good`)
        })
        .catch(err => {
            console.log(`${config.API_BASE_URL}/users/profile/change-information - `, err)
        })
}
