import React from 'react';
import PollDetail from './poll_detail'
import PollFormUpdateContainer from './poll_form_update_container'


class PollItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showDetail: false
    }
    this.clickToDestroy = this.clickToDestroy.bind(this)
    this.showPollDetail = this.showPollDetail.bind(this)
  }
  clickToDestroy(e){
    this.props.destroyPoll(this.props.poll)
  }

  showPollDetail(){
    this.setState({showDetail: !this.state.showDetail})
  }

  render(){
    const pollDetail = <PollDetail poll={this.props.poll} key={this.props.poll.id}/>
    return(
      <div className="poll-item-box">
        <div className="poll-item-title">
          <div onClick={this.showPollDetail}>{this.props.poll.question.body}</div>
          <div className="poll-item-button-box">
            <button>{this.props.poll.live ? "Live" : "Make Live"}</button>
            <button onClick={this.clickToDestroy}>Delete</button>
            <PollFormUpdateContainer poll={this.props.poll}/>
          </div>
        </div>
        {this.state.showDetail ? pollDetail : ""}
      </div>
    )
  }
}

export default PollItem;
