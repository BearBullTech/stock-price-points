import React from 'react';
import PropTypes from 'prop-types';

const Ball = ({ averageOnTheLine }) => {
  console.log('avg on the line', averageOnTheLine);

  return (
    <circle
      cx={`${averageOnTheLine}`}
      cy="110"
      r="7"
      fill="blue"
    />
  );
};

// propTypes
Ball.propTypes = {
  averageOnTheLine: PropTypes.number.isRequired,
};

export default Ball;
