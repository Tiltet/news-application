import axios from "axios";
import config from "../../config.json";

// ФУНКЦИЯ НОРМАЛИЗАЦИИ
function normalizeOneCashData(data, formattedDate, label) {
    return [
        {
            label: label,
            rate: parseFloat(data.rate).toFixed(4) * 1,
            difference: parseFloat(data.difference).toFixed(4) * 1,
            percentage: parseFloat(data.percentage).toFixed(4) * 1,
            date: formattedDate
        }
    ];
}

// ЗАПРОС ДЛЯ ПОЛУЧЕНИЕ ИНФОРМАЦИИ ДЛЯ ОДНОЙ ВАЛЮТЫ
export function oneCashRequest( currencyId ) {
    return axios.get(`${config.API_BASE_URL}/currency/params/` + currencyId + "?pageSize=1")
        .then(res => {
            console.log(`${config.API_BASE_URL}/currency/params/` + currencyId + "?pageSize=1" + " - good");

            const moment = require('moment');
            const dateString = '7/11/24';
            const formattedDate = moment(dateString, 'M/D/YY').format('DD.MM.YYYY');
            let label

            switch (currencyId) {
                case "EURToUSD":
                    label = "EUR / USD"
                    break
                case "USDToJPY":
                    label = "USD / JPY"
                    break
                case "GBPToUSD":
                    label = "GBP / USD"
                    break
                case "USDToRUB":
                    label = "USD / RUB"
                    break
                case "EURToRUB":
                    label = "EUR / RUB"
                    break
                case "USDToRON":
                    label = "USD / RON"
                    break
                case "EURToRON":
                    label = "EUR / RON"
                    break
                default:
                    break
            }

            return normalizeOneCashData(res.data[0], formattedDate, label)

        })
        .catch(error => {
            console.error(`${config.API_BASE_URL}/currency/` + currencyId + error)
        })
}

// ЗАПРОС ДЛЯ ПОЛУЧЕНИЕ ИНФОРМАЦИИ ДЛЯ ОДНОЙ КРИПТОВАЛЮТОЙ
export function oneCryptoRequest( currencyId ) {
    return axios.get(`${config.API_BASE_URL}/crypto/full/` + currencyId + "?pageSize=1")
        .then(res => {
            console.log(`${config.API_BASE_URL}/crypto/full/` + currencyId + "?pageSize=1 - good");

            const moment = require('moment');
            const dateString = '7/11/24';
            const formattedDate = moment(dateString, 'M/D/YY').format('DD.MM.YYYY');

            return normalizeOneCashData(res.data[0], formattedDate, currencyId)

        })
        .catch(error => {
            console.error(`${config.API_BASE_URL}/currency/` + currencyId + error)
        })
}
