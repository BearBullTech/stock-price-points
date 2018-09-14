import React from 'react';
import PropTypes from 'prop-types';


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

export const AveragePrice = ({ yearly }) => {
  const { yearAverage } = yearly;
  return (
    <div className="average-text">
      <div>
        Average Paid Price
      </div>
      <div>
        {`$${yearAverage}`}
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
  yearly: PropTypes.objectOf(PropTypes.number).isRequired,
};
HighestPrice.propTypes = {
  yearly: PropTypes.objectOf(PropTypes.number).isRequired,
};
