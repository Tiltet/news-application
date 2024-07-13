 import React, {useState} from "react";
import { View } from "react-native";
import { styles } from "../../style";
import { currencyPageStyle } from "./currencyPageStyle";
import { Dropdown } from "../../components/Dropdown/dropdown";
import { Cryptocurrency } from "./Cryptocurrency/cryptocurrency";
import { CurrencyList } from "./CurrencyList/currencyList";

export function CurrencyPage() {

    const [ currency, setCurrency ] = useState('Валюта');

    const setSelectedCurrency = (index, value) => {
        setCurrency(value);
    };

    return(
        <View style={styles.container}>
            <View style={currencyPageStyle.container}>
                <Dropdown
                    categories={["Валюта", "Криптовалюта"]}
                    selectOption={setSelectedCurrency}
                    selectedValue={currency}
                    iconSize={18}
                />
                { currency === "Валюта" && (
                    <CurrencyList/>
                )}
                { currency === "Криптовалюта" && (
                    <Cryptocurrency/>
                )}
            </View>
        </View>
    )
}
