import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { searchPageStyle } from "../../styles/Pages/searchPageStyle/searchPageStyle";

export default function SearchPage({isBlurVisible, setIsBlurVisible}) {

  const [inputText, setInputText] = useState('');

  const handleSearchPress = () => {
    console.log(inputText);
  };

  const handleScreenPress = () => {
    setIsBlurVisible(false);
  };

  const handleTextChange = (newText) => {
    setInputText(newText);
  }

  return (
      isBlurVisible ? (
        <SafeAreaView>
          <Modal
            animationType="fade"
            transparent={true}
            visible={isBlurVisible}
          >
            <TouchableWithoutFeedback style={searchPageStyle.container} onPress={handleScreenPress}>
              <View style={searchPageStyle.window}>
                <View style={searchPageStyle.search}>
                  <TextInput
                    value={inputText}
                    style={searchPageStyle.input}
                    placeholder="Search..."
                    placeholderTextColor="#999"
                    onChangeText={handleTextChange}
                  />
                  <TouchableOpacity onPress={handleSearchPress}>
                    <Image style={searchPageStyle.input_image} source={require('../../assets/icons/search/dark_search.png')}/>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
          <StatusBar barStyle={"dark-content"}/>
        </SafeAreaView>
    ) : null
  );
}
