import merge from 'lodash/merge';
import {VoteConstants} from '../actions/vote_actions';

const LiveReducer = (state = {}, action) => {
  switch(action.type){
    case VoteConstants.NEW_LIVE:
      return action.poll;
    default:
      return state;
  }
};



export default LiveReducer;
