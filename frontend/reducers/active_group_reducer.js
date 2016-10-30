import merge from 'lodash/merge';
import {GroupConstants} from '../actions/group_actions';

const ActiveGroupReducer = (state = {}, action) => {
  switch(action.type){
    case GroupConstants.SET_ACTIVE_GROUP:
      return action.group;
    default:
      return state;
  }
};



export default ActiveGroupReducer;
