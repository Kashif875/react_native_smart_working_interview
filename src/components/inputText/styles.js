import { StyleSheet } from "react-native";
import baseStyles from "../../globalStyles/baseStyles";
import Colors from "../../themes/colors";

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20
    },

    title: {
        ...baseStyles.txt20pxBold
    },
    errorContainer: {
        marginTop: 10,
        width: '90%',
        ...baseStyles.flexContainer,
        alignSelf: "center",
        gap: 10,

    },
    errorInfo: {
        width: 20,
        height: 20
    },
    errorText: {
        flex: 1,
        ...baseStyles.txt14px,
        color: Colors.RED,
        textTransform: 'capitalize',
    }
})

export default styles;