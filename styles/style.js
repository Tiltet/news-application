import { Platform, StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#666',
    height: '100%',
  },
  container: {
    flex: 1,
    paddingVertical: '5%',
  },
  title: {
    textAlign: "center",
    fontSize: 36,
    color: 'white'
  }
})

