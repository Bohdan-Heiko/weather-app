import React from 'react';
// import PropTypes from 'prop-types';

import CurrentDayDescriptionItem from '../CurrentDayDescriptionItem';

const CurrentDayDescription = ({ currentDayDetails}) => {
  
  return (
    <div className="mt-4 mt-md-2">
      <div className="d-flex flex-column mb-2">
        {currentDayDetails.map(item => (
          <CurrentDayDescriptionItem {...item}  key={item.name}/>
        ))}
      </div>
    </div>
  );
}
export default CurrentDayDescription