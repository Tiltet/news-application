import axios from "axios";
import config from "../../../config.json";

// ФУНКЦИЯ НОРМАЛИЗАЦИИ
function normalizeOneCashOptions(past, present, average, weeklyMin, weeklyMax, monthlyMin, monthlyMax, now) {
    return [
        {
            past: past,
            present: present,
            average: average,
            weeklyMin: weeklyMin,
            weeklyMax: weeklyMax,
            monthlyMin: monthlyMin,
            monthlyMax: monthlyMax,
            now: now,
        }
    ];
}

// ЗАПРОС ДЛЯ ПОЛУЧЕНИЕ ПАРАМЕТРОВ ДЛЯ ОДНОЙ ВАЛЮТЫ
export function optionsCashRequest(currencyId) {
    return axios.get(`${config.API_BASE_URL}/currency/params/` + currencyId + "?pageSize=10")
        .then(res => {
            console.log(`${config.API_BASE_URL}/currency/params/` + currencyId + "?pageSize=10 - good");

            let sum = 0;
            let weeklyMin = parseFloat(res.data[0].rate).toFixed(4);
            let weeklyMax = parseFloat(res.data[0].rate).toFixed(4);
            let monthlyMin = parseFloat(res.data[0].rate).toFixed(4);
            let monthlyMax = parseFloat(res.data[0].rate).toFixed(4);

            res.data.forEach((item, index) => {
                const number = parseFloat(item.rate).toFixed(4)
                if (index < 6)
                    if (number > weeklyMax)
                        weeklyMax = number;
                if (number < weeklyMin)
                    weeklyMin = number;
                if (index < 10)
                    if (number> monthlyMax)
                        monthlyMax = number;
                if (number < monthlyMin)
                    monthlyMin = number;
                sum += parseFloat(number)
            })

            return normalizeOneCashOptions(
                parseFloat(res.data[1].rate).toFixed(4),
                parseFloat(res.data[0].rate).toFixed(4),
                (sum / 15).toFixed(4),
                weeklyMin,
                weeklyMax,
                monthlyMin,
                monthlyMax,
                parseFloat(res.data[1].rate).toFixed(4)
            )

        })
        .catch(error => {
            console.error(`${config.API_BASE_URL}/currency/params/` + currencyId + "?pageSize=10 - " + error)
        })
}

// ЗАПРОС ДЛЯ ПОЛУЧЕНИЕ ПАРАМЕТРОВ ДЛЯ ОДНОЙ КРИПТОВАЛЮТЫ
export function optionsCryptoRequest(currencyId) {
    return axios.get(`${config.API_BASE_URL}/crypto/full/` + currencyId + "?pageSize=10")
        .then(res => {
            console.log(`${config.API_BASE_URL}/crypto/full/` + currencyId + "?pageSize=10 - good");

            let sum = 0;
            let weeklyMin = parseFloat(res.data[0].rate).toFixed(4);
            let weeklyMax = parseFloat(res.data[0].rate).toFixed(4);
            let monthlyMin = parseFloat(res.data[0].rate).toFixed(4);
            let monthlyMax = parseFloat(res.data[0].rate).toFixed(4);

            res.data.forEach((item, index) => {

                const number = parseFloat(item.rate).toFixed(4)

                if (index < 6)
                    if (number > weeklyMax)
                        weeklyMax = number;
                if (number < weeklyMin)
                    weeklyMin = number;
                if (index < 10)
                    if (number> monthlyMax)
                        monthlyMax = number;
                if (number < monthlyMin)
                    monthlyMin = number;
                sum += parseFloat(number)
            })

            return normalizeOneCashOptions(
                parseFloat(res.data[1].rate).toFixed(4),
                parseFloat(res.data[0].rate).toFixed(4),
                (sum / 15).toFixed(4),
                weeklyMin,
                weeklyMax,
                monthlyMin,
                monthlyMax,
                parseFloat(res.data[1].rate).toFixed(4)
            )

        })
        .catch(error => {
            console.error(`${config.API_BASE_URL}/crypto/full/` + currencyId + "?pageSize=10 - " + error)
        })
}
