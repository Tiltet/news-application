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
        alignSelf:"center",
    },
    middle_text_container:{
        alignItems: "center",
        justifyContent:"center",
        width:"80%",
        marginBottom: 20,
    },
    lower_text_container:{
        marginTop:150,
        display:"flex",
        alignItems: "center",
        alignSelf:"flex-end",
        flexDirection:"row",
        alignContent:"stretch",
    },
    nothingtext_container:{
        alignContent:"flex-start",
        height:"100%",
    },
    text_underline:{
        textDecorationLine:"underline",
        color:"#88A2FF",
        fontWeight:"600"
    },
    button:{
        backgroundColor:"#88A2FF",
        marginTop:40,
        width:"90%",
        justifyContent:"center",
        alignItems:"center",
        height:45,
        borderRadius:10

    }
})
