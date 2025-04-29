import { render } from '@testing-library/react-native';
import React from 'react';
import WeatherCard from '../../../src/components/WeatherCard'; // Adjust the path if necessary

jest.mock('../../../src/utils', () => ({
    kelvinToCelsius: jest.fn((temp) => `${Math.round(temp - 273.15)}°C`),
    getWeatherIcon: jest.fn((weather) => weather === 'Clear' ? '☀️' : '🌧️'),
}));

describe('WeatherCard Component', () => {
    const mockData = {
        name: 'Chennai',
        main: { temp: 300 },
        weather: [{ main: 'Clear' }]
    };

    it('renders weather data correctly', () => {
        const { getByText } = render(<WeatherCard data={mockData} />);

        expect(getByText('City Name:')).toBeTruthy();
        expect(getByText('Chennai')).toBeTruthy();
        expect(getByText('Temperature:')).toBeTruthy();
        expect(getByText('27°C')).toBeTruthy();
        expect(getByText('Weather:')).toBeTruthy();
        expect(getByText('Clear ☀️')).toBeTruthy();
    });
});
