import React from 'react';
import PropTypes from 'prop-types';

const Ball = ({ averageOnTheLine }) => {
  const fillColor = 'none'; // temp -- get rid of me

  return (
    <circle
      cx={`${averageOnTheLine}`}
      cy="110"
      r="7"
      fill={fillColor}
    />
  );
};

// propTypes
Ball.propTypes = {
  averageOnTheLine: PropTypes.number.isRequired,
};

export default Ball;
