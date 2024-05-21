import { StyleSheet } from "react-native";

export const searchPageStyle = StyleSheet.create({
  input_container: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  input: {
    fontSize: 16,
    width: '100%',
    padding: 10,
    borderRadius: 8,
    borderColor: "#000",
    borderWidth: 1,
  },
  cross_wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    position: "absolute",
    right: 10,
  },
  cross: {
    width: 15,
    height: 15,
  },
  shown_container: {
    marginTop: 20,
    marginBottom: 10,
  },
  news_container: {
    borderTopColor: '#000',
    borderTopWidth: 1,
  },
  news_item: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ACADAC',
  },
  news_item_top: {
    display: "flex",
    flexDirection: "row",
  },
  news_block_text: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    paddingRight: 5,
  },
  news_block_text_title: {
    textTransform: "uppercase",
    color: '#50544F',
  },
  news_block_text_text: {
    paddingRight: 10,
    fontWeight: '700',
  },
  news_block_img: {
    width: 180,
    height: 100,
  },
  image: {
    borderRadius: 8,
    width: 180,
    height: 100,
  },
  news_item_bottom: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
  },
  news_item_bottom_block_first: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#88A2FF',
  },
  news_item_bottom_block: {
    marginLeft: 15,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
    borderWidth: 1,
  },
  news_item_bottom_block_text_first: {
    color: '#88A2FF',
  },
  news_item_bottom_block_text: {
    color: '#000',
  },
  button_container: {
    marginTop: 20,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#88A2FF',
  },
  button: {
    paddingVertical: 8,
    textAlign: "center",
    fontWeight: "600"
  },
  not_found_text: {
    fontWeight: "700",
    fontSize: 24,
  }
})
