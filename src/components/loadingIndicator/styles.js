import { StyleSheet } from "react-native";
import baseStyles from "../../globalStyles/baseStyles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    loadingText: {
        ...baseStyles.txt20pxBold
    }
})

export default styles;