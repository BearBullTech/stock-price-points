import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Bar from './Bar.jsx';
import Chart from './Chart.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weeklyData: [{}],
    };

    // this.handleDataQuery
    this.componentDidMount = () => {
      $.ajax({
        method: 'GET',
        url: '/data',
        success: (output) => {
          console.log(output);
          this.setState({
            weeklyData: output[0].weeks.sort((a, b) => a.weekAverage - b.weekAverage),
          });
          output.forEach((element, index) => {
            let weekAverages = [];
            element.weeks.forEach((week) => {
              weekAverages.push([week.weekAverage, week.weekStocksPurchased]);
            });
            weekAverages = weekAverages.sort((a, b) => a[0] - b[0]);
            console.log(index, '=>', weekAverages, '==>', element.yearly.yearAverage);
          });
        },
      });
    };
  }

  render() {
  // Width of each bar
    const { weeklyData } = this.state;
    const itemWidth = 11.46;
    const itemMargin = 11.45;
    const dataLength = weeklyData.length;

    // // Normalize weeklyData, we'll reduce all sizes to 25% of their original value
    const resizedData = weeklyData.map(
      week => Object.assign({}, week, { weekStocksPurchased: week.weekStocksPurchased * 0.25 }),
    );

    const mostStocks = resizedData.reduce((acc, cur) => {
      const { weekStocksPurchased } = cur;
      return weekStocksPurchased > acc ? weekStocksPurchased : acc;
    }, 0);

    const chartHeight = mostStocks;

    return (
      <Chart
        width={dataLength * (itemWidth + itemMargin)}
        height={chartHeight}
      >
        {resizedData.map((week, index) => {
          const itemHeight = week.weekStocksPurchased;

          return (
            <Bar
              x={index * (itemWidth + itemMargin)}
              y={chartHeight - itemHeight}
              width={itemWidth}
              height={itemHeight}
            />
          );
        })}
      </Chart>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
