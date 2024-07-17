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
    }
})
