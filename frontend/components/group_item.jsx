import React from 'react';
import PollItem from './poll_item'


class GroupItem extends React.Component {
  constructor(props){
    super(props)
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
      </div>
    )
  }
}

export default GroupItem;
