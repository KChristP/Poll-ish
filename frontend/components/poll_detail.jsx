import React from 'react';
//TODO this component should show

class PollDetail extends React.Component {
  constructor(props){
    super(props)
  }



  render(){
    // debugger
    let answers = this.props.poll.question.answers.map((answer) => (
      <li key={answer.body}>{answer.body}</li>
    ))
    return(
      <div>
        {this.props.poll.question.body}
        {answers}
        <button>{this.props.poll.live ? "Live" : "Make Live"}</button>
        <button>Delete</button>
      </div>
    )
  }
}

export default PollDetail;
