import {
  PollConstants,
  requestAllPolls,
  receiveAllPolls,
  createPoll,
  receivePoll} from '../actions/poll_actions';
import {
  ajaxForAllPolls,
  ajaxForCreatePoll} from '../util/poll_util';

export default ({getState, dispatch}) => next => action => {
  const successIndexCallback = polls => dispatch(receiveAllPolls(polls));
  const successPollCallback = poll => dispatch(receivePoll(poll))
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };

  switch(action.type){
    case PollConstants.REQUEST_ALL_POLLS:
      ajaxForAllPolls({user_id: action.user_id}, successIndexCallback, errorCallback);
      return next(action);
    case PollConstants.CREATE_POLL:
      ajaxForCreatePoll(action.poll, successPollCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
