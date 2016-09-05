import merge from 'lodash/merge';
import {GroupConstants} from '../actions/group_actions';

const GroupReducer = (state = {}, action) => {
  // debugger
  switch(action.type){
    case GroupConstants.RECEIVE_ALL_GROUPS:
      return merge({}, action.groups, state.groups);
    case GroupConstants.RECEIVE_GROUP:
      return merge({}, state, action.group);
    default:
      return state;
  }
};



export default GroupReducer;
