import React, {useEffect, useRef, useState} from "react";
import { styles } from "./style";
import { View, RefreshControl, Text, StatusBar, Animated, Keyboard, Platform } from "react-native";
import CreatContext from "./context/context";
import SearchContext from "./context/searchContext";
import { Header } from "./components/Header/header";
import { Navigation } from "./components/Navigation/navigation";
import { Menu } from "./components/Menu/menu";
import { HomePage } from "./pages/HomePage/homePage";
import { SearchPage } from "./pages/SearchPage/searchPage";
import { RegWidget } from "./widgets/registration/regWidget";
import { PassWidget } from "./widgets/password/passWidget";
import { RecoveryWidget } from "./widgets/recovery/recoveryWidget";
import { OpinionPage } from "./pages/OpinionPage/opinionPage";
import { NewsPage } from "./pages/NewsPage/newsPage";
import { ProfilePage} from "./pages/ProfilePage/profilePage";
import { CategoryPage } from "./pages/CategoryPage/categoryPage";
import { InstructionWidget } from "./widgets/instruction/instructionWidget";
import { CodeWidget } from "./widgets/code/codeWidget";
import { CreatePassWidget } from "./widgets/createPass/createPassWidget";
import { WeatherPage } from "./pages/WeatherPage/weatherPage";
import { LoginWidget } from "./widgets/login/loginWidget";
import { CurrenciesPage } from "./pages/CurrenciesPage/currenciesPage";
import { CurrencyPage } from "./pages/CurrencyPage/currencyPage";
import { AboutPage } from "./pages/AboutPage/aboutPage";
import { SportPage } from "./pages/SportPage/sportPage";

export default function App() {

    const [ refreshing, setRefreshing ] = useState(false)
    const [ visible, setVisible ] = useState(true)
    const [ index, setIndex ] = useState(0)
    const [ searchData, setSearchData ] = useState(0)
    const [ keyboardHeight, setKeyboardHeight ] = useState(0);

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


    useEffect(() => {
        if (Platform.OS === 'ios') {
            const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (event) => {
                setKeyboardHeight(event.endCoordinates.height);
            });

            const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
                setKeyboardHeight(0);
            });

            return () => {
                keyboardDidShowListener.remove();
                keyboardDidHideListener.remove();
            };
        }
    }, []);


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
                            { index === 19 && <AboutPage/> }
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
                            { index === 16 && <CurrenciesPage/> }
                            { index === 17 && <CurrencyPage currencyId={searchData} category={"cash"} /> }
                            { index === 18 && <CurrencyPage currencyId={searchData} category={"crypto"} /> }
                            { index === 20 && <SportPage/> }
                            { index.toString().length === 36 && <NewsPage id={index} handleScrollToTop={handleScrollToTop} /> }
                    </SearchContext.Provider>
                </CreatContext.Provider>

                <View style={[styles.footer, { marginBottom: keyboardHeight }]}>
                    <Text style={styles.footer_text}>©2024 Opozitia</Text>
                </View>
            </Animated.ScrollView>
            <StatusBar barStyle="light-content" />
        </View>
    );
}
