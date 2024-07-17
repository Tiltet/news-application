import React, { useEffect, useState } from 'react';
import { Dimensions, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { graphStyle } from "./graphStyle";
import axios from "axios";

export function Graph({ currencyId, category }) {

    const [ chartData, setChartData ] = useState({
            labels: [],
            datasets: [
                {
                    data: [1,2,1,3,1,2],
                },
            ],
        });

    useEffect(() => {
        if (category === "cash") {
            axios.get("http://localhost:4000/currency/params/" + currencyId + "?pageSize=6")
                .then(res => {
                    let labels = [];
                    let data = [];
                    res.data.forEach((item, index) => {
                        data.push(parseFloat(item.rate).toFixed(4));
                    })

                    data.reverse()

                    setChartData({
                        labels: labels,
                        datasets: [
                            {
                                data: data,
                            },
                        ],
                    });

                    return chartData

                })
                .catch(error => {
                    console.log("http://localhost:4000/currency/params/" + currencyId + "?pageSize=15 - " + error);
                })
        } else if (category === "crypto") {
            axios.get("http://localhost:4000/crypto/full/" + currencyId + "?pageSize=10")
                .then(res => {
                    let labels = [];
                    let data = [];
                    res.data.forEach((item, index) => {
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
