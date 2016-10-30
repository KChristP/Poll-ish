import { connect } from 'react-redux';
import Sidebar from './sidebar';
import {
  requestAllGroups,
  createGroup,
  setActiveGroup
} from '../actions/group_actions'
import {requestLive} from '../actions/live_actions'


const mapStateToProps = state => ({
  groups: state.groups,
  user_id: state.session.currentUser.id,
  activeGroup: state.activeGroup
});

const mapDispatchToProps = dispatch => ({
  requestAllGroups: () => dispatch(requestAllGroups()),
  createGroup: (group) => dispatch(createGroup(group)),
  requestLive: (user_id) => dispatch(requestLive(user_id)),
  setActiveGroup: (group) => dispatch(setActiveGroup(group))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
