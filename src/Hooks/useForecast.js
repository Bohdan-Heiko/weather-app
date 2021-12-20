import { useState } from "react"
import axios from "axios"
import getCurrentDayDetailedForecast from '../helpers/getCurrentDayDetailedForecast'
import getCurrentDayForecast from '../helpers/getCurrentDayForecast'
// import getUpcomingDaysForecast from '../helpers/getUpcomingDaysForecast'

const apiKey = '1d3b8e97896713130af1817f15ad99d9'

const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?q='

const useForecast = () => {
  const [isError, setError] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [isForecast, setForecast] = useState(null)


  const gatherForecastData = (data) => {
    const currentDay = getCurrentDayForecast(data, data.name)
    const currentDayDetails = getCurrentDayDetailedForecast(data)
    // const upcomingDays = getUpcomingDaysForecast(data)

    setForecast({ currentDay, currentDayDetails })
    setLoading(false)
  }

  const submitRequest = async location => {
    const { data } = await axios(BASE_URL + location + '&appid=' + apiKey)
    console.log(data);

    if (!data) {
      setError("There is no such location")
      console.log(123456);
      return;
    }
    setLoading(true)
    setError(false)
    gatherForecastData(data)
    return data
  }
  

  return {
    isError, isForecast, isLoading, submitRequest
  }
}

export default useForecast
