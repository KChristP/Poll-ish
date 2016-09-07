import React from 'react';


class VoteForm extends React.Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount(){
    this.props.requestPoll(this.props.params.user_id)
  }

  handleSubmit(e){
    e.preventDefault();
    let poll_id = this.props.poll.id.toString()
    let answer_id = document.querySelector(`input[name="${poll_id}"]:checked`).value
    this.props.castVote({poll: {place_vote: true, id: poll_id, answer_id: answer_id}})
  }

  render(){
    let question = ""
    let answerChoices = "This user does not currently have any live polls"
    if(this.props.poll){
      question = (<h1>{this.props.poll.question.body}</h1>);
      answerChoices = this.props.poll.question.answers.map((answer) => (
        <label key={answer.body + answer.id}>{answer.body}
          <input type="radio" name={this.props.poll.id} value={answer.id}/>
        </label>
      ));
      answerChoices.push(<input type="submit" value="Submit Vote!"/>)
    }

    return(
      <div className="vote-form-box">
        <form onSubmit={this.handleSubmit}>
          {question}
          {answerChoices}
        </form>
      </div>
    )
  }
}

export default VoteForm;