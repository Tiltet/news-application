import axios from "axios";

export function cryptoCurrencyRequest() {
    return axios.get('http://localhost:4000/crypto/last')
        .then(response => {
            console.log('http://localhost:4000/crypto/last - good');
            return response.data;
        })
        .catch(error => {
            console.log('http://localhost:4000/crypto/last' + error);
        });
}
