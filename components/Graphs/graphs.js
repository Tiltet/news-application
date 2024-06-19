import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import { graphsStyle } from "./graphsStyle";
import Entypo from "@expo/vector-icons/Entypo";
import CreatContext from "../../context/context";

export function Graphs() {

  const { index, setIndex } = React.useContext(CreatContext)

  // ОБРАБОТЧИК НАЖАТИЯ НА ЗАГОЛОВОК ГРАФИКА
  const handlerCurrency = () => {
    setIndex(16)
  }

  return (
    <View style={graphsStyle.graphs_container}>
      <View style={graphsStyle.graphs_block}>
        <TouchableOpacity
            style={graphsStyle.graphs_block_top}
            onPress={() => handlerCurrency()}
        >
          <View style={graphsStyle.graphs_block_line}>
            <Text style={graphsStyle.graphs_block_line_subtitle}>Sprind</Text>
            <Text style={graphsStyle.graphs_block_line_cash}>$15400.55</Text>
          </View>
          <View style={graphsStyle.graphs_block_line}>
            <Text style={graphsStyle.graphs_block_line_title}>DOW JONES</Text>
            <View style={graphsStyle.graphs_block_line}>
              <Entypo name="triangle-up" size={16} color="green" />
              <Text style={graphsStyle.graphs_block_line_percent}>1.99%</Text>
            </View>
          </View>
        </TouchableOpacity>
        <Image style={graphsStyle.graphs_block_img} source={require('../../assets/img/graph.png')}/>
      </View>
      <View style={graphsStyle.graphs_block}>
        <TouchableOpacity
            style={graphsStyle.graphs_block_top}
            onPress={() => handlerCurrency()}
        >
          <View style={graphsStyle.graphs_block_line}>
            <Text style={graphsStyle.graphs_block_line_subtitle}>Sprind</Text>
            <Text style={graphsStyle.graphs_block_line_cash}>$15400.55</Text>
          </View>
          <View style={graphsStyle.graphs_block_line}>
            <Text style={graphsStyle.graphs_block_line_title}>DOW JONES</Text>
            <View style={graphsStyle.graphs_block_line}>
              <Entypo name="triangle-up" size={16} color="green" />
              <Text style={graphsStyle.graphs_block_line_percent}>1.99%</Text>
            </View>
          </View>
        </TouchableOpacity>
        <Image style={graphsStyle.graphs_block_img} source={require('../../assets/img/graph.png')}/>
      </View>
    </View>
  )
}
