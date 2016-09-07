import {
  VoteConstants,
  receivePoll,
  receiveVoteConfirmation
} from '../actions/vote_actions';

import {
  ajaxForVotePoll,
  ajaxForCastVote
} from '../util/vote_util'

export default ({getState, dispatch}) => next => action => {
  const successPollCallback = poll => dispatch(receivePoll(poll));
  const successVoteCallback = poll => dispatch(receiveVoteConfirmation(poll));
  // const errorCallback = xhr => {
  //   const errors = xhr.responseJSON;
  //   dispatch(receiveErrors(errors));
  // };

  switch(action.type){
    case VoteConstants.REQUEST_POLL:
      ajaxForVotePoll(action.user_id, successPollCallback);
      return next(action);
    case VoteConstants.CAST_VOTE:
      ajaxForCastVote(action.vote, successVoteCallback);
      return next(action);
    default:
      return next(action);
  }
};
