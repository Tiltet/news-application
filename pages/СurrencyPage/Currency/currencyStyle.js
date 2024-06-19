import {StyleSheet} from "react-native";

export const currencyStyle = StyleSheet.create({
    container: {
        minWidth: "100%",
        marginTop: 20,
    },
    top_line: {
        paddingVertical: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderTopColor: "#000",
        borderTopWidth: 1,
        borderBottomColor: "#000",
        borderBottomWidth: 1,
    },
    top_line_item_text: {
        textAlign: "center",
        fontSize: 13,
        color: "#50544F"
    },
    line_item: {
        width: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    line: {
        paddingVertical: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ACADAC"
    },
    line_item_text: {
        textAlign: "center",
        fontSize: 13,
    },
    line_item_text_red: {
        textAlign: "center",
        fontSize: 13,
        color: "red",
    },
    line_item_text_green: {
        textAlign: "center",
        fontSize: 13,
        color: "green",
    }
})
