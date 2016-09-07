import merge from 'lodash/merge';
import {VoteConstants} from '../actions/vote_actions';

const VoteReducer = (state = {}, action) => {
  switch(action.type){
    case VoteConstants.RECEIVE_POLL:
      return merge({}, state, action.poll);
    case VoteConstants.RECEIVE_VOTE_CONFIRMATION:
      return merge({completed: true}, state, action.poll);
    default:
      return state;
  }
};



export default VoteReducer;
