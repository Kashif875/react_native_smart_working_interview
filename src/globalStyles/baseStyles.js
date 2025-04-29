import { StyleSheet } from "react-native";


const FONT_FAMILY = 'Open-Sans'

const baseStyles = StyleSheet.create({
    txt14px: {
        fontFamily: FONT_FAMILY,
        fontSize: 14
    },
    txt16px: {
        fontFamily: FONT_FAMILY,
        fontSize: 16
    },
    txt18px: {
        fontFamily: FONT_FAMILY,
        fontSize: 18
    },
    txt20px: {
        fontFamily: FONT_FAMILY,
        fontSize: 20
    },
    txt22px: {
        fontFamily: FONT_FAMILY,
        fontSize: 22
    },
    txt24px: {
        fontFamily: FONT_FAMILY,
        fontSize: 24
    },
    txt14pxBold: {
        fontFamily: FONT_FAMILY,
        fontSize: 14,
        fontWeight: "bold"
    },
    txt16pxBold: {
        fontFamily: FONT_FAMILY,
        fontSize: 16,
        fontWeight: "bold"
    },
    txt18pxBold: {
        fontFamily: FONT_FAMILY,
        fontSize: 18,
        fontWeight: "bold"
    },
    txt20pxBold: {
        fontFamily: FONT_FAMILY,
        fontSize: 20,
        fontWeight: "bold"
    },
    txt22pxBold: {
        fontFamily: FONT_FAMILY,
        fontSize: 22,
        fontWeight: "bold"
    },
    txt24pxBold: {
        fontFamily: FONT_FAMILY,
        fontSize: 24,
        fontWeight: "bold"
    },
    bold: {
        fontWeight: "bold"
    },
    flexContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default baseStyles;