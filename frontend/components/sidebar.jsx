import React from 'react';
import MainPanelContainer from './main_panel_container';


class Sidebar extends React.Component {
  componentWillMount(){
    this.props.requestAllGroups()
  }

  groups_for_main_panel(){
    return this.props.groups// need to dynamically send down only the group that a user selects, or all groups if AllGroups is selected
  }
  render(){

    let group_names = "Loading..."
    if (this.props.groups){
      let group_keys = Object.keys(this.props.groups)
      group_names = group_keys.map((group_id) => (
        <div>
          {this.props.groups[group_id].name}
        </div>
      ))
    }
    return(
      <div>
        <div className="sidebar-box box">
          {group_names}
        </div>
        <div className="main-panel-box">
          <MainPanelContainer groups={this.groups_for_main_panel()}/>
        </div>
      </div>
    )
  }
}

export default Sidebar;
