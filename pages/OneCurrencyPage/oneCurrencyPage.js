import React, {useEffect} from "react";
import { Text, View } from "react-native";
import { styles } from "../../style";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

export function OneCurrencyPage({ currencyId }) {

    useEffect( () => {

    }, []);

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
            },
        ],
    };

    return (
        <View style={styles.container}>
            <Text>{currencyId}</Text>
            <LineChart
                data={data}
                width={Dimensions.get("window").width} // от ширины экрана
                height={220}
                chartConfig={{
                    backgroundColor: "#ffffff",
                    backgroundGradientFrom: "#ffffff",
                    backgroundGradientTo: "#ffffff",
                    decimalPlaces: 2, // количество десятичных знаков
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                }}
                bezier // сглаживание графика
            />
        </View>
    );
}
