import { StyleSheet } from "react-native";

export const  instructionWidgetStyle = StyleSheet.create({
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
    text_container: {
        marginTop: 50
    },
    upper_text: {
        textAlign: "center",
        fontSize: 21,
        fontWeight: "600",
    },
    info_text: {
        textAlign: "center",
        paddingTop: 5,
        fontSize: 12,
    },
    lower_text_container:{
        marginTop: 50,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        overflow: "hidden"
    },
    text_underline:{
        fontSize: 12,
        textDecorationLine:"underline",
        color:"#88A2FF"
    }
})
