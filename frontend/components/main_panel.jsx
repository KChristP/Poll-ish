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
    // debugger
    // let groups = this.props.groups
    // let polls = this.props.polls
    // let polls_by_group = [];
    // if (this.props.polls){//this.props.groups &&
    //   debugger
    //   let group_keys = Object.keys(this.props.groups);
    //   let poll_keys = Object.keys(this.props.polls);
    //
    //   group_keys.forEach((group_id) => {
    //
    //     let grouped_poll_ids = poll_keys.filter((key) => {
    //       this.props.polls[key].group_id === group_id
    //     })
    //
    //     let this_groups_polls = grouped_poll_ids.map((poll_id) => {
    //       <div>{this.props.polls[poll_id].question.body}</div>
    //     })
    //
    //     polls_by_group.push(
    //       <div key={group_id}>
    //         <div>
    //           {this.props.groups[group_id].name}
    //         </div>
    //         <div>
    //           {this_groups_polls}
    //         </div>
    //       </div>
    //     )
    //   })
    // }
    let poll_keys = Object.keys(this.props.polls)
    let poll_names
    if (poll_keys.length > 0){
      let poll_keys_with_questions = poll_keys.filter((key) => {
        return this.props.polls[key].question
      })
      poll_names = poll_keys_with_questions.map((key) => {
        return (
          <div>{this.props.polls[key].question.body}</div>
        )
      })
    }
    return(
      <div>
        {poll_names}
      </div>
    )
  }
}

export default MainPanel;
