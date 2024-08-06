import axios from "axios";
import staticNews from "../../static/staticNews";
import config from "../../config.json";

// ФУНКЦИЯ ДЛЯ ПОЛУЧЕНИЯ ДАННЫХ О СТАТЬЕ
export function getNews(id) {
    return axios.get(`${config.API_BASE_URL}/news/${id}`)
        .then(res => {

            console.log(`${config.API_BASE_URL}/news/${id}` + " - good");

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
            return staticNews
        })
}

// ОТПРАВЛЯЮ КОММЕНТАРИЙ К СТАТЬЕ
export function postComment(id, text, login) {
    return axios.post(`${config.API_BASE_URL}/comments/` + id, {
        data: {
            text: text,
            login: login
        }
    })
        .then(res => {
            console.log(`${config.API_BASE_URL}/comments/` + id  + " - good")
        })
        .catch(err => {
            console.log(`${config.API_BASE_URL}/comments/` + id + " - " + err)
        })
}

// ПОЛУЧАЕМ КОЛИЧЕСТВА КОММЕНТАРИЕВ СТАТЬИ
export function getCommentsCount(id) {
    return axios.get(`${config.API_BASE_URL}/comments/count-comments/${id}`)
        .then(res => {
            console.log(`${config.API_BASE_URL}/comments/count-comments/` + id + " - good")
            return res.data
        })
        .catch(err => {
            console.log(`${config.API_BASE_URL}/comments/count-comments/` + id + " - " + err)
            return 1
        })
}
