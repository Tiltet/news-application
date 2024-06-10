import { StyleSheet } from "react-native";

export const weatherStyle = StyleSheet.create({
  container: {
    paddingVertical: 20,
    marginVertical: 20,
    width: "100%",
    backgroundColor: "#F5F5F5",
    borderRadius: 20,
  },
  title_block: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginHorizontal: "auto",
    backgroundColor: "#88A2FF",
    borderRadius: 20,
  },
  title_text: {
    fontSize: 18,
    fontWeight: "600",
  },
  title_image: {
    marginLeft: 5,
    width: 14,
    height: 20,
  },

  // ГЛАВНЫЙ БЛОК
  weather_blocks: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  // ЛЕВЫЙ БЛОК
  weather_left_block: {
    width: "25%",
  },
  weather_left_block_image: {
    width: 90,
    height: 90,
  },

  // ЦЕНТРАЛЬНЫЙ БЛОК
  weather_center_block: {
    width: "25%",
  },
  weather_center_block_title: {
    textAlign: "center",
    fontSize: 38,
    fontWeight: "700",
  },
  weather_center_block_text: {
    textAlign: "center",
    fontSize: 16,
  },

  // ПРАВЫЙ БЛОК
  weather_right_block: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-around",
    width: "25%",
  },
  weather_right_block_line: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  weather_right_block_icon: {
    marginRight: 10,
  },
  weather_right_block_text: {
    fontSize: 16,
  },

  // ГЛАВНЫЙ ЛИСТ
  weather_list: {
    marginTop: 20,
  },
  weather_list_title: {
    marginBottom: 5,
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
  },
  weather_list_items: {
    display: "flex",
  },
  weather_list_items_item: {
    marginHorizontal: 20,
    marginTop: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  weather_list_items_item_border: {
    width: "40%",
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 25,
  },
  weather_list_items_item_data: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
  weather_list_items_item_max: {
    width: "30%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  weather_list_items_item_max_text: {
    fontSize: 18,
  },
  weather_list_items_item_max_image: {
    marginLeft: 8,
    width: 20,
    height: 20,
  }
})
