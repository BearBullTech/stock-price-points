import React from 'react';
import PropTypes from 'prop-types';
import Ball from './Ball/Ball.jsx';
import Line from './Line/Line.jsx';

const BallLine = ({ yearlyData, updateAverageOnLine }) => {
  const { yearAverage, yearLowest, yearHighest } = yearlyData;

  const percentage = (yearHighest - yearLowest) / yearAverage;
  const averageOnTheLine = 676 * percentage;

  console.log(updateAverageOnLine);

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
  yearlyData: PropTypes.objectOf(PropTypes.number).isRequired,
  updateAverageOnLine: PropTypes.func.isRequired,
};

export default BallLine;
