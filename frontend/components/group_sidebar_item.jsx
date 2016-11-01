import React from 'react';


class GroupSidebarItem extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    // let selectedIndicator = this.props.group === this.props.activeGroup ? "group-sidebar-item selected" : "group-sidebar-item"
    let selectedIndicator = "sidebar-list-item"
    if(
      this.props.group === this.props.activeGroup[Object.keys(this.props.activeGroup)[0]] &&
      Object.keys(this.props.activeGroup).length === 1
    ){
      selectedIndicator = "sidebar-list-item selected"
    }
    return(
      <div className="group-sidebar-item" onClick={(event) => this.props.changeActiveGroup(event, this.props.group)}>
        <li className={selectedIndicator}>{this.props.group.name}</li>
      </div>
    )
  }
}

export default GroupSidebarItem;
