import { StyleSheet } from "react-native";

export const horoscopeStile = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#F5F5F5",
    borderRadius: 25,
  },
  // ЗАГОЛОВОК
  header: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  header_image: {
    height: 60,
    width: 60,
  },
  header_text: {
    paddingLeft: 20,
  },
  header_text_title: {
    fontSize: 24,
    fontWeight: "800",
  },
  header_text_data: {
    paddingTop: 5,
    fontSize: 14,
    fontWeight: "300",
    textAlign: "center",
  },
  // ЗАВТРА / СЕГОДНЯ
  buttons: {
    marginTop: 10,
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 25,
    backgroundColor: "#374883",
  },
  button_background: {
    paddingVertical: 7,
    paddingHorizontal: 30,
    backgroundColor: "#88A2FF",
    borderRadius: 25,
    overflow: "hidden",
  },
  button_background_checked: {
    paddingVertical: 7,
    paddingHorizontal: 30,
    borderRadius: 25,
    overflow: "hidden",
  },
  button_text: {
    color: "#fff",
  },
  // ГОРОСКОП
  horoscope: {
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  horoscope_title: {
    fontSize: 20,
    fontWeight: "600",
    textDecorationLine: "underline",
    textDecorationColor: "#88A2FF",
  },
  horoscope_title_border: {
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  horoscope_text: {

  }
})
