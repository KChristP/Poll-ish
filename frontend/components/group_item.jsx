import React from 'react';
import PollItemContainer from './poll_item_container'
import PollFormContainer from './poll_form_container'


class GroupItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      editInputOpen: false,
      name: this.props.group.name
    };
    this.handleNameChange = this.handleNameChange.bind(this)
    this.toggleEditInput = this.toggleEditInput.bind(this)
    this.handleGroupEditSubmit = this.handleGroupEditSubmit.bind(this)
    this.handleDestroyGroup = this.handleDestroyGroup.bind(this)
  }

  handleGroupEditSubmit(e){
    e.preventDefault();
    let newGroup = {
      name: this.state.name,
      user_id: this.props.group.user_id,
      id: this.props.group.id}
    this.props.updateGroup(newGroup);
    this.toggleEditInput()
  }

  toggleEditInput(){
    this.setState(Object.assign({}, this.state, {editInputOpen: !this.state.editInputOpen}))
  }

  handleNameChange(event){
    const value = event.target.value
    if(typeof value !== 'undefined') {
      this.setState(Object.assign({}, this.state, {name: value}))
    }
  }

  handleDestroyGroup(){
    this.props.destroyGroup(this.props.group)
  }

  render(){
    let this_groups_poll_items = this.props.polls.map((poll) => (
      <PollItemContainer poll={poll} key={poll.question.body + poll.id}/>
    ))
    let editInput = this.state.editInputOpen ? (
      <form onSubmit={this.handleGroupEditSubmit}>
        <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
        <input type="submit" value="Submit"/>
      </form>
    ) : "";
    return(
      <div className="group-item-box">
        <div className="group-item-title">
          <div className="group-title-and-edit">
            <i className="fa fa-pencil-square-o" aria-hidden="true" onClick={this.toggleEditInput}></i>
            <div>{this.state.editInputOpen ? "" : this.props.group.name}</div>
            {editInput}
          </div>
          <div className="group-item-button-box">
            <i className="fa fa-trash-o"
              aria-hidden="true"
              onClick={this.handleDestroyGroup}>
              Delete Group
            </i>
          </div>
        </div>
        {this_groups_poll_items}

        <PollFormContainer groupId={this.props.group.id}/>
      </div>
    )
  }
}

export default GroupItem;


// <button onClick={this.toggleEditInput}>{this.state.editInputOpen ? "Cancel" : "Edit"}</button>

// <button onClick={this.handleDestroyGroup}>Delete Group</button>
