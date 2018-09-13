import React from 'react';
import PropTypes from 'prop-types';
import PriceBall from './PriceBall/PriceBall.jsx';
import VerticalLine from './VerticalLine/VerticalLine.jsx';

const BallLine = ({ yearlyData, currentPrice }) => (
  <g>
    <VerticalLine
      yearlyData={yearlyData}
      currentPrice={currentPrice}
    />
    <PriceBall
      yearlyData={yearlyData}
      currentPrice={currentPrice}
    />
  </g>
);

// propTypes
BallLine.propTypes = {
  yearlyData: PropTypes.objectOf(PropTypes.number).isRequired,
  currentPrice: PropTypes.number.isRequired,
};

export default BallLine;
