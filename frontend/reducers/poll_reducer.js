import merge from 'lodash/merge';
import {PollConstants} from '../actions/poll_actions'

const PollReducer = (state = {}, action) => {
  switch(action.type){
    case PollConstants.RECEIVE_ALL_POLLS:

      return merge({}, action.polls, state);
    case PollConstants.RECEIVE_POLL:
      let iD = action.poll;
      let thesePolls = merge({}, state);
      delete thesePolls[iD];
      return merge(thesePolls, action.poll);
    case PollConstants.REMOVE_POLL:
      let newPolls = merge({}, state)
      let id = parseInt(Object.keys(action.poll)[0])
      delete newPolls[id];
      return newPolls;
    default:
      return state;
  }
};



export default PollReducer;
