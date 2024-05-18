import React, { useState } from "react";
import { styles } from "./styles/style";
import { View, RefreshControl, ScrollView, Text, StatusBar } from "react-native";
import Header from "./components/Header/header";
import Navigation from "./components/Navigation/navigation";
import Menu from "./components/Menu/menu";
import CreatContext from "./context/context";
import { HomePage } from "./pages/HomePage/homePage";
import { SearchPage } from "./pages/SearchPage/searchPage";

export default function App() {

  const [refreshing, setRefreshing] = useState(false)
  const [visible, setVisible] = useState(true)
  const [index, setIndex] = useState(0)

  const onRefresh = () => {
    setRefreshing(true);

    setVisible(true)
    setIndex(0)

    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  };

  return (
    <View style={styles.main}>
      <Header visible={visible} setVisible={setVisible}/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl ={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>

        <CreatContext.Provider value={{ index: false, setIndex }}>
          <View style={styles.container}>
            <Navigation/>
            <Menu/>
          </View>
          { index === 0 && <HomePage/> }
          { index === 1 && <Text>Экономика</Text> }
          { index === 2 && <Text>Политика</Text> }
          { index === 3 && <Text>Бизнес</Text> }
          { index === 4 && <Text>Мировые новости</Text> }
          { index === 5 && <SearchPage/> }
        </CreatContext.Provider>

        <View style={styles.footer}>
          <Text style={styles.footer_text}>©2024 Opozitia</Text>
        </View>
      </ScrollView>
      <StatusBar barStyle="light-content" />
    </View>
  );
}
