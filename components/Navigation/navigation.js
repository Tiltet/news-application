import React from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";
import { navigationStyle } from "../../styles/navigation/navigationStyle";
import { styles } from "../../styles/style";

export default function Navigation() {

  return (
    <View style={navigationStyle.nav_container}>
      <View>
        <Image style={navigationStyle.nav_logo} source={require('../../assets/img/logo.png')}/>
      </View>
      <View style={navigationStyle.nav_icon_container}>
        <View>
          <TouchableOpacity>
            <Image style={navigationStyle.nav_icon} source={require('../../assets/icons/header/message.png')}/>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
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
    </View>
  );
}
