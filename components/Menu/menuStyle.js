import { StyleSheet } from "react-native";

export const menuStyle = StyleSheet.create({
    menu_container: {
        paddingVertical: 15,
        display: 'flex',
        flexDirection: 'row',
        textAlign: "center",
    },
    menu_block: {
        paddingHorizontal: 15,
        borderRightWidth: 1,
        borderRightColor: '#000',
    },
    menu_block_text: {
        fontWeight: "500",
    },
    menu_block_first: {
        paddingRight: 15,
        borderRightWidth: 1,
        borderRightColor: '#000',
    },
    menu_block_last: {
        paddingHorizontal: 15,
    }
})
