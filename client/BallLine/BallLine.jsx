import React from 'react';
import PropTypes from 'prop-types';
import Ball from './Ball/Ball.jsx';
import Line from './Line/Line.jsx';

const BallLine = ({ averageOnTheLine }) => {
  console.log('avg on the line', averageOnTheLine);
  // updateAverageOnLine(valueOf(averageOnTheLine));

  return (
    <g>
      <Line />
      <Ball
        averageOnTheLine={averageOnTheLine}
      />
    </g>
  );
};


// propTypes
BallLine.propTypes = {
  averageOnTheLine: PropTypes.number.isRequired,
};

export default BallLine;
