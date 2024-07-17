import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { styles } from "../../style";
import { currencyPageStyle } from "./currencyPageStyle";
import { Graph } from "./graph/graph";
import { Options } from "./options/options";
import { Switcher } from "../../components/Switcher/switcher";
import { CategoryPage } from "../CategoryPage/categoryPage";
import { oneCashRequest, oneCryptoRequest } from "./currencyPageRequest";

export function CurrencyPage({ currencyId, category }) {

    const [ isChecked, setChecked ] = useState(false);
    const [ firstCurrencyImg, setFirstCurrencyImg ] = useState(require("../../assets/icons/currency/usa.png"));
    const [ secondCurrencyImg, setSecondCurrencyImg ] = useState(require("../../assets/icons/currency/usa.png"));
    const [ cryptoImg, setCryptoImg ] = useState(require('../../assets/icons/crypto/bitcoin.png'))
    const [ currencyInfo, setCurrencyInfo ] = useState([
        {
            rate: 0,
            difference: 0,
            percentage: 0,
            date: 0
        }
    ]);

    useEffect( () => {

        switch (category) {
            case "cash":
                oneCashRequest(currencyId)
                    .then(res => {
                        setCurrencyInfo(res)
                    })
                    .catch(error => {
                        console.log(error)
                    })
                break
            case "crypto":
                oneCryptoRequest(currencyId)
                    .then(res => {
                        setCurrencyInfo(res)
                    })
                    .catch(error => {
                        console.log(error)
                    })
                break
            default:
                break
        }

        switch (currencyId) {
            case "EURToUSD":
                setFirstCurrencyImg(require("../../assets/icons/currency/euro.png"))
                setSecondCurrencyImg(require("../../assets/icons/currency/usa.png"))
                break
            case "USDToJPY":
                setFirstCurrencyImg(require("../../assets/icons/currency/usa.png"))
                setSecondCurrencyImg(require("../../assets/icons/currency/japan.png"))
                break
            case "GBPToUSD":
                setFirstCurrencyImg(require("../../assets/icons/currency/gb.png"))
                setSecondCurrencyImg(require("../../assets/icons/currency/usa.png"))
                break
            case "USDToRUB":
                setFirstCurrencyImg(require("../../assets/icons/currency/usa.png"))
                setSecondCurrencyImg(require("../../assets/icons/currency/russia.png"))
                break
            case "EURToRUB":
                setFirstCurrencyImg(require("../../assets/icons/currency/euro.png"))
                setSecondCurrencyImg(require("../../assets/icons/currency/russia.png"))
                break
            case "USDToRON":
                setFirstCurrencyImg(require("../../assets/icons/currency/usa.png"))
                setSecondCurrencyImg(require("../../assets/icons/currency/romania.png"))
                break
            case "EURToRON":
                setFirstCurrencyImg(require("../../assets/icons/currency/euro.png"))
                setSecondCurrencyImg(require("../../assets/icons/currency/romania.png"))
                break
            case "Bitcoin":
                setCryptoImg(require("../../assets/icons/crypto/bitcoin.png"))
                break
            case "Ethereum":
                setCryptoImg(require("../../assets/icons/crypto/ethereum.png"))
                break
            case "BNB":
                setCryptoImg(require("../../assets/icons/crypto/bnb.png"))
                break
            case "Notcoin":
                setCryptoImg(require("../../assets/icons/crypto/notcoin.png"))
                break
            case "Solana":
                setCryptoImg(require("../../assets/icons/crypto/solana.png"))
                break
            case "Litecoin":
                setCryptoImg(require("../../assets/icons/crypto/litecoin.png"))
                break
            case "Bitcoin Cash":
                setCryptoImg(require("../../assets/icons/crypto/bitcoin-cash.png"))
                break
            default:
                break
        }

    }, []);

    return (
        <View style={styles.container}>
            <View style={currencyPageStyle.container}>

                { category === "cash" ? (
                    <View style={currencyPageStyle.title_block}>
                        <Image
                            style={currencyPageStyle.title_block_img}
                            source={firstCurrencyImg}
                        />
                        <Text style={{fontSize: 20}}> / </Text>
                        <Image
                            style={currencyPageStyle.title_block_img}
                            source={secondCurrencyImg}
                        />
                        <Text style={currencyPageStyle.title_block_currency}>{currencyInfo[0].label}</Text>
                    </View>
                ) : (
                    <View style={currencyPageStyle.title_block}>
                        <Image
                            style={currencyPageStyle.title_block_img}
                            source={cryptoImg}
                        />
                        <Text style={currencyPageStyle.title_block_currency}>{currencyInfo[0].label}</Text>
                    </View>
                )}

                <View style={currencyPageStyle.rate_block}>
                    <Text style={currencyPageStyle.rate_block_rate}>{currencyInfo[0].rate}</Text>
                    { currencyInfo[0].difference >= 0 ? (
                        <Text style={[currencyPageStyle.rate_block_difference, {color: "green"}]}>{currencyInfo[0].difference}</Text>
                    ) : (
                        <Text style={[currencyPageStyle.rate_block_difference, {color: "red"}]}>{currencyInfo[0].difference}</Text>
                    ) }

                    { currencyInfo[0].percentage >= 0 ? (
                        <Text style={[currencyPageStyle.rate_block_percentage, {color: "green"}]}>({currencyInfo[0].percentage}%)</Text>
                    ) : (
                        <Text style={[currencyPageStyle.rate_block_percentage, {color: "red"}]}>({currencyInfo[0].percentage}%)</Text>
                    )}
                </View>

                <View style={currencyPageStyle.date_block}>
                    <Text style={currencyPageStyle.date_block_date}>{currencyInfo[0].date}</Text>
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
                    <Graph
                        currencyId={currencyId}
                        category={category}
                    />
                ) : (
                    <Options
                        currencyId={currencyId}
                        category={category}
                    />
                ) }

                <CategoryPage
                    category={"economy"}
                    title={"Последние новости"}
                />

            </View>
        </View>
    );
}
