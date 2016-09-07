// /* globals Pusher */
// import React from 'react';
// var BarChart = require("react-chartjs").Bar;
//
// class PollDetail extends React.Component {
//   constructor(props){
//     super(props)
//   }
//
//
//
//   render(){
//     let answers = this.props.poll.question.answers.map((answer) => (
//       <li key={answer.body}>{answer.body}, .......{answer.votes}votes</li>
//     ))
//
//     let actualAnswers = this.props.poll.question.answers
//     let chartData = {
//       labels: actualAnswers.map(answer => answer.body),
//       datasets: [
//         {
//         borderWidth: 1,
//         data: actualAnswers.map((answer) => (answer.votes))
//         }
//       ]
//     };
//     let chartOptions = {}
//
//     return(
//       <div className="poll-detail-box">
//         {this.props.poll.question.body}
//         {answers}
//         <BarChart data={chartData} options={chartOptions} width="600" height="250"/>
//         <button>{this.props.poll.live ? "Live" : "Make Live"}</button>
//         <button>Delete</button>
//       </div>
//     )
//   }
// }
