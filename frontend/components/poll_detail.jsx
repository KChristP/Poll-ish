import React from 'react';
//TODO this component should show

class PollDetail extends React.Component {
  // constructor(props){
  //   super(props)
  // }



  render(){
    // debugger
    let answers = this.props.poll.question.answers.map((answer) => (
      <li key={answer.body}>{answer.body}</li>
    ))
    return(
      <div>
        {this.props.poll.live ? "Live" : "Make Live"}
        {this.props.poll.question.body}
        {answers}
      </div>
    )
  }
}

export default PollDetail;
