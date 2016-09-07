import React from 'react';
var BarChart = require("react-chartjs").Bar;

var PollChart = React.createClass({
  render: function() {
    let answers = this.props.poll.question.answers
    let chartData = {
      labels: answers.map(answer => answer.body),
      datasets: [
        {
        borderWidth: 1,
        data: answers.map((answer) => (answer.votes))
        }
      ]
    };
    let chartOptions = {}

    return (<BarChart data={chartData} options={chartOptions} width="600" height="250"/>)
  }
});

module.exports = PollChart;
