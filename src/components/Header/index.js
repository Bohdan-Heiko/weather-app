import React from "react";
import s from './style.module.css'


const Header = () => {

  return (
    <h1 className={s.heading}>
      <span className={s.light}>
      Weather Forecast
      </span>
    </h1>
  )
}

export default Header 