import React from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";
import { mainBlockStyle } from "../../styles/mainBlock/mainBlockStyle";

export default function MainBlock() {

  return (
    <View style={mainBlockStyle.mainBlock_container}>
      <TouchableOpacity style={mainBlockStyle.mainBlock_mainNews}>
        <Image style={mainBlockStyle.mainBlock_img} source={require('../../assets/img/mainBlockImg.png')}/>
        <Text style={mainBlockStyle.main_block_title}>Лидер левой партии призвал Турцию не умирать за грязные интересы США</Text>
      </TouchableOpacity>
      <View style={mainBlockStyle.main_block_wrapper}>
        <View style={mainBlockStyle.main_block_border_first}>
          <TouchableOpacity>
            <Text style={mainBlockStyle.main_block_text}>Лидер левой партии призвал Турцию не умирать за грязные интересы США</Text>
          </TouchableOpacity>
        </View>
        <View style={mainBlockStyle.main_block_border}>
          <TouchableOpacity>
            <Text style={mainBlockStyle.main_block_text}>Лидер левой партии призвал Турцию не умирать за грязные интересы США</Text>
          </TouchableOpacity>
        </View>
        <View style={mainBlockStyle.main_block_border}>
          <TouchableOpacity>
            <Text style={mainBlockStyle.main_block_text}>Лидер левой партии призвал Турцию не умирать за грязные интересы США</Text>
          </TouchableOpacity>
        </View>
        <View style={mainBlockStyle.main_block_border_last}>
          <TouchableOpacity>
            <Text style={mainBlockStyle.main_block_text}>Лидер левой партии призвал Турцию не умирать за грязные интересы США</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
