// ФУНКЦИЯ ДЛЯ ПОЛУЧЕНИЯ ДАННЫХ О СТАТЬЕ
import axios from "axios";

export function NewsRequest(id) {
     return axios.get(`http://localhost:4000/news/${id}`)
        .then(res => {

            console.log(`http://localhost:4000/news/${id}` + " - good");

            switch (res.data.category) {
                case "World":
                    res.data.category = "Мировые новости"
                    break
                case "Economy":
                    res.data.category = "Экономика"
                    break
                case "Policy":
                    res.data.category = "Политика"
                    break
                case "Business":
                    res.data.category = "Бизнес"
                    break
                default:
                    break
            }

            return res.data;
        })
        .catch(error => {
            console.log(error);
        })
}
