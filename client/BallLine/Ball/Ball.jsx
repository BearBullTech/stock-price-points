import React from 'react';
import PropTypes from 'prop-types';

const Ball = ({ yearlyData }) => {
  // prop that details the 'cx' based on average yearly price.
  const { yearAverage, yearLowest, yearHighest } = yearlyData;
  const percentage = (yearHighest - yearLowest) / yearAverage;
  const averageOnLine = 676 * percentage;
  return (
    <circle
      cx={`${averageOnLine}`}
      cy="110"
      r="7"
      fill="blue"
    />
  );
};

// propTypes
Ball.propTypes = {
  yearlyData: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Ball;
