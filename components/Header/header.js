import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { headerStyle } from "./headerStyle";
import Entypo from '@expo/vector-icons/Entypo';

export function Header({ visible, setVisible }) {

  const handleToggleHeader = () => {
    setVisible(!visible);
  };

  if (!visible) {
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
