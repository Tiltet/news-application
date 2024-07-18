import axios from "axios";

// ПОЛУЧАЕМ ГОЛОСА ДЛЯ ОПРОСА
export function getVotes(id) {
    return axios.get("http://localhost:4000/news/" + id + "/votes")
        .then(res => {
            console.log("http://localhost:4000/news/" + id + "/votes - good")
            return res.data
        })
        .catch(err => {
            console.log("http://localhost:4000/news/" + id + "/votes - ", err)
        })
}

// ОТПРАВЛЯЕМ ГОЛОС ПОЛЬЗОВАТЕЛЯ
export function postVote(id, vote, login) {
    return axios.post(`http://localhost:4000/quiz/vote/${id}`, {
        login: login,
        inputVote: vote,
    })
        .then(res => {
            console.log(`http://localhost:4000/quiz/vote/${id} - good`)
        })
        .catch(err => {
            console.error(`http://localhost:4000/quiz/vote/${id} - `, err)
        })
}
