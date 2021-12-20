
const getUpcomingDaysForecast = data =>
  data.map(day => ({
    temperature: Math.round(day.main.temp),
  }));

export default getUpcomingDaysForecast;