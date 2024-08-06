import axios from "axios";
import staticLastNews from "../../static/staticLastNews";
import config from "../../config.json";

export function searchPageRequest( searchItem ) {
    return axios.get(`${config.API_BASE_URL}/news/search?searchNameTerm=${searchItem}`)
        .then(response => {
            console.log(`${config.API_BASE_URL}/news/search?searchNameTerm=${searchItem} - good`);
            return response.data
        })
        .catch(error => {
            console.log(`${config.API_BASE_URL}/news/search?searchNameTerm=${searchItem} - `, error)
            return staticLastNews
        })
}
