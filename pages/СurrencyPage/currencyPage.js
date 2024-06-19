import React, {useState} from "react";
import { View, StyleSheet } from "react-native";
import {styles} from "../../style";
import { Dropdown } from "../../components/Dropdown/dropdown";
import { Currency } from "./Currency/currency";
import {Cryptocurrency} from "./Cryptocurrency/cryptocurrency";

export function CurrencyPage() {

    const [ currency, setCurrency ] = useState('Валюта');

    const setSelectedCurrency = (index, value) => {
        setCurrency(value);
    };

    return(
        <View style={styles.container}>
            <View style={style.container}>
                <Dropdown
                    categories={["Валюта", "Криптовалюта"]}
                    selectOption={setSelectedCurrency}
                    selectedValue={currency}
                    iconSize={18}
                />
                { currency === "Валюта" && (
                    <Currency/>
                )}
                { currency === "Криптовалюта" && (
                    <Cryptocurrency/>
                )}
            </View>
        </View>
    )
}

export const style = StyleSheet.create({
    container: {
        marginTop: 10,
    }
})
