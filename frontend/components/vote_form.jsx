import React from 'react';


class VoteForm extends React.Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.requestPoll(this.props.params.user_id)
  }

  // componentWillReceiveProps(nextProps){
  //   this.props.forceUpdate()
  // }

  render(){

    let answerChoices = this.props.poll.question.answers.map((answer) => (
      <input type="radio" name={this.props.poll.id} value={answer.body}/>
    ))

    return(
      <div className="vote-form-box">
        vote form
        <form>
          {this.props.poll.question.body}
          {answerChoices}
        </form>
      </div>
    )
  }
}

export default VoteForm;
