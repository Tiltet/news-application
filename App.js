import React, { useState } from "react";
import { styles } from "./style";
import { View, RefreshControl, ScrollView, Text, StatusBar } from "react-native";
import { Header } from "./components/Header/header";
import { Navigation } from "./components/Navigation/navigation";
import { Menu } from "./components/Menu/menu";
import CreatContext from "./context/context";
import { HomePage } from "./pages/HomePage/homePage";
import { SearchPage } from "./pages/SearchPage/searchPage";
import { LoginWidget } from "./widgets/login/loginWidget";
import { RegWidget } from "./widgets/registration/regWidget";
import { PassWidget } from "./widgets/password/passWidget";
import { RecoveryWidget } from "./widgets/recovery/recoveryWidget";
import SearchContext from "./context/searchContext";
import { OpinionPage } from "./pages/OpinionPage/opinionPage";
import NewsPage from "./pages/NewsPage/newsPage";

export default function App() {

  const [refreshing, setRefreshing] = useState(false)
  const [visible, setVisible] = useState(true)
  const [index, setIndex] = useState(0)
  const [searchData, setSearchData] = useState(0)

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
        refreshControl ={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>

        <CreatContext.Provider value={{ index: false, setIndex }}>
          <SearchContext.Provider value={{ searchData: false, setSearchData }}>
          <View style={styles.container}>
            <Navigation/>
            <Menu/>
          </View>
            { index === 0 && <HomePage/> }
            { index === 1 && <Text>{index}</Text> }
            { index === 2 && <Text>{index}</Text> }
            { index === 3 && <Text>{index}</Text> }
            { index === 4 && <Text>{index}</Text> }
            { index === 5 && <SearchPage searchItem={searchData} setSearchItem={setSearchData} /> }
            { index === 6 && <LoginWidget/> }
            { index === 7 && <RegWidget/> }
            { index === 8 && <PassWidget/> }
            { index === 9 && <RecoveryWidget/> }
            { index === 10 && <OpinionPage/> }
            { index.toString().length === 36 && <NewsPage id={index}/> }
          </SearchContext.Provider>
        </CreatContext.Provider>

        <View style={styles.footer}>
          <Text style={styles.footer_text}>©2024 Opozitia</Text>
        </View>
      </ScrollView>
      <StatusBar barStyle="light-content" />
    </View>
  );
}
