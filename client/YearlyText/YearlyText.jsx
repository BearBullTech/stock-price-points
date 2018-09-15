import React from 'react';
import PropTypes from 'prop-types';
import { LowestPrice, AveragePrice, HighestPrice } from './TextDivs/TextDivs.jsx';

const YearlyText = ({ yearly, averageOnTheLine }) => {
  console.log('from yearly');
  return (
    <div className="prices-container">
      <LowestPrice
        yearly={yearly}
      />
      <AveragePrice
        averageOnTheLine={averageOnTheLine}
        yearly={yearly}
      />
      <HighestPrice
        yearly={yearly}
      />
    </div>
  );
};

// propTypes
YearlyText.propTypes = {
  averageOnTheLine: PropTypes.number.isRequired,
  yearly: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default YearlyText;
