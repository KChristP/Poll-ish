import {
  VoteConstants,
  receivePoll
} from '../actions/vote_actions';

import {
  ajaxForVotePoll
} from '../util/vote_util'

export default ({getState, dispatch}) => next => action => {
  const successCallback = poll => dispatch(receivePoll(poll));
  // const errorCallback = xhr => {
  //   const errors = xhr.responseJSON;
  //   dispatch(receiveErrors(errors));
  // };

  switch(action.type){
    case VoteConstants.REQUEST_POLL:
      ajaxForVotePoll(action.user_id, successCallback);
      return next(action);
    default:
      return next(action);
  }
};
