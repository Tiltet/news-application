import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { styles } from "../../style";
import { oneCurrencyPageStyle } from "./oneCurrencyPageStyle";
import { Graph } from "./graph/graph";
import { Options } from "./options/options";
import axios from "axios";
import { Switcher } from "../../components/Switcher/switcher";

export function OneCurrencyPage({ currencyId }) {

    const [ currency, setCurrency ] = useState("USD / USD");
    const [ isChecked, setChecked ] = useState(false);
    const [ firstCurrencyImg, setFirstCurrencyImg ] = useState(require("../../assets/icons/currency/usa.png"));
    const [ secondCurrencyImg, setSecondCurrencyImg ] = useState(require("../../assets/icons/currency/usa.png"));
    const [ currencyInfo, setCurrencyInfo] = useState({
        rate: 0,
        difference: 0,
        percentage: 0,
        date: 0,
    });

    useEffect( () => {

        axios.get("http://localhost:4000/currency/params/" + currencyId + "?pageSize=1")
            .then(res => {
                console.log("http://localhost:4000/currency/params/" + currencyId + "?pageSize=1" + " - good");

                const moment = require('moment');
                const dateString = '7/11/24';
                const formattedDate = moment(dateString, 'M/D/YY').format('DD.MM.YYYY');

                setCurrencyInfo({
                    rate: res.data[0].rate,
                    difference: res.data[0].difference,
                    percentage: res.data[0].percentage,
                    date: formattedDate,
                })
            })
            .catch(error => {
                console.error("http://localhost:4000/currency/" + currencyId + error)
            })

        console.log(currencyId)

        switch (currencyId) {
            case "EURToUSD":
                setCurrency("EUR / USD")
                setFirstCurrencyImg(require("../../assets/icons/currency/euro.png"))
                setSecondCurrencyImg(require("../../assets/icons/currency/usa.png"))
                break
            case "USDToJPY":
                setCurrency("USD / JPY")
                setFirstCurrencyImg(require("../../assets/icons/currency/usa.png"))
                setSecondCurrencyImg(require("../../assets/icons/currency/japan.png"))
                break
            case "GBPToUSD":
                setCurrency("GBP / USD")
                setFirstCurrencyImg(require("../../assets/icons/currency/gb.png"))
                setSecondCurrencyImg(require("../../assets/icons/currency/usa.png"))
                break
            case "USDToRUB":
                setCurrency("USD / RUB")
                setFirstCurrencyImg(require("../../assets/icons/currency/usa.png"))
                setSecondCurrencyImg(require("../../assets/icons/currency/russia.png"))
                break
            case "EURToRUB":
                setCurrency("EUR / RUB")
                setFirstCurrencyImg(require("../../assets/icons/currency/euro.png"))
                setSecondCurrencyImg(require("../../assets/icons/currency/russia.png"))
                break
            case "USDToRON":
                setCurrency("USD / RON")
                setFirstCurrencyImg(require("../../assets/icons/currency/usa.png"))
                setSecondCurrencyImg(require("../../assets/icons/currency/romania.png"))
                break
            case "EURToRON":
                setCurrency("EUR / RON")
                setFirstCurrencyImg(require("../../assets/icons/currency/euro.png"))
                setSecondCurrencyImg(require("../../assets/icons/currency/romania.png"))
                break
            default:
                break
        }
    }, []);

    return (
        <View style={styles.container}>
            <View style={oneCurrencyPageStyle.container}>

                <View style={oneCurrencyPageStyle.title_block}>
                    <Image
                        style={oneCurrencyPageStyle.title_block_img}
                        source={firstCurrencyImg}
                    />
                    <Text style={{fontSize: 20}}> / </Text>
                    <Image
                        style={oneCurrencyPageStyle.title_block_img}
                        source={secondCurrencyImg}
                    />
                    <Text style={oneCurrencyPageStyle.title_block_currency}>{currency}</Text>
                </View>

                <View style={oneCurrencyPageStyle.rate_block}>
                    <Text style={oneCurrencyPageStyle.rate_block_rate}>{currencyInfo.rate}</Text>
                    { currencyInfo.difference >= 0 ? (
                        <Text style={[oneCurrencyPageStyle.rate_block_difference, {color: "green"}]}>{currencyInfo.difference}</Text>
                    ) : (
                        <Text style={[oneCurrencyPageStyle.rate_block_difference, {color: "red"}]}>{currencyInfo.difference}</Text>
                    ) }

                    { currencyInfo.percentage >= 0 ? (
                        <Text style={[oneCurrencyPageStyle.rate_block_percentage, {color: "green"}]}>({currencyInfo.percentage})</Text>
                    ) : (
                        <Text style={[oneCurrencyPageStyle.rate_block_percentage, {color: "red"}]}>({currencyInfo.percentage})</Text>
                    )}
                </View>

                <View style={oneCurrencyPageStyle.date_block}>
                    <Text style={oneCurrencyPageStyle.date_block_date}>{currencyInfo.date}</Text>
                </View>

                <View style={{ marginTop: 15 }}>
                    <Switcher
                        isChecked={isChecked}
                        setChecked={setChecked}
                        firstLabel={"Параметры"}
                        secondLabel={"График"}
                    ></Switcher>
                </View>

                { isChecked ? (
                    <Graph currencyId={currencyId}/>
                ) : (
                    <Options currencyId={currencyId}/>
                ) }

            </View>
        </View>
    );
}
