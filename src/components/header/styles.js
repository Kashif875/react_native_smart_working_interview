import { StyleSheet } from "react-native";
import baseStyles from "../../globalStyles/baseStyles";
import Colors from "../../themes/colors";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        shadowColor: Colors.BLACK,
        justifyContent: 'center',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 1,
        paddingLeft: 20,
        borderBottomWidth: 0.2
    },

    title: {
        ...baseStyles.txt20pxBold
    }
})

export default styles;