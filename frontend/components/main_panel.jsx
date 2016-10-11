import React from 'react';
import GroupItemContainer from './group_item_container'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


class MainPanel extends React.Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    let id = this.props.user_id
    this.props.requestAllPolls(id)
  }

  componentWillReceiveProps(nextProps){
    this.forceUpdate()
  }

  render(){
    let groups = this.props.groups;
    let polls = this.props.polls;
    let polls_by_group = [];
    if (Object.keys(polls).length > 0 && Object.keys(groups).length > 0){
      let group_keys = Object.keys(groups);
      let poll_keys = Object.keys(polls);
      groups = this.props.groups;
      polls = this.props.polls;
      group_keys.forEach((group_id) => {

        let grouped_poll_ids = poll_keys.filter((key) => {
          return polls[key].group_id === parseInt(group_id) && polls[key].question;
        })

        let this_groups_polls = grouped_poll_ids.map((poll_id) => {
          return (polls[poll_id])
        })

        polls_by_group.push(
          <div key={group_id}>
            <GroupItemContainer group={this.props.groups[group_id]} polls={this_groups_polls}/>
          </div>
        )
      })
    }
    return(
      <div>
        <ReactCSSTransitionGroup
          transitionName="slidein"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}>
        {polls_by_group}
      </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default MainPanel;

// let poll_keys = Object.keys(this.props.polls)
// let poll_names
// let groups = this.props.groups
// if (poll_keys.length > 0){
//   let poll_keys_with_questions = poll_keys.filter((key) => {
//     return this.props.polls[key].question
//   })
//   poll_names = poll_keys_with_questions.map((key) => {
//     return (
//       <div>{this.props.polls[key].question.body}</div>
//     )
//   })
// }
