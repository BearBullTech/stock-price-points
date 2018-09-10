import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import BarChart from './BarChart.jsx'

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
        },
      });
    };
  }

  render() {

    return (
      <BarChart weeklyData={this.state.weeklyData}/>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
