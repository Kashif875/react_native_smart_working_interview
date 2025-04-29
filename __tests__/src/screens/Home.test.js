import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import Constants from '../../../src/constants';
import { useWeather } from '../../../src/hooks/useWeather';
import { fetchWeatherDataByCity, saveErrorText, saveWeatherData } from '../../../src/redux/reducers/weatherSlice';
import Home from '../../../src/screens/home';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
}));

jest.mock('../../../src/redux/reducers/weatherSlice', () => ({
    fetchWeatherDataByCity: jest.fn(),
}));
jest.mock('../../../src/hooks/useWeather');
jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
}));

jest.mock('../../../src/components/header', () => 'Header');

jest.mock('../../../src/components/inputText', () => {
    const { TextInput } = require('react-native');
    return (props) => (
        <TextInput
            testID="input-text"
            value={props.value}
            onChangeText={props.onChangeText}
            placeholder={props.placeholder}
        />
    );
});
jest.mock('../../../src/components/button', () => {
    const { TouchableOpacity, Text } = require('react-native');
    return (props) => (
        <TouchableOpacity onPress={props.onPress}>
            <Text>{props.title}</Text>
        </TouchableOpacity>
    );
});

jest.mock('../../../src/components/weatherCard', () => {
    const { Text } = require('react-native');
    return (props) => (
        <Text>{`Weather: ${props.data.temp}°C in ${props.data.city}`}</Text>
    );
});

jest.mock('../../../src/redux/reducers/weatherSlice', () => ({
    fetchWeatherDataByCity: jest.fn(),
    saveErrorText: jest.fn(),
    saveWeatherData: jest.fn(),
}));


describe('Home Screen', () => {
    const mockDispatch = jest.fn();

    beforeEach(() => {
        useDispatch.mockReturnValue(mockDispatch);
        useWeather.mockReturnValue({
            weatherData: null,
            error: null,
            fetchWeatherData: jest.fn(),
        });
        mockDispatch.mockClear();
    });

    it('renders header, input, and button', () => {
        const { getByPlaceholderText, getByText, findAllByPlaceholderText } = render(<Home />);
        expect(getByPlaceholderText(Constants.home.placeholder)).toBeTruthy();
        expect(getByText(Constants.home.submit)).toBeTruthy();
    });

    it('dispatches error when input is empty', () => {
        const { getByText } = render(<Home />);
        fireEvent.press(getByText(Constants.home.submit));
        expect(mockDispatch).toHaveBeenCalledWith(saveErrorText(Constants.home.emptyCityName));
    });

    it('dispatches fetchWeatherData when valid city is entered', async () => {
        const mockDispatch = jest.fn();
        useDispatch.mockReturnValue(mockDispatch);

        const city = 'Chennai';

        fetchWeatherDataByCity.mockImplementation(() => {
            return (dispatch) => {
                dispatch(saveWeatherData({ temp: 30, city }));
            };
        });

        const { getByPlaceholderText, getByText } = render(<Home />);

        const input = getByPlaceholderText('Please enter the city name Ex: London');
        fireEvent.changeText(input, city);

        fireEvent.press(getByText('Submit'));

        expect(mockDispatch).toHaveBeenCalledWith(saveWeatherData({ temp: 30, city }));
    });

    it('renders weather data when available', () => {
        useWeather.mockReturnValue({
            weatherData: { temp: 28, city: 'Chennai' },
            error: null,
            fetchWeatherData: jest.fn(),
        });

        const { getByText } = render(<Home />);
        expect(getByText(Constants.home.results)).toBeTruthy();
        expect(getByText('Weather: 28°C in Chennai')).toBeTruthy();
    });
});
