import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    switcherContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        alignSelf: "center",
        width: "100%",
        borderWidth:0
    },
    switcherButtons: {
        height: 30,
        width:"50%",
        borderBottomWidth: 2,
    },
    switcherButtons_text: {
        fontSize: 16,
        textAlign: "center"
    },
    activated: {
        borderColor: "#88A2FF",
        textColor: "#88A2FF",
    },
    activatedText: {
        color: "#88A2FF",
    }
})
