import merge from 'lodash/merge';
import {GroupConstants} from '../actions/group_actions';

const GroupReducer = (state = {}, action) => {
  // debugger
  switch(action.type){
    case GroupConstants.RECEIVE_ALL_GROUPS:
    // debugger
      return merge({}, action.groups, state.groups);
    default:
      return state;
  }
};



export default GroupReducer;
