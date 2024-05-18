import React, { useState } from "react";
import {
  Image,
  Modal,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { searchWidgetStyle } from "../../styles/Widgets/Search/searchWidgetStyle";
import CreatContext from "../../context/context";

export default function SearchWidget({isBlurVisible, setIsBlurVisible}) {

  const [inputText, setInputText] = useState('')
  const { index, setIndex } = React.useContext(CreatContext)

  const handleSearchPress = () => {
    console.log("Поиск: ", inputText)
    setIsBlurVisible(false)
  };

  const handleScreenPress = () => {
    setIsBlurVisible(false)
    setIndex(5)
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
            <TouchableWithoutFeedback style={searchWidgetStyle.container} onPress={handleScreenPress}>
              <View style={searchWidgetStyle.window}>
                <View style={searchWidgetStyle.search}>
                  <TextInput
                    value={inputText}
                    style={searchWidgetStyle.input}
                    placeholder="Search..."
                    placeholderTextColor="#999"
                    onChangeText={handleTextChange}
                  />
                  <TouchableOpacity onPress={handleSearchPress}>
                    <Image style={searchWidgetStyle.input_image} source={require('../../assets/icons/search/dark_search.png')}/>
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
