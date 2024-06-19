import axios from "axios";

export function currencyRequest() {
    return axios.get('http://localhost:4000/currency')
        .then(response => {
            console.log('http://localhost:4000/currency - good');
            return response.data;
        })
        .catch(error => {
            console.log('http://localhost:4000/currency' + error);
        });
}
