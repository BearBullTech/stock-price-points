import React from 'react';
import PropTypes from 'prop-types';

const PriceBall = ({ priceOnTheLine }) => {

  // updateCurrentOnLine(priceOnLine);

  console.log('price on the line: ', priceOnTheLine); // setState to priceOnLine as currentPrice
  return (
    <circle
      cx={`${priceOnTheLine}`}
      cy="110"
      r="7"
      fill="#23CE99"
    />
  );
};

// propTypes
PriceBall.propTypes = {
  priceOnTheLine: PropTypes.number.isRequired,
};

export default PriceBall;
