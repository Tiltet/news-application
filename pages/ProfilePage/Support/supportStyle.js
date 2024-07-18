import { StyleSheet } from "react-native";

export const supportStyle = StyleSheet.create({
    container: {
        alignSelf:"center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#EFEFEF",
        width:"90%",
        marginTop: 30,
    },
    uppercontainer:{
        width: "auto",
    },
    lowercontainer: {

    },
    textcontainer:{
        marginVertical: 10,
    },
    middlecontainer: {
        width:"80%",
        backgroundColor: "white",
        marginBottom: 15,
        borderColor:"#ACADAC",
        borderWidth: 2,
        paddingHorizontal:15,
    },
    button: {
        flexDirection:"row",
        alignItems:"center",
        justifyContent: "space-around",
        maxWidth:150,
        height:35,
        borderRadius: 5,
        marginTop:10,
        marginBottom: 15,
    },
    droplist: {
        alignSelf:"center",
        borderWidth: 1,
        backgroundColor: "#EFEFEF",
        width:"96%",
        borderRadius: 6,
        height:35,
        marginTop:5,
        marginBottom:10,
        borderColor:"#ACADAC",
    },
    dropdownContainer: {
        display:"flex",
        marginTop:10,
        padding: 10,
        backgroundColor: 'white',
        width: '48%',
        borderWidth: 1,
    },
    headtext: {
        fontSize: 20,
        fontWeight: "500",
        marginTop: 10,
    },
    smalltext: {
        fontSize: 15,
    },
    forgetpass: {
        fontSize: 16,
        marginBottom: 15,
        textDecorationLine: "underline",
    },
    input: {
        width: "100%",
        marginTop: 15,
        borderColor: "#ACADAC",
        borderWidth: 1,
        borderRadius: 5,
        height: 35,
        paddingHorizontal: 15,
        justifyContent: "center",
        backgroundColor: "#EFEFEF"
    },
    inputlarge: {
        paddingHorizontal: 15,
        width: "100%",
        marginTop: 15,
        borderColor: "#ACADAC",
        borderWidth: 1,
        borderRadius: 5,
        height: 100,
        backgroundColor: "#EFEFEF"
    },
    sendbutton: {
        marginTop: 15,
        backgroundColor: "#88A2FF",
        alignItems: "center",
        justifyContent: "center",
        textColor: "white",
        borderRadius: 8,
        height: 35,
        marginBottom: 15,
        color: "white"
    },
    sendbutton_text: {
        color: "white",
        fontWeight: "500",
    },
    hypertext:{
        color: "#374883",
        textDecorationLine: "underline",
    },
    images: {
        marginTop: 15,
        flexDirection: "row",
        marginLeft: 5,
        marginBottom: 15,
    },
    image: {
        marginHorizontal: 20,
    },
    checkbox_container: {
        width: "88%",
        marginTop: 15,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
    },
    checkbox: {
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 4,
        marginRight: 5,
        marginTop: 4
    }
})
