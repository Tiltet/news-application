import { StyleSheet } from "react-native";

export const  codeWidgetStyle = StyleSheet.create({
    container:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#000",
        backgroundColor: "transparent",
        height: "100%",
        width: "100%",
    },
    text_container:{
        alignItems: "center",
        justifyContent:"center",
        marginTop: 30,
    },
    upper_text:{
        fontSize: 30,
        fontWeight: "500",
        alignSelf: "center",
    },
    middle_text_container: {
        marginTop: 5,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
    },
    middle_text: {
      fontSize: 15,
      textAlign: "center"
    },
    lower_text_container:{
        marginTop: 100,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
    },
    nothing_text: {
        fontSize: 13,
        alignItems: "center"
    },
    text_underline:{
        fontSize: 13,
        marginLeft: 5,
        textDecorationLine: "underline",
        color: "#88A2FF",
        fontWeight: "600",
    },
    button: {
        backgroundColor: "#88A2FF",
        marginTop: 40,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: 45,
        borderRadius: 10

    }
})
