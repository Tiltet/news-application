import { StyleSheet } from "react-native";

export const categoryPageStyle = StyleSheet.create({
  title: {
    marginVertical: 10,
    fontSize: 36,
    color: "#374883",
    fontWeight: "700",
  },
  header_count: {
    display: "flex",
    flexDirection: "row",
  },
  header_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  header_count_text: {
    fontSize: 16,
  },
  header_list: {
    width: 200,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#000",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
  },
  header_list_image: {
    marginLeft: 20,
    width: 15,
    height: 14,
  },
  header_list_drop: {
    padding: 10,
    paddingTop: 5,
    borderWidth: 1,
    borderRadius: 10,
    width: 200,
    backgroundColor: "#fff",
    position: "absolute",
    top: 100,
    right: 0,
  },
  header_list_text_container: {
    marginTop: 5,
    borderRadius: 8,
  },
  header_list_text: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    fontSize: 14,
    color: "#000",
    position: "relative",
  },
  news_item: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    marginBottom: 20,
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
  news_block_text_text: {
    fontSize: 16,
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
  // КНОПКА "ЕЩЕ 5 СТАТЬЕЙ"
  button: {
    borderRadius: 5,
    paddingVertical: 10,
    backgroundColor: '#88A2FF',
  },
  button_text: {
    fontWeight: "700",
    textAlign: "center",
  }
})
