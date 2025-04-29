const kelvinToCelsius = (kelvinTemp) => {
    if (typeof kelvinTemp !== 'number') {
        throw new Error('Temperature must be a number');
    }
    const celsius = kelvinTemp - 273.15;
    return `${celsius.toFixed(2)}°C`;
}

const getWeatherIcon = (weatherMain) => {
    if (typeof weatherMain !== 'string') {
        throw new Error('Weather description must be a string');
    }

    switch (weatherMain.toLowerCase()) {
        case 'clear':
            return '☀️';
        case 'clouds':
            return '☁️';
        case 'rain':
            return '🌧️';
        case 'thunderstorm':
            return '⛈️';
        case 'snow':
            return '❄️';
        case 'mist':
        case 'fog':
        case 'haze':
            return '🌫️';
        case 'drizzle':
            return '🌦️';
        case 'dust':
        case 'sand':
            return '🌪️';
        default:
            return '🌈';
    }
}

const Utils = {
    kelvinToCelsius,
    getWeatherIcon
}

export default Utils;