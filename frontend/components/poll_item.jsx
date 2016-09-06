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
    this.handleDragEvent = this.handleDragEvent.bind(this)
  }
  clickToDestroy(e){
    this.props.destroyPoll(this.props.poll)
  }

  showPollDetail(){
    this.setState({showDetail: !this.state.showDetail})
  }

  handleDragEvent(e) {
    e.dataTransfer.setData("object", JSON.stringify(this.props.poll));
  }

  render(){
    const pollDetail = <PollDetail poll={this.props.poll} key={this.props.poll.id}/>
    return(
      <div className="poll-item-box" draggable="true" onDragStart={this.handleDragEvent} id={''}>
        <div className="poll-item-title">
          <div onClick={this.showPollDetail}>{this.props.poll.question.body}</div>
          <div className="poll-item-button-box">
            <div className="poll-item-button-sub-box">
              <i className="fa fa-power-off"
                aria-hidden="true">
              </i>
              <p className="fa-text">{this.props.poll.live ? "Live" : "Make Live"}</p>
            </div>
            <div onClick={this.clickToDestroy} className="poll-item-button-sub-box">
              <i className="fa fa-trash-o"
                aria-hidden="true">
              </i>
              <p className="fa-text">Delete</p>
            </div>
            <PollFormUpdateContainer poll={this.props.poll}/>
          </div>
        </div>
        {this.state.showDetail ? pollDetail : ""}
      </div>
    )
  }
}

export default PollItem;




// <button>{this.props.poll.live ? "Live" : "Make Live"}</button>
// <button onClick={this.clickToDestroy}>Delete</button>
