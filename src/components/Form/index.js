import React, { useState } from 'react';
import PropTypes from 'prop-types'
import s from './style.module.css';

const Form = ({ onSearchSubmit }) => {
  const [location, setLocation] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (!location || location === '') return

    onSearchSubmit(location)
    setLocation('')
  }
  console.log(123);

  return (
    <form onSubmit={onSubmit}>
      <input
        aria-label="location"
        type="text"
        className={`${s.input} form-control`}
        placeholder="Search for location"
        value={location}
        onChange={(e) => setLocation(e.target.value) }
        required
      />

      <button type="submit" className={s.button} onClick={onSubmit}>
        SEARCH
      </button>
    </form>
  );
};

Form.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
}

export default Form;