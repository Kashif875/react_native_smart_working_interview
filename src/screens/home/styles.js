import { StyleSheet } from "react-native";
import baseStyles from "../../globalStyles/baseStyles";
import Colors from "../../themes/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    resultsText: {
        ...baseStyles.txt20pxBold,
        marginTop: 20,
        marginStart: 20,
        textDecorationLine: 'underline',
        color: Colors.PRIMARY
    }
})

export default styles;