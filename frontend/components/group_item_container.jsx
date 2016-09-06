import React from 'react';
import {connect} from 'react-redux';
import {
  updateGroup,
  destroyGroup
} from '../actions/group_actions';

import {updatePoll, removePoll} from '../actions/poll_actions'

import GroupItem from './group_item';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  updateGroup: (group) => dispatch(updateGroup(group)),
  destroyGroup: (group) => dispatch(destroyGroup(group)),
  updatePoll: (poll) => dispatch(updatePoll(poll)),
  removePoll: (poll) => dispatch(removePoll(poll))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupItem);
