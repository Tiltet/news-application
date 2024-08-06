import axios from "axios";
import config from "../../config.json";

// ПОЛУЧАЕМ ГОЛОСА ДЛЯ ОПРОСА
export function getVotes(id) {
    return axios.get(`${config.API_BASE_URL}/news/` + id + "/votes")
        .then(res => {
            console.log(`${config.API_BASE_URL}/news/` + id + "/votes - good")
            return res.data
        })
        .catch(err => {
            console.log(`${config.API_BASE_URL}/news/` + id + "/votes - ", err)
        })
}

// ОТПРАВЛЯЕМ ГОЛОС ПОЛЬЗОВАТЕЛЯ
export function postVote(id, vote, login) {
    return axios.post(`${config.API_BASE_URL}/quiz/vote/${id}`, {
        login: login,
        inputVote: vote,
    })
        .then(res => {
            console.log(`${config.API_BASE_URL}/quiz/vote/${id} - good`)
        })
        .catch(err => {
            console.error(`${config.API_BASE_URL}/quiz/vote/${id} - `, err)
        })
}
