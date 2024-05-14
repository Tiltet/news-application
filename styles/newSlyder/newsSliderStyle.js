import { Dimensions, StyleSheet } from "react-native";

export const newsSliderStyle = StyleSheet.create({
  slider: {
    marginTop: 15,
    height: 100,
  },
  slider_block: {
    width: Dimensions.get("window").width,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 10,
    paddingVertical: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: "flex-start",
  },
  slider_block_text: {
    display: 'flex',
    flexShrink: 1,
    flexDirection: 'column',
    paddingLeft: 7,
  },
  slider_block_title: {
    fontSize: 14,
    paddingBottom: 5,
  },
  slider_block_description: {
    fontSize: 12,
    fontWeight: "700",
  },
  image: {
    borderRadius: 4,
    maxWidth: 140,
    height: '100%',
  },
})
