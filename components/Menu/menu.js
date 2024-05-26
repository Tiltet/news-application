import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { menuStyle } from "./menuStyle";
import { AntDesign } from "@expo/vector-icons";
import CreatContext from "../../context/context";

export  function Menu() {

  // ЭКСПОРТИРУЕМ КОНТЕКСТ, КОТОРЫЙ ОТВЕЧАЕТ ЗА НАВИГАЦИЮ НА СТРАНИЦЕ
  const { index, setIndex } = React.useContext(CreatContext)

  const handlerClick = ( value ) => {
    setIndex(value)
  }

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={menuStyle.menu_container}>
      <View style={menuStyle.menu_block_first}>
        <TouchableOpacity onPress={() => handlerClick(1)}>
          <Text style={menuStyle.menu_block_text}>ЭКОНОМИКА</Text>
        </TouchableOpacity>
      </View>
      <View style={menuStyle.menu_block}>
        <TouchableOpacity onPress={() => handlerClick(2)}>
          <Text style={menuStyle.menu_block_text}>ПОЛИТИКА</Text>
        </TouchableOpacity>
      </View>
      <View style={menuStyle.menu_block}>
        <TouchableOpacity onPress={() => handlerClick(3)}>
          <Text style={menuStyle.menu_block_text}>БИЗНЕС</Text>
        </TouchableOpacity>
      </View>
      <View style={menuStyle.menu_block}>
        <TouchableOpacity onPress={() => handlerClick(4)}>
          <Text style={menuStyle.menu_block_text}>МИРОВЫЕ НОВОСТИ</Text>
        </TouchableOpacity>
      </View>
      <View style={menuStyle.menu_block_last}>
        <TouchableOpacity>
          <AntDesign name="pluscircle" size={15} color="#88A2FF" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
