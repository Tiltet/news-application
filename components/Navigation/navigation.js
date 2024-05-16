import React, { useState } from "react";
import { Modal, Image, Text, TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";
import { navigationStyle } from "../../styles/navigation/navigationStyle";
import { styles } from "../../styles/style";

export default function Navigation() {
  const [isBlurVisible, setIsBlurVisible] = useState(false);

  const handlerSearchPress = () => {
    setIsBlurVisible(true);
  };

  // Обработчик событий для закрытия модального окна при нажатии на экран
  const handleScreenPress = () => {
    setIsBlurVisible(false);
    console.log(12);
  };

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
          <TouchableOpacity onPress={handlerSearchPress}>
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
        <Modal
          animationType="fade"
          transparent={true}
          visible={isBlurVisible}
          onRequestClose={() => {
            setIsBlurVisible(false);
          }}
        >
          <TouchableWithoutFeedback
            onPress={handleScreenPress}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255,255,255,0.5)', // Прозрачный фон с эффектом блура
              }}
            >
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </View>
  );
}

