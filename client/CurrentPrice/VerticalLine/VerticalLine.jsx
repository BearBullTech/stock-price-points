import React from 'react';
import PropTypes from 'prop-types';

const VerticalLine = ({ priceOnTheLine }) => {
  return (
    <line
      y1="0"
      y2="110"
      x1={`${priceOnTheLine}`}
      x2={`${priceOnTheLine}`}
      stroke="#23CE99"
    />
  );
};

// propTypes
VerticalLine.propTypes = {
  priceOnTheLine: PropTypes.number.isRequired,
};

export default VerticalLine;
