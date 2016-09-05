import React from 'react';
import PollDetail from './poll_detail'
import PollFormUpdateContainer from './poll_form_update_container'


class PollItem extends React.Component {
  constructor(props){
    super(props)
    this.clickToDestroy = this.clickToDestroy.bind(this)
  }
  clickToDestroy(e){
    this.props.destroyPoll(this.props.poll)
  }

  render(){
    return(
      <div>
        <li>{this.props.poll.question.body}</li>
        <button>{this.props.poll.live ? "Live" : "Make Live"}</button>
        <button onClick={this.clickToDestroy}>Delete</button>
        <PollFormUpdateContainer poll={this.props.poll}/>
        <PollDetail poll={this.props.poll} key={this.props.poll.id}/>
      </div>
    )
  }
}

export default PollItem;
