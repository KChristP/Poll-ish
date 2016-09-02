import {
  PollConstants,
  requestAllPolls,
  receiveAllPolls} from '../actions/poll_actions';
import {ajaxForAllPolls} from '../util/poll_util';

export default ({getState, dispatch}) => next => action => {
  const successIndexCallback = polls => dispatch(receiveAllPolls(polls));
  // const group_id = getState().session.currentUser.id
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };

  switch(action.type){
    case PollConstants.REQUEST_ALL_POLLS:
      ajaxForAllPolls({user_id: action.user_id}, successIndexCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
