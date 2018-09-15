import React from 'react';
import PropTypes from 'prop-types';
import Bar from './Bar/Bar.jsx';
import Chart from './Chart/Chart.jsx';
import BallLine from '../BallLine/BallLine.jsx';
import CurrentPrice from '../CurrentPrice/CurrentPrice.jsx';
import YearlyText from '../YearlyText/YearlyText.jsx';
import CurrentPriceLabel from '../YearlyText/CurrentPriceLabel/CurrentPriceLabel.jsx';

const BarChart = (
  {
    weeklyData,
    yearly,
    priceOnTheLine,
    averageOnTheLine,
    percentChange,
  },
) => {
  // Width of each bar
  const itemWidth = 11.46;
  const itemMargin = 11.45;
  const dataLength = weeklyData.length;

  // find week with most stocks purchased
  let mostStocks = weeklyData.reduce((acc, cur) => {
    const { weekStocksPurchased } = cur;
    return weekStocksPurchased > acc ? weekStocksPurchased : acc;
  }, 0);

  // Reshape the data to the 96px-max-height proportions
  const resizedData = weeklyData.map(
    week => Object.assign(
      {},
      week,
      { weekStocksPurchased: week.weekStocksPurchased / (mostStocks / 96) },
    ),
  );

  // re-identify week with most stocks purchased after data-resize
  mostStocks = resizedData.reduce((acc, cur) => {
    const { weekStocksPurchased } = cur;
    return weekStocksPurchased > acc ? weekStocksPurchased : acc;
  }, 0);

  const chartHeight = mostStocks;

  return (
    <div>
      <CurrentPriceLabel
        percentChange={percentChange}
        priceOnTheLine={priceOnTheLine}
      />
      <Chart
        width={dataLength * (itemWidth + itemMargin)}
        height={chartHeight}
      >
        {resizedData.map((week, index) => {
          const itemHeight = week.weekStocksPurchased;
          const xOnLine = index * (itemWidth + itemMargin);

          let filler = '#F3F3F3';

          // Positive Percent Change
          if (percentChange > 0) {
            if ((xOnLine) >= (averageOnTheLine - 11) && (xOnLine + 11.45) < priceOnTheLine) {
              filler = '#23CE99';
              console.log(xOnLine);
            }
          // Negative Percent Change
          } else if (percentChange < 0) {
            if ((xOnLine) <= (averageOnTheLine) && (xOnLine) > priceOnTheLine) {
              filler = '#23CE99';
              console.log(xOnLine);
            }
          }
          return (
            <Bar
              x={index * (itemWidth + itemMargin)}
              y={chartHeight - itemHeight}
              width={itemWidth}
              height={itemHeight}
              fillColor={filler}
            />
          );
        })}
        <BallLine
          averageOnTheLine={averageOnTheLine}
        />
        <CurrentPrice
          priceOnTheLine={priceOnTheLine}
        />
      </Chart>
      <YearlyText
        averageOnTheLine={averageOnTheLine}
        yearly={yearly}
      />
    </div>
  );
};

BarChart.propTypes = {
  weeklyData: PropTypes.arrayOf(PropTypes.object).isRequired,
  averageOnTheLine: PropTypes.number.isRequired,
  priceOnTheLine: PropTypes.number.isRequired,
  percentChange: PropTypes.number.isRequired,
  yearly: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default BarChart;
