import React from 'react';
import PropTypes from 'prop-types';
import Ball from './Ball/Ball.jsx';
import Line from './Line/Line.jsx';

const BallLine = ({ yearlyData }) => (
  <g>
    <Line />
    <Ball yearlyData={yearlyData} />
  </g>
);

// propTypes
BallLine.propTypes = {
  yearlyData: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default BallLine;
