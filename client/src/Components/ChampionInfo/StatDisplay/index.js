import React from 'react';
import PropTypes from 'prop-types';

const StatDisplay = ({ statType, value }) => {
  let scoreColor;

  if (value < 4) {
    scoreColor = 'green';
  } else if (value < 8) {
    scoreColor = 'orange';
  } else {
    scoreColor = 'red';
  }

  return (
    <div>
      <h3 style={{ fontSize: '1.5rem' }}> {statType}:
        <span style={{ color: scoreColor }}>{value}</span>
      </h3>
    </div>
  );
};

StatDisplay.propTypes = {

};

export default StatDisplay;
