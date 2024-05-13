import { SafeAreaView, Text, View } from "react-native";
import Header from "./components/Header/header";
import { styles } from "./styles/style";
import Navigation from "./components/Navigation/navigation";
import Menu from "./components/Menu/menu";

export default function App() {

  return (
    <View style={styles.main}>
      <Header/>
      <SafeAreaView style={styles.container}>
        <Navigation/>
        <Menu/>
      </SafeAreaView>
    </View>
  );
}
