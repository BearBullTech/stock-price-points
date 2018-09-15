import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import BarChart from '../BarChart/BarChart.jsx';
import PricesPaidHeader from '../PricesPaidHeader/PricesPaidHeader.jsx';
import '../../public/styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weeklyData: [
        {// Temporary Data to prevent errors.
          weekIndex: 1,
          weekHigh: 1,
          weekLow: 1,
          weekAverage: 1,
          weekStocksPurchased: 1,
        },
      ],
      yearly: {
        stocksPurchasedYear: 1,
        yearHighest: 1,
        yearLowest: 1,
        yearAverage: 1,
      },
      averageOnTheLine: 1,
      priceOnTheLine: 1,
      percentChange: 1,
    };

    this.componentDidMount = () => {
      $.ajax({
        method: 'GET',
        url: '/data/company/Beer,%20Nader%20and%20Predovic',
        success: (output) => {
          const { yearly, currentPrice } = output[0];
          const { yearAverage, yearLowest, yearHighest } = yearly;

          // percentage Change Helper
          function percentageChange(valOne, valTwo) {
            return (((valTwo - valOne) / valOne) * 100);
          }
          // Number On The Line Calculation
          function percentOfNumOnLine(amount) {
            const newRange = yearHighest - yearLowest;
            const newNum = amount - yearLowest;
            return (newNum / newRange);
          }

          const averageOnTheLine = 676 * percentOfNumOnLine(yearAverage);
          const priceOnTheLine = 676 * percentOfNumOnLine(currentPrice);
          const percentChange = percentageChange(averageOnTheLine, priceOnTheLine);

          this.setState({
            weeklyData: output[0].weeks.sort((a, b) => a.weekAverage - b.weekAverage),
            yearly,
            averageOnTheLine,
            priceOnTheLine,
            percentChange,
          });
        },
      });
    };
  }

  render() {
    const {
      weeklyData,
      yearly,
      priceOnTheLine,
      averageOnTheLine,
      percentChange,
    } = this.state;

    return (
      <div>
        <PricesPaidHeader />
        <BarChart
          weeklyData={weeklyData}
          priceOnTheLine={priceOnTheLine}
          averageOnTheLine={averageOnTheLine}
          percentChange={percentChange}
          yearly={yearly}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mainChart'));
