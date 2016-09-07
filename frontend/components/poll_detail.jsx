/* globals Pusher */
import React from 'react';


class PollDetail extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    var pusher = new Pusher('7c0afd3d50285fa5e5cf', {
     encrypted: true
   });

   var channel = pusher.subscribe('answer_' + this.props.poll.question.answers[0].id);
   channel.bind('vote_added', function(data) {
     alert(data.message);
   });
  }

  render(){
    let answers = this.props.poll.question.answers.map((answer) => (
      <li key={answer.body}>{answer.body}, .......{answer.votes}votes</li>
    ))
    return(
      <div className="poll-detail-box">
        {this.props.poll.question.body}
        {answers}
        <button>{this.props.poll.live ? "Live" : "Make Live"}</button>
        <button>Delete</button>
      </div>
    )
  }
}

export default PollDetail;
