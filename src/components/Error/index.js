import React from 'react';
import PropTypes from 'prop-types';

import s from './style.module.css';

const Error = ({ message }) => (
  <div className={`${s.error} alert position-absolute`} role="alert">
    {message}
  </div>
);

Error.propTypes = {
  message: PropTypes.string,
};

Error.defaultProps = {
  message: 'An error occurred',
};

export default Error;