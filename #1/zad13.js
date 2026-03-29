/**
 * Funkcja pobierająca dane pogody z API
 */
const fetchWeather = async (latitude = 50.29, longitude = 19.1) => {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
    );
    console.log(response);
    if (response.status === 200) {
      return response.json();
    }
  } catch (err) {
    console.log('Błąd przy próbie pobrania pogody.', err.message);
  }
};

const getWeather = async () => {
  const weather = await fetchWeather();
  console.log(weather);
  if (!weather.current_weather) {
    return;
  }
  if (!weather.current_weather_units) {
    return;
  }
  const temperature = weather.current_weather.temperature;
  const temperatureUnit = weather.current_weather_units.temperature;
  const windSpeed = weather.current_weather.windspeed;
  const windSpeedUnit = weather.current_weather_units.windspeed;

  console.log('Temperatura:', temperature, temperatureUnit);
  console.log('Prędkość wiatru:', windSpeed, windSpeedUnit);
};

getWeather();
