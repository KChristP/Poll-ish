import React from 'react';
import PollDetail from './poll_detail'


class PollItem extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <li>{this.props.poll.question.body}</li>
        <button>Delete</button>
        <PollDetail poll={this.props.poll} key={this.props.poll.id}/>
      </div>
    )
  }
}

export default PollItem;
