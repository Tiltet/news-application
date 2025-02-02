import { StyleSheet } from "react-native";

export const navigationStyle = StyleSheet.create({
    nav_container: {
        paddingVertical: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    nav_logo: {
        width: 110,
        height: 35,
    },
    nav_icon_container: {
        paddingLeft: 78,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    nav_icon: {
        marginRight: 8,
        width: 30,
        height: 30,
    },
    nav_weather_text: {
        fontSize: 14,
    },
})
