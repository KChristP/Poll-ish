import React from 'react';

class GroupItem extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        {this.props.group.name}
      </div>
    )
  }
}

export default GroupItem;
