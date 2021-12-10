import React from "react";
import s from './style.module.css'

import Header from '../Header'
import Error from '../Error'
import Forecast from '../Forecast'
import Form from '../Form'
import Loader from '../Loader'

import useForecast from '../../Hooks/useForecast'

// var apiKey = '1d3b8e97896713130af1817f15ad99d9';  

const Page = () => {
  const {isError, isForecast, isLoading, submitRequest} = useForecast()
  
  const onSubmit = (value) => {
    submitRequest(value)
  }

  return (
    <>
      <Header />
      <div className={s.box}>
        {!isLoading && <Form onSearchSubmit={onSubmit} />}
        {isError && <Error message='PZDC' />}
        {isLoading && <Loader />}
        {isForecast && <Forecast />}
      </div>
    </>
  )
}

export default Page