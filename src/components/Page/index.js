import React from "react";
import s from './style.module.css'

import Header from '../Header'
import Error from '../Error'
import Forecast from '../Forecast'
import Form from '../Form'
import Loader from '../Loader'

import useForecast from '../../Hooks/useForecast'


const Page = () => {
  const {isError, isForecast, isLoading, submitRequest} = useForecast()
  
  const onSubmit = (value) => {
    submitRequest(value)
  }

  return (
    <>
      <Header />
      {!isForecast && 
        <div className={`${s.box} position-relative`}>
          {!isLoading && <Form onSearchSubmit={onSubmit} />}
          {isError && <Error message={isError} />}
          {isLoading && <Loader />}
        </div>
      }
      {isForecast && <Forecast forecast={isForecast} />}
    </>
  )
}

export default Page