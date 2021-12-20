import React from 'react';
import PropTypes from 'prop-types'

import CurrentDay from '../CurrentDay'
import CurrentDayDescription from '../CurrentDayDescription'
import { Container, Row, Col } from 'react-bootstrap';

import s from './style.module.css';

const Forecast = ({ forecast }) => {
  console.log(forecast);
  return (
    <Container className={s.box}>
      <Row>
        <Col xs={12} md={4}>
          <div className={s.card}></div>
          <CurrentDay {...forecast.currentDay} />
        </Col>
        <Col xs={12} md={8} className="d-flex flex-column justify-content-between">
          <CurrentDayDescription {...forecast}/>
        </Col>
      </Row>
    </Container>
  )
};


Forecast.propTypes = {
  forecast: PropTypes.shape({
    currentDay: PropTypes.object,
    currentDayDetails: PropTypes.array
  })
}

export default Forecast;