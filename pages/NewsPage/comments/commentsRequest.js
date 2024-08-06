// ЗАПРОС ДЛЯ ПОЛУЧЕНИЯ ВСЕХ КОММЕНТАРИЕВ
import axios from "axios";
import staticComments from "../../../static/staticComments";
import config from "../../../config.json";

export function getComments( id, page ) {
    return axios.get(`${config.API_BASE_URL}/comments/${id}/comments`, {
        params: {
            pageNumber: page,
        }
    })
        .then(res => {
            console.log(`${config.API_BASE_URL}/comments/${id}/comments - good`)
            return res.data
        })
        .catch(err => {
            console.log(`${config.API_BASE_URL}/comments/${id}/comments - ` + err)
            return staticComments
        })
}

// ОТПРАВЛЯЕМ ОТВЕТ НА КОММЕНТАРИЙ
export function postBottomComment( id, text, login ) {
    return axios.post(`${config.API_BASE_URL}/comments/createBottom/` + id, {
        data: {
            text: text,
            login: login
        }
    })
        .then(() => {
            console.log(`${config.API_BASE_URL}/comments/createBottom/` + id + " - good")
        })
        .catch(err => {
            console.error(`${config.API_BASE_URL}/comments/createBottom/` + id + " - " + err)
        })
}
