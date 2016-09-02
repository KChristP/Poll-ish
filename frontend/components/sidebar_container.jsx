import { connect } from 'react-redux';
import Sidebar from './sidebar';
import {requestAllGroups} from '../actions/group_actions'

const mapStateToProps = state => ({
  groups: state.groups
});

const mapDispatchToProps = dispatch => ({
  requestAllGroups: () => dispatch(requestAllGroups())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
