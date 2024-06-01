import { StyleSheet } from "react-native";

export const profileStyle = StyleSheet.create({
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
    },
    activated:{
        borderColor:"#88A2FF",
        textColor:"#88A2FF",
    },
    activatedText:{
        color: "#88A2FF",
    }
})
