import React from 'react';


class PollItem extends React.Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){

  }

  render(){
    return(
      <div>
        <li>{this.props.poll.question.body}</li>
      </div>
    )
  }
}

export default PollItem;
