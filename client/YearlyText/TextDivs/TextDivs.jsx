import React from 'react';
import PropTypes from 'prop-types';

// vvvv STYLES vvvv //


// ^^^^ STYLES ^^^^ //


export const LowestPrice = ({ yearly }) => {
  const { yearLowest } = yearly;
  return (
    <div className="low-text">
      <div>
        52 Week Low
      </div>
      <div>
        {`$${yearLowest}`}
      </div>
    </div>
  );
};

export const AveragePrice = ({ yearly, averageOnTheLine }) => {
  const { yearAverage } = yearly;

  const valToTransform = averageOnTheLine - 96.56 - 55;
  console.log(valToTransform);

  const innerAverage = {
    width: '110px',
    textAlign: 'center',
    fontWeight: 'bold',
    alignContent: 'center',
    transform: `translateX(${valToTransform}px)`,
  };

  return (
    <div className="average-text">
      <div className="inner-average" style={innerAverage}>
        <div>
          Average Price
          <br />
          Paid
        </div>
        <div>
          {`$${yearAverage}`}
        </div>
      </div>
    </div>
  );
};

export const HighestPrice = ({ yearly }) => {
  const { yearHighest } = yearly;
  return (
    <div className="high-text">
      <div>
        52 Week High
      </div>
      <div>
        {`$${yearHighest}`}
      </div>
    </div>
  );
};

// propTypes
LowestPrice.propTypes = {
  yearly: PropTypes.objectOf(PropTypes.number).isRequired,
};
AveragePrice.propTypes = {
  averageOnTheLine: PropTypes.number.isRequired,
  yearly: PropTypes.objectOf(PropTypes.number).isRequired,
};
HighestPrice.propTypes = {
  yearly: PropTypes.objectOf(PropTypes.number).isRequired,
};
