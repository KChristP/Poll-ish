import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import GroupReducer from './group_reducer';
import PollReducer from './poll_reducer';
import VoteReducer from './vote_reducer';
import LiveReducer from './live_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  groups: GroupReducer,
  polls: PollReducer,
  votes: VoteReducer,
  live: LiveReducer
});

export default RootReducer;
