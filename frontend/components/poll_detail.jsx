// /* globals Pusher */
// import React from 'react';
//
//
// class PollDetail extends React.Component {
//   constructor(props){
//     super(props)
//   }
//
//
//   render(){
//     function drawChart() {
//
//         // Create the data table.
//         var data = new google.visualization.DataTable();
//         data.addColumn('string', 'Topping');
//         data.addColumn('number', 'Slices');
//         data.addRows([
//           ['Mushrooms', 3],
//           ['Onions', 1],
//           ['Olives', 1],
//           ['Zucchini', 1],
//           ['Pepperoni', 2]
//         ]);
//
//         // Set chart options
//         var options = {'title':'How Much Pizza I Ate Last Night',
//                        'width':400,
//                        'height':300};
//
//         // Instantiate and draw our chart, passing in some options.
//         var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
//         chart.draw(data, options);
//       }
//     let answers = this.props.poll.question.answers.map((answer) => (
//       <li key={answer.body}>{answer.body}, .......{answer.votes}votes</li>
//     ))
//     return(
//       <div className="poll-detail-box">
//         {this.props.poll.question.body}
//         {answers}
//         <div id="chart_div">this is chart div</div>
//         <button>{this.props.poll.live ? "Live" : "Make Live"}</button>
//         <button>Delete</button>
//       </div>
//     )
//   }
// }
//
// export default PollDetail;
