import React from 'react';
import {connect} from 'react-redux';

import {requestPoll, castVote} from '../actions/vote_actions'

import VoteForm from './vote_form';

const mapStateToProps = state => ({
  poll: state.votes[Object.keys(state.votes)[0]],
  completed: state.votes.completed
});

const mapDispatchToProps = dispatch => ({
  requestPoll: (user_id) => dispatch(requestPoll(user_id)),
  castVote: (vote => dispatch(castVote(vote)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VoteForm);
