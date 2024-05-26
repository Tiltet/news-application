import { StyleSheet } from "react-native";

export const opinionPageStyle = StyleSheet.create({
  container: {
    marginTop: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  count: {
    marginTop: 15,
    marginLeft: 5,
    width: '100%',
    fontSize: 16,
    color: '#50544F',
  },
  selectedOption: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
  },
  option: {
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    color: '#000',
  },
  arrow: {
    width: 18,
    height: 12,
  },
  listContainer: {
    position: 'relative',
    top: 8,
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    zIndex: 1,
  },
  text_counter: {
    fontSize: 18,
    fontWeight: "500",
    color: '#000',
    backgroundColor: '#fff',
  },
  poll_block: {
    marginTop: 15,
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
  },
  title: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '100%',
    fontSize: 16,
    backgroundColor: '#F5F5F5',
    color: "#374883",
    overflow: "hidden",
    fontWeight: "600",
    zIndex: 1,
  },
  description: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },
  vote_block: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  votes: {
    paddingRight: 15,
    display: "flex",
    justifyContent: "space-between",
  },
  vote: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "flex-start",
  },
  vote_text: {
    paddingHorizontal: 5,
  },
  image: {
    width: 165,
    height: 100,
    borderRadius: 8,
  },
  button: {
    marginTop: 20,
    marginBottom: 30,
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: '#88A2FF',
    paddingVertical: 10,
    borderRadius: 8,
  },
  button_text: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    color: "#000",
  }
})