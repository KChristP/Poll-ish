import React from 'react';
import Modal from 'react-modal'
import ModalStyle from './modal_style'

class PollFormUpdate extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      modalOpen: false,
      id: this.props.poll.id,
      question: this.props.poll.question.body,
      answers: this.props.poll.question.answers.concat().sort().map((answer) => answer.body),//concat is necessary because sort() mutates
      answerCount: this.props.poll.question.answers.length
    };
    this._handleUpdatePollClick = this._handleUpdatePollClick.bind(this)
    this._onModalClose = this._onModalClose.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleQuestionChange = this.handleQuestionChange.bind(this)
    this.handleAnswerChange = this.handleAnswerChange.bind(this)
    this.addAnswerField = this.addAnswerField.bind(this)
  }

  _handleUpdatePollClick(){
    this.setState(Object.assign({}, this.state, {modalOpen: true}))
  }

  _onModalClose(){
    this.setState(Object.assign({}, this.state, {modalOpen: false}))
    ModalStyle.content.opacity = 0
  }

  _onModalOpen(){
    ModalStyle.content.opacity = 100
  }

  handleSubmit(e){
    e.preventDefault();
    let newAnswers = [];
    this.props.poll.question.answers.concat().sort().forEach((answer, index) => {
      answer.body = this.state.answers[index];
      newAnswers.push(answer);
    })


    let answers = this.state.answers.filter(answer => {
      return (answer !== undefined) && (answer !== "")
    })
    let question = {body: this.state.question, answers: newAnswers}
    // let question = {body: this.state.question, answers: answers}//changing to reflect new full object sending...
    if((this.props.poll.question.answers.map(answer => answer.body).sort() !== answers.sort()) ||
      (this.props.poll.question.body !== this.state.question)
    ) {
      this.props.updatePoll(
        {poll: {
          id: this.props.poll.id,
          live: false,
          group_id: this.props.poll.group_id,
          question: question}
        }
      )
      let pollData = {};
      pollData[this.props.poll.id] = this.props.poll;
      this.props.removePoll(pollData) //again this is necessary to make data form match what the poll reducer expects from server
    }
    this.setState(Object.assign({}, this.state, {modalOpen: false}))
  }

  handleQuestionChange(event){
    const value = event.target.value
    if(typeof value !== 'undefined') {
      this.setState(Object.assign({}, this.state, {question: value}))
    }
  }

  handleAnswerChange(event){
    const value = event.target.value
    if(typeof value !== 'undefined') {
      let newAnswerArray = this.state.answers
      newAnswerArray[parseInt(event.target.id)] = event.target.value
      this.setState(Object.assign({}, this.state, {answers: newAnswerArray}))
    }
  }

  addAnswerField(){
    this.setState(Object.assign({}, this.state, {answerCount: this.state.answerCount + 1}))
  }

  render(){
    let answerInputs = [];
    for(let i = 0; i < this.state.answerCount; i++){
      answerInputs.push(<input id={i} type="text" value={this.state.answers[i]} onChange={this.handleAnswerChange} key={"abc" + i}/>)
    }
    return(
      <div className="poll-item-button-sub-box" onClick={this._handleUpdatePollClick}>
        <div className="poll-item-button-sub-box">
          <i className="fa fa-pencil-square-o"
            aria-hidden="true" id="edit-poll-button">
          </i>
          <p className="fa-text">Edit</p>
        </div>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this._onModalClose}
          style={ModalStyle}
          onAfterOpen={this._onModalOpen}>
          <button onClick={this._onModalClose}>Close</button>
          <div className="new-poll-form-box">
            <form className="new-poll-form-itself" onSubmit={this.handleSubmit}>
              Question <input type="text" value={this.state.question} onChange={this.handleQuestionChange}/>
              {answerInputs}
              <div onClick={this.addAnswerField}>Add Another Answer!</div>
              <input type="submit" value="Update!" />
            </form>
          </div>
        </Modal>
      </div>
    )
  }
}

export default PollFormUpdate;

// poll.question.answers.forEach(answer = {
//   answer.body =
//
//
// })

// <button
//   id="edit-poll-button"
//   onClick={this._handleUpdatePollClick}>
//   Edit
// </button>
