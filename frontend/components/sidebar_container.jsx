import { connect } from 'react-redux';
import Sidebar from './sidebar';
import {
  requestAllGroups,
  createGroup
} from '../actions/group_actions'
import {requestLive} from '../actions/live_actions'


const mapStateToProps = state => ({
  groups: state.groups,
  user_id: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  requestAllGroups: () => dispatch(requestAllGroups()),
  createGroup: (group) => dispatch(createGroup(group)),
  requestLive: (user_id) => dispatch(requestLive(user_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
