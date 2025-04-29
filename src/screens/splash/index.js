import LottieView from 'lottie-react-native';
import React, { useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import Assets from "../../assets";
import Constants from '../../constants';
import NavigationService from '../../navigation/NavigationService';
import styles from "./styles";

const Splash = () => {

    /**
     * Handle navigation on init wait for 2 seconds and 
     * navigate to Home page after clearing the previous stack.
    */
    useEffect(() => {
        handleNavigation()
    }, [])

    const handleNavigation = () => {
        setTimeout(() => {
            NavigationService.navigateAndClearHistory('Home')
        }, 2000);
    }

    return (
        <SafeAreaView style={styles.container}>
            <LottieView
                source={Assets.Lottie.splash}
                autoPlay
                loop={true}
                testID='splash-lottie'
                style={styles.splashLottie} />

            <Text style={styles.title}>{Constants.splash.title}</Text>
        </SafeAreaView>
    )
}

export default Splash;