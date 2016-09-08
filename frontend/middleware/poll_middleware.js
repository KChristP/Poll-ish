import {
  PollConstants,
  requestAllPolls,
  receiveAllPolls,
  createPoll,
  receivePoll,
  removePoll} from '../actions/poll_actions';
import {
  ajaxForAllPolls,
  ajaxForCreatePoll,
  ajaxForDestroyPoll,
  ajaxForUpdatePoll,
  ajaxForRequestPoll
} from '../util/poll_util';
import { LiveConstants, newLive } from '../actions/live_actions';
import {ajaxForRequestLive} from '../util/live_util';

export default ({getState, dispatch}) => next => action => {
  const successIndexCallback = polls => dispatch(receiveAllPolls(polls));
  const successPollCallback = poll => {
    dispatch(receivePoll(poll))};
  const successRemoveCallback = poll => {
    dispatch(removePoll(poll));
  };
  const successLiveCallback = poll => dispatch(newLive(poll));
  const errorCallback = error => {
    // console.log(error)
  };

  switch(action.type){
    case PollConstants.REQUEST_ALL_POLLS:
      ajaxForAllPolls({user_id: action.user_id}, successIndexCallback, errorCallback);
      return next(action);
    case PollConstants.CREATE_POLL:
      ajaxForCreatePoll(action.poll, successPollCallback, errorCallback);
      return next(action);
    case PollConstants.DESTROY_POLL:
      ajaxForDestroyPoll({poll: action.poll}, successRemoveCallback, errorCallback);
      return next(action);
    case PollConstants.UPDATE_POLL:
      ajaxForUpdatePoll(action.poll, successPollCallback, errorCallback);
      return next(action);
    case PollConstants.REQUEST_SINGLE_POLL:
      ajaxForRequestPoll(action.poll_id, successPollCallback, errorCallback);
      return next(action);
    case LiveConstants.REQUEST_LIVE:
      ajaxForRequestLive(action.user_id, successLiveCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
