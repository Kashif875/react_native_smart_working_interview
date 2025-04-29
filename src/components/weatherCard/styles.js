import { StyleSheet } from "react-native";
import baseStyles from "../../globalStyles/baseStyles";
import Colors from "../../themes/colors";

const styles = StyleSheet.create({
    container: {
        width: '90%',
        justifyContent: 'center',
        padding: 10,
        borderWidth: 0.5,
        borderColor: Colors.PRIMARY,
        backgroundColor: Colors.WHITE,
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 20,
        shadowColor: Colors.BLACK,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 2,
        paddingTop: 10,
        gap: 15
    },
    weatherRow: {
        ...baseStyles.flexContainer,
    },
    label: {
        ...baseStyles.txt14pxBold,
        width: '30%'
    },
    value: {
        ...baseStyles.txt14px
    }
})

export default styles;