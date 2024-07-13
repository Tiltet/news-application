import { StyleSheet } from "react-native";

export const oneCurrencyPageStyle = StyleSheet.create({
    container: {
        marginTop: 5
    },
    title_block: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    title_block_currency: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: "500"
    },
    title_block_img: {
        width: 40,
        height: 40,
    },
    rate_block: {
        marginTop: 8,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    rate_block_rate: {
        fontSize: 24,
        fontWeight: "800",
        marginRight: 5,
    },
    rate_block_difference: {
        fontSize: 16,
        marginRight: 5,
    },
    rate_block_percentage: {
        fontSize: 14,
    },
    date_block: {

    },
    date_block_date: {
        color: "#50544F",
        fontSize: 12,
        fontWeight: "400",
    }
})
