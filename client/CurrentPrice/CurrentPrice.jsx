import React from 'react';
// import PropTypes from 'prop-types';
import PriceBall from './PriceBall/PriceBall.jsx';
import VerticalLine from './VerticalLine/VerticalLine.jsx';

const BallLine = () => { // possible width prop
  return (
    <g>
      <VerticalLine />
      <PriceBall />
    </g>
  );
};

// propTypes
BallLine.propTypes = {

};

export default BallLine;
