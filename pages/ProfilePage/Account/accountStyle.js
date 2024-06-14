import { StyleSheet } from "react-native";

export const accountStyle = StyleSheet.create({
    main_container: {
        alignSelf:"center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#EFEFEF",
        width:"90%",
        marginTop: 30,
    },
    title: {
        marginHorizontal: 5,
        marginVertical: 14,
        fontSize: 24,
        fontWeight: "700",
    },
    container: {
        padding: 15,
        marginBottom: 20,
        width: "80%",
        backgroundColor: "white",
        borderColor: "#ACADAC",
        borderWidth: 2,
    },
    container_title: {
        fontWeight: "500",
        fontSize: 18,
    },
    info_text: {
        marginTop: 10,
    },
    info_text_title: {
        color: "#000",
        fontWeight: "300",
        fontSize: 14,
    },
    info_text_input: {
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: "#ACADAC",
        backgroundColor: "#EFEFEF",
        height: 35,
        marginTop: 10,
    },
    info_text_text: {
        color: "#000",
        fontWeight: "500",
        fontSize: 18,
    },
    info_buttons: {
        marginTop: 5,
    },
    info_buttons_line: {
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
    },
    info_button_text: {
        textAlign: "center",
        color: "#fff",
    },
    info_forgotPassword: {
        marginTop: 10,
    },
    info_forgotPassword_text: {
        fontSize: 14,
        fontWeight: "300",
        textDecorationLine: "underline"
    },
    profile_item: {
        marginTop: 10,
    },
    profile_item_text: {

    },
    profile_item_country_container: {
        marginTop: 10,
        overflow: "hidden",
        borderWidth: 1,
        borderRadius: 8
    }
})
