import React, { useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { headerStyle } from "../../styles/headerStyle/headerStyle";
import Entypo from '@expo/vector-icons/Entypo';

export default function Header() {
  const [headerVisible, setHeaderVisible] = useState(true);

  const handleToggleHeader = () => {
    setHeaderVisible(!headerVisible);
  };

  if (!headerVisible) {
    return (
      <SafeAreaView style={headerStyle.header}>

      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={headerStyle.header}>
      <Text style={headerStyle.headerText}>Work with us and help Moldova</Text>
      <TouchableOpacity onPress={handleToggleHeader} style={headerStyle.headerImageContainer}>
        <Entypo name="cross" size={25} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
