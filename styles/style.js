import { Platform, StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#fff',
    height: '100%'
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
  },
  footer: {
    marginTop: 25,
    marginBottom: 25,
    borderTopColor: '#000',
    borderTopWidth: 2,
  },
  footer_text: {
    paddingVertical: 5,
    textAlign: "center",
  }
})

