// ЗАПРОС ДЛЯ ПОЛУЧЕНИЯ ВСЕХ КОММЕНТАРИЕВ
import axios from "axios";
import staticComments from "../../../static/staticComments";

export function getComments( id, page ) {
    return axios.get(`http://localhost:4000/comments/${id}/comments`, {
        params: {
            pageNumber: page,
        }
    })
        .then(res => {
            console.log(`http://localhost:4000/comments/${id}/comments - good`)
            return res.data
        })
        .catch(err => {
            console.log(`http://localhost:4000/comments/${id}/comments - ` + err)
            return staticComments
        })
}

// ОТПРАВЛЯЕМ ОТВЕТ НА КОММЕНТАРИЙ
export function postBottomComment( id, text, login ) {
    return axios.post("http://localhost:4000/comments/createBottom/" + id, {
        data: {
            text: text,
            login: login
        }
    })
        .then(() => {
            console.log("http://localhost:4000/comments/createBottom/" + id + " - good")
        })
        .catch(err => {
            console.error("http://localhost:4000/comments/createBottom/" + id + " - " + err)
        })
}
