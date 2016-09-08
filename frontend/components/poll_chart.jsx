import React from 'react'
import {render} from 'react-dom'
import {Chart} from 'react-google-charts'

export default class PollChart extends React.Component{
  constructor(props){
      super(props)
    }
  render() {
    let answers = this.props.poll.question.answers
    let data = [["Answer", "Votes", {role: 'annotation'}]]
    answers.forEach((answer) => {
      data.push([answer.body, answer.votes, answer.votes])
    })

    return (
    <div className={"my-pretty-chart-container"}>
      <Chart
        chartType="BarChart"
        data={data}
        options={{title: this.props.poll.question.body}}
        graph_id={"BarChart" + this.props.poll.id}
        width={"100%"}
        height={"400px"}
        legend_toggle={true} />
    </div>
    )
  }
}
// render(<App/>, document.querySelector('#app'));
