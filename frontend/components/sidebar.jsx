import React from 'react';
import MainPanelContainer from './main_panel_container';
import GroupSidebarItem from './group_sidebar_item'

class Sidebar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeGroup: this.props.groups,
      groupToAdd: "",
      addGroup: false
    }
    this.changeActiveGroup = this.changeActiveGroup.bind(this)
    this.handleGroupSubmit = this.handleGroupSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.toggleAddGroup = this.toggleAddGroup.bind(this)
  }

  componentWillMount(){
    this.props.requestAllGroups()
  }

  componentWillReceiveProps(newProps){
    this.setState({activeGroup: newProps.groups})
  }

  groups_for_main_panel(){
    return this.props.groups
  }

  changeActiveGroup(e, group){
    e.preventDefault()
    let group_obj = {}
    group_obj[group.id] = group
    this.setState(Object.assign({}, this.state, {activeGroup: group_obj}))
  }

  handleGroupSubmit(e){
    e.preventDefault()
    let group = {name: this.state.groupToAdd, user_id: this.props.user_id}
    this.props.createGroup(group)
    this.toggleAddGroup()
  }

  toggleAddGroup(){
    this.setState(Object.assign({}, this.state, {addGroup: !this.state.addGroup}))
  }

  handleNameChange(e){
    let value = e.target.value
    this.setState(Object.assign({}, this.state, {groupToAdd: value}))
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

    let addGroupInput = this.state.addGroup ? (
      <form onSubmit={this.handleGroupSubmit}>
        <input type="text" value={this.state.groupToAdd} onChange={this.handleNameChange}/>
        <input type="submit" value="Create Group!"/>
      </form>
    ) : "";

    return(
      <div>
        <div className="sidebar-box box">
          {group_names}
          <button onClick={this.toggleAddGroup}>{this.state.addGroup ? "Cancel" : "Add Group"}</button>
          {addGroupInput}
        </div>
        <div className="main-panel-box">
          <MainPanelContainer groups={this.state.activeGroup} key={1}/>
        </div>
      </div>
    )
  }
}

export default Sidebar;
