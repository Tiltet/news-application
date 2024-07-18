import { StyleSheet } from "react-native";

export const mainBlockStyle = StyleSheet.create({
    mainBlock_container: {
        marginTop: 10,
        paddingHorizontal: 5,
    },
    mainBlock_mainNews: {
        width: '100%',
    },
    mainBlock_img: {
        borderRadius: 5,
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    main_block_title: {
        marginTop: 10,
        fontSize: 24,
        fontWeight: '700',
        textTransform: "capitalize",
    },
    main_block_wrapper: {
        width: '100%',
    },
    main_block_border: {
        borderTopWidth: 1,
        borderTopColor: '#000'
    },
    main_block_border_last: {
        marginBottom: 15,
        borderTopWidth: 1,
        borderTopColor: '#000',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
    },
    main_block_border_first: {
        marginTop: 15,
        borderTopWidth: 1,
        borderTopColor: '#000',
    },
    main_block_text: {
        paddingVertical: 10,
    }
})
