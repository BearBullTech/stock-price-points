import React from 'react';
import PropTypes from 'prop-types';
import PriceBall from './PriceBall/PriceBall.jsx';
import VerticalLine from './VerticalLine/VerticalLine.jsx';

const BallLine = ({ priceOnTheLine }) => {
  console.log('price on the line: ', priceOnTheLine);

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
  priceOnTheLine: PropTypes.number.isRequired,
};

export default BallLine;
