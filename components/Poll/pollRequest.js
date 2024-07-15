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

// ОТПРАВЛЯЕМ
