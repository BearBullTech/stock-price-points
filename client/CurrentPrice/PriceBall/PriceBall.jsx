import React from 'react';
import PropTypes from 'prop-types';

const PriceBall = ({ priceOnTheLine }) => {
  const color = '#23CE99';

  return (
    <circle
      cx={`${priceOnTheLine}`}
      cy="110"
      r="7"
      fill={color}
    />
  );
};

// propTypes
PriceBall.propTypes = {
  priceOnTheLine: PropTypes.number.isRequired,
};

export default PriceBall;
