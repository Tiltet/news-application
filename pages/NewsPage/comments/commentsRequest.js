// ЗАПРОС ДЛЯ ПОЛУЧЕНИЯ ВСЕХ КОММЕНТАРИЕВ
import axios from "axios";
import staticComments from "../../../static/staticComments";

export function getComments(id) {
    return axios.get(`http://localhost:4000/comments/${id}/comments`)
        .then(res => {
            console.log(`http://localhost:4000/comments/${id}/comments - good`)
            return res.data
        })
        .catch(err => {
            console.error(`http://localhost:4000/comments/${id}/comments - ` + err)
            return staticComments
        })
}
