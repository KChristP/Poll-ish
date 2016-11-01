import React from 'react';
import MainPanelContainer from './main_panel_container';
import GroupSidebarItemContainer from './group_sidebar_item_container'
import PollFormContainer from './poll_form_container'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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
    this.props.requestAllGroups();
    this.props.requestLive(this.props.user_id);
  }

  // componentWillReceiveProps(newProps){
  //   this.props.setActiveGroup(newProps.groups)
  // }

  groups_for_main_panel(){
    return this.props.groups
  }

  changeActiveGroup(e, group){
    e.preventDefault()
    // console.log("group before:", group);
    // this.props.setActiveGroup(group) //oct29 - adding to global state screws up rendering of this component...
    // console.log("group after:", group);
    let group_obj = {}
    if (group.id){
      group_obj[group.id] = group
    } else {
      group_obj = group
    }
    let ag_object = {activeGroup: group_obj}
    this.props.setActiveGroup(group_obj)
  }

  handleGroupSubmit(e){
    e.preventDefault()
    let group = {name: this.state.groupToAdd, user_id: this.props.user_id}
    this.props.createGroup(group)
    this.setState({groupToAdd: ""})
    this.toggleAddGroup()
  }

  toggleAddGroup(){
    this.setState({addGroup: !this.state.addGroup})
  }

  handleNameChange(e){
    let value = e.target.value
    this.setState({groupToAdd: value})
  }

  render(){

    let groupSidebarItems = "Loading..."
    if (this.props.groups){
      let group_keys = Object.keys(this.props.groups)
      groupSidebarItems = group_keys.map((group_id) => (
          <GroupSidebarItemContainer
            group={this.props.groups[group_id]}
            key={group_id}
            changeActiveGroup={this.changeActiveGroup}/>
      ))
    }

    let addGroupInput = this.state.addGroup ? (
      <form onSubmit={this.handleGroupSubmit}
        className="add-group-sidebar-form">
        <input type="text"
          value={this.state.groupToAdd}
          className="add-group-sidebar-input"
          onChange={this.handleNameChange}/>
        <input type="submit" value="Create Group!"
          className="add-group-sidebar-submit"/>
      </form>
    ) : "";

    let selectedIndicator = Object.keys(this.props.activeGroup).length > 1 ? "sidebar-list-item selected" : "sidebar-list-item"
    let groups = this.props.groups
    let allGroups = (
      <div className="all-groups group-sidebar-item" onClick={
        (event) => (this.changeActiveGroup(event, groups))
      }>
        <li className={selectedIndicator}>All Groups</li>
      </div>
    )

    let defaultGroupId = Object.keys(this.props.groups).sort()[0]

    // let defaultGroup = this.props.groups[defaultGroupId]

    return(
      <div>
        <div className="sidebar-box box">
          <PollFormContainer groupId={defaultGroupId}/>
          {allGroups}
          {groupSidebarItems}
          <button
            onClick={this.toggleAddGroup}
            className="add-group-sidebar-button">
            {this.state.addGroup ? "Cancel" : "Add Group"}
          </button>
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={100}>
          {addGroupInput}
          </ReactCSSTransitionGroup>
        </div>
        <div className="main-panel-box">
          <MainPanelContainer groups={this.props.activeGroup} key={1}/>
        </div>
      </div>
    )
  }
}

export default Sidebar;
