import { connect } from 'react-redux';
import Sidebar from './sidebar';
import {
  requestAllGroups,
  createGroup
} from '../actions/group_actions'

const mapStateToProps = state => ({
  groups: state.groups,
  user_id: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  requestAllGroups: () => dispatch(requestAllGroups()),
  createGroup: (group) => dispatch(createGroup(group))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
