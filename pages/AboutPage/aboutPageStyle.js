import { StyleSheet } from 'react-native';

export const aboutPageStyle = StyleSheet.create({
    container: {

    },
    header: {
        marginVertical: 80,
        paddingHorizontal: 10,
        width: '100%',
    },
    header_title: {
        paddingBottom: 10,
        borderBottomWidth: 3,
        borderBottomColor: '#fff'
    },
    header_title_text: {
        textAlign: "left",
        color: "#fff",
        fontSize: 32,
        fontWeight: "800",
    },
    header_subtitle: {
        paddingTop: 10,
    },
    header_subtitle_text: {
        fontSize: 16,
        fontWeight: "300",
        color: "#fff",
    },
    main: {
        marginVertical: 12,
    },
    main_text_violet: {
        fontSize: 16,
        fontWeight: "700",
        color: "#374883",
    },
    main_text: {
        fontSize: 16,
        fontWeight: "400"
    },
    main_dedicated_block: {
        marginVertical: 15,
        borderLeftWidth: 3,
        borderLeftColor: "#374883",
    },
    main_dedicated_text: {
        fontSize: 16,
        fontWeight: "700",
        paddingVertical: 8,
        paddingHorizontal: 8,
    },
    main_dedicated_text_violet: {
        fontSize: 16,
        fontWeight: "700",
        color: "#374883",
    }
})
