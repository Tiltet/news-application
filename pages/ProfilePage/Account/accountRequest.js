import axios from "axios";

// ВО ВРЕМЯ ВЫХОДА ОТПРАВЛЯЕМ АКТУАЛЬНУЮ ИНФОРМАЦИЮ О ПРОФИЛЕ
export function postQuestion( userInfo ) {
    axios.put("http://localhost:4000/users/profile/change-information", {
        userId: userInfo.id,
        login: userInfo.login,
        email: userInfo.email,
        age: userInfo.age.toString(),
        location: userInfo.selectedCountry,
        favoriteNewsCategory: userInfo.selectedCategory
    })
        .then(() => {
            console.log("http://localhost:4000/users/profile/change-information - good")
        })
        .catch(err => {
            console.log("http://localhost:4000/users/profile/change-information - ", err)
        })
}
