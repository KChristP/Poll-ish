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
  // _handleNewPollClick(){
  //   this.setState({modalOpen: true})
  // }

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
      <div>
        <button onClick={this.toggleEditInput}>{this.state.editInputOpen ? "Cancel" : "Edit"}</button>
        {editInput}
        <div>
          {this.props.group.name}
        </div>
        {this_groups_poll_items}

        <PollFormContainer groupId={this.props.group.id}/>
      </div>
    )
  }
}

export default GroupItem;
