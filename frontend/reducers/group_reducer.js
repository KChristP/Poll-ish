import merge from 'lodash/merge';
import {GroupConstants} from '../actions/group_actions';

const GroupReducer = (state = {}, action) => {
  switch(action.type){
    case GroupConstants.RECEIVE_ALL_GROUPS:
      return merge({}, action.groups, state.groups);
    case GroupConstants.RECEIVE_GROUP:
      return merge({}, state, action.group);
    case GroupConstants.REMOVE_GROUP:
      let newGroups = merge({}, state)
      let id = parseInt(Object.keys(action.group)[0])
      delete newGroups[id]
      return newGroups;
    default:
      return state;
  }
};



export default GroupReducer;
