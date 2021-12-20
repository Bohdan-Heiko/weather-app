import React from 'react';

import locationIcon from './assets/location-pin.png';
import s from './style.module.css';

const CurrentDay = ({ location, temperature, weatherIcon, weatherDescription}) => (
  <div className={s.container}>
    <div className={s.img}></div>
    <div className={s.gradient}></div>
    <div className={`${s.cardInner} d-flex flex-column justify-content-between pt-3 pb-2 pl-2`}>
      <div>
        <p className="d-flex align-items-baseline font-weight-lighter mb-1">
          <img width="10" height="15" src={locationIcon} className="mr-1" alt="location pin icon" />
          <span>{location}</span>
        </p>
      </div>
      <div>
        <img width="56" src={weatherIcon} alt="" />
        <h2 className="font-weight-bold mb-1">
          <span>{temperature}</span>°F
        </h2>
        <h5 className="font-weight-lighter">{weatherDescription}</h5>
      </div>
    </div>
  </div>
);

export default CurrentDay;