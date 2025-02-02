import { StyleSheet } from "react-native";

export const dropdownStyle = StyleSheet.create({
    dropdown: {
        width: 'auto',
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
    },
    dropdown_container: {
        width: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    dropdown_list: {
        borderWidth: 1,
        borderRadius: 8
    },
    dropdown_text: {
        color: "#000",
        fontSize: 16,
    },
    dropdown_text_selected: {
        display: "none",
    },
    dropdown_title: {
        fontSize: 16,
    }
})
