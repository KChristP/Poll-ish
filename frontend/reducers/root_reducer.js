import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import GroupReducer from './group_reducer';
import PollReducer from './poll_reducer';
import VoteReducer from './vote_reducer';
import LiveReducer from './live_reducer';
import ActiveGroupReducer from './active_group_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  groups: GroupReducer,
  polls: PollReducer,
  votes: VoteReducer,
  live: LiveReducer,
  activeGroup: ActiveGroupReducer
});

export default RootReducer;
