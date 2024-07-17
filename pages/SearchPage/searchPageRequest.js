import axios from "axios";
import staticLastNews from "../../static/staticLastNews";

export function searchPageRequest( searchItem ) {
    return axios.get(`http://localhost:4000/news/search?searchNameTerm=${searchItem}`)
        .then(response => {
            console.log(`http://localhost:4000/news/search?searchNameTerm=${searchItem} - good`);
            return response.data
        })
        .catch(error => {
            console.log(`http://localhost:4000/news/search?searchNameTerm=${searchItem} - `, error)
            return staticLastNews
        })
}
