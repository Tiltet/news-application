import React, { useState } from "react";
import { View, RefreshControl, ScrollView } from "react-native";
import Header from "./components/Header/header";
import { styles } from "./styles/style";
import Navigation from "./components/Navigation/navigation";
import Menu from "./components/Menu/menu";
import MainBlock from "./components/ManiBlock/mainBlock";

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
      <ScrollView style={styles.container} refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        <Navigation/>
        <Menu/>
        <MainBlock/>
      </ScrollView>
    </View>
  );
}
