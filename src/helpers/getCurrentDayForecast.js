
const getCurrentDayForecast = (data, title) => ({
  location: title,
  temperature: Math.round(data.main.temp),
  weatherIcon: 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@4x.png',
  weatherDescription: data.weather[0].description,
});

export default getCurrentDayForecast;