import SessionMiddleware from './session_middleware';
import GroupMiddleware from './group_middleware';
import PollMiddleware from './poll_middleware';
import {applyMiddleware} from 'redux';


const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  GroupMiddleware,
  PollMiddleware
)

export default RootMiddleware;
