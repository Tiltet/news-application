import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { menuStyle } from "../../styles/menu/menuStyle";
import { AntDesign } from "@expo/vector-icons";

export default  function Menu() {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={menuStyle.menu_container}>
      <View style={menuStyle.menu_block_first}>
        <TouchableOpacity>
          <Text>ПОЛИТИКА</Text>
        </TouchableOpacity>
      </View>
      <View style={menuStyle.menu_block}>
        <TouchableOpacity>
          <Text>БИЗНЕС</Text>
        </TouchableOpacity>
      </View>
      <View style={menuStyle.menu_block}>
        <TouchableOpacity>
          <Text>МИРОВЫЕ НОВОСТИ</Text>
        </TouchableOpacity>
      </View>
      <View style={menuStyle.menu_block_last}>
        <TouchableOpacity>
          <AntDesign name="pluscircle" size={13} color="#88A2FF" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
