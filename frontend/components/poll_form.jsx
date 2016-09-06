import React from 'react';
import Modal from 'react-modal'
import ModalStyle from './modal_style'

class PollForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      modalOpen: false,
      question: "",
      answers: [],
      answerCount: 2
    };
    this._handleNewPollClick = this._handleNewPollClick.bind(this)
    this._onModalClose = this._onModalClose.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleQuestionChange = this.handleQuestionChange.bind(this)
    this.handleAnswerChange = this.handleAnswerChange.bind(this)
    this.addAnswerField = this.addAnswerField.bind(this)
  }

  _handleNewPollClick(){
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
    let answers = this.state.answers.filter(answer => answer !== undefined)
    let question = {body: this.state.question, answers: answers}
    this.props.createPoll({poll: {live: false, group_id: this.props.groupId, question: question}})
    //{poll: {live: false, group_id: 1, question: {body: "who", answers: ["me", "you"]}}}
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
      <div>
        <em
          className="new-poll-button"
          onClick={this._handleNewPollClick}>
          Create Poll!
        </em>
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
              <input type="submit" value="Submit New Poll!" />
            </form>
          </div>
        </Modal>
      </div>
    )
  }
}

export default PollForm;
