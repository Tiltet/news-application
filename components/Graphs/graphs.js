import React, { useEffect, useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { graphsStyle } from "./graphsStyle";
import Entypo from "@expo/vector-icons/Entypo";
import CreatContext from "../../context/context";
import { LineChart } from "react-native-chart-kit";
import axios from "axios";
import staticGraphs from "./staticGraphs";

export function Graphs() {

    const { index, setIndex } = React.useContext(CreatContext)  // КОНТЕКСТ ДЛЯ НАВИГАЦИИ
    const [ data, setData ] = useState([])
    const [ percentageEURToUSD, setPercentageEURToUSD ] = useState(0)
    const [ percentageUSDToRON, setPercentageUSDToRON ] = useState(0)
    const [ first, setFirst ] = useState([1,2,3,4,5]);
    const [ second, setSecond ] = useState([1,2,3,4,5]);

    useEffect(() =>  {
        axios.get("http://localhost:4000/currency/graphic")
            .then(response => {
                console.log("http://localhost:4000/currency/graphic - good")
                setPercentageUSDToRON(parseFloat(response.data[0].percentageUSDToRON))
                setPercentageEURToUSD(parseFloat(response.data[0].percentageEURToUSD))
                setData(response.data)

                response.data.forEach(element => {
                    first.shift()
                    second.shift()
                    first.push(element.EURToUSD)
                    second.push(element.EURToRON)
                })

            })
            .catch(error => {
                console.error("http://localhost:4000/currency/graphic - ", error)
                setData(staticGraphs)
            })
    }, []);

    // ОБРАБОТЧИК НАЖАТИЯ НА ЗАГОЛОВОК ГРАФИКА
    const handlerCurrency = () => {
        setIndex(16)
    }

    const firstDataset = {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [
            {
                data: first,
            },
        ],
    };

    const secondDataset = {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [
            {
                data: second,
            },
        ],
    };

    return (
        <View style={graphsStyle.graphs_container}>

            <View style={graphsStyle.graphs_block}>
                <TouchableOpacity
                    style={graphsStyle.graphs_block_top}
                    onPress={() => handlerCurrency()}
                >
                    {/*
                    <View style={graphsStyle.graphs_block_line}>
                        <Text style={graphsStyle.graphs_block_line_subtitle}>Sprind</Text>
                        <Text style={graphsStyle.graphs_block_line_cash}>$15400.55</Text>
                    </View>
                    */}
                    <View style={graphsStyle.graphs_block_line}>
                        <Text style={graphsStyle.graphs_block_line_title}>EUR / USD</Text>
                        {
                            percentageEURToUSD >= 0 ? (
                                <View style={graphsStyle.graphs_block_line}>
                                    <Entypo name="triangle-up" size={16} color="green" />
                                    <Text style={graphsStyle.graphs_block_line_percent_green}>{percentageEURToUSD}</Text>
                                </View>
                            ) : (
                                <View style={graphsStyle.graphs_block_line}>
                                    <Entypo name="triangle-down" size={16} color="red" />
                                    <Text style={graphsStyle.graphs_block_line_percent_red}>{percentageEURToUSD}</Text>
                                </View>
                            )
                        }
                    </View>
                </TouchableOpacity>
                <View style={graphsStyle.graphs_block_lineChart}>
                    <LineChart
                        data={firstDataset}
                        width={Dimensions.get('window').width * 0.45}
                        height={99}
                        chartConfig={{
                            backgroundColor: "#ffffff",
                            backgroundGradientFrom: "#ffffff",
                            backgroundGradientTo: "#ffffff",
                            decimalPlaces: 3,
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        }}
                        bezier
                    />
                </View>
            </View>

            <View style={graphsStyle.graphs_block}>
                <TouchableOpacity
                    style={graphsStyle.graphs_block_top}
                    onPress={() => handlerCurrency()}
                >
                    {/*
                    <View style={graphsStyle.graphs_block_line}>
                        <Text style={graphsStyle.graphs_block_line_subtitle}>Sprind</Text>
                        <Text style={graphsStyle.graphs_block_line_cash}>$15400.55</Text>
                    </View>
                    */}
                    <View style={graphsStyle.graphs_block_line}>
                        <Text style={graphsStyle.graphs_block_line_title}>USD / RON</Text>
                        {
                            percentageUSDToRON >= 0 ? (
                                <View style={graphsStyle.graphs_block_line}>
                                    <Entypo name="triangle-up" size={16} color="green" />
                                    <Text style={graphsStyle.graphs_block_line_percent_green}>{percentageUSDToRON}</Text>
                                </View>
                            ) : (
                                <View style={graphsStyle.graphs_block_line}>
                                    <Entypo name="triangle-down" size={16} color="red" />
                                    <Text style={graphsStyle.graphs_block_line_percent_red}>{percentageUSDToRON}</Text>
                                </View>
                            )
                        }
                    </View>
                </TouchableOpacity>
                <View style={graphsStyle.graphs_block_lineChart}>
                    <LineChart
                        data={secondDataset}
                        width={Dimensions.get('window').width * 0.45}
                        height={99}
                        chartConfig={{
                            backgroundColor: "#ffffff",
                            backgroundGradientFrom: "#ffffff",
                            backgroundGradientTo: "#ffffff",
                            decimalPlaces: 3,
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        }}
                        bezier
                    />
                </View>

            </View>
        </View>
    )
}
