import { useState } from "react"
import axios from "axios"

const apiKey = '1d3b8e97896713130af1817f15ad99d9'

const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?q='

const useForecast = () => {
  const [isError, setError] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [isForecast, setForecast] = useState(null)

  // const getCurrentGeoPosition = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       fetchWeatherData(position.coords.latitude, position.coords.longitude);
  //     });
  //   } else {
  //     alert('Your browser does not support Geolocation API!');
  //   }
  // }

  // const fetchWeatherData = (lat, long) => {
  //   fetch('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=' + apiKey)

  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch(function (err) {
  //       return err;
  //     })
  // }

  // getCurrentGeoPosition()
  const submitRequest = async location => {

    
    
    const {data} = await axios(BASE_URL + location + '&appid=' + apiKey)
    console.log({data});
  }
  

  return {
    isError, isForecast, isLoading, submitRequest
  }
}

export default useForecast
