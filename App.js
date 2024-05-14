import React, { useState } from "react";
import { styles } from "./styles/style";
import { View, RefreshControl, ScrollView } from "react-native";
import Header from "./components/Header/header";
import Navigation from "./components/Navigation/navigation";
import Menu from "./components/Menu/menu";
import MainBlock from "./components/ManiBlock/mainBlock";
import { NewsSlider } from "./components/NewsSlyder/newsSlider";
import { Graphs } from "./components/Graphs/graphs";

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
          <MainBlock/>
        </View>
        <NewsSlider/>
        <Graphs/>
      </ScrollView>
    </View>
  );
}
