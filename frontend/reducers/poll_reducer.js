import merge from 'lodash/merge';
import {PollConstants} from '../actions/poll_actions'

const PollReducer = (state = {}, action) => {
  switch(action.type){
    case PollConstants.RECEIVE_ALL_POLLS:
    
      return merge({}, action.polls, state);
    case PollConstants.RECEIVE_POLL:
      return merge({}, state, action.poll);
    default:
      return state;
  }
};



export default PollReducer;
