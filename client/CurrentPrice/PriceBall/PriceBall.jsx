import React from 'react';
import PropTypes from 'prop-types';

const PriceBall = ({ priceOnTheLine, marketIsOpen, upDownColor }) => {
  console.log('PriceBall.jsx', marketIsOpen);
  return (
    <circle
      cx={`${priceOnTheLine}`}
      cy="116"
      r="7"
      fill={`${upDownColor}`}
    />
  );
};

// propTypes
PriceBall.propTypes = {
  upDownColor: PropTypes.string.isRequired,
  marketIsOpen: PropTypes.bool.isRequired,
  priceOnTheLine: PropTypes.number.isRequired,
};

export default PriceBall;
