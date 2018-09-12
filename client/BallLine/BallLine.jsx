import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
import Ball from '../Ball/Ball.jsx';
import Line from '../Line/Line.jsx';

const BallLine = () => { // possible width prop
  return (
    <svg
      viewBox="0 0 676 30"
      width="676"
      height="30"
    >
      <g>
        <Ball />
        <Line />
      </g>
    </svg>
  );
};

// propTypes
BallLine.propTypes = {

};

export default BallLine;

ReactDOM.render(<BallLine />, document.getElementById('ballLine'));
