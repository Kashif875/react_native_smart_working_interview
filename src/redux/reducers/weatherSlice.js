import { createSlice } from '@reduxjs/toolkit';
import Config from 'react-native-config';
import request from '../../services';
import Endpoints from '../../services/endpoints';

const initialState = {
    weatherData: null,
    error: null,
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        saveErrorText: (state, action) => {
            state.error = action.payload;
        },
        saveWeatherData: (state, action) => {
            state.weatherData = action.payload;
        },
        clearAllData: (state, action) => {
            state.weatherData = null;
            state.error = null;
        },
    },

});

export const fetchWeatherDataByCity = (city) => (dispatch) => {
    request({
        url: `${Config.WEATHER_API_URL}?q=${city}&appid=${Config.WEATHER_API_KEY}`,
        method: Endpoints.APIMETHODS.GET
    }).then(res => {
        dispatch(saveErrorText(''))
        dispatch(saveWeatherData(res))
    }).catch(err => {
        dispatch(saveErrorText(err))
        dispatch(saveWeatherData(null))
    })
}

export const {
    saveErrorText,
    saveWeatherData,
    clearAllData
} = weatherSlice.actions;

export default weatherSlice.reducer;
