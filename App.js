import { SafeAreaView, Text, View } from "react-native";
import Header from "./components/Header/header";
import { styles } from "./styles/style";

export default function App() {

  return (
    <View style={styles.main}>
      <Header/>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Opositia</Text>
      </SafeAreaView>
    </View>
  );
}
