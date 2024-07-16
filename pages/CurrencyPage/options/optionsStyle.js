import { StyleSheet } from 'react-native';

export const optionsStyle = StyleSheet.create({
    container: {
        marginTop: 5,
    },
    list: {
        marginTop: 5,
        display: "flex"
    },
    list_item: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#ACADAC",
        paddingVertical: 8,
    },
    list_item_text: {
        fontWeight: "300",
        fontSize: 16,
    }
})
