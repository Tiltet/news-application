import { StyleSheet } from "react-native";

export const navigationStyle = StyleSheet.create({
  nav_container: {
    paddingVertical: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav_logo: {
    width: 80,
    height: 25,
  },
  nav_icon_container: {
    paddingLeft: 78,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  nav_icon: {
    marginRight: 10,
    width: 25,
    height: 25,
  },
  nav_weather_text: {
    fontSize: 11,
  }
})
