import { StyleSheet } from "react-native";

export const headerStyle = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    flexGrow: 1,
    textAlign: "center",
    paddingLeft: 15,
    fontSize: 15,
    color: '#fff',
    paddingTop: 8,
    paddingBottom: 8,
  },
  headerImageContainer: {
    position: "relative",
    width: 25,
    height: 25,
  }
})
