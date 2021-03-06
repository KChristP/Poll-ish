import React from 'react';
import PollChart from './poll_chart'
import PollFormUpdateContainer from './poll_form_update_container'
import merge from 'lodash/merge';
import {hashHistory, Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'




class PollItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showDetail: false
    }
    this.clickToDestroy = this.clickToDestroy.bind(this)
    this.showPollDetail = this.showPollDetail.bind(this)
    this.handleDragEvent = this.handleDragEvent.bind(this)
    this.handleMakeLive = this.handleMakeLive.bind(this)
  }

  componentDidMount(){
    var pusher = new Pusher('7c0afd3d50285fa5e5cf', {
     encrypted: true
   });
   let that = this
   var channel = pusher.subscribe('poll_' + this.props.poll.id);
   channel.bind('vote_added', function(data) {
     that.props.requestSinglePoll(data.poll_id);
   });
  }

  clickToDestroy(e){
    this.props.destroyPoll(this.props.poll)
  }

  showPollDetail(){
    this.setState(Object.assign({}, this.state, {showDetail: !this.state.showDetail}))
  }

  handleDragEvent(e) {
    e.dataTransfer.setData("object", JSON.stringify(this.props.poll));
  }

  handleMakeLive(){
    let pollToSend = merge({}, this.props.poll)
    pollToSend.live = !this.props.poll.live
    pollToSend.make_live = !this.props.poll.live
    this.props.updatePoll({poll: pollToSend})
    if (this.props.poll.live === false){
      this.props.requestLive(this.props.user_id)
    }
    if (this.props.poll.live === true){
      this.props.newLive({})
    }
  }


  render(){
    const thisIsLive = this.props.live ? (this.props.poll.id === this.props.live.id) : false;
    const pollDetail = (

      <div className="chart_div">
        <div className="chart-link-box">
          <p className="make-live-notification">{thisIsLive ? "" : "(Click 'Make Live' above to allow your audience to vote!)"}</p>
            <Link to={"/users/" + this.props.user_id} className="chart-link-itself">
              Cast your vote at: <strong>{"http://poll-ish.us/#/users/" + this.props.user_id}</strong>
            </Link>
        </div>
        <div id={"BarChart" + this.props.poll.id} className={"my-pretty-chart-container"}>
          <PollChart poll={this.props.poll} key={this.props.poll.id}/>
        </div>
      </div>
    )
    return(
      <div className="poll-item-box" draggable="true" onDragStart={this.handleDragEvent} id={''}>
        <div className="poll-item-title">

          <div onClick={this.showPollDetail} className="poll_item_clickable">{this.props.poll.question.body}</div>

          <div className="poll-item-button-box">

            <div className="poll-item-button-sub-box" onClick={this.handleMakeLive}>
              <i className={thisIsLive ? "fa fa-power-off live" : "fa fa-power-off"}
                aria-hidden="true">
              </i>
              <p className={thisIsLive ? "fa-text live" : "fa-text"}>{thisIsLive ? "Live" : "Make Live"}</p>
            </div>

            <div onClick={this.clickToDestroy} className="poll-item-button-sub-box">
              <i className="fa fa-trash-o"
                aria-hidden="true">
              </i>
              <p className="fa-text">Delete</p>
            </div>

            <PollFormUpdateContainer poll={this.props.poll}/>
          </div>

        </div><ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={100}>
          {this.state.showDetail ? pollDetail : ""}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default PollItem;




// <button>{this.props.poll.live ? "Live" : "Make Live"}</button>
// <button onClick={this.clickToDestroy}>Delete</button>
