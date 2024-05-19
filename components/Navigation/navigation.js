import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { navigationStyle } from "../../styles/Components/navigation/navigationStyle";
import { styles } from "../../styles/style";
import SearchWidget from "../../widgets/SearchWidget/searchWidget";
import CreatContext from "../../context/context";

export default function Navigation() {

  const [isBlurVisible, setIsBlurVisible] = useState(false);
  const { index, setIndex } = React.useContext(CreatContext)

  const handlerLogoClick = () => {
    setIndex(0)
  }

  const handlerSearchPress = () => {
    setIsBlurVisible(true);
  };

  return (
    <View style={navigationStyle.nav_container}>
      <View>
        <TouchableOpacity onPress={() => handlerLogoClick()}>
          <Image style={navigationStyle.nav_logo} source={require('../../assets/img/logo.png')}/>
        </TouchableOpacity>
      </View>
      <View style={navigationStyle.nav_icon_container}>
        <View>
          <TouchableOpacity>
            <Image style={navigationStyle.nav_icon} source={require('../../assets/icons/header/message.png')}/>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => handlerSearchPress()}>
            <Image style={navigationStyle.nav_icon} source={require('../../assets/icons/header/search.png')}/>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Image style={navigationStyle.nav_icon} source={require('../../assets/icons/header/profile.png')}/>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.flexbox}>
            <Text style={navigationStyle.nav_weather_text}>11°</Text>
            <Image style={navigationStyle.nav_icon} source={require('../../assets/icons/header/sun.png')}/>
          </TouchableOpacity>
        </View>
      </View>


      {/* Модальное окно блура */}
      {isBlurVisible && (
        <SearchWidget isBlurVisible={isBlurVisible} setIsBlurVisible={setIsBlurVisible} />
      )}
    </View>
  );
}

