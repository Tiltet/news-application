import { StyleSheet } from 'react-native';

export const commentStyle = StyleSheet.create({
    comment_header_login: {
        fontWeight: "600",
        fontSize: 16,
    },
    comment_header_time: {
        fontWeight: "300",
        fontSize: 12,
    },
    comment_text: {
        marginTop: 5,
    },
    comment_bottom: {
        paddingTop: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    comment_bottom_like: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    comment_bottom_like_text: {
        paddingLeft: 3,
        fontSize: 16,
    },
    comment_bottom_button: {

    },
    comment_bottom_button_text: {
        fontSize: 16,
        fontWeight: "400"
    },
    comment_bottomComments: {
        marginTop: 5,
    },
    // ОТВЕТ НА КОММЕНТАРИЙ
    comment_answer: {
        width: "100%",
    },
    comment_answer_cross: {
        top: 2,
        right: 2,
        position: "absolute",
        zIndex: 1
    },
    comment_answer_input: {
        borderRadius: 5,
        padding: 12,
        paddingRight: 120,
        width: "100%",
        height: 100,
        backgroundColor: "#EFEFEF",
    }
})
