import { StyleSheet } from "react-native";

export const supportStyle = StyleSheet.create({
    switcherContainer: {
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        alignSelf:"center",
        width:"100%",
        borderWidth:0
    },
    switcherButtons:{
        height: 30,
        width:"50%",
        borderBottomWidth:2,
        alignItems:"center"
    }
})
