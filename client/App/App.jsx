import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import BarChart from '../BarChart/BarChart.jsx';

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
      currentPrice: 20.50,
      averageOnTheLine: 1,
      priceOnTheLine: 1,
    };

    this.componentDidMount = () => {
      $.ajax({
        method: 'GET',
        url: '/data/company/onecompany',
        success: (output) => {
          const { currentPrice } = this.state;
          const { yearly } = output[0];
          const { yearAverage, yearLowest, yearHighest } = yearly;

          // Number On The Line Calculation
          function percentOfNumOnLine(amount) {
            const newRange = yearHighest - yearLowest;
            const newNum = amount - yearLowest;
            return (newNum / newRange);
          }

          const averageOnTheLine = 676 * percentOfNumOnLine(yearAverage);
          const priceOnTheLine = 676 * percentOfNumOnLine(currentPrice);


          this.setState({
            weeklyData: output[0].weeks.sort((a, b) => a.weekAverage - b.weekAverage),
            averageOnTheLine,
            priceOnTheLine,
          });
        },
      });
    };
  }

  render() {
    const {
      weeklyData,
      priceOnTheLine,
      averageOnTheLine,
    } = this.state;

    return (
      <BarChart
        weeklyData={weeklyData}
        priceOnTheLine={priceOnTheLine}
        averageOnTheLine={averageOnTheLine}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mainChart'));
