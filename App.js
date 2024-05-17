import React, { useState } from "react";
import { styles } from "./styles/style";
import { View, RefreshControl, ScrollView, Text, StatusBar } from "react-native";
import Header from "./components/Header/header";
import Navigation from "./components/Navigation/navigation";
import Menu from "./components/Menu/menu";
import { HomePage } from "./pages/HomePage/homePage";

export default function App() {

  const [refreshing, setRefreshing] = useState(false);
  const [visible, setVisible] = useState(true);

  const onRefresh = () => {
    setRefreshing(true);

    setVisible(true)

    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  };

  return (
    <View style={styles.main}>
      <Header visible={visible} setVisible={setVisible}/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        <View style={styles.container}>
          <Navigation/>
          <Menu/>
        </View>

        <HomePage/>

        <View style={styles.footer}>
          <Text style={styles.footer_text}>©2024 Opozitia</Text>
        </View>
      </ScrollView>
      <StatusBar barStyle="light-content" />
    </View>
  );
}
