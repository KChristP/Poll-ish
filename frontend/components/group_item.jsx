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
    this.handleDragover = this.handleDragover.bind(this)
    this.handleDrop = this.handleDrop.bind(this)
  }

  compontWillReceiveProps(){
    this.forceUpdate()
    console.log("group item received props");
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

  handleDragover(e){
    e.preventDefault()
  }


//this is hacky. I update the poll sent from the drag event with this groups Id,
//however this update does not remove the previous of the poll from state(why? shouldnt reducer's merge copy a poll with same id over itself?)
//so I also send a remove poll request for the poll with the old group_id
  handleDrop(e){
    e.preventDefault()
    let poll = JSON.parse(e.dataTransfer.getData("object"));
    let pollData = {};
    pollData[poll.id] = poll;//This step is necessary so data will be in same shape poll reducer otherwise expects from server for remove poll
    let answers = poll.question.answers.map(answer => answer.body);
    poll.group_id = this.props.group.id;
    poll.question.answers = answers;
    this.props.updatePoll({poll: poll});
    this.props.removePoll(pollData);
  }

  render(){
    let this_groups_poll_items = this.props.polls.map((poll) => (
      <PollItemContainer poll={poll} key={poll.question.body + poll.id}/>
    ))
    let editInput = this.state.editInputOpen ? (
      <form onSubmit={this.handleGroupEditSubmit}>
        <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
        <input type="submit" value="Submit" className="group-item-edit-input"/>
      </form>
    ) : "";
    return(
      <div className="group-item-box" onDragOver={this.handleDragover} onDrop={this.handleDrop}>
        <div className="group-item-title">
          <div className="group-title-and-edit">
            <i className="fa fa-pencil-square-o" aria-hidden="true" onClick={this.toggleEditInput}></i>
            <div>{this.state.editInputOpen ? "" : this.props.group.name}</div>
            {editInput}
          </div>
          <div
            className="group-item-button-sub-box, group-item-button-box"
            onClick={this.handleDestroyGroup}
          >
            <i className="fa fa-trash-o"
              aria-hidden="true">
            </i>
            <p className="fa-text">Delete Group</p>
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
