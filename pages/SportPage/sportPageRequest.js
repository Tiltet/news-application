import axios from "axios";

// ПОЛУЧАЕМ ИНФОРМАЦИЮ О ЧЕМПИОНАТЕ
export function getChampionship(championship) {
    return axios.get("http://localhost:4000/football/championship?championship=" + championship)
        .then(res => {
            console.log("http://localhost:4000/football/championship?championship=" + championship + " - good")
            return res.data
        })
        .catch(err => {
            console.error("http://localhost:4000/football/championship?championship=" + championship + " - " + err)
        })
}
