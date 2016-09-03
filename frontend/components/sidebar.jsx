import React from 'react';
import MainPanelContainer from './main_panel_container';
import GroupSidebarItem from './group_sidebar_item'

class Sidebar extends React.Component {
  constructor(props){
    super(props)
    this.state = {activeGroup: this.props.groups}
    this.changeActiveGroup = this.changeActiveGroup.bind(this)
  }

  componentWillMount(){
    this.props.requestAllGroups()
  }

  componentWillReceiveProps(newProps){
    this.setState({activeGroup: newProps.groups})
  }

  groups_for_main_panel(){
    return this.props.groups// TODO need to dynamically send down only the group that a user selects, or all groups if AllGroups is selected
  }

  changeActiveGroup(e, group){
    e.preventDefault()
    let group_obj = {}
    group_obj[group.id] = group
    this.setState({activeGroup: group_obj})
  }

  render(){

    let group_names = "Loading..."
    if (this.props.groups){
      let group_keys = Object.keys(this.props.groups)
      group_names = group_keys.map((group_id) => (
          <GroupSidebarItem
            group={this.props.groups[group_id]}
            key={group_id}
            changeActiveGroup={this.changeActiveGroup}/>
      ))
    }
    return(
      <div>
        <div className="sidebar-box box">
          {group_names}
        </div>
        <div className="main-panel-box">
          <MainPanelContainer groups={this.state.activeGroup} key={1}/>
        </div>
      </div>
    )
  }
}

export default Sidebar;
