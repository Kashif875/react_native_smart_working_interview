import React from "react";
import { Image, Text, TextInput, View } from "react-native";
import Assets from "../../assets";
import styles from "./styles";

const InputText = ({
    placeholder,
    onChangeText,
    errorText,
    value
}) => {
    return (
        <View>
            <TextInput
                style={styles.container}
                maxLength={56} // set 56 only since the country has till 56 letters including space - (i.e: The United Kingdom of Great Britain and Northern Ireland)
                numberOfLines={1}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder} />

            {errorText && <View style={styles.errorContainer}>
                <Image
                    source={Assets.Icons.errorInfo}
                    resizeMode="contain"
                    style={styles.errorInfo} />
                <Text style={styles.errorText}>{errorText}</Text>
            </View>}
        </View>
    )
}

export default InputText;