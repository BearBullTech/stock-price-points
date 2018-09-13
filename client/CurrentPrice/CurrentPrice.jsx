import React from 'react';
import PropTypes from 'prop-types';
import PriceBall from './PriceBall/PriceBall.jsx';
import VerticalLine from './VerticalLine/VerticalLine.jsx';

const BallLine = ({ yearlyData, currentPrice, updateCurrentOnLine }) => {
  const { yearLowest, yearHighest } = yearlyData;

  const newRange = yearHighest - yearLowest;
  const newNum = currentPrice - yearLowest;
  const percentage = newNum / newRange;
  const priceOnTheLine = 676 * percentage;

  console.log(updateCurrentOnLine);

  return (
    <g>
      <VerticalLine
        priceOnTheLine={priceOnTheLine}
      />
      <PriceBall
        priceOnTheLine={priceOnTheLine}
      />
    </g>
  );
};

// propTypes
BallLine.propTypes = {
  yearlyData: PropTypes.objectOf(PropTypes.number).isRequired,
  currentPrice: PropTypes.number.isRequired,
  updateCurrentOnLine: PropTypes.func.isRequired,
};

export default BallLine;
