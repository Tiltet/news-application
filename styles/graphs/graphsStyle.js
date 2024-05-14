import { StyleSheet } from "react-native";

export const graphsStyle = StyleSheet.create({
  graphs_container: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  graphs_block: {
    display: 'flex',
    justifyContent: "space-between",
    borderRadius: 5,
    backgroundColor: '#EFEFEF',
    width: '45%',
    height: 120,
  },
  graphs_block_top: {
    padding: 10,
  },
  graphs_block_img: {
    flex: 1,
    width: '90%',
    height: undefined,
    resizeMode: 'stretch',
    overflow: 'hidden',
  },
  graphs_block_line: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  graphs_block_line_subtitle: {
    textTransform: "uppercase",
    fontSize: 12,
  },
  graphs_block_line_cash: {
    color: '#565756',
    textTransform: "uppercase",
    fontSize: 12,
  },
  graphs_block_line_title: {
    textTransform: "uppercase",
    fontSize: 12,
    fontWeight: "700",
  },
  graphs_block_line_percent: {
    textTransform: "uppercase",
    fontSize: 12,
    color: '#309F63',
  }
})
