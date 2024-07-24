import axios from "axios";

// ПОЛУЧАЕТ ВСЕ ОТВЕТЫ НА КОММЕНТАРИЙ
export function getBottomComments(id) {

    return axios.get("http://localhost:4000/comments/bottom/" + id)
        .then((res) => {
            console.log("http://localhost:4000/comments/bottom/" + id + " - good");
            return res.data;
        })
        .catch(err => {
            console.log("http://localhost:4000/comments/bottom/" + id + err);
        })
}
