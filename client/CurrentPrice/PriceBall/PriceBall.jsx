import React from 'react';
import PropTypes from 'prop-types';

const PriceBall = ({ yearlyData, currentPrice }) => {
  // prop that details the 'cx' based on average yearly price.
  const { yearLowest, yearHighest } = yearlyData;

  const newRange = yearHighest - yearLowest;
  const newNum = currentPrice - yearLowest;
  const percentage = newNum / newRange;
  const priceOnLine = 676 * percentage;
  console.log('*newNum ', newNum, 'On range of : 0-', newRange);
  console.log('*percent: ', percentage);
  console.log('*on line: ', priceOnLine);
  return (
    <circle
      cx={`${priceOnLine}`}
      cy="110"
      r="7"
      fill="red"
    />
  );
};

// propTypes
PriceBall.propTypes = {
  yearlyData: PropTypes.objectOf(PropTypes.number).isRequired,
  currentPrice: PropTypes.number.isRequired,
};

export default PriceBall;
