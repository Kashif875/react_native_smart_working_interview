import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherDataByCity } from '../redux/reducers/weatherSlice';

export const useWeather = () => {
    const dispatch = useDispatch();
    const weatherData = useSelector((state) => state.weather.weatherData);
    const status = useSelector((state) => state.weather.status);
    const error = useSelector((state) => state.weather.error);

    const fetchWeatherData = (city) => {
        dispatch(fetchWeatherDataByCity(city));
    };

    return { weatherData, status, error, fetchWeatherData };
};
