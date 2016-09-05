import React from 'react';


class GroupSidebarItem extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="group-sidebar-item" onClick={(event) => this.props.changeActiveGroup(event, this.props.group)}>
        <li>{this.props.group.name}</li>
      </div>
    )
  }
}

export default GroupSidebarItem;