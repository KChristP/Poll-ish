import {
  GroupConstants,
  requestAllGroups,
  receiveAllGroups} from '../actions/group_actions';
import {ajaxForGroups} from '../util/group_util'

export default ({getState, dispatch}) => next => action => {
  const successIndexCallback = groups => dispatch(receiveAllGroups(groups));
  const user_id = getState().session.currentUser.id
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };

  switch(action.type){
    case GroupConstants.REQUEST_ALL_GROUPS:
      ajaxForGroups({group: {user_id: user_id}}, successIndexCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
