import React from "react";
import { ActivityIndicator, View } from "react-native";
import Colors from "../../themes/colors";
import styles from "./styles";

export const LoadingIndicator = () => (
    <View style={styles.container}>
        <ActivityIndicator
            hidesWhenStopped={true}
            animating={true}
            color={Colors.PRIMARY}
            testID="loading-activity-indicator"
            size="large"
        />
    </View>
);
