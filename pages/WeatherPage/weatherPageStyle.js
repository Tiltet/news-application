import { StyleSheet } from "react-native";

export const weatherPageStyle = StyleSheet.create({
    day_events: {
        marginTop: 5,
        paddingVertical: 15,
        paddingHorizontal: 20,
        width: '100%',
        backgroundColor: "#F5F5F5",
        borderRadius: 20,
    },
    day_event_title: {
        fontSize: 24,
        fontWeight: "500",
    },
    day_event_scroll: {
        paddingTop: 10,
        height: 85,
    },
    day_event_holiday: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 12,
    },
    day_event_holiday_text: {
        width: "90%",
        paddingLeft: 15,
        fontSize: 14,
        fontWeight: "500",
    }
})
