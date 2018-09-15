import React from 'react';
import PropTypes from 'prop-types';

// vvvv STYLES vvvv //

// ^^^^ STYLES ^^^^ //

const CurrentPriceLabel = ({ priceOnTheLine, percentChange }) => {
  const currPriceToTransform = priceOnTheLine - 42.5;
  const currentPriceContainer = {
    width: '85px',
    fontSize: '15px',
    transform: `translateX(${currPriceToTransform}px)`, // make this dynamic
  };

  const highLowLabel = percentChange > 0 ? 'Higher' : 'Lower';
  return (
    <header className="label-header">
      <div className="currentPriceContainer" style={currentPriceContainer}>
        <p>
          {`${Math.floor(percentChange)}% ${highLowLabel} `}
          <span className="rightnow">
            Right Now
          </span>
        </p>
      </div>
    </header>
  );
};

// propTypes
CurrentPriceLabel.propTypes = {
  priceOnTheLine: PropTypes.number.isRequired,
  percentChange: PropTypes.number.isRequired,
};

export default CurrentPriceLabel;
