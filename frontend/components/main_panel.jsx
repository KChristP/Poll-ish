import React from 'react';


class MainPanel extends React.Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    let id = this.props.user_id
    this.props.requestAllPolls(id)
  }

  // componentWillReceiveProps(nextProps){
  //   this.forceUpdate()
  // }

  render(){
    let groups = this.props.groups;
    let polls = this.props.polls;
    let polls_by_group = [];
    if (Object.keys(polls).length > 0 && Object.keys(groups).length > 0){
      let group_keys = Object.keys(this.props.groups);
      let poll_keys = Object.keys(this.props.polls);
      groups = this.props.groups;
      polls = this.props.polls;

      group_keys.forEach((group_id) => {

        let grouped_poll_ids = poll_keys.filter((key) => {
          return polls[key].group_id === group_id;
        })

        let this_groups_polls = grouped_poll_ids.map((poll_id) => {
          return <div>{polls[poll_id].question.body}</div>
        })
        debugger

        polls_by_group.push(
          <div key={group_id}>
            <div>
              {this.props.groups[group_id].name}
            </div>
            <div>
              {this_groups_polls}
            </div>
          </div>
        )
      })
    }
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
    return(
      <div>
        {polls_by_group}
      </div>
    )
  }
}

export default MainPanel;
