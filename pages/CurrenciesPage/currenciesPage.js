 import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "../../style";
import { currenciesPageStyle } from "./currenciesPageStyle";
import { Dropdown } from "../../components/Dropdown/dropdown";
import { CurrenciesList } from "./CurrenciesList/currenciesList";

export function CurrenciesPage() {

    const [ currency, setCurrency ] = useState('Валюта');

    const setSelectedCurrency = (index, value) => {
        setCurrency(value);
    };

    return(
        <View style={styles.container}>
            <View style={currenciesPageStyle.container}>
                <Dropdown
                    categories={["Валюта", "Криптовалюта"]}
                    selectOption={setSelectedCurrency}
                    selectedValue={currency}
                />

                { currency === "Валюта" && (
                    <CurrenciesList
                        category={"cash"}
                    />
                )}
                { currency === "Криптовалюта" && (
                    <CurrenciesList
                        category={"crypto"}
                    />
                )}
            </View>
        </View>
    )
}
