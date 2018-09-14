import React from 'react';
import PropTypes from 'prop-types';
import { LowestPrice, AveragePrice, HighestPrice } from './TextDivs/TextDivs.jsx';

const YearlyText = ({ yearly }) => {
  console.log(Object.values(yearly));
  return (
    <div className="prices-container">
      <LowestPrice
        yearly={yearly}
      />
      <AveragePrice
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
  yearly: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default YearlyText;
