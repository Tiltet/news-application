import config from '../../../config.json';
import axios from "axios";

// ФУНКЦИЯ НОРМАЛИЗАЦИИ ДАННЫХ ВАЛЮТЫ С СЕРВЕРА
function normalizeCashData(data) {
    return [
        {
            id: "EURToUSD",
            label: "EUR / USD",
            rate: parseFloat(data.EURToUSD).toFixed(4),
            percentage: parseFloat(data.percentageEURToUSD).toFixed(4),
            difference: parseFloat(data.differenceEURToUSD).toFixed(4)
        },
        {
            id: "USDToJPY",
            label: "USD / JPY",
            rate: parseFloat(data.USDToJPY).toFixed(4),
            percentage: parseFloat(data.percentageUSDToJPY).toFixed(4),
            difference: parseFloat(data.differenceUSDToJPY).toFixed(4)
        },
        {
            id: "GBPToUSD",
            label: "GBP / USD",
            rate: parseFloat(data.GBPToUSD).toFixed(4),
            percentage: parseFloat(data.percentageGBPToUSD).toFixed(4),
            difference: parseFloat(data.differenceGBPToUSD).toFixed(4)
        },
        {
            id: "USDToRUB",
            label: "USD / RUB",
            rate: parseFloat(data.USDToRUB).toFixed(4),
            percentage: parseFloat(data.percentageUSDToRUB).toFixed(4),
            difference: parseFloat(data.differenceUSDToRUB).toFixed(4)
        },
        {
            id: "EURToRUB",
            label: "EUR / RUB",
            rate: parseFloat(data.EURToRUB).toFixed(4),
            percentage: parseFloat(data.percentageEURToRUB).toFixed(4),
            difference: parseFloat(data.differenceEURToRUB).toFixed(4)
        },
        {
            id: "USDToRON",
            label: "USD / RON",
            rate: parseFloat(data.USDToRON).toFixed(4),
            percentage: parseFloat(data.percentageUSDToRON).toFixed(4),
            difference: parseFloat(data.differenceUSDToRON).toFixed(4)
        },
        {
            id: "EURToRON",
            label: "EUR / RON",
            rate: parseFloat(data.EURToRON).toFixed(4),
            percentage: parseFloat(data.percentageEURToRON).toFixed(4),
            difference: parseFloat(data.differenceEURToRON).toFixed(4)
        }
    ];
}

// ЗАПРОС ДЛЯ ПОЛУЧЕНИЕ ИНФОРМАЦИИ ДЛЯ ВСЕЙ ВАЛЮТЫ
export function cashRequest() {
    return axios.get(`${config.API_BASE_URL}/currency`)
        .then(response => {
            console.log(`${config.API_BASE_URL}/currency - good`);
            return normalizeCashData(response.data)
        })
        .catch(error => {
            console.error(`${config.API_BASE_URL}/currency` + error);
        });
}

// ФУНКЦИЯ НОРМАЛИЗАЦИИ ДАННЫХ КРИТОВАЛЮТЫ С СЕРВЕРА
function normalizeCryptoData(data) {
    return [
        {
            id: "Bitcoin",
            label: "Bitcoin",
            rate: parseFloat(data.rateBTC).toFixed(4),
            percentage: parseFloat(data.percentageBTC).toFixed(4),
            difference: parseFloat(data.differenceBTC).toFixed(4)
        },
        {
            id: "Ethereum",
            label: "Ethereum",
            rate: parseFloat(data.rateETH).toFixed(4),
            percentage: parseFloat(data.percentageETH).toFixed(4),
            difference: parseFloat(data.differenceETH).toFixed(4)
        },
        {
            id: "BNB",
            label: "BNB",
            rate: parseFloat(data.rateBNB).toFixed(4),
            percentage: parseFloat(data.percentageBNB).toFixed(4),
            difference: parseFloat(data.differenceBNB).toFixed(4)
        },
        {
            id: "Notcoin",
            label: "Notcoin",
            rate: parseFloat(data.rateNOT).toFixed(4),
            percentage: parseFloat(data.percentageNOT).toFixed(4),
            difference: parseFloat(data.differenceNOT).toFixed(4)
        },
        {
            id: "Solana",
            label: "Solana",
            rate: parseFloat(data.rateSOL).toFixed(4),
            percentage: parseFloat(data.percentageSOL).toFixed(4),
            difference: parseFloat(data.differenceSOL).toFixed(4)
        },
        {
            id: "Litecoin",
            label: "Litecoin",
            rate: parseFloat(data.rateLTC).toFixed(4),
            percentage: parseFloat(data.percentageLTC).toFixed(4),
            difference: parseFloat(data.differenceLTC).toFixed(4)
        },
        {
            id: "Bitcoin cash",
            label: "Bitcoin cash",
            rate: parseFloat(data.rateBCH).toFixed(4),
            percentage: parseFloat(data.percentageBCH).toFixed(4),
            difference: parseFloat(data.differenceBCH).toFixed(4)
        }
    ];
}

// ЗАПРОС ДЛЯ ПОЛУЧЕНИЕ ИНФОРМАЦИИ ДЛЯ ВСЕЙ КРИПТОВАЛЮТЫ
export function cryptoRequest() {
    return axios.get(`${config.API_BASE_URL}/crypto/last`)
        .then(response => {
            console.log(`${config.API_BASE_URL}/crypto/last - good`)
            return normalizeCryptoData(response.data)
        })
        .catch(error => {
            console.error(`${config.API_BASE_URL}/crypto/last - ` + error)
        })
}
