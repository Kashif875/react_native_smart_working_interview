import { act, renderHook } from '@testing-library/react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useWeather } from '../../../src/hooks/useWeather';
import { fetchWeatherDataByCity } from '../../../src/redux/reducers/weatherSlice';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

jest.mock('../../../src/redux/reducers/weatherSlice', () => ({
    fetchWeatherDataByCity: jest.fn(),
}));

describe('useWeather hook', () => {
    const mockDispatch = jest.fn();

    beforeEach(() => {
        useDispatch.mockReturnValue(mockDispatch);
        useSelector.mockImplementation((selectorFn) =>
            selectorFn({
                weather: {
                    weatherData: { temp: 25, city: 'Chennai' },
                    status: 'succeeded',
                    error: null,
                },
            })
        );
        mockDispatch.mockClear();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return weatherData, status, and error correctly', () => {
        const { result } = renderHook(() => useWeather());

        expect(result.current.weatherData).toEqual({ temp: 25, city: 'Chennai' });
        expect(result.current.status).toBe('succeeded');
        expect(result.current.error).toBeNull();
    });

    it('should dispatch fetchWeatherDataByCity when fetchWeatherData is called', () => {
        const city = 'Bangalore';
        fetchWeatherDataByCity.mockReturnValue({ type: 'FETCH_WEATHER' });

        const { result } = renderHook(() => useWeather());

        act(() => {
            result.current.fetchWeatherData(city);
        });

        expect(fetchWeatherDataByCity).toHaveBeenCalledWith(city);
        expect(mockDispatch).toHaveBeenCalledWith({ type: 'FETCH_WEATHER' });
    });

    it('should handle error state', () => {
        useSelector.mockImplementation((selectorFn) =>
            selectorFn({
                weather: {
                    weatherData: null,
                    status: 'failed',
                    error: 'City not found',
                },
            })
        );

        const { result } = renderHook(() => useWeather());

        expect(result.current.weatherData).toBeNull();
        expect(result.current.status).toBe('failed');
        expect(result.current.error).toBe('City not found');
    });
});
