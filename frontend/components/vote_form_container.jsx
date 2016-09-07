import React from 'react';
import {connect} from 'react-redux';

import {requestPoll} from '../actions/vote_actions'

import VoteForm from './vote_form';

const mapStateToProps = state => ({
  poll: state.votes[Object.keys(state.votes)[0]]
});

const mapDispatchToProps = dispatch => ({
  requestPoll: (user_id) => dispatch(requestPoll(user_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VoteForm);
