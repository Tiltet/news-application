import { StyleSheet } from 'react-native';

export const searchWidgetStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    window: {
        display: "flex",
        alignItems: "center",
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255,255,255, 1)',
        borderBottomWidth: 1,
    },
    search: {
        marginTop: 100,
        display: "flex",
        flexDirection: "row",
        borderBottomWidth: 1,
    },
    input: {
        height: 40,
        width: 300,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingHorizontal: 12,
        fontSize: 16,
    },
    input_image: {
        width: 30,
        height: 30,
    }
})
