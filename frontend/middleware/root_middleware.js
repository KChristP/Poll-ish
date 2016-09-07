import SessionMiddleware from './session_middleware';
import GroupMiddleware from './group_middleware';
import PollMiddleware from './poll_middleware';
import VoteMiddleware from './vote_middleware';
import {applyMiddleware} from 'redux';


const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  GroupMiddleware,
  PollMiddleware,
  VoteMiddleware
)

export default RootMiddleware;
