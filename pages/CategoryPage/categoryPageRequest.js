import axios from "axios";
import staticCategory from "./staticCategory";

export function handleCategory({ category, page }) {
    return axios.get('http://localhost:4000/news/' + category + '?pageNumber=' + page)
        .then(response => {
            console.log('http://localhost:4000/news/' + category + '?pageNumber=' + page + ' - good');
            return response.data;
        })
        .catch(error => {
            console.log('http://localhost:4000/news/' + category + '?pageNumber=' + page + error);
            return staticCategory
        });
}
