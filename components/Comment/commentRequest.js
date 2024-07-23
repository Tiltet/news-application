import axios from "axios";

// ПОЛУЧАЕМ ВСЕ ОТВЕТЫ НА КОММЕНТАРИЙ
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
