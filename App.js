import React, { useRef, useState } from "react";
import { styles } from "./style";
import { View, RefreshControl, Text, StatusBar, Animated } from "react-native";
import { Header } from "./components/Header/header";
import { Navigation } from "./components/Navigation/navigation";
import { Menu } from "./components/Menu/menu";
import CreatContext from "./context/context";
import { HomePage } from "./pages/HomePage/homePage";
import { SearchPage } from "./pages/SearchPage/searchPage";
import { RegWidget } from "./widgets/registration/regWidget";
import { PassWidget } from "./widgets/password/passWidget";
import { RecoveryWidget } from "./widgets/recovery/recoveryWidget";
import SearchContext from "./context/searchContext";
import { OpinionPage } from "./pages/OpinionPage/opinionPage";
import NewsPage from "./pages/NewsPage/newsPage";
import { ProfilePage} from "./pages/ProfilePage/profilePage";
import { CategoryPage } from "./pages/CategoryPage/categoryPage";
import { InstructionWidget } from "./widgets/instruction/instructionWidget";
import { CodeWidget } from "./widgets/code/codeWidget";
import { CreatePassWidget } from "./widgets/createPass/createPassWidget";
import { WeatherPage } from "./pages/WeatherPage/weatherPage";
import { LoginWidget } from "./widgets/login/loginWidget";
import { CurrencyPage } from "./pages/СurrencyPage/currencyPage";
import { OneCurrencyPage } from "./pages/OneCurrencyPage/oneCurrencyPage";

export default function App() {

  const [refreshing, setRefreshing] = useState(false)
  const [visible, setVisible] = useState(true)
  const [index, setIndex] = useState(0)
  const [searchData, setSearchData] = useState(0)

  const scrollViewRef = useRef(null);

  // ВОЗВРАЩАЕТ СТРАНИЦУ НА ВЕРХ
  const handleScrollToTop = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: false });
    }
  };

  // ОБНОВЛЕНИЕ СТРАНИЦЫ
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
        <Animated.ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl ={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            ref={scrollViewRef}
        >
          <CreatContext.Provider value={{ index: false, setIndex }}>
            <SearchContext.Provider value={{ searchData: false, setSearchData }}>
              <View style={styles.container}>
                <Navigation/>
                <Menu/>
              </View>
              { index === 0 && <HomePage/> }
              { index === 1 && <CategoryPage category={"economy"} title={"Экономика"} /> }
              { index === 2 && <CategoryPage category={"policy"} title={"Политика"} /> }
              { index === 3 && <CategoryPage category={"business"} title={"Бизнес"} /> }
              { index === 4 && <CategoryPage category={"world"} title={"Мировые новости"} /> }
              { index === 5 && <SearchPage searchItem={searchData} setSearchItem={setSearchData} /> }
              { index === 6 && <LoginWidget/> }
              { index === 7 && <RegWidget/> }
              { index === 8 && <PassWidget/> }
              { index === 9 && <RecoveryWidget/> }
              { index === 10 && <OpinionPage/> }
              { index === 11 && <InstructionWidget/> }
              { index === 12 && <CodeWidget/> }
              { index === 13 && <CreatePassWidget/> }
              { index === 14 && <WeatherPage/> }
              { index === 15 && <ProfilePage/> }
              { index === 16 && <CurrencyPage/> }
              { index === 17 && <OneCurrencyPage/> }
              { index.toString().length === 36 && <NewsPage id={index} handleScrollToTop={handleScrollToTop} /> }
            </SearchContext.Provider>
          </CreatContext.Provider>

          <View style={styles.footer}>
            <Text style={styles.footer_text}>©2024 Opozitia</Text>
          </View>
        </Animated.ScrollView>
        <StatusBar barStyle="light-content" />
      </View>
  );
}
