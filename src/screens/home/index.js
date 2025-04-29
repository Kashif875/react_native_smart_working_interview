import React, { useEffect, useState } from "react";
import { Keyboard, SafeAreaView, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import Button from "../../components/button";
import Header from "../../components/header";
import InputText from "../../components/inputText";
import WeatherCard from "../../components/weatherCard";
import Constants from "../../constants";
import { useWeather } from "../../hooks/useWeather";
import { clearAllData, saveErrorText } from "../../redux/reducers/weatherSlice";
import styles from "./styles";

const Home = () => {

    const [city, setCity] = useState('');

    const dispatch = useDispatch()

    /**
     * useWeather hook which has the data, error and function
     * to call the weather data.
     */
    const { weatherData, error, fetchWeatherData } = useWeather();

    /**
     * On Press Submit will validate the input and 
     * fetch the country details.
    */
    const onPressSubmit = () => {
        if (city.trim() !== '') {
            Keyboard.dismiss();
            fetchWeatherData(city);
        } else {
            dispatch(saveErrorText(Constants.home.emptyCityName));
        }
    }

    useEffect(() => {
        return () => {
            // Clear all the state when the component is unmounted.
            dispatch(clearAllData())
        }
    }, [])

    return (
        <SafeAreaView style={styles.container}>

            <Header
                title={Constants.home.title} />

            <InputText
                placeholder={Constants.home.placeholder}
                onChangeText={setCity}
                value={city}
                errorText={error} />


            <Button
                title={Constants.home.submit}
                onPress={onPressSubmit} />

            {weatherData &&
                <View>
                    <Text style={styles.resultsText}>{Constants.home.results}</Text>

                    <WeatherCard
                        data={weatherData} />
                </View>
            }



        </SafeAreaView>
    )
}

export default Home;