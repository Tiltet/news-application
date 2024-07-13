import React, { useEffect, useState } from 'react';
import { View, Text, Image } from "react-native";
import { styles } from "../../style";
import { oneCurrencyPageStyle } from "../OneCurrencyPage/oneCurrencyPageStyle";
import { Switcher } from "../../components/Switcher/switcher";
import { Graph } from "../OneCurrencyPage/graph/graph";
import { Options } from "../OneCurrencyPage/options/options";
import { CategoryPage } from "../CategoryPage/categoryPage";
import axios from "axios";

export function OneCryptoPage({ currencyId }) {

    const [ isChecked, setChecked ] = useState(false);
    const [ cryptoImg, setCryptoImg ] = useState(require("../../assets/icons/crypto/bitcoin.png"));
    const [ currencyInfo, setCurrencyInfo] = useState({
        rate: 0,
        difference: 0,
        percentage: 0,
        date: 0,
    });

    useEffect(() => {
        axios.get("http://localhost:4000/crypto/full/" + currencyId + "?pageSize=10")
            .then(res => {
                console.log("http://localhost:4000/crypto/full/" + currencyId + "?pageSize=10 - good");
                console.log(res.data);

                const moment = require('moment');
                const dateString = '7/11/24';
                const formattedDate = moment(dateString, 'M/D/YY').format('DD.MM.YYYY');

                setCurrencyInfo({
                    rate: parseFloat(res.data[0].rate).toFixed(4),
                    difference: res.data[0].difference,
                    percentage: res.data[0].percentage,
                    date: formattedDate,
                })
            })
            .catch(error => {
                console.error("http://localhost:4000/crypto/full/" + currencyId + "?pageSize=10 - " + error);
            })
    }, []);

    return(
        <View style={styles.container}>
            <View style={oneCurrencyPageStyle.container}>

                <View style={oneCurrencyPageStyle.title_block}>
                    <Image
                        style={oneCurrencyPageStyle.title_block_img}
                        source={cryptoImg}
                    />
                    <Text style={oneCurrencyPageStyle.title_block_currency}>{currencyId}</Text>
                </View>

                <View style={oneCurrencyPageStyle.rate_block}>
                    <Text style={oneCurrencyPageStyle.rate_block_rate}>{currencyInfo.rate}$</Text>
                    { 12 >= 0 ? (
                        <Text style={[oneCurrencyPageStyle.rate_block_difference, {color: "green"}]}>{currencyInfo.difference}</Text>
                    ) : (
                        <Text style={[oneCurrencyPageStyle.rate_block_difference, {color: "red"}]}>{currencyInfo.difference}</Text>
                    ) }

                    { 12 >= 0 ? (
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
                    <Graph currencyId={currencyId} check={"crypto"}/>
                ) : (
                    <Options currencyId={currencyId} check={"crypto"} />
                ) }

                <CategoryPage category={"economy"} title={"Последние новости"} />

            </View>
        </View>
    )
}
