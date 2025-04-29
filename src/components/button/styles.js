import { StyleSheet } from "react-native";
import baseStyles from "../../globalStyles/baseStyles";
import Colors from "../../themes/colors";

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.PRIMARY,
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 15
    },

    title: {
        ...baseStyles.txt20px,
        fontWeight: '600',
        color: Colors.WHITE
    }
})

export default styles;