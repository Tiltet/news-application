import axios from "axios";
import config from "../../config.json";

// ПОЛУЧАЕМ ИНФОРМАЦИЮ О ЧЕМПИОНАТЕ
export function getChampionship(championship) {
    return axios.get(`${config.API_BASE_URL}/football/championship?championship=` + championship)
        .then(res => {
            console.log(`${config.API_BASE_URL}/football/championship?championship=` + championship + " - good")
            return res.data
        })
        .catch(err => {
            console.error(`${config.API_BASE_URL}/football/championship?championship=` + championship + " - " + err)
        })
}
