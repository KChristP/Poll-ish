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
      question = (<h1 className="vote-form-question">{this.props.poll.question.body}</h1>);
      answerChoices = this.props.poll.question.answers.map((answer) => (
        <label htmlFor={answer.body} key={answer.body + answer.id} className="vote-form-input-box">
          <input
            type="radio"
            id={answer.body}
            className="vote-form-radio"
            name={this.props.poll.id}
            value={answer.id}
            key={answer.body}/>
          {answer.body}
        </label>
      ));
      answerChoices.push(<input type="submit" value="Submit Vote!" className="vote-form-submit" key="submit"/>)
    }

    return(
      <div className="vote-form-box">
        {question}
        <form onSubmit={this.handleSubmit} className="vote-form-itself">
          {answerChoices}
        </form>
      </div>
    )
  }
}

export default VoteForm;
