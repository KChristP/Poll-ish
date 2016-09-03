import React from 'react';


class PollDetail extends React.Component {
  // constructor(props){
  //   super(props)
  // }

  

  render(){
    return(
      <div>
        {this.props.poll.live ? "Live" : "Make Live"}
      </div>
    )
  }
}

export default PollDetail;
