import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const Header = ({
    title
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header;