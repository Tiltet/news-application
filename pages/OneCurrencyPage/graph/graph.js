import React, {useEffect, useState} from 'react';
import { Dimensions, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import {graphStyle} from "./graphStyle";
import axios from "axios";

export function Graph({ currencyId, check }) {

    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                data: [1,2,1,3,1,2],
            },
        ],
    });

    useEffect(() => {
        if (check === "cash") {
            axios.get("http://localhost:4000/currency/params/" + currencyId + "?pageSize=15")
                .then(res => {
                    let labels = [];
                    let data = [];
                    res.data.forEach((item, index) => {
                        console.log(parseFloat(item.rate).toFixed(4));
                        data.push(parseFloat(item.rate).toFixed(4));
                    })

                    setChartData({
                        labels: labels,
                        datasets: [
                            {
                                data: data,
                            },
                        ],
                    });

                })
                .catch(error => {
                    console.log(error);
                })
        } else if (check === "crypto") {
            axios.get("http://localhost:4000/crypto/full/" + currencyId + "?pageSize=15")
                .then(res => {
                    let labels = [];
                    let data = [];
                    res.data.forEach((item, index) => {
                        console.log(parseFloat(item.rate).toFixed(4));
                        data.push(parseFloat(item.rate).toFixed(4));
                    })

                    setChartData({
                        labels: labels,
                        datasets: [
                            {
                                data: data,
                            },
                        ],
                    });

                })
                .catch(error => {
                    console.log(error);
                })
        }
    }, []);

    return(
        <View style={graphStyle.container}>
            <LineChart
                data={{
                    labels: chartData.labels.slice(0, 6),
                    datasets: [
                        {
                            data: chartData.datasets[0].data.slice(0, 6),
                        },
                    ],
                }}
                width={Dimensions.get("window").width} // от ширины экрана
                height={220}
                chartConfig={{
                    backgroundColor: "#ffffff",
                    backgroundGradientFrom: "#ffffff",
                    backgroundGradientTo: "#ffffff",
                    decimalPlaces: 4,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                }}
                bezier // сглаживание графика
            />
        </View>
    )
}
