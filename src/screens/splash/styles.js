import { StyleSheet } from "react-native";
import baseStyles from "../../globalStyles/baseStyles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "white"
    },
    splashLottie: {
        width: 300,
        height: 300
    },
    title: {
        ...baseStyles.txt22pxBold,
        marginTop: 40,
    }
})

export default styles;