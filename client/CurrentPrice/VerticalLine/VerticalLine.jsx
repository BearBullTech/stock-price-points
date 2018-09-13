import React from 'react';
import PropTypes from 'prop-types';

const VerticalLine = ({ priceOnTheLine }) => {
  const color = '#23CE99';
  return (
    <line
      y1="0"
      y2="110"
      x1={`${priceOnTheLine}`}
      x2={`${priceOnTheLine}`}
      fill={color}
      stroke={color}
    />
  );
};

// propTypes
VerticalLine.propTypes = {
  priceOnTheLine: PropTypes.number.isRequired,
};

export default VerticalLine;
