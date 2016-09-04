import React from 'react';
import PollItem from './poll_item'
import PollFormContainer from './poll_form_container'


class GroupItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      modalOpen: false
    };
    this._handleNewPollClick = this._handleNewPollClick.bind(this)
  }

  _handleNewPollClick(){
    this.setState({modalOpen: true})
  }

  render(){
    let this_groups_poll_items = this.props.polls.map((poll) => (
      <PollItem poll={poll} key={poll.question.body + poll.id}/>
    ))
    return(
      <div>
        <div>
          {this.props.group.name}
        </div>
        {this_groups_poll_items}

        <PollFormContainer groupId={this.props.group.id}/>
      </div>
    )
  }
}

export default GroupItem;
