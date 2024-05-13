import { Platform, StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#fff',
    height: '100%',
  },
  container: {
    marginHorizontal: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 36,
    color: 'white'
  },
  flexbox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }
})

