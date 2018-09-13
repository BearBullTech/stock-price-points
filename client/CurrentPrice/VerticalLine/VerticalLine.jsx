import React from 'react';
import PropTypes from 'prop-types';

const VerticalLine = ({ yearlyData, currentPrice }) => { // possible width prop
  const { yearLowest, yearHighest } = yearlyData;

  const newRange = yearHighest - yearLowest;
  const newNum = currentPrice - yearLowest;
  const percentage = newNum / newRange;
  const priceOnLine = 676 * percentage;

  console.log('newNum ', newNum, 'On range of : 0-', newRange);
  console.log('percent: ', percentage);
  console.log('on line: ', priceOnLine);
  return (
    <line
      y1="0"
      y2="110"
      x1={`${priceOnLine}`}
      x2={`${priceOnLine}`}
      stroke="red"
    />
  );
};

// propTypes
VerticalLine.propTypes = {
  yearlyData: PropTypes.objectOf(PropTypes.number).isRequired,
  currentPrice: PropTypes.number.isRequired,
};

export default VerticalLine;
