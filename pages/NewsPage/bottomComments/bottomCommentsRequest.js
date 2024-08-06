import axios from "axios";
import config from "../../../config.json";

// ПОЛУЧАЕТ ВСЕ ОТВЕТЫ НА КОММЕНТАРИЙ
export function getBottomComments(id) {

    return axios.get(`${config.API_BASE_URL}/comments/bottom/` + id)
        .then((res) => {
            console.log(`${config.API_BASE_URL}/comments/bottom/` + id + " - good");
            return res.data;
        })
        .catch(err => {
            console.log(`${config.API_BASE_URL}/comments/bottom/` + id + err);
        })
}
