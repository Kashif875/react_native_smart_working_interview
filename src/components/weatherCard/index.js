import React from 'react';
import { Text, View } from 'react-native';
import Utils from '../../utils';
import styles from './styles';

const WeatherCard = ({ data }) => {

    const {
        weather,
        name,
        main
    } = data;

    const currentWeather = weather && Array.isArray(weather) && weather.length > 0 ? weather[0]?.main : '';
    return (
        <View style={styles.container}>
            <View style={styles.weatherRow}>
                <Text style={styles.label}>{`City Name:`}</Text>
                <Text style={styles.value}>{`${name}`}</Text>
            </View>
            <View style={styles.weatherRow}>
                <Text style={styles.label}>{`Temperature:`}</Text>
                <Text style={styles.value}>{Utils.kelvinToCelsius(main?.temp || 0)}</Text>
            </View>
            <View style={styles.weatherRow}>
                <Text style={styles.label}>{`Weather:`}</Text>
                <Text style={styles.value}>{`${currentWeather} ${Utils.getWeatherIcon(currentWeather)}`}</Text>
            </View>
        </View>
    );
};

export default WeatherCard;
