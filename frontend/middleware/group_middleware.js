import {
  GroupConstants,
  requestAllGroups,
  receiveAllGroups,
  updateGroup,
  receiveGroup} from '../actions/group_actions';
import {
  ajaxForGroups,
  ajaxForUpdateGroup} from '../util/group_util'

export default ({getState, dispatch}) => next => action => {
  const successIndexCallback = groups => dispatch(receiveAllGroups(groups));
  const successGroupCallback = group => {
   dispatch(receiveGroup(group));
  }
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };

  switch(action.type){
    case GroupConstants.REQUEST_ALL_GROUPS:
      const user_id = getState().session.currentUser.id //? getState().session.currentUser.id : null//TODO setting this id to null needs the controller and ajax to know about it
      ajaxForGroups({group: {user_id: user_id}}, successIndexCallback, errorCallback);
      return next(action);
    case GroupConstants.UPDATE_GROUP:
      ajaxForUpdateGroup({group: action.group}, successGroupCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
