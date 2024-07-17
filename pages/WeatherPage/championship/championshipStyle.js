import { StyleSheet } from "react-native";

export const championshipStyle = StyleSheet.create({
    container: {
        borderRadius: 25,
        paddingHorizontal: 10,
        marginTop: 20,
        backgroundColor: "#F5F5F5",
        paddingVertical: 15,
    },
    // ЗАГОЛОВОК
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    header_title: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    header_title_text: {
        fontWeight: "600",
        maxWidth: "70%",
        fontSize: 18,
    },
    header_icons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    // ТАБЛИЦА
    list: {
        display: "flex",
        flexDirection: "column",
    },
    // ПОЛЯ ТАБЛИЦЫ
    points: {
        paddingTop: 20,
        paddingBottom: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    point_numbers: {
        justifyContent: "flex-start",
        width: "10%",
    },
    point_teams: {
        justifyContent: "flex-start",
        width: "50%",
    },
    point_games: {
        justifyContent: "flex-start",
        width: "20%"
    },
    point_points: {
        justifyContent: "flex-start",
        width: "20%"
    },
    point_text: {
        textAlign: "left",
        color: "#ACADAC",
    },
    // КОМАНДЫ
    teams: {
        paddingVertical: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",

    },
    team: {
        width: "50%",
        display: "flex",
        flexDirection: "row",
    },
    teams_text: {
        textAlign: "left",
    }
})
