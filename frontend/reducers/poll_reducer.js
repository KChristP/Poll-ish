import merge from 'lodash/merge';
import {PollConstants} from '../actions/poll_actions'

const PollReducer = (state = {}, action) => {
  switch(action.type){
    case PollConstants.RECEIVE_ALL_POLLS:
      return merge({}, action.polls, state.polls);
    default:
      return state;
  }
};



export default PollReducer;
