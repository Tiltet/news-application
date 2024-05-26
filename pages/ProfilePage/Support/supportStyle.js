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
        borderBottomWidth:1,
        width:"auto",
        borderColor:"#ACADAC"
    },
    lowercontainer: {

    },
    textcontainer:{
        marginTop:10,
        marginBottom:10,
    },
    middlecontainer: {
        width:"80%",
        marginTop : 15,
        backgroundColor: "white",
        marginBottom: 15,
        borderColor:"#ACADAC",
        borderWidth: 2,
        paddingHorizontal:15,
    },
    button:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent: "space-around",
        maxWidth:150,
        height:35,
        borderRadius: 5,
        marginTop:10,
        marginBottom: 15,


    },
    droplist:{
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
    headtext:{
        fontSize:20,
        fontWeight: "500",
        marginTop:10,
    },
    smalltext:{
        fontSize:15,
    },
    forgetpass:{
        fontSize:15,
        marginBottom:15,
        textDecorationLine: "underline",
    },
    input:{
        width:"90%",
        marginTop:15,
        borderColor:"#EFEFEF",
        borderWidth: 1,
        borderRadius: 5,
    },


})
