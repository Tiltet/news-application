import { Dimensions, StyleSheet } from "react-native";

export const lastNewsStyle = StyleSheet.create({
  lastNews_wrapper: {
    marginTop: 25,
  },
  lastNews_title: {
    color: '#5A70C0',
    fontSize: 20,
  },
  lastNews_container: {
    display: "flex",

  },
  lastNews_block: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
  },
  lastNews_block_img: {
    borderRadius: 8,
    width: '50%',
    minHeight: 120,
    height: "auto",
  },
  lastNews_block_text: {
    marginLeft: 10,
    width: '50%',
  },
  lastNews_block_text_time: {
    color: "#565756",
    fontSize: 12,
    fontWeight: '700',
    paddingBottom: 5,
  },
  lastNews_block_text_title: {
    color: "#000",
    fontSize: 14,
    fontWeight: '700',
    paddingBottom: 5,
  },
})
