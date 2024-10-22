import { StyleSheet } from 'react-native';

export const pageStyle =  StyleSheet.create({
  header: {
    paddingVertical: 30,
  },
  header_text: {
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },
  category: {
    fontSize: 14,
    paddingBottom: 10,
    color: "#fff",
  },
  title: {
    paddingBottom: 10,
    fontSize: 24,
    color: "#fff",
    fontWeight: "800",
  },
  header_footer: {
    paddingTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  data: {

  },
  data_text: {
    color: "#fff",
  },
  header_footer_icons: {
    width: 55,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  main_text: {
    flex: 1,
    paddingVertical: 10,
    lineHeight: 25,
    fontSize: 18,
  },
  footer: {
    paddingBottom: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ACADAC",
  },
  footer_share: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  footer_time: {
    fontSize: 16,
    color: "#50544F",
  },
  footer_share_text: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "#50544F",
  },
  buttons: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "49%",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    padding: 10,
  },
  button_text: {
    fontSize: 16,
    paddingLeft: 10,
  },
  count: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
  },
  count_text: {
    fontWeight: "700",
    fontSize: 24,
  },
  input: {
    marginTop: 10,
  },
  input_field: {
    height: 140,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#EFEFEF",
    paddingRight: 120,
  },
  input_button: {
    position: "absolute",
    bottom: 10,
    right: 10,
    paddingVertical: 7,
    paddingHorizontal: 12,
    backgroundColor: "#88A2FF",
    borderRadius: 5,
  },
  input_button_text: {
    color: "#fff",
    fontWeight: "600"
  }
})
